class Undyne {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.content = "";
    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.caretX = 0;
    this.caretY = 0;
    this.blinkIn = true;
    this.makeInput();
    this.installEventHandlers();
    this.retina();
    this.render();
    this.caretInterval = setInterval(() => this.caret(), 500);
    this.fontSize = 16;
    this.lineSpacing = 2;
    this.lineHeight = this.fontSize + this.lineSpacing;
    this.fontFamily = "monospace";
    this.charWidth = this.getCharWidth();
    this.rows = this.getRows();
    this.columns = this.getColumns();
    this.foreground = "#f8f8f2";
    this.selectColor = "rgba(68, 71, 90, 1)";
  }
  makeInput() {
    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.style.transform = "translateX(-99999px) translateY(-99999px)";
    this.input.value = "X";
    document.body.append(this.input);
  }
  focus() {
    const { scrollTop, scrollLeft } = document.scrollingElement;
    this.input.focus({ preventScroll: true });
    document.scrollingElement.scrollTop = scrollTop;
    document.scrollingElement.scrollLeft = scrollLeft;
  }
  retina() {
    const widthAttr = this.canvas.getAttribute("width");
    const heightAttr = this.canvas.getAttribute("height");
    const width = Number(widthAttr.slice(0, -2));
    const height = Number(heightAttr.slice(0, -2));
    this.canvas.setAttribute("width", `${width * 2}px`);
    this.canvas.setAttribute("height", `${height * 2}px`);
    this.canvas.style.width = widthAttr;
    this.canvas.style.height = heightAttr;
    this.ctx.scale(0.5, 0.5);
  }
  getColumns() {
    return Math.floor(this.canvas.width / 2 / this.charWidth);
  }
  getRows() {
    return Math.floor(this.canvas.height / 2 / this.lineHeight);
  }
  installEventHandlers() {
    this.canvas.setAttribute("tabindex", "0");
    this.focus();
    this.input.addEventListener("keydown", (event) => this.onKeyDown(event));
    this.canvas.addEventListener("mousedown", (event) =>
      this.onMouseDown(event)
    );
    this.canvas.addEventListener("mouseup", (event) => this.onMouseUp(event));
    this.canvas.addEventListener("mousemove", (event) =>
      this.onMouseMove(event)
    );
    this.canvas.addEventListener("touchstart", (ev) => this.onTouchStart(ev));
    this.canvas.addEventListener("touchend", (event) => this.onTouchEnd(event));
    this.canvas.addEventListener("touchmove", (event) =>
      this.onTouchMove(event)
    );
    this.canvas.addEventListener("wheel", (event) => this.onWheel(event));
    this.canvas.addEventListener("dblclick", (event) => this.onDblClick(event));
  }
  onWheel(event) {
    const { deltaY } = event;
    this.scrollY(deltaY);
  }
  getLeftPad() {
    return this.getLines().length.toString().length + 3;
  }
  onTouchStart(event) {
    event.preventDefault();
    this.focus();
    this.isDown = true;
    const leftPad = this.getLeftPad() * this.charWidth;
    const touch = event.touches[0];
    const rect = this.canvas.getBoundingClientRect();
    this.downPos = {
      x: touch.clientX - rect.left - leftPad,
      y: touch.clientY - rect.top,
    };
    this.scrollTouch = event.touches.length > 1;
  }
  onTouchEnd(event) {
    event.preventDefault();
    this.isDown = false;
    const leftPad = this.getLeftPad() * this.charWidth;
    const touch = event.changedTouches[0];
    const rect = this.canvas.getBoundingClientRect();
    this.upPos = {
      x: touch.clientX - rect.left - leftPad,
      y: touch.clientY - rect.top,
    };
    if (!this.scrollTouch)
      if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y)
        this.click();
      else this.select();
  }
  onTouchMove(event) {
    if (!this.isDown) return;
    const leftPad = this.getLeftPad() * this.charWidth;
    const touch = event.touches[0];
    const rect = this.canvas.getBoundingClientRect();
    this.upPos = {
      x: touch.clientX - rect.left - leftPad,
      y: touch.clientY - rect.top,
    };
    if (!this.scrollTouch) {
      this.select();
      this.click(false);
    } else {
      this.scrollY(this.downPos.y - this.upPos.y);
      this.scrollX(this.downPos.x - this.upPos.x);
    }
  }
  onDblClick(event) {
    event.preventDefault();
    const leftPad = this.getLeftPad();
    const rect = this.canvas.getBoundingClientRect();
    const pos = {
      x: event.clientX - rect.left - leftPad * this.charWidth,
      y: event.clientY - rect.top,
    };
    const lines = this.getLines().slice(this.scrollTop).slice(0, this.rows);
    const rowAtY = Math.floor(pos.y / this.lineHeight);
    const colAtX = Math.floor(pos.x / this.charWidth);
    const lineAtY = lines[rowAtY];
    const firstWordStart = lineAtY
      .slice(0, colAtX + 1)
      .search(/[^\[\]\(\)."' !@#$%^&=-]+$/);
    const firstWhiteAfterX = lineAtY
      .slice(colAtX)
      .search(/[\[\]\(\)."' !@#$%^&=-]/);
    const firstWordEnd =
      firstWhiteAfterX < 0 ? lineAtY.length : colAtX + firstWhiteAfterX;
    this.selection = {
      startX: firstWordStart,
      endX: firstWordEnd,
      startY: rowAtY,
      endY: rowAtY,
    };
    this.clear();
    this.render();
  }
  scrollY(deltaY) {
    const deltaCols = Math.floor(deltaY / this.lineHeight);
    const newScroll = deltaCols + this.scrollTop;
    if (newScroll < 0) return (this.scrollTop = 0);
    const lines = this.getLines().length;
    const maxScroll = lines - Math.min(lines, this.rows);
    if (newScroll < maxScroll) this.scrollTop = newScroll;
    else this.scrollTop = maxScroll;
    this.clear();
    this.render();
  }
  scrollX(deltaX) {
    const deltaCols = Math.floor(deltaX / this.charWidth);
    const newScroll = deltaCols + this.scrollLeft;
    if (newScroll < 0) return (this.scrollLeft = 0);
    const maxScroll = this.getLines()[this.scrollTop].length;
    if (newScroll < maxScroll) this.scrollLeft = newScroll;
    else this.scrollLeft = maxScroll;
    this.clear();
    this.render();
  }
  onMouseDown(event) {
    event.preventDefault();
    this.focus();
    this.isDown = true;
    const leftPad = this.getLeftPad() * this.charWidth;
    const rect = this.canvas.getBoundingClientRect();
    this.downPos = {
      x: event.clientX - rect.left - leftPad,
      y: event.clientY - rect.top,
    };
  }
  onMouseUp(event) {
    event.preventDefault();
    this.isDown = false;
    const leftPad = this.getLeftPad() * this.charWidth;
    const rect = this.canvas.getBoundingClientRect();
    this.upPos = {
      x: event.clientX - rect.left - leftPad,
      y: event.clientY - rect.top,
    };
    if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y)
      this.click();
    else this.select();
  }
  onMouseMove(event) {
    if (!this.isDown) return;
    const leftPad = this.getLeftPad() * this.charWidth;
    const rect = this.canvas.getBoundingClientRect();
    this.upPos = {
      x: event.clientX - rect.left - leftPad,
      y: event.clientY - rect.top,
    };
    this.select();
    this.click(false);
  }
  click(nullifySelection = true) {
    const { x, y } = this.upPos;
    const offsetX = Math.floor(x / this.charWidth) + this.scrollLeft;
    const offsetY = Math.floor(y / this.lineHeight) + this.scrollTop;
    const deltaX = offsetX - this.caretX;
    const deltaY = offsetY - this.caretY;
    if (nullifySelection) this.selection = null;
    this.moveCaret(deltaX, deltaY);
  }
  select() {
    const leftPad = this.getLeftPad();
    const selection = {
      startX:
        Math.floor((this.downPos.x - leftPad) / this.charWidth) +
        this.scrollLeft,
      startY: Math.floor(this.downPos.y / this.lineHeight) + this.scrollTop,
      endX:
        Math.floor((this.upPos.x - leftPad) / this.charWidth) + this.scrollLeft,
      endY: Math.floor(this.upPos.y / this.lineHeight) + this.scrollTop,
    };
    const { endY, startY, endX, startX } = selection;
    this.upDownSelection = true;
    if (endY < startY) {
      selection.endY = startY;
      selection.startY = endY;
      selection.endX = startX;
      selection.startX = endX;
      this.upDownSelection = false;
    }
    const lines = this.getLines();
    selection.endY = Math.min(selection.endY, lines.length - 1);
    selection.startY = Math.max(
      Math.min(selection.startY, lines.length - 1),
      0
    );
    if (endY == startY && startX > endX) {
      selection.endX = startX;
      selection.startX = endX;
      this.upDownSelection = false;
    }
    const endLength = lines[selection.endY].length;
    const startLength = lines[selection.startY].length;
    selection.endX = Math.max(Math.min(selection.endX, endLength), 0);
    selection.startX = Math.max(Math.min(selection.startX, startLength), 0);
    const lineCount = lines.length;
    if (selection.endY < lineCount && selection.startY < lineCount)
      this.selection = selection;
    this.clear();
    this.render();
  }
  onKeyDown(event) {
    event.preventDefault();
    if (event.keyCode == 229) {
      return setTimeout(() => {
        const value = this.input.value.slice(1);
        this.input.value = "X";
        this.insertAtCaret(value);
      }, 0);
    }
    const { key } = event;
    const ignoreList = ["Shift", "Control", "Alt", "Meta"];
    if (key == "End") this.caretToEnd(event.shiftKey);
    else if (key == "Home") this.caretToHome(event.shiftKey);
    else if (key.startsWith("Arrow")) {
      const direction = key.replace(/^Arrow/, "").toLowerCase();
      if (direction == "left") this.moveCaret(-1, 0, event.shiftKey);
      else if (direction == "right") this.moveCaret(1, 0, event.shiftKey);
      else if (direction == "down") this.moveCaret(0, 1, event.shiftKey);
      else if (direction == "up") this.moveCaret(0, -1, event.shiftKey);
    } else if (event.ctrlKey || event.metaKey) {
      if (key == "c") {
        this.copy();
      } else if (key == "v") {
        this.paste();
      } else if (key == "x") {
        this.copy();
        this.delete();
      }
    } else if (ignoreList.includes(key)) {
      return;
    } else {
      this.insertAtCaret(key);
    }
  }
  copy() {
    if (!this.selection) return;
    const text = this.getSelection();
    navigator.clipboard.writeText(text);
  }
  paste() {
    if (this.selection) this.delete();
    navigator.clipboard.readText().then((text) => this.insertAtCaret(text));
  }
  delete() {
    if (!this.selection) return;
    const { startX, startY, endX, endY } = this.selection;
    const lines = this.getLines();
    if (startY == endY) {
      lines[endY] = lines[endY].slice(0, startX) + lines[endY].slice(endX);
    } else {
      lines[startY] = lines[startY].slice(0, startX) + lines[endY].slice(endX);
      lines.splice(startY + 1, endY - startY);
    }
    this.content = lines.join("\n");
    this.selection = null;
    if (!this.upDownSelection) return;
    const deltaX = startX - endX;
    const deltaY = startY - endY;
    this.moveCaret(deltaX, deltaY);
  }
  getSelection() {
    const { startX, startY, endX, endY } = this.selection;
    const lines = this.getLines();
    if (startY == endY) {
      return lines[startY].slice(startX, endX);
    } else {
      const firstLine = lines[startY].slice(startX);
      const lastLine = lines[endY].slice(0, endX);
      const rest = lines.slice(startY + 1, endY);
      return [firstLine, ...rest, lastLine].join("\n");
    }
  }
  insertAtCaret(str) {
    const hasSelection = !!this.selection;
    this.delete();
    const lines = this.getLines();
    const pre = lines.slice(0, this.caretY);
    const curr = lines[this.caretY];
    const post = lines.slice(this.caretY + 1);
    const left = curr.slice(0, this.caretX);
    const right = curr.slice(this.caretX);
    if (str == "Enter") {
      this.content = [...pre, left, right, ...post].join("\n");
      this.moveCaret(-this.caretX, 1);
    } else if (str == "Tab") {
      this.content = [...pre, left + "  " + right, ...post].join("\n");
      this.moveCaret(2, 0);
    } else if (str == "Backspace") {
      if (hasSelection) return;
      if (!left.length) {
        const lastOfPre = pre.pop() || "";
        this.content = [...pre, lastOfPre + right, ...post].join("\n");
        this.moveCaret(lastOfPre.length - this.caretX, -1);
      } else {
        this.content = [...pre, left.slice(0, -1) + right, ...post].join("\n");
        this.moveCaret(-1, 0);
      }
    } else {
      this.content = [...pre, left + str + right, ...post].join("\n");
      this.moveCaret(str.length, 0);
    }
    this.clear();
    this.render();
  }
  caretToHome(select) {
    if (select) {
      const startX = 0;
      const startY = this.selection ? this.selection.startY : this.caretY;
      const endY = this.selection ? this.selection.endY : this.caretY;
      const endX = this.selection ? this.selection.endX : this.caretX;
      this.selection = { startX, endX, startY, endY };
    }
    this.caretX = 0;
    this.caret();
  }
  caretToEnd(select = false) {
    const caretMax = this.getLines()[this.caretY].length;
    if (select) {
      const startX = this.selection ? this.selection.startX : this.caretX;
      const startY = this.selection ? this.selection.startY : this.caretY;
      const endY = this.selection ? this.selection.endY : this.caretY;
      const endX = caretMax;
      this.selection = { startX, endX, startY, endY };
    }
    this.caretX = caretMax;
    this.caret();
  }
  moveCaret(dx = 0, dy = 0, select = false) {
    if (dx + this.caretX < 0) return;
    if (dy + this.caretY < 0) return;
    const lines = this.getLines();
    if (dy + this.caretY > lines.length - 1) return;
    if (select) {
      const selection = this.selection || {};
      if (this.selection) {
        const caretAtEnd = this.caretY == selection.endY;
        if (caretAtEnd) selection.endY += dy;
        else selection.startY += dy;
        if (caretAtEnd) selection.endX += dx;
        else selection.startX += dx;
      } else {
        selection.startY = this.caretY;
        selection.endY = this.caretY + dy;
        selection.startX = this.caretX;
        selection.endX = this.caretX + dx;
      }
      const { endY, startY, endX, startX } = selection;
      if (endY < startY) {
        selection.endY = startY;
        selection.startY = endY;
        selection.endX = startX;
        selection.startX = endX;
      }
      selection.endX = Math.min(lines[selection.endY].length, selection.endX);
      this.selection = selection;
    }
    if (dy + this.caretY < lines.length) this.caretY += dy;
    else this.caretY = lines.length;
    if (dx + this.caretX <= lines[this.caretY].length) this.caretX += dx;
    else this.caretX = lines[this.caretY].length;
    this.scrollToCaret();
    this.caret();
  }
  scrollToCaret() {
    if (this.caretY >= this.scrollTop + this.rows - 1) {
      const deltaRows = this.caretY - this.rows - this.scrollTop + 2;
      this.scrollY(deltaRows * this.lineHeight);
    }
    if (this.caretY < this.scrollTop) {
      const deltaRows = this.caretY - this.scrollTop;
      this.scrollY(deltaRows * this.lineHeight);
    }
    if (this.caretX > this.scrollLeft + this.columns - 2) {
      const deltaCols = this.caretX - this.scrollLeft - this.columns + 2;
      this.scrollX(deltaCols * this.charWidth);
    }
    if (this.caretX < this.scrollLeft) {
      const deltaCols = this.caretX - this.scrollLeft;
      this.scrollX(deltaCols * this.charWidth);
    }
  }
  drawSelectBackground() {
    if (!this.selection) return;
    const lines = this.getLines();
    const leftPad = this.getLeftPad();
    const { startX, startY, endX, endY } = this.selection;
    const deltaX = this.scrollLeft;
    const deltaY = this.scrollTop;
    this.ctx.save();
    this.ctx.fillStyle = this.selectColor;
    if (startY == endY) {
      this.ctx.fillRect(
        (startX - deltaX + leftPad) * this.charWidth,
        (startY - deltaY) * this.lineHeight + this.lineSpacing,
        (endX - startX) * this.charWidth,
        this.lineHeight
      );
    } else {
      this.ctx.fillRect(
        (startX - deltaX + leftPad) * this.charWidth,
        (startY - deltaY) * this.lineHeight + this.lineSpacing,
        (lines[startY].length - startX + leftPad) * this.charWidth,
        this.lineHeight
      );
      for (let i = startY + 1; i < endY; i++)
        this.ctx.fillRect(
          leftPad * this.charWidth,
          (i - deltaY) * this.lineHeight + this.lineSpacing,
          lines[i].length * this.charWidth,
          this.lineHeight
        );
      this.ctx.fillRect(
        leftPad * this.charWidth,
        (endY - deltaY) * this.lineHeight + this.lineSpacing,
        endX * this.charWidth,
        this.lineHeight
      );
    }
    this.ctx.restore();
  }
  render() {
    this.ctx.scale(2, 2);
    this.drawSelectBackground();
    const lineNumbers = Array(this.rows)
      .fill(this.scrollTop + 1)
      .map((n, i) => n + i);
    const lineNumberMaxWidth = this.getLines().length.toString().length;
    const tokens = this.tokenize();
    const visibleTokenLines = tokens.slice(this.scrollTop).slice(0, this.rows);
    const tokenLinesToDraw = visibleTokenLines.map((line) => {
      let removed = 0;
      while (true) {
        const token = line.shift();
        if (!token) return [{ content: "" }];
        if (removed + token.content.length < this.scrollLeft) {
          removed += token.content.length;
          continue;
        }
        line.unshift({
          ...token,
          content: token.content.slice(this.scrollLeft - removed),
        });
        break;
      }
      return line;
    });
    this.ctx.save();
    tokenLinesToDraw.forEach((line, index) => {
      const lineNumber = lineNumbers.shift();
      const formattedLineNumber =
        " ".repeat(lineNumberMaxWidth - lineNumber.toString().length) +
        lineNumber.toString() +
        " | ";
      let offsetX = 0;
      this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
      this.ctx.fillStyle = this.foreground;
      this.ctx.fillText(
        formattedLineNumber,
        offsetX * this.charWidth,
        this.lineHeight * index + this.lineHeight
      );
      offsetX = offsetX + formattedLineNumber.length;
      for (const { content, color } of line) {
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.ctx.fillStyle = color || this.foreground;
        this.ctx.fillText(
          content,
          offsetX * this.charWidth,
          this.lineHeight * index + this.lineHeight
        );
        offsetX = offsetX + content.length;
      }
    });
    this.ctx.restore();
  }
  tokenize() {
    return this.getLines().map((line) => {
      return line.split(" ").map((token) => {
        return {
          content: token + " ",
        };
      });
    });
  }
  getLines() {
    return this.content.split("\n");
  }
  clear() {
    this.canvas.width = this.canvas.width;
  }
  caret() {
    this.clear();
    this.render();
    const leftPad = this.getLines().length.toString().length + 3;
    const caretVisible =
      this.scrollTop <= this.caretY && this.scrollLeft <= this.caretX + leftPad;
    if (caretVisible && this.blinkIn) {
      const offsetY = this.caretY - this.scrollTop;
      const offsetX = this.caretX - this.scrollLeft + leftPad;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#ff66aa";
      this.ctx.moveTo(offsetX * this.charWidth, offsetY * this.lineHeight + 2);
      this.ctx.lineTo(
        offsetX * this.charWidth,
        offsetY * this.lineHeight + this.lineHeight + 2 * this.lineSpacing + 2
      );
      this.ctx.stroke();
      this.ctx.restore();
    }
    this.blinkIn = !this.blinkIn;
  }
  getCharWidth() {
    const div = document.createElement("div");
    div.innerText = "a";
    div.style.fontSize = this.fontSize + "px";
    div.style.fontFamily = this.fontFamily;
    div.style.display = "inline-block";
    document.body.appendChild(div);
    const { width } = window.getComputedStyle(div);
    div.remove();
    return Number(width.replace(/[a-z]+/gi, ""));
  }
}

module.exports = Undyne;
