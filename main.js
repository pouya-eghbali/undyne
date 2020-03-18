import Undyne from "./undyne";
import "./style.styl";
import "./dracula-prism.css";
import fs from "fs";
import prism from "prismjs";
import loadLanguages from "prismjs/components/index";

class PrismUndyne extends Undyne {
  tokenize() {
    this.colorMap = this.colorMap || {};
    const flattenTokens = token =>
      token.content && Array.isArray(token.content)
        ? token.content.map(flattenTokens)
        : token;
    const convertToken = token => {
      if (token.content) {
        if (!this.colorMap[token.type]) {
          const el = document.createElement("span");
          el.innerText = token.content;
          el.classList.add("token", token.type);
          document.body.appendChild(el);
          const { color } = window.getComputedStyle(el);
          el.remove();
          this.colorMap[token.type] = color;
        }
        return {
          content: token.content,
          color: this.colorMap[token.type]
        };
      }
      return { content: token };
    };
    const tokens = prism
      .tokenize(this.content, prism.languages.javascript)
      .map(flattenTokens)
      .flat(5)
      .map(convertToken)
      .map(token =>
        token.content.includes("\n")
          ? token.content
              .split(/(?=\n)|(?<=\n)/)
              .map(content => ({ ...token, content }))
          : token
      )
      .flat();
    const lines = [];
    let line = [];
    while (tokens.length) {
      const token = tokens.shift();
      if (token.content == "\n") {
        lines.push(line);
        line = [];
      } else {
        line.push(token);
      }
    }
    if (line.length) lines.push(line);
    if (this.content.endsWith("\n")) lines.push([]);
    return lines;
  }
}

const canvas = document.getElementById("undyne");
const editor = new PrismUndyne(canvas);
editor.content = fs.readFileSync("./undyne.js", { encoding: "utf8" });
