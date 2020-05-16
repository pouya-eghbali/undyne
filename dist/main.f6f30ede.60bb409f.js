// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.f6f30ede.js":[function(require,module,exports) {
var define;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "lp6W": [function (require, module, exports) {
    function t(t, e) {
      var i = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e && (s = s.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, s);
      }

      return i;
    }

    function e(e) {
      for (var s = 1; s < arguments.length; s++) {
        var n = null != arguments[s] ? arguments[s] : {};
        s % 2 ? t(Object(n), !0).forEach(function (t) {
          i(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function i(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t;
    }

    function s(t) {
      return r(t) || h(t) || n();
    }

    function n() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function h(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }

    function r(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = new Array(t.length); e < t.length; e++) {
          i[e] = t[e];
        }

        return i;
      }
    }

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function c(t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
      }
    }

    function a(t, e, i) {
      return e && c(t.prototype, e), i && c(t, i), t;
    }

    var l = function () {
      function t(e) {
        var i = this;
        o(this, t), this.canvas = e, this.ctx = e.getContext("2d"), this.content = "", this.scrollLeft = 0, this.scrollTop = 0, this.caretX = 0, this.caretY = 0, this.blinkIn = !0, this.makeInput(), this.installEventHandlers(), this.retina(), this.render(), this.caretInterval = setInterval(function () {
          return i.caret();
        }, 500), this.fontSize = 16, this.lineSpacing = 2, this.lineHeight = this.fontSize + this.lineSpacing, this.fontFamily = "monospace", this.charWidth = this.getCharWidth(), this.rows = this.getRows(), this.columns = this.getColumns(), this.foreground = "#f8f8f2";
      }

      return a(t, [{
        key: "makeInput",
        value: function value() {
          this.input = document.createElement("input"), this.input.setAttribute("type", "text"), this.input.style.transform = "translateX(-99999px) translateY(-99999px)", this.input.value = "X", document.body.append(this.input);
        }
      }, {
        key: "focus",
        value: function value() {
          var t = document.scrollingElement,
              e = t.scrollTop,
              i = t.scrollLeft;
          this.input.focus({
            preventScroll: !0
          }), document.scrollingElement.scrollTop = e, document.scrollingElement.scrollLeft = i;
        }
      }, {
        key: "retina",
        value: function value() {
          var t = this.canvas.getAttribute("width"),
              e = this.canvas.getAttribute("height"),
              i = Number(t.slice(0, -2)),
              s = Number(e.slice(0, -2));
          this.canvas.setAttribute("width", "".concat(2 * i, "px")), this.canvas.setAttribute("height", "".concat(2 * s, "px")), this.canvas.style.width = t, this.canvas.style.height = e, this.ctx.scale(.5, .5);
        }
      }, {
        key: "getColumns",
        value: function value() {
          return Math.ceil(this.canvas.width / 2 / this.charWidth);
        }
      }, {
        key: "getRows",
        value: function value() {
          return Math.ceil(this.canvas.height / 2 / this.lineHeight);
        }
      }, {
        key: "installEventHandlers",
        value: function value() {
          var t = this;
          this.canvas.setAttribute("tabindex", "0"), this.focus(), this.input.addEventListener("keydown", function (e) {
            return t.onKeyDown(e);
          }), this.canvas.addEventListener("mousedown", function (e) {
            return t.onMouseDown(e);
          }), this.canvas.addEventListener("mouseup", function (e) {
            return t.onMouseUp(e);
          }), this.canvas.addEventListener("mousemove", function (e) {
            return t.onMouseMove(e);
          }), this.canvas.addEventListener("touchstart", function (e) {
            return t.onTouchStart(e);
          }), this.canvas.addEventListener("touchend", function (e) {
            return t.onTouchEnd(e);
          }), this.canvas.addEventListener("touchmove", function (e) {
            return t.onTouchMove(e);
          }), this.canvas.addEventListener("wheel", function (e) {
            return t.onWheel(e);
          }), this.canvas.addEventListener("dblclick", function (e) {
            return t.onDblClick(e);
          });
        }
      }, {
        key: "onWheel",
        value: function value(t) {
          var e = t.deltaY;
          this.scrollY(e);
        }
      }, {
        key: "getLeftPad",
        value: function value() {
          return this.getLines().length.toString().length + 3;
        }
      }, {
        key: "onTouchStart",
        value: function value(t) {
          t.preventDefault(), this.focus(), this.isDown = !0;
          var e = this.getLeftPad() * this.charWidth,
              i = t.touches[0],
              s = this.canvas.getBoundingClientRect();
          this.downPos = {
            x: i.clientX - s.left - e,
            y: i.clientY - s.top
          }, this.scrollTouch = t.touches.length > 1;
        }
      }, {
        key: "onTouchEnd",
        value: function value(t) {
          t.preventDefault(), this.isDown = !1;
          var e = this.getLeftPad() * this.charWidth,
              i = t.changedTouches[0],
              s = this.canvas.getBoundingClientRect();
          this.upPos = {
            x: i.clientX - s.left - e,
            y: i.clientY - s.top
          }, this.scrollTouch || (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y ? this.click() : this.select());
        }
      }, {
        key: "onTouchMove",
        value: function value(t) {
          if (this.isDown) {
            var e = this.getLeftPad() * this.charWidth,
                i = t.touches[0],
                s = this.canvas.getBoundingClientRect();
            this.upPos = {
              x: i.clientX - s.left - e,
              y: i.clientY - s.top
            }, this.scrollTouch ? (this.scrollY(this.downPos.y - this.upPos.y), this.scrollX(this.downPos.x - this.upPos.x)) : (this.select(), this.click(!1));
          }
        }
      }, {
        key: "onDblClick",
        value: function value(t) {
          t.preventDefault();
          var e = this.getLeftPad(),
              i = this.canvas.getBoundingClientRect(),
              s = t.clientX - i.left - e * this.charWidth,
              n = t.clientY - i.top,
              h = this.getLines().slice(this.scrollTop).slice(0, this.rows),
              r = Math.floor(n / this.lineHeight),
              o = Math.floor(s / this.charWidth),
              c = h[r],
              a = c.slice(0, o + 1).search(/[^\[\]\(\)."' !@#$%^&=-]+$/),
              l = c.slice(o).search(/[\[\]\(\)."' !@#$%^&=-]/),
              u = l < 0 ? c.length : o + l;
          this.selection = {
            startX: a,
            endX: u,
            startY: r,
            endY: r
          }, this.clear(), this.render();
        }
      }, {
        key: "scrollY",
        value: function value(t) {
          var e = Math.floor(t / this.lineHeight) + this.scrollTop;
          if (e < 0) return this.scrollTop = 0;
          var i = this.getLines().length,
              s = i - Math.min(i, this.rows + 1);
          this.scrollTop = e < s ? e : s, this.clear(), this.render();
        }
      }, {
        key: "scrollX",
        value: function value(t) {
          var e = Math.floor(t / this.charWidth) + this.scrollLeft;
          if (e < 0) return this.scrollLeft = 0;
          var i = this.getLines()[this.scrollTop].length;
          this.scrollLeft = e < i ? e : i, this.clear(), this.render();
        }
      }, {
        key: "onMouseDown",
        value: function value(t) {
          t.preventDefault(), this.focus(), this.isDown = !0;
          var e = this.getLeftPad() * this.charWidth,
              i = this.canvas.getBoundingClientRect();
          this.downPos = {
            x: t.clientX - i.left - e,
            y: t.clientY - i.top
          };
        }
      }, {
        key: "onMouseUp",
        value: function value(t) {
          t.preventDefault(), this.isDown = !1;
          var e = this.getLeftPad() * this.charWidth,
              i = this.canvas.getBoundingClientRect();
          this.upPos = {
            x: t.clientX - i.left - e,
            y: t.clientY - i.top
          }, this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y ? this.click() : this.select();
        }
      }, {
        key: "onMouseMove",
        value: function value(t) {
          if (this.isDown) {
            var e = this.getLeftPad() * this.charWidth,
                i = this.canvas.getBoundingClientRect();
            this.upPos = {
              x: t.clientX - i.left - e,
              y: t.clientY - i.top
            }, this.select(), this.click(!1);
          }
        }
      }, {
        key: "click",
        value: function value() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              e = this.upPos,
              i = e.x,
              s = e.y,
              n = Math.floor(i / this.charWidth) + this.scrollLeft,
              h = Math.floor(s / this.lineHeight) + this.scrollTop,
              r = n - this.caretX,
              o = h - this.caretY;
          t && (this.selection = null), this.moveCaret(r, o);
        }
      }, {
        key: "select",
        value: function value() {
          var t = this.getLeftPad(),
              e = {
            startX: Math.floor((this.downPos.x - t) / this.charWidth) + this.scrollLeft,
            startY: Math.floor(this.downPos.y / this.lineHeight) + this.scrollTop,
            endX: Math.floor((this.upPos.x - t) / this.charWidth) + this.scrollLeft,
            endY: Math.floor(this.upPos.y / this.lineHeight) + this.scrollTop
          },
              i = e.endY,
              s = e.startY,
              n = e.endX,
              h = e.startX;
          this.upDownSelection = !0, i < s && (e.endY = s, e.startY = i, e.endX = h, e.startX = n, this.upDownSelection = !1);
          var r = this.getLines();
          e.endY = Math.min(e.endY, r.length - 1), e.startY = Math.max(Math.min(e.startY, r.length - 1), 0), i == s && h > n && (e.endX = h, e.startX = n, this.upDownSelection = !1);
          var o = r[e.endY].length,
              c = r[e.startY].length;
          e.endX = Math.max(Math.min(e.endX, o), 0), e.startX = Math.max(Math.min(e.startX, c), 0);
          var a = r.length;
          e.endY < a && e.startY < a && (this.selection = e), this.clear(), this.render();
        }
      }, {
        key: "onKeyDown",
        value: function value(t) {
          var e = this;
          if (t.preventDefault(), 229 == t.keyCode) return setTimeout(function () {
            var t = e.input.value.slice(1);
            e.input.value = "X", e.insertAtCaret(t);
          }, 0);
          var i = t.key;
          if ("End" == i) this.caretToEnd(t.shiftKey);else if ("Home" == i) this.caretToHome(t.shiftKey);else if (i.startsWith("Arrow")) {
            var s = i.replace(/^Arrow/, "").toLowerCase();
            "left" == s ? this.moveCaret(-1, 0, t.shiftKey) : "right" == s ? this.moveCaret(1, 0, t.shiftKey) : "down" == s ? this.moveCaret(0, 1, t.shiftKey) : "up" == s && this.moveCaret(0, -1, t.shiftKey);
          } else if (t.ctrlKey || t.metaKey) "c" == i ? this.copy() : "v" == i ? this.paste() : "x" == i && (this.copy(), this.delete());else {
            if (["Shift", "Control", "Alt", "Meta"].includes(i)) return;
            this.insertAtCaret(i);
          }
        }
      }, {
        key: "copy",
        value: function value() {
          if (this.selection) {
            var t = this.getSelection();
            navigator.clipboard.writeText(t);
          }
        }
      }, {
        key: "paste",
        value: function value() {
          var t = this;
          this.selection && this.delete(), navigator.clipboard.readText().then(function (e) {
            return t.insertAtCaret(e);
          });
        }
      }, {
        key: "delete",
        value: function value() {
          if (this.selection) {
            var t = this.selection,
                e = t.startX,
                i = t.startY,
                s = t.endX,
                n = t.endY,
                h = this.getLines();

            if (i == n ? h[n] = h[n].slice(0, e) + h[n].slice(s) : (h[i] = h[i].slice(0, e) + h[n].slice(s), h.splice(i + 1, n - i)), this.content = h.join("\n"), this.selection = null, this.upDownSelection) {
              var r = e - s,
                  o = i - n;
              this.moveCaret(r, o);
            }
          }
        }
      }, {
        key: "getSelection",
        value: function value() {
          var t = this.selection,
              e = t.startX,
              i = t.startY,
              n = t.endX,
              h = t.endY,
              r = this.getLines();
          if (i == h) return r[i].slice(e, n);
          var o = r[i].slice(e),
              c = r[h].slice(0, n),
              a = r.slice(i + 1, h);
          return [o].concat(s(a), [c]).join("\n");
        }
      }, {
        key: "insertAtCaret",
        value: function value(t) {
          var e = !!this.selection;
          this.delete();
          var i = this.getLines(),
              n = i.slice(0, this.caretY),
              h = i[this.caretY],
              r = i.slice(this.caretY + 1),
              o = h.slice(0, this.caretX),
              c = h.slice(this.caretX);
          if ("Enter" == t) this.content = [].concat(s(n), [o, c], s(r)).join("\n"), this.moveCaret(-this.caretX, 1);else if ("Tab" == t) this.content = [].concat(s(n), [o + "  " + c], s(r)).join("\n"), this.moveCaret(2, 0);else if ("Backspace" == t) {
            if (e) return;
            if (o.length) this.content = [].concat(s(n), [o.slice(0, -1) + c], s(r)).join("\n"), this.moveCaret(-1, 0);else {
              var a = n.pop() || "";
              this.content = [].concat(s(n), [a + c], s(r)).join("\n"), this.moveCaret(a.length - this.caretX, -1);
            }
          } else this.content = [].concat(s(n), [o + t + c], s(r)).join("\n"), this.moveCaret(t.length, 0);
          this.clear(), this.render();
        }
      }, {
        key: "caretToHome",
        value: function value(t) {
          if (t) {
            var e = this.selection ? this.selection.startY : this.caretY,
                i = this.selection ? this.selection.endY : this.caretY,
                s = this.selection ? this.selection.endX : this.caretX;
            this.selection = {
              startX: 0,
              endX: s,
              startY: e,
              endY: i
            };
          }

          this.caretX = 0, this.caret();
        }
      }, {
        key: "caretToEnd",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this.getLines()[this.caretY].length;

          if (t) {
            var i = this.selection ? this.selection.startX : this.caretX,
                s = this.selection ? this.selection.startY : this.caretY,
                n = this.selection ? this.selection.endY : this.caretY,
                h = e;
            this.selection = {
              startX: i,
              endX: h,
              startY: s,
              endY: n
            };
          }

          this.caretX = e, this.caret();
        }
      }, {
        key: "moveCaret",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

          if (!(t + this.caretX < 0 || e + this.caretY < 0)) {
            var s = this.getLines();

            if (!(e + this.caretY > s.length - 1)) {
              if (i) {
                var n = this.selection || {};

                if (this.selection) {
                  var h = this.caretY == n.endY;
                  h ? n.endY += e : n.startY += e, h ? n.endX += t : n.startX += t;
                } else n.startY = this.caretY, n.endY = this.caretY + e, n.startX = this.caretX, n.endX = this.caretX + t;

                var r = n.endY,
                    o = n.startY,
                    c = n.endX,
                    a = n.startX;
                r < o && (n.endY = o, n.startY = r, n.endX = a, n.startX = c), n.endX = Math.min(s[n.endY].length, n.endX), this.selection = n;
              }

              e + this.caretY < s.length ? this.caretY += e : this.caretY = s.length, t + this.caretX <= s[this.caretY].length ? this.caretX += t : this.caretX = s[this.caretY].length, this.scrollToCaret(), this.caret();
            }
          }
        }
      }, {
        key: "scrollToCaret",
        value: function value() {
          if (this.caretY >= this.scrollTop + this.rows - 1) {
            var t = this.caretY - this.rows - this.scrollTop + 2;
            this.scrollY(t * this.lineHeight);
          }

          if (this.caretY < this.scrollTop) {
            var e = this.caretY - this.scrollTop;
            this.scrollY(e * this.lineHeight);
          }

          if (this.caretX > this.scrollLeft + this.columns - 2) {
            var i = this.caretX - this.scrollLeft - this.columns + 2;
            this.scrollX(i * this.charWidth);
          }

          if (this.caretX < this.scrollLeft) {
            var s = this.caretX - this.scrollLeft;
            this.scrollX(s * this.charWidth);
          }
        }
      }, {
        key: "drawSelectBackground",
        value: function value() {
          if (this.selection) {
            var t = this.getLines(),
                e = this.getLeftPad(),
                i = this.selection,
                s = i.startX,
                n = i.startY,
                h = i.endX,
                r = i.endY,
                o = this.scrollLeft,
                c = this.scrollTop;
            if (this.ctx.save(), this.ctx.fillStyle = "rgba(68, 71, 90, 1)", n == r) this.ctx.fillRect((s - o + e) * this.charWidth, (n - c) * this.lineHeight + this.lineSpacing, (h - s) * this.charWidth, this.lineHeight);else {
              this.ctx.fillRect((s - o + e) * this.charWidth, (n - c) * this.lineHeight + this.lineSpacing, (t[n].length - s + e) * this.charWidth, this.lineHeight);

              for (var a = n + 1; a < r; a++) {
                this.ctx.fillRect(e * this.charWidth, (a - c) * this.lineHeight + this.lineSpacing, t[a].length * this.charWidth, this.lineHeight);
              }

              this.ctx.fillRect(e * this.charWidth, (r - c) * this.lineHeight + this.lineSpacing, h * this.charWidth, this.lineHeight);
            }
            this.ctx.restore();
          }
        }
      }, {
        key: "render",
        value: function value() {
          var t = this;
          this.ctx.scale(2, 2), this.drawSelectBackground();
          var i = Array(this.rows).fill(this.scrollTop + 1).map(function (t, e) {
            return t + e;
          }),
              s = this.getLines().length.toString().length,
              n = this.tokenize().slice(this.scrollTop).slice(0, this.rows).map(function (i) {
            for (var s = 0;;) {
              var n = i.shift();
              if (!n) return [{
                content: ""
              }];

              if (!(s + n.content.length < t.scrollLeft)) {
                i.unshift(e({}, n, {
                  content: n.content.slice(t.scrollLeft - s)
                }));
                break;
              }

              s += n.content.length;
            }

            return i;
          });
          this.ctx.save(), n.forEach(function (e, n) {
            var h = i.shift(),
                r = " ".repeat(s - h.toString().length) + h.toString() + " | ",
                o = 0;
            t.ctx.font = "".concat(t.fontSize, "px ").concat(t.fontFamily), t.ctx.fillStyle = t.foreground, t.ctx.fillText(r, o * t.charWidth, t.lineHeight * n + t.lineHeight), o += r.length;
            var c = !0,
                a = !1,
                l = void 0;

            try {
              for (var u, f = e[Symbol.iterator](); !(c = (u = f.next()).done); c = !0) {
                var d = u.value,
                    v = d.content,
                    g = d.color;
                t.ctx.font = "".concat(t.fontSize, "px ").concat(t.fontFamily), t.ctx.fillStyle = g || t.foreground, t.ctx.fillText(v, o * t.charWidth, t.lineHeight * n + t.lineHeight), o += v.length;
              }
            } catch (p) {
              a = !0, l = p;
            } finally {
              try {
                c || null == f.return || f.return();
              } finally {
                if (a) throw l;
              }
            }
          }), this.ctx.restore();
        }
      }, {
        key: "tokenize",
        value: function value() {
          return this.getLines().map(function (t) {
            return t.split(" ").map(function (t) {
              return {
                content: t + " "
              };
            });
          });
        }
      }, {
        key: "getLines",
        value: function value() {
          return this.content.split("\n");
        }
      }, {
        key: "clear",
        value: function value() {
          this.canvas.width = this.canvas.width;
        }
      }, {
        key: "caret",
        value: function value() {
          this.clear(), this.render();
          var t = this.getLines().length.toString().length + 3;

          if (this.scrollTop <= this.caretY && this.scrollLeft <= this.caretX + t && this.blinkIn) {
            var e = this.caretY - this.scrollTop,
                i = this.caretX - this.scrollLeft + t;
            this.ctx.save(), this.ctx.beginPath(), this.ctx.strokeStyle = "#ff66aa", this.ctx.moveTo(i * this.charWidth, e * this.lineHeight + 2), this.ctx.lineTo(i * this.charWidth, e * this.lineHeight + this.lineHeight + 2 * this.lineSpacing + 2), this.ctx.stroke(), this.ctx.restore();
          }

          this.blinkIn = !this.blinkIn;
        }
      }, {
        key: "getCharWidth",
        value: function value() {
          var t = document.createElement("div");
          t.innerText = "a", t.style.fontSize = this.fontSize + "px", t.style.fontFamily = this.fontFamily, t.style.display = "inline-block", document.body.appendChild(t);
          var e = window.getComputedStyle(t).width;
          return t.remove(), Number(e.replace(/[a-z]+/gi, ""));
        }
      }]), t;
    }();

    module.exports = l;
  }, {}],
  "TqC0": [function (require, module, exports) {}, {}],
  "HxJM": [function (require, module, exports) {
    var global = arguments[3];

    var e = arguments[3],
        t = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
        a = function (e) {
      var t = /\blang(?:uage)?-([\w-]+)\b/i,
          a = 0,
          n = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(e) {
            return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function type(e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function objId(e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++a
            }), e.__id;
          },
          clone: function e(t, a) {
            var r,
                s,
                i = n.util.type(t);

            switch (a = a || {}, i) {
              case "Object":
                if (s = n.util.objId(t), a[s]) return a[s];

                for (var o in r = {}, a[s] = r, t) {
                  t.hasOwnProperty(o) && (r[o] = e(t[o], a));
                }

                return r;

              case "Array":
                return s = n.util.objId(t), a[s] ? a[s] : (r = [], a[s] = r, t.forEach(function (t, n) {
                  r[n] = e(t, a);
                }), r);

              default:
                return t;
            }
          },
          getLanguage: function getLanguage(e) {
            for (; e && !t.test(e.className);) {
              e = e.parentElement;
            }

            return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none";
          },
          currentScript: function currentScript() {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;

            try {
              throw new Error();
            } catch (n) {
              var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack) || [])[1];

              if (e) {
                var t = document.getElementsByTagName("script");

                for (var a in t) {
                  if (t[a].src == e) return t[a];
                }
              }

              return null;
            }
          }
        },
        languages: {
          extend: function extend(e, t) {
            var a = n.util.clone(n.languages[e]);

            for (var r in t) {
              a[r] = t[r];
            }

            return a;
          },
          insertBefore: function insertBefore(e, t, a, r) {
            var s = (r = r || n.languages)[e],
                i = {};

            for (var o in s) {
              if (s.hasOwnProperty(o)) {
                if (o == t) for (var l in a) {
                  a.hasOwnProperty(l) && (i[l] = a[l]);
                }
                a.hasOwnProperty(o) || (i[o] = s[o]);
              }
            }

            var u = r[e];
            return r[e] = i, n.languages.DFS(n.languages, function (t, a) {
              a === u && t != e && (this[t] = i);
            }), i;
          },
          DFS: function e(t, a, r, s) {
            s = s || {};
            var i = n.util.objId;

            for (var o in t) {
              if (t.hasOwnProperty(o)) {
                a.call(t, o, t[o], r || o);
                var l = t[o],
                    u = n.util.type(l);
                "Object" !== u || s[i(l)] ? "Array" !== u || s[i(l)] || (s[i(l)] = !0, e(l, a, o, s)) : (s[i(l)] = !0, e(l, a, null, s));
              }
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(e, t) {
          n.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function highlightAllUnder(e, t, a) {
          var r = {
            callback: a,
            container: e,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), n.hooks.run("before-all-elements-highlight", r);

          for (var s, i = 0; s = r.elements[i++];) {
            n.highlightElement(s, !0 === t, r.callback);
          }
        },
        highlightElement: function highlightElement(a, r, s) {
          var i = n.util.getLanguage(a),
              o = n.languages[i];
          a.className = a.className.replace(t, "").replace(/\s+/g, " ") + " language-" + i;
          var l = a.parentNode;
          l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + i);
          var u = {
            element: a,
            language: i,
            grammar: o,
            code: a.textContent
          };

          function c(e) {
            u.highlightedCode = e, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, n.hooks.run("after-highlight", u), n.hooks.run("complete", u), s && s.call(u.element);
          }

          if (n.hooks.run("before-sanity-check", u), !u.code) return n.hooks.run("complete", u), void (s && s.call(u.element));
          if (n.hooks.run("before-highlight", u), u.grammar) {
            if (r && e.Worker) {
              var g = new Worker(n.filename);
              g.onmessage = function (e) {
                c(e.data);
              }, g.postMessage(JSON.stringify({
                language: u.language,
                code: u.code,
                immediateClose: !0
              }));
            } else c(n.highlight(u.code, u.grammar, u.language));
          } else c(n.util.encode(u.code));
        },
        highlight: function highlight(e, t, a) {
          var s = {
            code: e,
            grammar: t,
            language: a
          };
          return n.hooks.run("before-tokenize", s), s.tokens = n.tokenize(s.code, s.grammar), n.hooks.run("after-tokenize", s), r.stringify(n.util.encode(s.tokens), s.language);
        },
        matchGrammar: function matchGrammar(e, t, a, s, i, o, l) {
          for (var u in a) {
            if (a.hasOwnProperty(u) && a[u]) {
              var c = a[u];
              c = Array.isArray(c) ? c : [c];

              for (var g = 0; g < c.length; ++g) {
                if (l && l == u + "," + g) return;
                var d = c[g],
                    p = d.inside,
                    f = !!d.lookbehind,
                    h = !!d.greedy,
                    m = 0,
                    y = d.alias;

                if (h && !d.pattern.global) {
                  var b = d.pattern.toString().match(/[imsuy]*$/)[0];
                  d.pattern = RegExp(d.pattern.source, b + "g");
                }

                d = d.pattern || d;

                for (var v = s, F = i; v < t.length; F += t[v].length, ++v) {
                  var k = t[v];
                  if (t.length > e.length) return;

                  if (!(k instanceof r)) {
                    if (h && v != t.length - 1) {
                      if (d.lastIndex = F, !(_ = d.exec(e))) break;

                      for (var w = _.index + (f && _[1] ? _[1].length : 0), A = _.index + _[0].length, x = v, S = F, $ = t.length; x < $ && (S < A || !t[x].type && !t[x - 1].greedy); ++x) {
                        w >= (S += t[x].length) && (++v, F = S);
                      }

                      if (t[v] instanceof r) continue;
                      j = x - v, k = e.slice(F, S), _.index -= F;
                    } else {
                      d.lastIndex = 0;

                      var _ = d.exec(k),
                          j = 1;
                    }

                    if (_) {
                      f && (m = _[1] ? _[1].length : 0);
                      A = (w = _.index + m) + (_ = _[0].slice(m)).length;
                      var E = k.slice(0, w),
                          C = k.slice(A),
                          O = [v, j];
                      E && (++v, F += E.length, O.push(E));
                      var P = new r(u, p ? n.tokenize(_, p) : _, y, _, h);
                      if (O.push(P), C && O.push(C), Array.prototype.splice.apply(t, O), 1 != j && n.matchGrammar(e, t, a, v, F, !0, u + "," + g), o) break;
                    } else if (o) break;
                  }
                }
              }
            }
          }
        },
        tokenize: function tokenize(e, t) {
          var a = [e],
              r = t.rest;

          if (r) {
            for (var s in r) {
              t[s] = r[s];
            }

            delete t.rest;
          }

          return n.matchGrammar(e, a, t, 0, 0, !1), a;
        },
        hooks: {
          all: {},
          add: function add(e, t) {
            var a = n.hooks.all;
            a[e] = a[e] || [], a[e].push(t);
          },
          run: function run(e, t) {
            var a = n.hooks.all[e];
            if (a && a.length) for (var r, s = 0; r = a[s++];) {
              r(t);
            }
          }
        },
        Token: r
      };

      function r(e, t, a, n, r) {
        this.type = e, this.content = t, this.alias = a, this.length = 0 | (n || "").length, this.greedy = !!r;
      }

      if (e.Prism = n, r.stringify = function (e, t) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return e.map(function (e) {
          return r.stringify(e, t);
        }).join("");
        var a = {
          type: e.type,
          content: r.stringify(e.content, t),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: t
        };

        if (e.alias) {
          var s = Array.isArray(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(a.classes, s);
        }

        n.hooks.run("wrap", a);
        var i = Object.keys(a.attributes).map(function (e) {
          return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");
        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (i ? " " + i : "") + ">" + a.content + "</" + a.tag + ">";
      }, !e.document) return e.addEventListener ? (n.disableWorkerMessageHandler || e.addEventListener("message", function (t) {
        var a = JSON.parse(t.data),
            r = a.language,
            s = a.code,
            i = a.immediateClose;
        e.postMessage(n.highlight(s, n.languages[r], r)), i && e.close();
      }, !1), n) : n;
      var s = n.util.currentScript();

      if (s && (n.filename = s.src, s.hasAttribute("data-manual") && (n.manual = !0)), !n.manual) {
        var i = function i() {
          n.manual || n.highlightAll();
        };

        var o = document.readyState;
        "loading" === o || "interactive" === o && s && s.defer ? document.addEventListener("DOMContentLoaded", i) : window.requestAnimationFrame ? window.requestAnimationFrame(i) : window.setTimeout(i, 16);
      }

      return n;
    }(t);

    "undefined" != typeof module && module.exports && (module.exports = a), void 0 !== e && (e.Prism = a), a.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: !0
      },
      cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              punctuation: [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: /&#?[\da-z]{1,8};/i
    }, a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity, a.hooks.add("wrap", function (e) {
      "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(a.languages.markup.tag, "addInlined", {
      value: function value(e, t) {
        var n = {};
        n["language-" + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: a.languages[t]
        }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var r = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: n
          }
        };
        r["language-" + t] = {
          pattern: /[\s\S]+/,
          inside: a.languages[t]
        };
        var s = {};
        s[e] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: r
        }, a.languages.insertBefore("markup", "cdata", s);
      }
    }), a.languages.xml = a.languages.extend("markup", {}), a.languages.html = a.languages.markup, a.languages.mathml = a.languages.markup, a.languages.svg = a.languages.markup, function (e) {
      var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            rule: /@[\w-]+/
          }
        },
        url: {
          pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/
          }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
        string: {
          pattern: t,
          greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
      }, e.languages.css.atrule.inside.rest = e.languages.css;
      var a = e.languages.markup;
      a && (a.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            "attr-name": {
              pattern: /^\s*style/i,
              inside: a.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
              pattern: /.+/i,
              inside: e.languages.css
            }
          },
          alias: "language-css"
        }
      }, a.tag));
    }(a), a.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, a.languages.javascript = a.languages.extend("clike", {
      "class-name": [a.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
      }],
      keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }],
      number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    }), a.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, a.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0
      },
      "function-variable": {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
      },
      parameter: [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: a.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: a.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: a.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: a.languages.javascript
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), a.languages.insertBefore("javascript", "string", {
      "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\${|}$/,
                alias: "punctuation"
              },
              rest: a.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      }
    }), a.languages.markup && a.languages.markup.tag.addInlined("script", "javascript"), a.languages.js = a.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function (e) {
      e = e || document;
      var t = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      };
      Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function (e) {
        if (!e.hasAttribute("data-src-loaded")) {
          for (var n, r = e.getAttribute("data-src"), s = e, i = /\blang(?:uage)?-([\w-]+)\b/i; s && !i.test(s.className);) {
            s = s.parentNode;
          }

          if (s && (n = (e.className.match(i) || [, ""])[1]), !n) {
            var o = (r.match(/\.(\w+)$/) || [, ""])[1];
            n = t[o] || o;
          }

          var l = document.createElement("code");
          l.className = "language-" + n, e.textContent = "", l.textContent = "Loading…", e.appendChild(l);
          var u = new XMLHttpRequest();
          u.open("GET", r, !0), u.onreadystatechange = function () {
            4 == u.readyState && (u.status < 400 && u.responseText ? (l.textContent = u.responseText, a.highlightElement(l), e.setAttribute("data-src-loaded", "")) : u.status >= 400 ? l.textContent = "✖ Error " + u.status + " while fetching file: " + u.statusText : l.textContent = "✖ Error: File does not exist or is empty");
          }, u.send(null);
        }
      });
    }, document.addEventListener("DOMContentLoaded", function () {
      self.Prism.fileHighlight();
    }));
  }, {}],
  "odjR": [function (require, module, exports) {
    var e = {
      core: {
        meta: {
          path: "components/prism-core.js",
          option: "mandatory"
        },
        core: "Core"
      },
      themes: {
        meta: {
          path: "themes/{id}.css",
          link: "index.html?theme={id}",
          exclusive: !0
        },
        prism: {
          title: "Default",
          option: "default"
        },
        "prism-dark": "Dark",
        "prism-funky": "Funky",
        "prism-okaidia": {
          title: "Okaidia",
          owner: "ocodia"
        },
        "prism-twilight": {
          title: "Twilight",
          owner: "remybach"
        },
        "prism-coy": {
          title: "Coy",
          owner: "tshedor"
        },
        "prism-solarizedlight": {
          title: "Solarized Light",
          owner: "hectormatos2011 "
        },
        "prism-tomorrow": {
          title: "Tomorrow Night",
          owner: "Rosey"
        }
      },
      languages: {
        meta: {
          path: "components/prism-{id}",
          noCSS: !0,
          examplesPath: "examples/prism-{id}",
          addCheckAll: !0
        },
        markup: {
          title: "Markup",
          alias: ["html", "xml", "svg", "mathml"],
          aliasTitles: {
            html: "HTML",
            xml: "XML",
            svg: "SVG",
            mathml: "MathML"
          },
          option: "default"
        },
        css: {
          title: "CSS",
          option: "default",
          modify: "markup"
        },
        clike: {
          title: "C-like",
          option: "default",
          overrideExampleHeader: !0
        },
        javascript: {
          title: "JavaScript",
          require: "clike",
          modify: "markup",
          alias: "js",
          option: "default"
        },
        abap: {
          title: "ABAP",
          owner: "dellagustin"
        },
        abnf: {
          title: "Augmented Backus–Naur form",
          owner: "RunDevelopment"
        },
        actionscript: {
          title: "ActionScript",
          require: "javascript",
          modify: "markup",
          owner: "Golmote"
        },
        ada: {
          title: "Ada",
          owner: "Lucretia"
        },
        antlr4: {
          title: "ANTLR4",
          alias: "g4",
          owner: "RunDevelopment"
        },
        apacheconf: {
          title: "Apache Configuration",
          owner: "GuiTeK"
        },
        apl: {
          title: "APL",
          owner: "ngn"
        },
        applescript: {
          title: "AppleScript",
          owner: "Golmote"
        },
        aql: {
          title: "AQL",
          owner: "RunDevelopment"
        },
        arduino: {
          title: "Arduino",
          require: "cpp",
          owner: "eisbehr-"
        },
        arff: {
          title: "ARFF",
          owner: "Golmote"
        },
        asciidoc: {
          alias: "adoc",
          title: "AsciiDoc",
          owner: "Golmote"
        },
        asm6502: {
          title: "6502 Assembly",
          owner: "kzurawel"
        },
        aspnet: {
          title: "ASP.NET (C#)",
          require: ["markup", "csharp"],
          owner: "nauzilus"
        },
        autohotkey: {
          title: "AutoHotkey",
          owner: "aviaryan"
        },
        autoit: {
          title: "AutoIt",
          owner: "Golmote"
        },
        bash: {
          title: "Bash",
          alias: "shell",
          aliasTitles: {
            shell: "Shell"
          },
          owner: "zeitgeist87"
        },
        basic: {
          title: "BASIC",
          owner: "Golmote"
        },
        batch: {
          title: "Batch",
          owner: "Golmote"
        },
        bbcode: {
          title: "BBcode",
          owner: "RunDevelopment"
        },
        bison: {
          title: "Bison",
          require: "c",
          owner: "Golmote"
        },
        bnf: {
          title: "Backus–Naur form",
          alias: "rbnf",
          aliasTitles: {
            rbnf: "Routing Backus–Naur form"
          },
          owner: "RunDevelopment"
        },
        brainfuck: {
          title: "Brainfuck",
          owner: "Golmote"
        },
        brightscript: {
          title: "BrightScript",
          owner: "RunDevelopment"
        },
        bro: {
          title: "Bro",
          owner: "wayward710"
        },
        c: {
          title: "C",
          require: "clike",
          owner: "zeitgeist87"
        },
        csharp: {
          title: "C#",
          require: "clike",
          alias: ["cs", "dotnet"],
          owner: "mvalipour"
        },
        cpp: {
          title: "C++",
          require: "c",
          owner: "zeitgeist87"
        },
        cil: {
          title: "CIL",
          owner: "sbrl"
        },
        coffeescript: {
          title: "CoffeeScript",
          require: "javascript",
          alias: "coffee",
          owner: "R-osey"
        },
        cmake: {
          title: "CMake",
          owner: "mjrogozinski"
        },
        clojure: {
          title: "Clojure",
          owner: "troglotit"
        },
        crystal: {
          title: "Crystal",
          require: "ruby",
          owner: "MakeNowJust"
        },
        csp: {
          title: "Content-Security-Policy",
          owner: "ScottHelme"
        },
        "css-extras": {
          title: "CSS Extras",
          require: "css",
          modify: "css",
          owner: "milesj"
        },
        d: {
          title: "D",
          require: "clike",
          owner: "Golmote"
        },
        dart: {
          title: "Dart",
          require: "clike",
          owner: "Golmote"
        },
        diff: {
          title: "Diff",
          owner: "uranusjr"
        },
        django: {
          title: "Django/Jinja2",
          require: "markup-templating",
          alias: "jinja2",
          owner: "romanvm"
        },
        "dns-zone-file": {
          title: "DNS zone file",
          owner: "RunDevelopment",
          alias: "dns-zone"
        },
        docker: {
          title: "Docker",
          alias: "dockerfile",
          owner: "JustinBeckwith"
        },
        ebnf: {
          title: "Extended Backus–Naur form",
          owner: "RunDevelopment"
        },
        eiffel: {
          title: "Eiffel",
          owner: "Conaclos"
        },
        ejs: {
          title: "EJS",
          require: ["javascript", "markup-templating"],
          owner: "RunDevelopment"
        },
        elixir: {
          title: "Elixir",
          owner: "Golmote"
        },
        elm: {
          title: "Elm",
          owner: "zwilias"
        },
        etlua: {
          title: "Embedded Lua templating",
          require: ["lua", "markup-templating"],
          owner: "RunDevelopment"
        },
        erb: {
          title: "ERB",
          require: ["ruby", "markup-templating"],
          owner: "Golmote"
        },
        erlang: {
          title: "Erlang",
          owner: "Golmote"
        },
        fsharp: {
          title: "F#",
          require: "clike",
          owner: "simonreynolds7"
        },
        "firestore-security-rules": {
          title: "Firestore security rules",
          require: "clike",
          owner: "RunDevelopment"
        },
        flow: {
          title: "Flow",
          require: "javascript",
          owner: "Golmote"
        },
        fortran: {
          title: "Fortran",
          owner: "Golmote"
        },
        ftl: {
          title: "FreeMarker Template Language",
          require: "markup-templating",
          owner: "RunDevelopment"
        },
        gcode: {
          title: "G-code",
          owner: "RunDevelopment"
        },
        gdscript: {
          title: "GDScript",
          owner: "RunDevelopment"
        },
        gedcom: {
          title: "GEDCOM",
          owner: "Golmote"
        },
        gherkin: {
          title: "Gherkin",
          owner: "hason"
        },
        git: {
          title: "Git",
          owner: "lgiraudel"
        },
        glsl: {
          title: "GLSL",
          require: "clike",
          owner: "Golmote"
        },
        gml: {
          title: "GameMaker Language",
          alias: "gamemakerlanguage",
          require: "clike",
          owner: "LiarOnce"
        },
        go: {
          title: "Go",
          require: "clike",
          owner: "arnehormann"
        },
        graphql: {
          title: "GraphQL",
          owner: "Golmote"
        },
        groovy: {
          title: "Groovy",
          require: "clike",
          owner: "robfletcher"
        },
        haml: {
          title: "Haml",
          require: "ruby",
          optional: ["css", "css-extras", "coffeescript", "erb", "javascript", "less", "markdown", "scss", "textile"],
          owner: "Golmote"
        },
        handlebars: {
          title: "Handlebars",
          require: "markup-templating",
          owner: "Golmote"
        },
        haskell: {
          title: "Haskell",
          alias: "hs",
          owner: "bholst"
        },
        haxe: {
          title: "Haxe",
          require: "clike",
          owner: "Golmote"
        },
        hcl: {
          title: "HCL",
          owner: "outsideris"
        },
        http: {
          title: "HTTP",
          optional: ["css", "javascript", "json", "markup"],
          owner: "danielgtaylor"
        },
        hpkp: {
          title: "HTTP Public-Key-Pins",
          owner: "ScottHelme"
        },
        hsts: {
          title: "HTTP Strict-Transport-Security",
          owner: "ScottHelme"
        },
        ichigojam: {
          title: "IchigoJam",
          owner: "BlueCocoa"
        },
        icon: {
          title: "Icon",
          owner: "Golmote"
        },
        inform7: {
          title: "Inform 7",
          owner: "Golmote"
        },
        ini: {
          title: "Ini",
          owner: "aviaryan"
        },
        io: {
          title: "Io",
          owner: "AlesTsurko"
        },
        j: {
          title: "J",
          owner: "Golmote"
        },
        java: {
          title: "Java",
          require: "clike",
          owner: "sherblot"
        },
        javadoc: {
          title: "JavaDoc",
          require: ["markup", "java", "javadoclike"],
          modify: ["java"],
          optional: ["scala"],
          owner: "RunDevelopment"
        },
        javadoclike: {
          title: "JavaDoc-like",
          modify: ["java", "javascript", "php"],
          owner: "RunDevelopment"
        },
        javastacktrace: {
          title: "Java stack trace",
          owner: "RunDevelopment"
        },
        jolie: {
          title: "Jolie",
          require: "clike",
          owner: "thesave"
        },
        jq: {
          title: "JQ",
          owner: "RunDevelopment"
        },
        jsdoc: {
          title: "JSDoc",
          require: ["javascript", "javadoclike"],
          modify: "javascript",
          optional: ["actionscript", "coffeescript"],
          owner: "RunDevelopment"
        },
        "js-extras": {
          title: "JS Extras",
          require: "javascript",
          modify: "javascript",
          optional: ["actionscript", "coffeescript", "flow", "n4js", "typescript"],
          owner: "RunDevelopment"
        },
        "js-templates": {
          title: "JS Templates",
          require: "javascript",
          modify: "javascript",
          optional: ["css", "css-extras", "graphql", "markdown", "markup"],
          owner: "RunDevelopment"
        },
        json: {
          title: "JSON",
          owner: "CupOfTea696"
        },
        jsonp: {
          title: "JSONP",
          require: "json",
          owner: "RunDevelopment"
        },
        json5: {
          title: "JSON5",
          require: "json",
          owner: "RunDevelopment"
        },
        julia: {
          title: "Julia",
          owner: "cdagnino"
        },
        keyman: {
          title: "Keyman",
          owner: "mcdurdin"
        },
        kotlin: {
          title: "Kotlin",
          require: "clike",
          owner: "Golmote"
        },
        latex: {
          title: "LaTeX",
          alias: ["tex", "context"],
          aliasTitles: {
            tex: "TeX",
            context: "ConTeXt"
          },
          owner: "japborst"
        },
        latte: {
          title: "Latte",
          require: ["clike", "markup-templating", "php"],
          owner: "nette"
        },
        less: {
          title: "Less",
          require: "css",
          optional: "css-extras",
          owner: "Golmote"
        },
        lilypond: {
          title: "LilyPond",
          require: "scheme",
          alias: "ly",
          owner: "RunDevelopment"
        },
        liquid: {
          title: "Liquid",
          owner: "cinhtau"
        },
        lisp: {
          title: "Lisp",
          alias: ["emacs", "elisp", "emacs-lisp"],
          owner: "JuanCaicedo"
        },
        livescript: {
          title: "LiveScript",
          owner: "Golmote"
        },
        lolcode: {
          title: "LOLCODE",
          owner: "Golmote"
        },
        lua: {
          title: "Lua",
          owner: "Golmote"
        },
        makefile: {
          title: "Makefile",
          owner: "Golmote"
        },
        markdown: {
          title: "Markdown",
          require: "markup",
          alias: "md",
          owner: "Golmote"
        },
        "markup-templating": {
          title: "Markup templating",
          require: "markup",
          owner: "Golmote"
        },
        matlab: {
          title: "MATLAB",
          owner: "Golmote"
        },
        mel: {
          title: "MEL",
          owner: "Golmote"
        },
        mizar: {
          title: "Mizar",
          owner: "Golmote"
        },
        monkey: {
          title: "Monkey",
          owner: "Golmote"
        },
        moonscript: {
          title: "MoonScript",
          alias: "moon",
          owner: "RunDevelopment"
        },
        n1ql: {
          title: "N1QL",
          owner: "TMWilds"
        },
        n4js: {
          title: "N4JS",
          require: "javascript",
          optional: ["jsdoc"],
          alias: "n4jsd",
          owner: "bsmith-n4"
        },
        "nand2tetris-hdl": {
          title: "Nand To Tetris HDL",
          owner: "stephanmax"
        },
        nasm: {
          title: "NASM",
          owner: "rbmj"
        },
        neon: {
          title: "NEON",
          owner: "nette"
        },
        nginx: {
          title: "nginx",
          owner: "westonganger",
          require: "clike"
        },
        nim: {
          title: "Nim",
          owner: "Golmote"
        },
        nix: {
          title: "Nix",
          owner: "Golmote"
        },
        nsis: {
          title: "NSIS",
          owner: "idleberg"
        },
        objectivec: {
          title: "Objective-C",
          require: "c",
          owner: "uranusjr"
        },
        ocaml: {
          title: "OCaml",
          owner: "Golmote"
        },
        opencl: {
          title: "OpenCL",
          require: "cpp",
          modify: ["c", "cpp"],
          overrideExampleHeader: !0,
          owner: "Milania1"
        },
        oz: {
          title: "Oz",
          owner: "Golmote"
        },
        parigp: {
          title: "PARI/GP",
          owner: "Golmote"
        },
        parser: {
          title: "Parser",
          require: "markup",
          owner: "Golmote"
        },
        pascal: {
          title: "Pascal",
          alias: "objectpascal",
          aliasTitles: {
            objectpascal: "Object Pascal"
          },
          owner: "Golmote"
        },
        pascaligo: {
          title: "Pascaligo",
          owner: "DefinitelyNotAGoat"
        },
        pcaxis: {
          title: "PC-Axis",
          alias: "px",
          owner: "RunDevelopment"
        },
        perl: {
          title: "Perl",
          owner: "Golmote"
        },
        php: {
          title: "PHP",
          require: ["clike", "markup-templating"],
          owner: "milesj"
        },
        phpdoc: {
          title: "PHPDoc",
          require: ["php", "javadoclike"],
          modify: "php",
          owner: "RunDevelopment"
        },
        "php-extras": {
          title: "PHP Extras",
          require: "php",
          modify: "php",
          owner: "milesj"
        },
        plsql: {
          title: "PL/SQL",
          require: "sql",
          owner: "Golmote"
        },
        powershell: {
          title: "PowerShell",
          owner: "nauzilus"
        },
        processing: {
          title: "Processing",
          require: "clike",
          owner: "Golmote"
        },
        prolog: {
          title: "Prolog",
          owner: "Golmote"
        },
        properties: {
          title: ".properties",
          owner: "Golmote"
        },
        protobuf: {
          title: "Protocol Buffers",
          require: "clike",
          owner: "just-boris"
        },
        pug: {
          title: "Pug",
          require: ["markup", "javascript"],
          optional: ["coffeescript", "ejs", "handlebars", "less", "livescript", "markdown", "scss", "stylus", "twig"],
          owner: "Golmote"
        },
        puppet: {
          title: "Puppet",
          owner: "Golmote"
        },
        pure: {
          title: "Pure",
          optional: ["c", "cpp", "fortran"],
          owner: "Golmote"
        },
        python: {
          title: "Python",
          alias: "py",
          owner: "multipetros"
        },
        q: {
          title: "Q (kdb+ database)",
          owner: "Golmote"
        },
        qml: {
          title: "QML",
          require: "javascript",
          owner: "RunDevelopment"
        },
        qore: {
          title: "Qore",
          require: "clike",
          owner: "temnroegg"
        },
        r: {
          title: "R",
          owner: "Golmote"
        },
        jsx: {
          title: "React JSX",
          require: ["markup", "javascript"],
          optional: ["jsdoc", "js-extras", "js-templates"],
          owner: "vkbansal"
        },
        tsx: {
          title: "React TSX",
          require: ["jsx", "typescript"]
        },
        renpy: {
          title: "Ren'py",
          owner: "HyuchiaDiego"
        },
        reason: {
          title: "Reason",
          require: "clike",
          owner: "Golmote"
        },
        regex: {
          title: "Regex",
          modify: ["actionscript", "coffeescript", "flow", "javascript", "typescript", "vala"],
          owner: "RunDevelopment"
        },
        rest: {
          title: "reST (reStructuredText)",
          owner: "Golmote"
        },
        rip: {
          title: "Rip",
          owner: "ravinggenius"
        },
        roboconf: {
          title: "Roboconf",
          owner: "Golmote"
        },
        robotframework: {
          title: "Robot Framework",
          alias: "robot",
          owner: "RunDevelopment"
        },
        ruby: {
          title: "Ruby",
          require: "clike",
          alias: "rb",
          owner: "samflores"
        },
        rust: {
          title: "Rust",
          owner: "Golmote"
        },
        sas: {
          title: "SAS",
          peerDependencies: ["groovy", "lua", "sql"],
          owner: "Golmote"
        },
        sass: {
          title: "Sass (Sass)",
          require: "css",
          owner: "Golmote"
        },
        scss: {
          title: "Sass (Scss)",
          require: "css",
          optional: "css-extras",
          owner: "MoOx"
        },
        scala: {
          title: "Scala",
          require: "java",
          owner: "jozic"
        },
        scheme: {
          title: "Scheme",
          owner: "bacchus123"
        },
        "shell-session": {
          title: "Shell session",
          require: "bash",
          owner: "RunDevelopment"
        },
        smalltalk: {
          title: "Smalltalk",
          owner: "Golmote"
        },
        smarty: {
          title: "Smarty",
          require: "markup-templating",
          owner: "Golmote"
        },
        solidity: {
          title: "Solidity (Ethereum)",
          require: "clike",
          owner: "glachaud"
        },
        soy: {
          title: "Soy (Closure Template)",
          require: "markup-templating",
          owner: "Golmote"
        },
        sparql: {
          title: "SPARQL",
          require: "turtle",
          owner: "Triply-Dev",
          alias: "rq"
        },
        "splunk-spl": {
          title: "Splunk SPL",
          owner: "RunDevelopment"
        },
        sqf: {
          title: "SQF: Status Quo Function (Arma 3)",
          require: "clike",
          owner: "RunDevelopment"
        },
        sql: {
          title: "SQL",
          owner: "multipetros"
        },
        stylus: {
          title: "Stylus",
          owner: "vkbansal"
        },
        swift: {
          title: "Swift",
          require: "clike",
          owner: "chrischares"
        },
        tap: {
          title: "TAP",
          owner: "isaacs",
          require: "yaml"
        },
        tcl: {
          title: "Tcl",
          owner: "PeterChaplin"
        },
        textile: {
          title: "Textile",
          require: "markup",
          optional: "css",
          owner: "Golmote"
        },
        toml: {
          title: "TOML",
          owner: "RunDevelopment"
        },
        tt2: {
          title: "Template Toolkit 2",
          require: ["clike", "markup-templating"],
          owner: "gflohr"
        },
        turtle: {
          title: "Turtle",
          alias: ["trig"],
          aliasTitles: {
            trig: "TriG"
          },
          owner: "jakubklimek"
        },
        twig: {
          title: "Twig",
          require: "markup",
          owner: "brandonkelly"
        },
        typescript: {
          title: "TypeScript",
          require: "javascript",
          optional: "js-templates",
          alias: "ts",
          owner: "vkbansal"
        },
        "t4-cs": {
          title: "T4 Text Templates (C#)",
          require: ["t4-templating", "csharp"],
          alias: "t4",
          owner: "RunDevelopment"
        },
        "t4-vb": {
          title: "T4 Text Templates (VB)",
          require: ["t4-templating", "visual-basic"],
          owner: "RunDevelopment"
        },
        "t4-templating": {
          title: "T4 templating",
          owner: "RunDevelopment"
        },
        vala: {
          title: "Vala",
          require: "clike",
          owner: "TemplarVolk"
        },
        vbnet: {
          title: "VB.Net",
          require: "basic",
          owner: "Bigsby"
        },
        velocity: {
          title: "Velocity",
          require: "markup",
          owner: "Golmote"
        },
        verilog: {
          title: "Verilog",
          owner: "a-rey"
        },
        vhdl: {
          title: "VHDL",
          owner: "a-rey"
        },
        vim: {
          title: "vim",
          owner: "westonganger"
        },
        "visual-basic": {
          title: "Visual Basic",
          alias: "vb",
          owner: "Golmote"
        },
        wasm: {
          title: "WebAssembly",
          owner: "Golmote"
        },
        wiki: {
          title: "Wiki markup",
          require: "markup",
          owner: "Golmote"
        },
        xeora: {
          title: "Xeora",
          require: "markup",
          alias: "xeoracube",
          aliasTitles: {
            xeoracube: "XeoraCube"
          },
          owner: "freakmaxi"
        },
        xojo: {
          title: "Xojo (REALbasic)",
          owner: "Golmote"
        },
        xquery: {
          title: "XQuery",
          require: "markup",
          owner: "Golmote"
        },
        yaml: {
          title: "YAML",
          alias: "yml",
          owner: "hason"
        },
        zig: {
          title: "Zig",
          owner: "RunDevelopment"
        }
      },
      plugins: {
        meta: {
          path: "plugins/{id}/prism-{id}",
          link: "plugins/{id}/"
        },
        "line-highlight": {
          title: "Line Highlight",
          description: "Highlights specific lines and/or line ranges."
        },
        "line-numbers": {
          title: "Line Numbers",
          description: "Line number at the beginning of code lines.",
          owner: "kuba-kubula"
        },
        "show-invisibles": {
          title: "Show Invisibles",
          description: "Show hidden characters such as tabs and line breaks.",
          optional: ["autolinker", "data-uri-highlight"]
        },
        autolinker: {
          title: "Autolinker",
          description: "Converts URLs and emails in code to clickable links. Parses Markdown links in comments."
        },
        wpd: {
          title: "WebPlatform Docs",
          description: 'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.'
        },
        "custom-class": {
          title: "Custom Class",
          description: "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
          owner: "dvkndn",
          noCSS: !0
        },
        "file-highlight": {
          title: "File Highlight",
          description: "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
          noCSS: !0
        },
        "show-language": {
          title: "Show Language",
          description: "Display the highlighted language in code blocks (inline code does not show the label).",
          owner: "nauzilus",
          noCSS: !0,
          require: "toolbar"
        },
        "jsonp-highlight": {
          title: "JSONP Highlight",
          description: "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
          noCSS: !0,
          owner: "nauzilus"
        },
        "highlight-keywords": {
          title: "Highlight Keywords",
          description: "Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.",
          owner: "vkbansal",
          noCSS: !0
        },
        "remove-initial-line-feed": {
          title: "Remove initial line feed",
          description: "Removes the initial line feed in code blocks.",
          owner: "Golmote",
          noCSS: !0
        },
        "inline-color": {
          title: "Inline color",
          description: "Adds a small inline preview for colors in style sheets.",
          require: "css-extras",
          owner: "RunDevelopment"
        },
        previewers: {
          title: "Previewers",
          description: "Previewers for angles, colors, gradients, easing and time.",
          require: "css-extras",
          owner: "Golmote"
        },
        autoloader: {
          title: "Autoloader",
          description: "Automatically loads the needed languages to highlight the code blocks.",
          owner: "Golmote",
          noCSS: !0
        },
        "keep-markup": {
          title: "Keep Markup",
          description: "Prevents custom markup from being dropped out during highlighting.",
          owner: "Golmote",
          optional: "normalize-whitespace",
          noCSS: !0
        },
        "command-line": {
          title: "Command Line",
          description: "Display a command line with a prompt and, optionally, the output/response from the commands.",
          owner: "chriswells0"
        },
        "unescaped-markup": {
          title: "Unescaped Markup",
          description: "Write markup without having to escape anything."
        },
        "normalize-whitespace": {
          title: "Normalize Whitespace",
          description: "Supports multiple operations to normalize whitespace in code blocks.",
          owner: "zeitgeist87",
          optional: "unescaped-markup",
          noCSS: !0
        },
        "data-uri-highlight": {
          title: "Data-URI Highlight",
          description: "Highlights data-URI contents.",
          owner: "Golmote",
          noCSS: !0
        },
        toolbar: {
          title: "Toolbar",
          description: "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
          owner: "mAAdhaTTah"
        },
        "copy-to-clipboard": {
          title: "Copy to Clipboard Button",
          description: "Add a button that copies the code block to the clipboard when clicked.",
          owner: "mAAdhaTTah",
          require: "toolbar",
          noCSS: !0
        },
        "download-button": {
          title: "Download Button",
          description: "A button in the toolbar of a code block adding a convenient way to download a code file.",
          owner: "Golmote",
          require: "toolbar",
          noCSS: !0
        },
        "match-braces": {
          title: "Match braces",
          description: "Highlights matching braces.",
          owner: "RunDevelopment"
        },
        "diff-highlight": {
          title: "Diff Highlight",
          description: "Highlights the code inside diff blocks.",
          owner: "RunDevelopment",
          require: "diff"
        },
        "filter-highlight-all": {
          title: "Filter highlightAll",
          description: "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
          owner: "RunDevelopment",
          noCSS: !0
        }
      }
    };
    "undefined" != typeof module && module.exports && (module.exports = e);
  }, {}],
  "CUYh": [function (require, module, exports) {
    "use strict";

    var n = function () {
      var n = function n() {};

      function r(n, r) {
        Array.isArray(n) ? n.forEach(r) : null != n && r(n, 0);
      }

      function i(n) {
        for (var r = {}, i = 0, o = n.length; i < o; i++) {
          r[n[i]] = !0;
        }

        return r;
      }

      function o(n) {
        var i = {},
            o = [];
        return function (t) {
          var a = i[t];
          return a || (!function o(t, a) {
            if (!(t in i)) {
              a.push(t);
              var e = a.indexOf(t);
              if (e < a.length - 1) throw new Error("Circular dependency: " + a.slice(e).join(" -> "));
              var f = {},
                  u = n[t];

              if (u) {
                var v = function v(r) {
                  if (!(r in n)) throw new Error(t + " depends on an unknown component " + r);
                  if (!(r in f)) for (var e in o(r, a), f[r] = !0, i[r]) {
                    f[e] = !0;
                  }
                };

                r(u.require, v), r(u.optional, v), r(u.modify, v);
              }

              i[t] = f, a.pop();
            }
          }(t, o), a = i[t]), a;
        };
      }

      function t(n) {
        for (var r in n) {
          return !0;
        }

        return !1;
      }

      return function (a, e, f) {
        var u = function (n) {
          var r = {};

          for (var i in n) {
            var o = n[i];

            for (var t in o) {
              if ("meta" != t) {
                var a = o[t];
                r[t] = "string" == typeof a ? {
                  title: a
                } : a;
              }
            }
          }

          return r;
        }(a),
            v = function (n) {
          var i;
          return function (o) {
            if (o in n) return o;
            if (!i) for (var t in i = {}, n) {
              var a = n[t];
              r(a && a.alias, function (r) {
                if (r in i) throw new Error(r + " cannot be alias for both " + t + " and " + i[r]);
                if (r in n) throw new Error(r + " cannot be alias of " + t + " because it is a component.");
                i[r] = t;
              });
            }
            return i[o] || o;
          };
        }(u);

        e = e.map(v), f = (f || []).map(v);
        var c = i(e),
            l = i(f);
        e.forEach(function n(i) {
          var o = u[i];
          r(o && o.require, function (r) {
            r in l || (c[r] = !0, n(r));
          });
        });

        for (var s, p = o(u), d = c; t(d);) {
          for (var h in s = {}, d) {
            var m = u[h];
            r(m && m.modify, function (n) {
              n in l && (s[n] = !0);
            });
          }

          for (var w in l) {
            if (!(w in c)) for (var y in p(w)) {
              if (y in c) {
                s[w] = !0;
                break;
              }
            }
          }

          for (var E in d = s) {
            c[E] = !0;
          }
        }

        var b = {
          getIds: function getIds() {
            var n = [];
            return b.load(function (r) {
              n.push(r);
            }), n;
          },
          load: function load(r, i) {
            return function (r, i, o, t) {
              var a = t ? t.series : void 0,
                  e = t ? t.parallel : n;
              var f = {},
                  u = {};

              function v(n) {
                if (n in f) return f[n];
                u[n] = !0;
                var t,
                    c = [];

                for (var l in r(n)) {
                  l in i && c.push(l);
                }

                if (0 === c.length) t = o(n);else {
                  var s = e(c.map(function (n) {
                    var r = v(n);
                    return delete u[n], r;
                  }));
                  a ? t = a(s, function () {
                    return o(n);
                  }) : o(n);
                }
                return f[n] = t;
              }

              for (var c in i) {
                v(c);
              }

              var l = [];

              for (var s in u) {
                l.push(f[s]);
              }

              return e(l);
            }(p, c, r, i);
          }
        };
        return b;
      };
    }();

    "undefined" != typeof module && (module.exports = n);
  }, {}],
  "gslk": [function (require, module, exports) {
    var e = require("../components.js"),
        r = require("../dependencies"),
        s = new Set();

    function n(i) {
      void 0 === i ? i = Object.keys(e.languages).filter(function (e) {
        return "meta" != e;
      }) : Array.isArray(i) || (i = [i]);
      var t = [].concat(_toConsumableArray(s), _toConsumableArray(Object.keys(Prism.languages)));
      r(e, i, t).load(function (r) {
        if (!(r in e.languages)) return void (n.silent || console.warn("Language does not exist: " + r));
        var i = "./prism-" + r;
        delete require.cache[require.resolve(i)], delete Prism.languages[r], require(i), s.add(r);
      });
    }

    n.silent = !1, module.exports = n;
  }, {
    "../components.js": "odjR",
    "../dependencies": "CUYh"
  }],
  "epB2": [function (require, module, exports) {
    "use strict";

    var t = i(require("./undyne"));
    require("./style.styl"), require("./dracula-prism.css");
    var n = i(require("fs")),
        e = i(require("prismjs")),
        s = i(require("prismjs/components/index"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function o(t) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function l(t, n) {
      var e = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        n && (s = s.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })), e.push.apply(e, s);
      }

      return e;
    }

    function r(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {};
        n % 2 ? l(Object(e), !0).forEach(function (n) {
          c(t, n, e[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : l(Object(e)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
      }

      return t;
    }

    function c(t, n, e) {
      return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = e, t;
    }

    function h(t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
    }

    function a(t, n) {
      for (var e = 0; e < n.length; e++) {
        var s = n[e];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
      }
    }

    function d(t, n, e) {
      return n && a(t.prototype, n), e && a(t, e), t;
    }

    function f(t, n) {
      return !n || "object" !== o(n) && "function" != typeof n ? u(t) : n;
    }

    function u(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function p(t) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function v(t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), n && g(t, n);
    }

    function g(t, n) {
      return (g = Object.setPrototypeOf || function (t, n) {
        return t.__proto__ = n, t;
      })(t, n);
    }

    var Y = function (n) {
      function s(t) {
        var n;
        return h(this, s), (n = f(this, p(s).call(this, t))).fontFamily = "Fira Code", n;
      }

      return v(s, t.default), d(s, [{
        key: "tokenize",
        value: function value() {
          var t = this;
          this.colorMap = this.colorMap || {};

          for (var n = e.default.tokenize(this.content, e.default.languages.javascript).map(function t(n) {
            return n.content && Array.isArray(n.content) ? n.content.map(t) : n;
          }).flat(5).map(function (n) {
            if (n.content) {
              if (!t.colorMap[n.type]) {
                var e = document.createElement("span");
                e.innerText = n.content, e.classList.add("token", n.type), document.body.appendChild(e);
                var s = window.getComputedStyle(e).color;
                e.remove(), t.colorMap[n.type] = s;
              }

              return {
                content: n.content,
                color: t.colorMap[n.type]
              };
            }

            return {
              content: n
            };
          }).map(function (t) {
            return t.content.includes("\n") ? t.content.split(/(?=\n)|(?<=\n)/).map(function (n) {
              return r({}, t, {
                content: n
              });
            }) : t;
          }).flat(), s = [], i = []; n.length;) {
            var o = n.shift();
            "\n" == o.content ? (s.push(i), i = []) : i.push(o);
          }

          return i.length && s.push(i), this.content.endsWith("\n") && s.push([]), s;
        }
      }]), s;
    }(),
        y = document.getElementById("undyne");

    if (document.body.clientWidth < 992) {
      var X = document.body.clientWidth - 64;
      y.width = X, y.setAttribute("width", X + "px"), y.style.width = X + "px";
    }

    var m = new Y(y);
    m.content = 'class Undyne {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext("2d");\n    this.content = "";\n    this.scrollLeft = 0;\n    this.scrollTop = 0;\n    this.caretX = 0;\n    this.caretY = 0;\n    this.blinkIn = true;\n    this.makeInput();\n    this.installEventHandlers();\n    this.retina();\n    this.render();\n    this.caretInterval = setInterval(() => this.caret(), 500);\n    this.fontSize = 16;\n    this.lineSpacing = 2;\n    this.lineHeight = this.fontSize + this.lineSpacing;\n    this.fontFamily = "monospace";\n    this.charWidth = this.getCharWidth();\n    this.rows = this.getRows();\n    this.columns = this.getColumns();\n    this.foreground = "#f8f8f2";\n  }\n  makeInput() {\n    this.input = document.createElement("input");\n    this.input.setAttribute("type", "text");\n    this.input.style.transform = "translateX(-99999px) translateY(-99999px)";\n    this.input.value = "X";\n    document.body.append(this.input);\n  }\n  focus() {\n    const { scrollTop, scrollLeft } = document.scrollingElement;\n    this.input.focus({ preventScroll: true });\n    document.scrollingElement.scrollTop = scrollTop;\n    document.scrollingElement.scrollLeft = scrollLeft;\n  }\n  retina() {\n    const widthAttr = this.canvas.getAttribute("width");\n    const heightAttr = this.canvas.getAttribute("height");\n    const width = Number(widthAttr.slice(0, -2));\n    const height = Number(heightAttr.slice(0, -2));\n    this.canvas.setAttribute("width", `${width * 2}px`);\n    this.canvas.setAttribute("height", `${height * 2}px`);\n    this.canvas.style.width = widthAttr;\n    this.canvas.style.height = heightAttr;\n    this.ctx.scale(0.5, 0.5);\n  }\n  getColumns() {\n    return Math.ceil(this.canvas.width / 2 / this.charWidth);\n  }\n  getRows() {\n    return Math.ceil(this.canvas.height / 2 / this.lineHeight);\n  }\n  installEventHandlers() {\n    this.canvas.setAttribute("tabindex", "0");\n    this.focus();\n    this.input.addEventListener("keydown", event => this.onKeyDown(event));\n    this.canvas.addEventListener("mousedown", event => this.onMouseDown(event));\n    this.canvas.addEventListener("mouseup", event => this.onMouseUp(event));\n    this.canvas.addEventListener("mousemove", event => this.onMouseMove(event));\n    this.canvas.addEventListener("touchstart", ev => this.onTouchStart(ev));\n    this.canvas.addEventListener("touchend", event => this.onTouchEnd(event));\n    this.canvas.addEventListener("touchmove", event => this.onTouchMove(event));\n    this.canvas.addEventListener("wheel", event => this.onWheel(event));\n    this.canvas.addEventListener("dblclick", event => this.onDblClick(event));\n  }\n  onWheel(event) {\n    const { deltaY } = event;\n    this.scrollY(deltaY);\n  }\n  getLeftPad() {\n    return this.getLines().length.toString().length + 3;\n  }\n  onTouchStart(event) {\n    event.preventDefault();\n    this.focus();\n    this.isDown = true;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const touch = event.touches[0];\n    const rect = this.canvas.getBoundingClientRect();\n    this.downPos = {\n      x: touch.clientX - rect.left - leftPad,\n      y: touch.clientY - rect.top\n    };\n    this.scrollTouch = event.touches.length > 1;\n  }\n  onTouchEnd(event) {\n    event.preventDefault();\n    this.isDown = false;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const touch = event.changedTouches[0];\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: touch.clientX - rect.left - leftPad,\n      y: touch.clientY - rect.top\n    };\n    if (!this.scrollTouch)\n      if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y)\n        this.click();\n      else this.select();\n  }\n  onTouchMove(event) {\n    if (!this.isDown) return;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const touch = event.touches[0];\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: touch.clientX - rect.left - leftPad,\n      y: touch.clientY - rect.top\n    };\n    if (!this.scrollTouch) {\n      this.select();\n      this.click(false);\n    } else {\n      this.scrollY(this.downPos.y - this.upPos.y);\n      this.scrollX(this.downPos.x - this.upPos.x);\n    }\n  }\n  onDblClick(event) {\n    event.preventDefault();\n    const leftPad = this.getLeftPad();\n    const rect = this.canvas.getBoundingClientRect();\n    const pos = {\n      x: event.clientX - rect.left - leftPad * this.charWidth,\n      y: event.clientY - rect.top\n    };\n    const lines = this.getLines()\n      .slice(this.scrollTop)\n      .slice(0, this.rows);\n    const rowAtY = Math.floor(pos.y / this.lineHeight);\n    const colAtX = Math.floor(pos.x / this.charWidth);\n    const lineAtY = lines[rowAtY];\n    const firstWordStart = lineAtY\n      .slice(0, colAtX + 1)\n      .search(/[^\\[\\]\\(\\)."\' !@#$%^&=-]+$/);\n    const firstWhiteAfterX = lineAtY\n      .slice(colAtX)\n      .search(/[\\[\\]\\(\\)."\' !@#$%^&=-]/);\n    const firstWordEnd =\n      firstWhiteAfterX < 0 ? lineAtY.length : colAtX + firstWhiteAfterX;\n    this.selection = {\n      startX: firstWordStart,\n      endX: firstWordEnd,\n      startY: rowAtY,\n      endY: rowAtY\n    };\n    this.clear();\n    this.render();\n  }\n  scrollY(deltaY) {\n    const deltaCols = Math.floor(deltaY / this.lineHeight);\n    const newScroll = deltaCols + this.scrollTop;\n    if (newScroll < 0) return (this.scrollTop = 0);\n    const lines = this.getLines().length;\n    const maxScroll = lines - Math.min(lines, this.rows + 1);\n    if (newScroll < maxScroll) this.scrollTop = newScroll;\n    else this.scrollTop = maxScroll;\n    this.clear();\n    this.render();\n  }\n  scrollX(deltaX) {\n    const deltaCols = Math.floor(deltaX / this.charWidth);\n    const newScroll = deltaCols + this.scrollLeft;\n    if (newScroll < 0) return (this.scrollLeft = 0);\n    const maxScroll = this.getLines()[this.scrollTop].length;\n    if (newScroll < maxScroll) this.scrollLeft = newScroll;\n    else this.scrollLeft = maxScroll;\n    this.clear();\n    this.render();\n  }\n  onMouseDown(event) {\n    event.preventDefault();\n    this.focus();\n    this.isDown = true;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const rect = this.canvas.getBoundingClientRect();\n    this.downPos = {\n      x: event.clientX - rect.left - leftPad,\n      y: event.clientY - rect.top\n    };\n  }\n  onMouseUp(event) {\n    event.preventDefault();\n    this.isDown = false;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: event.clientX - rect.left - leftPad,\n      y: event.clientY - rect.top\n    };\n    if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y)\n      this.click();\n    else this.select();\n  }\n  onMouseMove(event) {\n    if (!this.isDown) return;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: event.clientX - rect.left - leftPad,\n      y: event.clientY - rect.top\n    };\n    this.select();\n    this.click(false);\n  }\n  click(nullifySelection = true) {\n    const { x, y } = this.upPos;\n    const offsetX = Math.floor(x / this.charWidth) + this.scrollLeft;\n    const offsetY = Math.floor(y / this.lineHeight) + this.scrollTop;\n    const deltaX = offsetX - this.caretX;\n    const deltaY = offsetY - this.caretY;\n    if (nullifySelection) this.selection = null;\n    this.moveCaret(deltaX, deltaY);\n  }\n  select() {\n    const leftPad = this.getLeftPad();\n    const selection = {\n      startX:\n        Math.floor((this.downPos.x - leftPad) / this.charWidth) +\n        this.scrollLeft,\n      startY: Math.floor(this.downPos.y / this.lineHeight) + this.scrollTop,\n      endX:\n        Math.floor((this.upPos.x - leftPad) / this.charWidth) + this.scrollLeft,\n      endY: Math.floor(this.upPos.y / this.lineHeight) + this.scrollTop\n    };\n    const { endY, startY, endX, startX } = selection;\n    this.upDownSelection = true;\n    if (endY < startY) {\n      selection.endY = startY;\n      selection.startY = endY;\n      selection.endX = startX;\n      selection.startX = endX;\n      this.upDownSelection = false;\n    }\n    const lines = this.getLines();\n    selection.endY = Math.min(selection.endY, lines.length - 1);\n    selection.startY = Math.max(\n      Math.min(selection.startY, lines.length - 1),\n      0\n    );\n    if (endY == startY && startX > endX) {\n      selection.endX = startX;\n      selection.startX = endX;\n      this.upDownSelection = false;\n    }\n    const endLength = lines[selection.endY].length;\n    const startLength = lines[selection.startY].length;\n    selection.endX = Math.max(Math.min(selection.endX, endLength), 0);\n    selection.startX = Math.max(Math.min(selection.startX, startLength), 0);\n    const lineCount = lines.length;\n    if (selection.endY < lineCount && selection.startY < lineCount)\n      this.selection = selection;\n    this.clear();\n    this.render();\n  }\n  onKeyDown(event) {\n    event.preventDefault();\n    if (event.keyCode == 229) {\n      return setTimeout(() => {\n        const value = this.input.value.slice(1);\n        this.input.value = "X";\n        this.insertAtCaret(value);\n      }, 0);\n    }\n    const { key } = event;\n    const ignoreList = ["Shift", "Control", "Alt", "Meta"];\n    if (key == "End") this.caretToEnd(event.shiftKey);\n    else if (key == "Home") this.caretToHome(event.shiftKey);\n    else if (key.startsWith("Arrow")) {\n      const direction = key.replace(/^Arrow/, "").toLowerCase();\n      if (direction == "left") this.moveCaret(-1, 0, event.shiftKey);\n      else if (direction == "right") this.moveCaret(1, 0, event.shiftKey);\n      else if (direction == "down") this.moveCaret(0, 1, event.shiftKey);\n      else if (direction == "up") this.moveCaret(0, -1, event.shiftKey);\n    } else if (event.ctrlKey || event.metaKey) {\n      if (key == "c") {\n        this.copy();\n      } else if (key == "v") {\n        this.paste();\n      } else if (key == "x") {\n        this.copy();\n        this.delete();\n      }\n    } else if (ignoreList.includes(key)) {\n      return;\n    } else {\n      this.insertAtCaret(key);\n    }\n  }\n  copy() {\n    if (!this.selection) return;\n    const text = this.getSelection();\n    navigator.clipboard.writeText(text);\n  }\n  paste() {\n    if (this.selection) this.delete();\n    navigator.clipboard.readText().then(text => this.insertAtCaret(text));\n  }\n  delete() {\n    if (!this.selection) return;\n    const { startX, startY, endX, endY } = this.selection;\n    const lines = this.getLines();\n    if (startY == endY) {\n      lines[endY] = lines[endY].slice(0, startX) + lines[endY].slice(endX);\n    } else {\n      lines[startY] = lines[startY].slice(0, startX) + lines[endY].slice(endX);\n      lines.splice(startY + 1, endY - startY);\n    }\n    this.content = lines.join("\\n");\n    this.selection = null;\n    if (!this.upDownSelection) return;\n    const deltaX = startX - endX;\n    const deltaY = startY - endY;\n    this.moveCaret(deltaX, deltaY);\n  }\n  getSelection() {\n    const { startX, startY, endX, endY } = this.selection;\n    const lines = this.getLines();\n    if (startY == endY) {\n      return lines[startY].slice(startX, endX);\n    } else {\n      const firstLine = lines[startY].slice(startX);\n      const lastLine = lines[endY].slice(0, endX);\n      const rest = lines.slice(startY + 1, endY);\n      return [firstLine, ...rest, lastLine].join("\\n");\n    }\n  }\n  insertAtCaret(str) {\n    const hasSelection = !!this.selection;\n    this.delete();\n    const lines = this.getLines();\n    const pre = lines.slice(0, this.caretY);\n    const curr = lines[this.caretY];\n    const post = lines.slice(this.caretY + 1);\n    const left = curr.slice(0, this.caretX);\n    const right = curr.slice(this.caretX);\n    if (str == "Enter") {\n      this.content = [...pre, left, right, ...post].join("\\n");\n      this.moveCaret(-this.caretX, 1);\n    } else if (str == "Tab") {\n      this.content = [...pre, left + "  " + right, ...post].join("\\n");\n      this.moveCaret(2, 0);\n    } else if (str == "Backspace") {\n      if (hasSelection) return;\n      if (!left.length) {\n        const lastOfPre = pre.pop() || "";\n        this.content = [...pre, lastOfPre + right, ...post].join("\\n");\n        this.moveCaret(lastOfPre.length - this.caretX, -1);\n      } else {\n        this.content = [...pre, left.slice(0, -1) + right, ...post].join("\\n");\n        this.moveCaret(-1, 0);\n      }\n    } else {\n      this.content = [...pre, left + str + right, ...post].join("\\n");\n      this.moveCaret(str.length, 0);\n    }\n    this.clear();\n    this.render();\n  }\n  caretToHome(select) {\n    if (select) {\n      const startX = 0;\n      const startY = this.selection ? this.selection.startY : this.caretY;\n      const endY = this.selection ? this.selection.endY : this.caretY;\n      const endX = this.selection ? this.selection.endX : this.caretX;\n      this.selection = { startX, endX, startY, endY };\n    }\n    this.caretX = 0;\n    this.caret();\n  }\n  caretToEnd(select = false) {\n    const caretMax = this.getLines()[this.caretY].length;\n    if (select) {\n      const startX = this.selection ? this.selection.startX : this.caretX;\n      const startY = this.selection ? this.selection.startY : this.caretY;\n      const endY = this.selection ? this.selection.endY : this.caretY;\n      const endX = caretMax;\n      this.selection = { startX, endX, startY, endY };\n    }\n    this.caretX = caretMax;\n    this.caret();\n  }\n  moveCaret(dx = 0, dy = 0, select = false) {\n    if (dx + this.caretX < 0) return;\n    if (dy + this.caretY < 0) return;\n    const lines = this.getLines();\n    if (dy + this.caretY > lines.length - 1) return;\n    if (select) {\n      const selection = this.selection || {};\n      if (this.selection) {\n        const caretAtEnd = this.caretY == selection.endY;\n        if (caretAtEnd) selection.endY += dy;\n        else selection.startY += dy;\n        if (caretAtEnd) selection.endX += dx;\n        else selection.startX += dx;\n      } else {\n        selection.startY = this.caretY;\n        selection.endY = this.caretY + dy;\n        selection.startX = this.caretX;\n        selection.endX = this.caretX + dx;\n      }\n      const { endY, startY, endX, startX } = selection;\n      if (endY < startY) {\n        selection.endY = startY;\n        selection.startY = endY;\n        selection.endX = startX;\n        selection.startX = endX;\n      }\n      selection.endX = Math.min(lines[selection.endY].length, selection.endX);\n      this.selection = selection;\n    }\n    if (dy + this.caretY < lines.length) this.caretY += dy;\n    else this.caretY = lines.length;\n    if (dx + this.caretX <= lines[this.caretY].length) this.caretX += dx;\n    else this.caretX = lines[this.caretY].length;\n    this.scrollToCaret();\n    this.caret();\n  }\n  scrollToCaret() {\n    if (this.caretY >= this.scrollTop + this.rows - 1) {\n      const deltaRows = this.caretY - this.rows - this.scrollTop + 2;\n      this.scrollY(deltaRows * this.lineHeight);\n    }\n    if (this.caretY < this.scrollTop) {\n      const deltaRows = this.caretY - this.scrollTop;\n      this.scrollY(deltaRows * this.lineHeight);\n    }\n    if (this.caretX > this.scrollLeft + this.columns - 2) {\n      const deltaCols = this.caretX - this.scrollLeft - this.columns + 2;\n      this.scrollX(deltaCols * this.charWidth);\n    }\n    if (this.caretX < this.scrollLeft) {\n      const deltaCols = this.caretX - this.scrollLeft;\n      this.scrollX(deltaCols * this.charWidth);\n    }\n  }\n  drawSelectBackground() {\n    if (!this.selection) return;\n    const lines = this.getLines();\n    const leftPad = this.getLeftPad();\n    const { startX, startY, endX, endY } = this.selection;\n    const deltaX = this.scrollLeft;\n    const deltaY = this.scrollTop;\n    this.ctx.save();\n    this.ctx.fillStyle = "rgba(68, 71, 90, 1)";\n    if (startY == endY) {\n      this.ctx.fillRect(\n        (startX - deltaX + leftPad) * this.charWidth,\n        (startY - deltaY) * this.lineHeight + this.lineSpacing,\n        (endX - startX) * this.charWidth,\n        this.lineHeight\n      );\n    } else {\n      this.ctx.fillRect(\n        (startX - deltaX + leftPad) * this.charWidth,\n        (startY - deltaY) * this.lineHeight + this.lineSpacing,\n        (lines[startY].length - startX + leftPad) * this.charWidth,\n        this.lineHeight\n      );\n      for (let i = startY + 1; i < endY; i++)\n        this.ctx.fillRect(\n          leftPad * this.charWidth,\n          (i - deltaY) * this.lineHeight + this.lineSpacing,\n          lines[i].length * this.charWidth,\n          this.lineHeight\n        );\n      this.ctx.fillRect(\n        leftPad * this.charWidth,\n        (endY - deltaY) * this.lineHeight + this.lineSpacing,\n        endX * this.charWidth,\n        this.lineHeight\n      );\n    }\n    this.ctx.restore();\n  }\n  render() {\n    this.ctx.scale(2, 2);\n    this.drawSelectBackground();\n    const lineNumbers = Array(this.rows)\n      .fill(this.scrollTop + 1)\n      .map((n, i) => n + i);\n    const lineNumberMaxWidth = this.getLines().length.toString().length;\n    const tokens = this.tokenize();\n    const visibleTokenLines = tokens.slice(this.scrollTop).slice(0, this.rows);\n    const tokenLinesToDraw = visibleTokenLines.map(line => {\n      let removed = 0;\n      while (true) {\n        const token = line.shift();\n        if (!token) return [{ content: "" }];\n        if (removed + token.content.length < this.scrollLeft) {\n          removed += token.content.length;\n          continue;\n        }\n        line.unshift({\n          ...token,\n          content: token.content.slice(this.scrollLeft - removed)\n        });\n        break;\n      }\n      return line;\n    });\n    this.ctx.save();\n    tokenLinesToDraw.forEach((line, index) => {\n      const lineNumber = lineNumbers.shift();\n      const formattedLineNumber =\n        " ".repeat(lineNumberMaxWidth - lineNumber.toString().length) +\n        lineNumber.toString() +\n        " | ";\n      let offsetX = 0;\n      this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;\n      this.ctx.fillStyle = this.foreground;\n      this.ctx.fillText(\n        formattedLineNumber,\n        offsetX * this.charWidth,\n        this.lineHeight * index + this.lineHeight\n      );\n      offsetX = offsetX + formattedLineNumber.length;\n      for (const { content, color } of line) {\n        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;\n        this.ctx.fillStyle = color || this.foreground;\n        this.ctx.fillText(\n          content,\n          offsetX * this.charWidth,\n          this.lineHeight * index + this.lineHeight\n        );\n        offsetX = offsetX + content.length;\n      }\n    });\n    this.ctx.restore();\n  }\n  tokenize() {\n    return this.getLines().map(line => {\n      return line.split(" ").map(token => {\n        return {\n          content: token + " "\n        };\n      });\n    });\n  }\n  getLines() {\n    return this.content.split("\\n");\n  }\n  clear() {\n    this.canvas.width = this.canvas.width;\n  }\n  caret() {\n    this.clear();\n    this.render();\n    const leftPad = this.getLines().length.toString().length + 3;\n    const caretVisible =\n      this.scrollTop <= this.caretY && this.scrollLeft <= this.caretX + leftPad;\n    if (caretVisible && this.blinkIn) {\n      const offsetY = this.caretY - this.scrollTop;\n      const offsetX = this.caretX - this.scrollLeft + leftPad;\n      this.ctx.save();\n      this.ctx.beginPath();\n      this.ctx.strokeStyle = "#ff66aa";\n      this.ctx.moveTo(offsetX * this.charWidth, offsetY * this.lineHeight + 2);\n      this.ctx.lineTo(\n        offsetX * this.charWidth,\n        offsetY * this.lineHeight + this.lineHeight + 2 * this.lineSpacing + 2\n      );\n      this.ctx.stroke();\n      this.ctx.restore();\n    }\n    this.blinkIn = !this.blinkIn;\n  }\n  getCharWidth() {\n    const div = document.createElement("div");\n    div.innerText = "a";\n    div.style.fontSize = this.fontSize + "px";\n    div.style.fontFamily = this.fontFamily;\n    div.style.display = "inline-block";\n    document.body.appendChild(div);\n    const { width } = window.getComputedStyle(div);\n    div.remove();\n    return Number(width.replace(/[a-z]+/gi, ""));\n  }\n}\n\nmodule.exports = Undyne;\n';
  }, {
    "./undyne": "lp6W",
    "./style.styl": "TqC0",
    "./dracula-prism.css": "TqC0",
    "fs": "TqC0",
    "prismjs": "HxJM",
    "prismjs/components/index": "gslk"
  }]
}, {}, ["epB2"], null);
},{}],"../../../../opt/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55591" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../opt/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","main.f6f30ede.js"], null)
//# sourceMappingURL=/main.f6f30ede.60bb409f.js.map