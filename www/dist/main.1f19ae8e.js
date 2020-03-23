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
})({"undyne.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Undyne = /*#__PURE__*/function () {
  function Undyne(canvas) {
    var _this = this;

    _classCallCheck(this, Undyne);

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
    this.caretInterval = setInterval(function () {
      return _this.caret();
    }, 500);
    this.fontSize = 16;
    this.lineSpacing = 2;
    this.lineHeight = this.fontSize + this.lineSpacing;
    this.fontFamily = "monospace";
    this.charWidth = this.getCharWidth();
    this.rows = this.getRows();
    this.columns = this.getColumns();
    this.foreground = "#f8f8f2";
  }

  _createClass(Undyne, [{
    key: "makeInput",
    value: function makeInput() {
      this.input = document.createElement("input");
      this.input.setAttribute("type", "text");
      this.input.style.transform = "translateX(-99999px) translateY(-99999px)";
      this.input.value = "X";
      document.body.append(this.input);
    }
  }, {
    key: "focus",
    value: function focus() {
      var _document$scrollingEl = document.scrollingElement,
          scrollTop = _document$scrollingEl.scrollTop,
          scrollLeft = _document$scrollingEl.scrollLeft;
      this.input.focus({
        preventScroll: true
      });
      document.scrollingElement.scrollTop = scrollTop;
      document.scrollingElement.scrollLeft = scrollLeft;
    }
  }, {
    key: "retina",
    value: function retina() {
      var widthAttr = this.canvas.getAttribute("width");
      var heightAttr = this.canvas.getAttribute("height");
      var width = Number(widthAttr.slice(0, -2));
      var height = Number(heightAttr.slice(0, -2));
      this.canvas.setAttribute("width", "".concat(width * 2, "px"));
      this.canvas.setAttribute("height", "".concat(height * 2, "px"));
      this.canvas.style.width = widthAttr;
      this.canvas.style.height = heightAttr;
      this.ctx.scale(0.5, 0.5);
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      return Math.ceil(this.canvas.width / 2 / this.charWidth);
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return Math.ceil(this.canvas.height / 2 / this.lineHeight);
    }
  }, {
    key: "installEventHandlers",
    value: function installEventHandlers() {
      var _this2 = this;

      this.canvas.setAttribute("tabindex", "0");
      this.focus();
      this.input.addEventListener("keydown", function (event) {
        return _this2.onKeyDown(event);
      });
      this.canvas.addEventListener("mousedown", function (event) {
        return _this2.onMouseDown(event);
      });
      this.canvas.addEventListener("mouseup", function (event) {
        return _this2.onMouseUp(event);
      });
      this.canvas.addEventListener("mousemove", function (event) {
        return _this2.onMouseMove(event);
      });
      this.canvas.addEventListener("touchstart", function (ev) {
        return _this2.onTouchStart(ev);
      });
      this.canvas.addEventListener("touchend", function (event) {
        return _this2.onTouchEnd(event);
      });
      this.canvas.addEventListener("touchmove", function (event) {
        return _this2.onTouchMove(event);
      });
      this.canvas.addEventListener("wheel", function (event) {
        return _this2.onWheel(event);
      });
      this.canvas.addEventListener("dblclick", function (event) {
        return _this2.onDblClick(event);
      });
    }
  }, {
    key: "onWheel",
    value: function onWheel(event) {
      var deltaY = event.deltaY;
      this.scrollY(deltaY);
    }
  }, {
    key: "getLeftPad",
    value: function getLeftPad() {
      return this.getLines().length.toString().length + 3;
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      event.preventDefault();
      this.focus();
      this.isDown = true;
      var leftPad = this.getLeftPad() * this.charWidth;
      var touch = event.touches[0];
      var rect = this.canvas.getBoundingClientRect();
      this.downPos = {
        x: touch.clientX - rect.left - leftPad,
        y: touch.clientY - rect.top
      };
      this.scrollTouch = event.touches.length > 1;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      event.preventDefault();
      this.isDown = false;
      var leftPad = this.getLeftPad() * this.charWidth;
      var touch = event.changedTouches[0];
      var rect = this.canvas.getBoundingClientRect();
      this.upPos = {
        x: touch.clientX - rect.left - leftPad,
        y: touch.clientY - rect.top
      };
      if (!this.scrollTouch) if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y) this.click();else this.select();
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      if (!this.isDown) return;
      var leftPad = this.getLeftPad() * this.charWidth;
      var touch = event.touches[0];
      var rect = this.canvas.getBoundingClientRect();
      this.upPos = {
        x: touch.clientX - rect.left - leftPad,
        y: touch.clientY - rect.top
      };

      if (!this.scrollTouch) {
        this.select();
        this.click(false);
      } else {
        this.scrollY(this.downPos.y - this.upPos.y);
        this.scrollX(this.downPos.x - this.upPos.x);
      }
    }
  }, {
    key: "onDblClick",
    value: function onDblClick(event) {
      event.preventDefault();
      var leftPad = this.getLeftPad();
      var rect = this.canvas.getBoundingClientRect();
      var pos = {
        x: event.clientX - rect.left - leftPad * this.charWidth,
        y: event.clientY - rect.top
      };
      var lines = this.getLines().slice(this.scrollTop).slice(0, this.rows);
      var rowAtY = Math.floor(pos.y / this.lineHeight);
      var colAtX = Math.floor(pos.x / this.charWidth);
      var lineAtY = lines[rowAtY];
      var firstWordStart = lineAtY.slice(0, colAtX + 1).search(/[^\[\]\(\)."' !@#$%^&=-]+$/);
      var firstWhiteAfterX = lineAtY.slice(colAtX).search(/[\[\]\(\)."' !@#$%^&=-]/);
      var firstWordEnd = firstWhiteAfterX < 0 ? lineAtY.length : colAtX + firstWhiteAfterX;
      this.selection = {
        startX: firstWordStart,
        endX: firstWordEnd,
        startY: rowAtY,
        endY: rowAtY
      };
      this.clear();
      this.render();
    }
  }, {
    key: "scrollY",
    value: function scrollY(deltaY) {
      var deltaCols = Math.floor(deltaY / this.lineHeight);
      var newScroll = deltaCols + this.scrollTop;
      if (newScroll < 0) return this.scrollTop = 0;
      var lines = this.getLines().length;
      var maxScroll = lines - Math.min(lines, this.rows + 1);
      if (newScroll < maxScroll) this.scrollTop = newScroll;else this.scrollTop = maxScroll;
      this.clear();
      this.render();
    }
  }, {
    key: "scrollX",
    value: function scrollX(deltaX) {
      var deltaCols = Math.floor(deltaX / this.charWidth);
      var newScroll = deltaCols + this.scrollLeft;
      if (newScroll < 0) return this.scrollLeft = 0;
      var maxScroll = this.getLines()[this.scrollTop].length;
      if (newScroll < maxScroll) this.scrollLeft = newScroll;else this.scrollLeft = maxScroll;
      this.clear();
      this.render();
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      event.preventDefault();
      this.focus();
      this.isDown = true;
      var leftPad = this.getLeftPad() * this.charWidth;
      var rect = this.canvas.getBoundingClientRect();
      this.downPos = {
        x: event.clientX - rect.left - leftPad,
        y: event.clientY - rect.top
      };
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      event.preventDefault();
      this.isDown = false;
      var leftPad = this.getLeftPad() * this.charWidth;
      var rect = this.canvas.getBoundingClientRect();
      this.upPos = {
        x: event.clientX - rect.left - leftPad,
        y: event.clientY - rect.top
      };
      if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y) this.click();else this.select();
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (!this.isDown) return;
      var leftPad = this.getLeftPad() * this.charWidth;
      var rect = this.canvas.getBoundingClientRect();
      this.upPos = {
        x: event.clientX - rect.left - leftPad,
        y: event.clientY - rect.top
      };
      this.select();
      this.click(false);
    }
  }, {
    key: "click",
    value: function click() {
      var nullifySelection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$upPos = this.upPos,
          x = _this$upPos.x,
          y = _this$upPos.y;
      var offsetX = Math.floor(x / this.charWidth) + this.scrollLeft;
      var offsetY = Math.floor(y / this.lineHeight) + this.scrollTop;
      var deltaX = offsetX - this.caretX;
      var deltaY = offsetY - this.caretY;
      if (nullifySelection) this.selection = null;
      this.moveCaret(deltaX, deltaY);
    }
  }, {
    key: "select",
    value: function select() {
      var leftPad = this.getLeftPad();
      var selection = {
        startX: Math.floor((this.downPos.x - leftPad) / this.charWidth) + this.scrollLeft,
        startY: Math.floor(this.downPos.y / this.lineHeight) + this.scrollTop,
        endX: Math.floor((this.upPos.x - leftPad) / this.charWidth) + this.scrollLeft,
        endY: Math.floor(this.upPos.y / this.lineHeight) + this.scrollTop
      };
      var endY = selection.endY,
          startY = selection.startY,
          endX = selection.endX,
          startX = selection.startX;
      this.upDownSelection = true;

      if (endY < startY) {
        selection.endY = startY;
        selection.startY = endY;
        selection.endX = startX;
        selection.startX = endX;
        this.upDownSelection = false;
      }

      var lines = this.getLines();
      selection.endY = Math.min(selection.endY, lines.length - 1);
      selection.startY = Math.max(Math.min(selection.startY, lines.length - 1), 0);

      if (endY == startY && startX > endX) {
        selection.endX = startX;
        selection.startX = endX;
        this.upDownSelection = false;
      }

      var endLength = lines[selection.endY].length;
      var startLength = lines[selection.startY].length;
      selection.endX = Math.max(Math.min(selection.endX, endLength), 0);
      selection.startX = Math.max(Math.min(selection.startX, startLength), 0);
      var lineCount = lines.length;
      if (selection.endY < lineCount && selection.startY < lineCount) this.selection = selection;
      this.clear();
      this.render();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this3 = this;

      event.preventDefault();

      if (event.keyCode == 229) {
        return setTimeout(function () {
          var value = _this3.input.value.slice(1);

          _this3.input.value = "X";

          _this3.insertAtCaret(value);
        }, 0);
      }

      var key = event.key;
      var ignoreList = ["Shift", "Control", "Alt", "Meta"];
      if (key == "End") this.caretToEnd(event.shiftKey);else if (key == "Home") this.caretToHome(event.shiftKey);else if (key.startsWith("Arrow")) {
        var direction = key.replace(/^Arrow/, "").toLowerCase();
        if (direction == "left") this.moveCaret(-1, 0, event.shiftKey);else if (direction == "right") this.moveCaret(1, 0, event.shiftKey);else if (direction == "down") this.moveCaret(0, 1, event.shiftKey);else if (direction == "up") this.moveCaret(0, -1, event.shiftKey);
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
  }, {
    key: "copy",
    value: function copy() {
      if (!this.selection) return;
      var text = this.getSelection();
      navigator.clipboard.writeText(text);
    }
  }, {
    key: "paste",
    value: function paste() {
      var _this4 = this;

      if (this.selection) this.delete();
      navigator.clipboard.readText().then(function (text) {
        return _this4.insertAtCaret(text);
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (!this.selection) return;
      var _this$selection = this.selection,
          startX = _this$selection.startX,
          startY = _this$selection.startY,
          endX = _this$selection.endX,
          endY = _this$selection.endY;
      var lines = this.getLines();

      if (startY == endY) {
        lines[endY] = lines[endY].slice(0, startX) + lines[endY].slice(endX);
      } else {
        lines[startY] = lines[startY].slice(0, startX) + lines[endY].slice(endX);
        lines.splice(startY + 1, endY - startY);
      }

      this.content = lines.join("\n");
      this.selection = null;
      if (!this.upDownSelection) return;
      var deltaX = startX - endX;
      var deltaY = startY - endY;
      this.moveCaret(deltaX, deltaY);
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var _this$selection2 = this.selection,
          startX = _this$selection2.startX,
          startY = _this$selection2.startY,
          endX = _this$selection2.endX,
          endY = _this$selection2.endY;
      var lines = this.getLines();

      if (startY == endY) {
        return lines[startY].slice(startX, endX);
      } else {
        var firstLine = lines[startY].slice(startX);
        var lastLine = lines[endY].slice(0, endX);
        var rest = lines.slice(startY + 1, endY);
        return [firstLine].concat(_toConsumableArray(rest), [lastLine]).join("\n");
      }
    }
  }, {
    key: "insertAtCaret",
    value: function insertAtCaret(str) {
      var hasSelection = !!this.selection;
      this.delete();
      var lines = this.getLines();
      var pre = lines.slice(0, this.caretY);
      var curr = lines[this.caretY];
      var post = lines.slice(this.caretY + 1);
      var left = curr.slice(0, this.caretX);
      var right = curr.slice(this.caretX);

      if (str == "Enter") {
        this.content = [].concat(_toConsumableArray(pre), [left, right], _toConsumableArray(post)).join("\n");
        this.moveCaret(-this.caretX, 1);
      } else if (str == "Tab") {
        this.content = [].concat(_toConsumableArray(pre), [left + "  " + right], _toConsumableArray(post)).join("\n");
        this.moveCaret(2, 0);
      } else if (str == "Backspace") {
        if (hasSelection) return;

        if (!left.length) {
          var lastOfPre = pre.pop() || "";
          this.content = [].concat(_toConsumableArray(pre), [lastOfPre + right], _toConsumableArray(post)).join("\n");
          this.moveCaret(lastOfPre.length - this.caretX, -1);
        } else {
          this.content = [].concat(_toConsumableArray(pre), [left.slice(0, -1) + right], _toConsumableArray(post)).join("\n");
          this.moveCaret(-1, 0);
        }
      } else {
        this.content = [].concat(_toConsumableArray(pre), [left + str + right], _toConsumableArray(post)).join("\n");
        this.moveCaret(str.length, 0);
      }

      this.clear();
      this.render();
    }
  }, {
    key: "caretToHome",
    value: function caretToHome(select) {
      if (select) {
        var startX = 0;
        var startY = this.selection ? this.selection.startY : this.caretY;
        var endY = this.selection ? this.selection.endY : this.caretY;
        var endX = this.selection ? this.selection.endX : this.caretX;
        this.selection = {
          startX: startX,
          endX: endX,
          startY: startY,
          endY: endY
        };
      }

      this.caretX = 0;
      this.caret();
    }
  }, {
    key: "caretToEnd",
    value: function caretToEnd() {
      var select = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var caretMax = this.getLines()[this.caretY].length;

      if (select) {
        var startX = this.selection ? this.selection.startX : this.caretX;
        var startY = this.selection ? this.selection.startY : this.caretY;
        var endY = this.selection ? this.selection.endY : this.caretY;
        var endX = caretMax;
        this.selection = {
          startX: startX,
          endX: endX,
          startY: startY,
          endY: endY
        };
      }

      this.caretX = caretMax;
      this.caret();
    }
  }, {
    key: "moveCaret",
    value: function moveCaret() {
      var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var select = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (dx + this.caretX < 0) return;
      if (dy + this.caretY < 0) return;
      var lines = this.getLines();
      if (dy + this.caretY > lines.length - 1) return;

      if (select) {
        var selection = this.selection || {};

        if (this.selection) {
          var caretAtEnd = this.caretY == selection.endY;
          if (caretAtEnd) selection.endY += dy;else selection.startY += dy;
          if (caretAtEnd) selection.endX += dx;else selection.startX += dx;
        } else {
          selection.startY = this.caretY;
          selection.endY = this.caretY + dy;
          selection.startX = this.caretX;
          selection.endX = this.caretX + dx;
        }

        var endY = selection.endY,
            startY = selection.startY,
            endX = selection.endX,
            startX = selection.startX;

        if (endY < startY) {
          selection.endY = startY;
          selection.startY = endY;
          selection.endX = startX;
          selection.startX = endX;
        }

        selection.endX = Math.min(lines[selection.endY].length, selection.endX);
        this.selection = selection;
      }

      if (dy + this.caretY < lines.length) this.caretY += dy;else this.caretY = lines.length;
      if (dx + this.caretX <= lines[this.caretY].length) this.caretX += dx;else this.caretX = lines[this.caretY].length;
      this.scrollToCaret();
      this.caret();
    }
  }, {
    key: "scrollToCaret",
    value: function scrollToCaret() {
      if (this.caretY >= this.scrollTop + this.rows - 1) {
        var deltaRows = this.caretY - this.rows - this.scrollTop + 2;
        this.scrollY(deltaRows * this.lineHeight);
      }

      if (this.caretY < this.scrollTop) {
        var _deltaRows = this.caretY - this.scrollTop;

        this.scrollY(_deltaRows * this.lineHeight);
      }

      if (this.caretX > this.scrollLeft + this.columns - 2) {
        var deltaCols = this.caretX - this.scrollLeft - this.columns + 2;
        this.scrollX(deltaCols * this.charWidth);
      }

      if (this.caretX < this.scrollLeft) {
        var _deltaCols = this.caretX - this.scrollLeft;

        this.scrollX(_deltaCols * this.charWidth);
      }
    }
  }, {
    key: "drawSelectBackground",
    value: function drawSelectBackground() {
      if (!this.selection) return;
      var lines = this.getLines();
      var leftPad = this.getLeftPad();
      var _this$selection3 = this.selection,
          startX = _this$selection3.startX,
          startY = _this$selection3.startY,
          endX = _this$selection3.endX,
          endY = _this$selection3.endY;
      var deltaX = this.scrollLeft;
      var deltaY = this.scrollTop;
      this.ctx.save();
      this.ctx.fillStyle = "rgba(68, 71, 90, 1)";

      if (startY == endY) {
        this.ctx.fillRect((startX - deltaX + leftPad) * this.charWidth, (startY - deltaY) * this.lineHeight + this.lineSpacing, (endX - startX) * this.charWidth, this.lineHeight);
      } else {
        this.ctx.fillRect((startX - deltaX + leftPad) * this.charWidth, (startY - deltaY) * this.lineHeight + this.lineSpacing, (lines[startY].length - startX + leftPad) * this.charWidth, this.lineHeight);

        for (var i = startY + 1; i < endY; i++) {
          this.ctx.fillRect(leftPad * this.charWidth, (i - deltaY) * this.lineHeight + this.lineSpacing, lines[i].length * this.charWidth, this.lineHeight);
        }

        this.ctx.fillRect(leftPad * this.charWidth, (endY - deltaY) * this.lineHeight + this.lineSpacing, endX * this.charWidth, this.lineHeight);
      }

      this.ctx.restore();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      this.ctx.scale(2, 2);
      this.drawSelectBackground();
      var lineNumbers = Array(this.rows).fill(this.scrollTop + 1).map(function (n, i) {
        return n + i;
      });
      var lineNumberMaxWidth = this.getLines().length.toString().length;
      var tokens = this.tokenize();
      var visibleTokenLines = tokens.slice(this.scrollTop).slice(0, this.rows);
      var tokenLinesToDraw = visibleTokenLines.map(function (line) {
        var removed = 0;

        while (true) {
          var token = line.shift();
          if (!token) return [{
            content: ""
          }];

          if (removed + token.content.length < _this5.scrollLeft) {
            removed += token.content.length;
            continue;
          }

          line.unshift(_objectSpread({}, token, {
            content: token.content.slice(_this5.scrollLeft - removed)
          }));
          break;
        }

        return line;
      });
      this.ctx.save();
      tokenLinesToDraw.forEach(function (line, index) {
        var lineNumber = lineNumbers.shift();
        var formattedLineNumber = " ".repeat(lineNumberMaxWidth - lineNumber.toString().length) + lineNumber.toString() + " | ";
        var offsetX = 0;
        _this5.ctx.font = "".concat(_this5.fontSize, "px ").concat(_this5.fontFamily);
        _this5.ctx.fillStyle = _this5.foreground;

        _this5.ctx.fillText(formattedLineNumber, offsetX * _this5.charWidth, _this5.lineHeight * index + _this5.lineHeight);

        offsetX = offsetX + formattedLineNumber.length;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = line[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _step.value,
                content = _step$value.content,
                color = _step$value.color;
            _this5.ctx.font = "".concat(_this5.fontSize, "px ").concat(_this5.fontFamily);
            _this5.ctx.fillStyle = color || _this5.foreground;

            _this5.ctx.fillText(content, offsetX * _this5.charWidth, _this5.lineHeight * index + _this5.lineHeight);

            offsetX = offsetX + content.length;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      this.ctx.restore();
    }
  }, {
    key: "tokenize",
    value: function tokenize() {
      return this.getLines().map(function (line) {
        return line.split(" ").map(function (token) {
          return {
            content: token + " "
          };
        });
      });
    }
  }, {
    key: "getLines",
    value: function getLines() {
      return this.content.split("\n");
    }
  }, {
    key: "clear",
    value: function clear() {
      this.canvas.width = this.canvas.width;
    }
  }, {
    key: "caret",
    value: function caret() {
      this.clear();
      this.render();
      var leftPad = this.getLines().length.toString().length + 3;
      var caretVisible = this.scrollTop <= this.caretY && this.scrollLeft <= this.caretX + leftPad;

      if (caretVisible && this.blinkIn) {
        var offsetY = this.caretY - this.scrollTop;
        var offsetX = this.caretX - this.scrollLeft + leftPad;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#ff66aa";
        this.ctx.moveTo(offsetX * this.charWidth, offsetY * this.lineHeight + 2);
        this.ctx.lineTo(offsetX * this.charWidth, offsetY * this.lineHeight + this.lineHeight + 2 * this.lineSpacing + 2);
        this.ctx.stroke();
        this.ctx.restore();
      }

      this.blinkIn = !this.blinkIn;
    }
  }, {
    key: "getCharWidth",
    value: function getCharWidth() {
      var div = document.createElement("div");
      div.innerText = "a";
      div.style.fontSize = this.fontSize + "px";
      div.style.fontFamily = this.fontFamily;
      div.style.display = "inline-block";
      document.body.appendChild(div);

      var _window$getComputedSt = window.getComputedStyle(div),
          width = _window$getComputedSt.width;

      div.remove();
      return Number(width.replace(/[a-z]+/gi, ""));
    }
  }]);

  return Undyne;
}();

module.exports = Undyne;
},{}],"node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel/src/builtins/bundle-url.js"}],"style.styl":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"dracula-prism.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"node_modules/parcel/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/prismjs/prism.js":[function(require,module,exports) {
var global = arguments[3];

/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document) {
				return document.currentScript;
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentNode;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (target && target == token + ',' + j) {
					return;
				}

				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

if (!_.manual) {
	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
		greedy: true
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {Element} [container=document]
	 */
	self.Prism.fileHighlight = function(container) {
		container = container || document;

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			// ignore if already loaded
			if (pre.hasAttribute('data-src-loaded')) {
				return;
			}

			// load current
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
						// mark as loaded
						pre.setAttribute('data-src-loaded', '');
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});
	};

	document.addEventListener('DOMContentLoaded', function () {
		// execute inside handler, for dropping Event as argument
		self.Prism.fileHighlight();
	});

})();

},{}],"node_modules/prismjs/components.js":[function(require,module,exports) {
var components = {"core":{"meta":{"path":"components/prism-core.js","option":"mandatory"},"core":"Core"},"themes":{"meta":{"path":"themes/{id}.css","link":"index.html?theme={id}","exclusive":true},"prism":{"title":"Default","option":"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{"title":"Okaidia","owner":"ocodia"},"prism-twilight":{"title":"Twilight","owner":"remybach"},"prism-coy":{"title":"Coy","owner":"tshedor"},"prism-solarizedlight":{"title":"Solarized Light","owner":"hectormatos2011 "},"prism-tomorrow":{"title":"Tomorrow Night","owner":"Rosey"}},"languages":{"meta":{"path":"components/prism-{id}","noCSS":true,"examplesPath":"examples/prism-{id}","addCheckAll":true},"markup":{"title":"Markup","alias":["html","xml","svg","mathml"],"aliasTitles":{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML"},"option":"default"},"css":{"title":"CSS","option":"default","modify":"markup"},"clike":{"title":"C-like","option":"default","overrideExampleHeader":true},"javascript":{"title":"JavaScript","require":"clike","modify":"markup","alias":"js","option":"default"},"abap":{"title":"ABAP","owner":"dellagustin"},"abnf":{"title":"Augmented Backus–Naur form","owner":"RunDevelopment"},"actionscript":{"title":"ActionScript","require":"javascript","modify":"markup","owner":"Golmote"},"ada":{"title":"Ada","owner":"Lucretia"},"antlr4":{"title":"ANTLR4","alias":"g4","owner":"RunDevelopment"},"apacheconf":{"title":"Apache Configuration","owner":"GuiTeK"},"apl":{"title":"APL","owner":"ngn"},"applescript":{"title":"AppleScript","owner":"Golmote"},"aql":{"title":"AQL","owner":"RunDevelopment"},"arduino":{"title":"Arduino","require":"cpp","owner":"eisbehr-"},"arff":{"title":"ARFF","owner":"Golmote"},"asciidoc":{"alias":"adoc","title":"AsciiDoc","owner":"Golmote"},"asm6502":{"title":"6502 Assembly","owner":"kzurawel"},"aspnet":{"title":"ASP.NET (C#)","require":["markup","csharp"],"owner":"nauzilus"},"autohotkey":{"title":"AutoHotkey","owner":"aviaryan"},"autoit":{"title":"AutoIt","owner":"Golmote"},"bash":{"title":"Bash","alias":"shell","aliasTitles":{"shell":"Shell"},"owner":"zeitgeist87"},"basic":{"title":"BASIC","owner":"Golmote"},"batch":{"title":"Batch","owner":"Golmote"},"bbcode":{"title":"BBcode","owner":"RunDevelopment"},"bison":{"title":"Bison","require":"c","owner":"Golmote"},"bnf":{"title":"Backus–Naur form","alias":"rbnf","aliasTitles":{"rbnf":"Routing Backus–Naur form"},"owner":"RunDevelopment"},"brainfuck":{"title":"Brainfuck","owner":"Golmote"},"brightscript":{"title":"BrightScript","owner":"RunDevelopment"},"bro":{"title":"Bro","owner":"wayward710"},"c":{"title":"C","require":"clike","owner":"zeitgeist87"},"csharp":{"title":"C#","require":"clike","alias":["cs","dotnet"],"owner":"mvalipour"},"cpp":{"title":"C++","require":"c","owner":"zeitgeist87"},"cil":{"title":"CIL","owner":"sbrl"},"coffeescript":{"title":"CoffeeScript","require":"javascript","alias":"coffee","owner":"R-osey"},"cmake":{"title":"CMake","owner":"mjrogozinski"},"clojure":{"title":"Clojure","owner":"troglotit"},"crystal":{"title":"Crystal","require":"ruby","owner":"MakeNowJust"},"csp":{"title":"Content-Security-Policy","owner":"ScottHelme"},"css-extras":{"title":"CSS Extras","require":"css","modify":"css","owner":"milesj"},"d":{"title":"D","require":"clike","owner":"Golmote"},"dart":{"title":"Dart","require":"clike","owner":"Golmote"},"diff":{"title":"Diff","owner":"uranusjr"},"django":{"title":"Django/Jinja2","require":"markup-templating","alias":"jinja2","owner":"romanvm"},"dns-zone-file":{"title":"DNS zone file","owner":"RunDevelopment","alias":"dns-zone"},"docker":{"title":"Docker","alias":"dockerfile","owner":"JustinBeckwith"},"ebnf":{"title":"Extended Backus–Naur form","owner":"RunDevelopment"},"eiffel":{"title":"Eiffel","owner":"Conaclos"},"ejs":{"title":"EJS","require":["javascript","markup-templating"],"owner":"RunDevelopment"},"elixir":{"title":"Elixir","owner":"Golmote"},"elm":{"title":"Elm","owner":"zwilias"},"etlua":{"title":"Embedded Lua templating","require":["lua","markup-templating"],"owner":"RunDevelopment"},"erb":{"title":"ERB","require":["ruby","markup-templating"],"owner":"Golmote"},"erlang":{"title":"Erlang","owner":"Golmote"},"fsharp":{"title":"F#","require":"clike","owner":"simonreynolds7"},"firestore-security-rules":{"title":"Firestore security rules","require":"clike","owner":"RunDevelopment"},"flow":{"title":"Flow","require":"javascript","owner":"Golmote"},"fortran":{"title":"Fortran","owner":"Golmote"},"ftl":{"title":"FreeMarker Template Language","require":"markup-templating","owner":"RunDevelopment"},"gcode":{"title":"G-code","owner":"RunDevelopment"},"gdscript":{"title":"GDScript","owner":"RunDevelopment"},"gedcom":{"title":"GEDCOM","owner":"Golmote"},"gherkin":{"title":"Gherkin","owner":"hason"},"git":{"title":"Git","owner":"lgiraudel"},"glsl":{"title":"GLSL","require":"clike","owner":"Golmote"},"gml":{"title":"GameMaker Language","alias":"gamemakerlanguage","require":"clike","owner":"LiarOnce"},"go":{"title":"Go","require":"clike","owner":"arnehormann"},"graphql":{"title":"GraphQL","owner":"Golmote"},"groovy":{"title":"Groovy","require":"clike","owner":"robfletcher"},"haml":{"title":"Haml","require":"ruby","optional":["css","css-extras","coffeescript","erb","javascript","less","markdown","scss","textile"],"owner":"Golmote"},"handlebars":{"title":"Handlebars","require":"markup-templating","owner":"Golmote"},"haskell":{"title":"Haskell","alias":"hs","owner":"bholst"},"haxe":{"title":"Haxe","require":"clike","owner":"Golmote"},"hcl":{"title":"HCL","owner":"outsideris"},"http":{"title":"HTTP","optional":["css","javascript","json","markup"],"owner":"danielgtaylor"},"hpkp":{"title":"HTTP Public-Key-Pins","owner":"ScottHelme"},"hsts":{"title":"HTTP Strict-Transport-Security","owner":"ScottHelme"},"ichigojam":{"title":"IchigoJam","owner":"BlueCocoa"},"icon":{"title":"Icon","owner":"Golmote"},"inform7":{"title":"Inform 7","owner":"Golmote"},"ini":{"title":"Ini","owner":"aviaryan"},"io":{"title":"Io","owner":"AlesTsurko"},"j":{"title":"J","owner":"Golmote"},"java":{"title":"Java","require":"clike","owner":"sherblot"},"javadoc":{"title":"JavaDoc","require":["markup","java","javadoclike"],"modify":["java"],"optional":["scala"],"owner":"RunDevelopment"},"javadoclike":{"title":"JavaDoc-like","modify":["java","javascript","php"],"owner":"RunDevelopment"},"javastacktrace":{"title":"Java stack trace","owner":"RunDevelopment"},"jolie":{"title":"Jolie","require":"clike","owner":"thesave"},"jq":{"title":"JQ","owner":"RunDevelopment"},"jsdoc":{"title":"JSDoc","require":["javascript","javadoclike"],"modify":"javascript","optional":["actionscript","coffeescript"],"owner":"RunDevelopment"},"js-extras":{"title":"JS Extras","require":"javascript","modify":"javascript","optional":["actionscript","coffeescript","flow","n4js","typescript"],"owner":"RunDevelopment"},"js-templates":{"title":"JS Templates","require":"javascript","modify":"javascript","optional":["css","css-extras","graphql","markdown","markup"],"owner":"RunDevelopment"},"json":{"title":"JSON","owner":"CupOfTea696"},"jsonp":{"title":"JSONP","require":"json","owner":"RunDevelopment"},"json5":{"title":"JSON5","require":"json","owner":"RunDevelopment"},"julia":{"title":"Julia","owner":"cdagnino"},"keyman":{"title":"Keyman","owner":"mcdurdin"},"kotlin":{"title":"Kotlin","require":"clike","owner":"Golmote"},"latex":{"title":"LaTeX","alias":["tex","context"],"aliasTitles":{"tex":"TeX","context":"ConTeXt"},"owner":"japborst"},"latte":{"title":"Latte","require":["clike","markup-templating","php"],"owner":"nette"},"less":{"title":"Less","require":"css","optional":"css-extras","owner":"Golmote"},"lilypond":{"title":"LilyPond","require":"scheme","alias":"ly","owner":"RunDevelopment"},"liquid":{"title":"Liquid","owner":"cinhtau"},"lisp":{"title":"Lisp","alias":["emacs","elisp","emacs-lisp"],"owner":"JuanCaicedo"},"livescript":{"title":"LiveScript","owner":"Golmote"},"lolcode":{"title":"LOLCODE","owner":"Golmote"},"lua":{"title":"Lua","owner":"Golmote"},"makefile":{"title":"Makefile","owner":"Golmote"},"markdown":{"title":"Markdown","require":"markup","alias":"md","owner":"Golmote"},"markup-templating":{"title":"Markup templating","require":"markup","owner":"Golmote"},"matlab":{"title":"MATLAB","owner":"Golmote"},"mel":{"title":"MEL","owner":"Golmote"},"mizar":{"title":"Mizar","owner":"Golmote"},"monkey":{"title":"Monkey","owner":"Golmote"},"moonscript":{"title":"MoonScript","alias":"moon","owner":"RunDevelopment"},"n1ql":{"title":"N1QL","owner":"TMWilds"},"n4js":{"title":"N4JS","require":"javascript","optional":["jsdoc"],"alias":"n4jsd","owner":"bsmith-n4"},"nand2tetris-hdl":{"title":"Nand To Tetris HDL","owner":"stephanmax"},"nasm":{"title":"NASM","owner":"rbmj"},"neon":{"title":"NEON","owner":"nette"},"nginx":{"title":"nginx","owner":"westonganger","require":"clike"},"nim":{"title":"Nim","owner":"Golmote"},"nix":{"title":"Nix","owner":"Golmote"},"nsis":{"title":"NSIS","owner":"idleberg"},"objectivec":{"title":"Objective-C","require":"c","owner":"uranusjr"},"ocaml":{"title":"OCaml","owner":"Golmote"},"opencl":{"title":"OpenCL","require":"cpp","modify":["c","cpp"],"overrideExampleHeader":true,"owner":"Milania1"},"oz":{"title":"Oz","owner":"Golmote"},"parigp":{"title":"PARI/GP","owner":"Golmote"},"parser":{"title":"Parser","require":"markup","owner":"Golmote"},"pascal":{"title":"Pascal","alias":"objectpascal","aliasTitles":{"objectpascal":"Object Pascal"},"owner":"Golmote"},"pascaligo":{"title":"Pascaligo","owner":"DefinitelyNotAGoat"},"pcaxis":{"title":"PC-Axis","alias":"px","owner":"RunDevelopment"},"perl":{"title":"Perl","owner":"Golmote"},"php":{"title":"PHP","require":["clike","markup-templating"],"owner":"milesj"},"phpdoc":{"title":"PHPDoc","require":["php","javadoclike"],"modify":"php","owner":"RunDevelopment"},"php-extras":{"title":"PHP Extras","require":"php","modify":"php","owner":"milesj"},"plsql":{"title":"PL/SQL","require":"sql","owner":"Golmote"},"powershell":{"title":"PowerShell","owner":"nauzilus"},"processing":{"title":"Processing","require":"clike","owner":"Golmote"},"prolog":{"title":"Prolog","owner":"Golmote"},"properties":{"title":".properties","owner":"Golmote"},"protobuf":{"title":"Protocol Buffers","require":"clike","owner":"just-boris"},"pug":{"title":"Pug","require":["markup","javascript"],"optional":["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],"owner":"Golmote"},"puppet":{"title":"Puppet","owner":"Golmote"},"pure":{"title":"Pure","optional":["c","cpp","fortran"],"owner":"Golmote"},"python":{"title":"Python","alias":"py","owner":"multipetros"},"q":{"title":"Q (kdb+ database)","owner":"Golmote"},"qml":{"title":"QML","require":"javascript","owner":"RunDevelopment"},"qore":{"title":"Qore","require":"clike","owner":"temnroegg"},"r":{"title":"R","owner":"Golmote"},"jsx":{"title":"React JSX","require":["markup","javascript"],"optional":["jsdoc","js-extras","js-templates"],"owner":"vkbansal"},"tsx":{"title":"React TSX","require":["jsx","typescript"]},"renpy":{"title":"Ren'py","owner":"HyuchiaDiego"},"reason":{"title":"Reason","require":"clike","owner":"Golmote"},"regex":{"title":"Regex","modify":["actionscript","coffeescript","flow","javascript","typescript","vala"],"owner":"RunDevelopment"},"rest":{"title":"reST (reStructuredText)","owner":"Golmote"},"rip":{"title":"Rip","owner":"ravinggenius"},"roboconf":{"title":"Roboconf","owner":"Golmote"},"robotframework":{"title":"Robot Framework","alias":"robot","owner":"RunDevelopment"},"ruby":{"title":"Ruby","require":"clike","alias":"rb","owner":"samflores"},"rust":{"title":"Rust","owner":"Golmote"},"sas":{"title":"SAS","peerDependencies":["groovy","lua","sql"],"owner":"Golmote"},"sass":{"title":"Sass (Sass)","require":"css","owner":"Golmote"},"scss":{"title":"Sass (Scss)","require":"css","optional":"css-extras","owner":"MoOx"},"scala":{"title":"Scala","require":"java","owner":"jozic"},"scheme":{"title":"Scheme","owner":"bacchus123"},"shell-session":{"title":"Shell session","require":"bash","owner":"RunDevelopment"},"smalltalk":{"title":"Smalltalk","owner":"Golmote"},"smarty":{"title":"Smarty","require":"markup-templating","owner":"Golmote"},"solidity":{"title":"Solidity (Ethereum)","require":"clike","owner":"glachaud"},"soy":{"title":"Soy (Closure Template)","require":"markup-templating","owner":"Golmote"},"sparql":{"title":"SPARQL","require":"turtle","owner":"Triply-Dev","alias":"rq"},"splunk-spl":{"title":"Splunk SPL","owner":"RunDevelopment"},"sqf":{"title":"SQF: Status Quo Function (Arma 3)","require":"clike","owner":"RunDevelopment"},"sql":{"title":"SQL","owner":"multipetros"},"stylus":{"title":"Stylus","owner":"vkbansal"},"swift":{"title":"Swift","require":"clike","owner":"chrischares"},"tap":{"title":"TAP","owner":"isaacs","require":"yaml"},"tcl":{"title":"Tcl","owner":"PeterChaplin"},"textile":{"title":"Textile","require":"markup","optional":"css","owner":"Golmote"},"toml":{"title":"TOML","owner":"RunDevelopment"},"tt2":{"title":"Template Toolkit 2","require":["clike","markup-templating"],"owner":"gflohr"},"turtle":{"title":"Turtle","alias":["trig"],"aliasTitles":{"trig":"TriG"},"owner":"jakubklimek"},"twig":{"title":"Twig","require":"markup","owner":"brandonkelly"},"typescript":{"title":"TypeScript","require":"javascript","optional":"js-templates","alias":"ts","owner":"vkbansal"},"t4-cs":{"title":"T4 Text Templates (C#)","require":["t4-templating","csharp"],"alias":"t4","owner":"RunDevelopment"},"t4-vb":{"title":"T4 Text Templates (VB)","require":["t4-templating","visual-basic"],"owner":"RunDevelopment"},"t4-templating":{"title":"T4 templating","owner":"RunDevelopment"},"vala":{"title":"Vala","require":"clike","owner":"TemplarVolk"},"vbnet":{"title":"VB.Net","require":"basic","owner":"Bigsby"},"velocity":{"title":"Velocity","require":"markup","owner":"Golmote"},"verilog":{"title":"Verilog","owner":"a-rey"},"vhdl":{"title":"VHDL","owner":"a-rey"},"vim":{"title":"vim","owner":"westonganger"},"visual-basic":{"title":"Visual Basic","alias":"vb","owner":"Golmote"},"wasm":{"title":"WebAssembly","owner":"Golmote"},"wiki":{"title":"Wiki markup","require":"markup","owner":"Golmote"},"xeora":{"title":"Xeora","require":"markup","alias":"xeoracube","aliasTitles":{"xeoracube":"XeoraCube"},"owner":"freakmaxi"},"xojo":{"title":"Xojo (REALbasic)","owner":"Golmote"},"xquery":{"title":"XQuery","require":"markup","owner":"Golmote"},"yaml":{"title":"YAML","alias":"yml","owner":"hason"},"zig":{"title":"Zig","owner":"RunDevelopment"}},"plugins":{"meta":{"path":"plugins/{id}/prism-{id}","link":"plugins/{id}/"},"line-highlight":{"title":"Line Highlight","description":"Highlights specific lines and/or line ranges."},"line-numbers":{"title":"Line Numbers","description":"Line number at the beginning of code lines.","owner":"kuba-kubula"},"show-invisibles":{"title":"Show Invisibles","description":"Show hidden characters such as tabs and line breaks.","optional":["autolinker","data-uri-highlight"]},"autolinker":{"title":"Autolinker","description":"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},"wpd":{"title":"WebPlatform Docs","description":"Makes tokens link to <a href=\"https://webplatform.github.io/docs/\">WebPlatform.org documentation</a>. The links open in a new tab."},"custom-class":{"title":"Custom Class","description":"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.","owner":"dvkndn","noCSS":true},"file-highlight":{"title":"File Highlight","description":"Fetch external files and highlight them with Prism. Used on the Prism website itself.","noCSS":true},"show-language":{"title":"Show Language","description":"Display the highlighted language in code blocks (inline code does not show the label).","owner":"nauzilus","noCSS":true,"require":"toolbar"},"jsonp-highlight":{"title":"JSONP Highlight","description":"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).","noCSS":true,"owner":"nauzilus"},"highlight-keywords":{"title":"Highlight Keywords","description":"Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.","owner":"vkbansal","noCSS":true},"remove-initial-line-feed":{"title":"Remove initial line feed","description":"Removes the initial line feed in code blocks.","owner":"Golmote","noCSS":true},"inline-color":{"title":"Inline color","description":"Adds a small inline preview for colors in style sheets.","require":"css-extras","owner":"RunDevelopment"},"previewers":{"title":"Previewers","description":"Previewers for angles, colors, gradients, easing and time.","require":"css-extras","owner":"Golmote"},"autoloader":{"title":"Autoloader","description":"Automatically loads the needed languages to highlight the code blocks.","owner":"Golmote","noCSS":true},"keep-markup":{"title":"Keep Markup","description":"Prevents custom markup from being dropped out during highlighting.","owner":"Golmote","optional":"normalize-whitespace","noCSS":true},"command-line":{"title":"Command Line","description":"Display a command line with a prompt and, optionally, the output/response from the commands.","owner":"chriswells0"},"unescaped-markup":{"title":"Unescaped Markup","description":"Write markup without having to escape anything."},"normalize-whitespace":{"title":"Normalize Whitespace","description":"Supports multiple operations to normalize whitespace in code blocks.","owner":"zeitgeist87","optional":"unescaped-markup","noCSS":true},"data-uri-highlight":{"title":"Data-URI Highlight","description":"Highlights data-URI contents.","owner":"Golmote","noCSS":true},"toolbar":{"title":"Toolbar","description":"Attach a toolbar for plugins to easily register buttons on the top of a code block.","owner":"mAAdhaTTah"},"copy-to-clipboard":{"title":"Copy to Clipboard Button","description":"Add a button that copies the code block to the clipboard when clicked.","owner":"mAAdhaTTah","require":"toolbar","noCSS":true},"download-button":{"title":"Download Button","description":"A button in the toolbar of a code block adding a convenient way to download a code file.","owner":"Golmote","require":"toolbar","noCSS":true},"match-braces":{"title":"Match braces","description":"Highlights matching braces.","owner":"RunDevelopment"},"diff-highlight":{"title":"Diff Highlight","description":"Highlights the code inside diff blocks.","owner":"RunDevelopment","require":"diff"},"filter-highlight-all":{"title":"Filter highlightAll","description":"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.","owner":"RunDevelopment","noCSS":true}}};
if (typeof module !== 'undefined' && module.exports) { module.exports = components; }
},{}],"node_modules/prismjs/dependencies.js":[function(require,module,exports) {
"use strict";

/**
 * @typedef {Object<string, ComponentCategory>} Components
 * @typedef {Object<string, ComponentEntry | string>} ComponentCategory
 *
 * @typedef ComponentEntry
 * @property {string} [title] The title of the component.
 * @property {string} [owner] The GitHub user name of the owner.
 * @property {boolean} [noCSS=false] Whether the component doesn't have style sheets which should also be loaded.
 * @property {string | string[]} [alias] An optional list of aliases for the id of the component.
 * @property {Object<string, string>} [aliasTitles] An optional map from an alias to its title.
 *
 * Aliases which are not in this map will the get title of the component.
 * @property {string | string[]} [optional]
 * @property {string | string[]} [require]
 * @property {string | string[]} [modify]
 */

var getLoader = (function () {

	/**
	 * A function which does absolutely nothing.
	 *
	 * @type {any}
	 */
	var noop = function () { };

	/**
	 * Invokes the given callback for all elements of the given value.
	 *
	 * If the given value is an array, the callback will be invokes for all elements. If the given value is `null` or
	 * `undefined`, the callback will not be invoked. In all other cases, the callback will be invoked with the given
	 * value as parameter.
	 *
	 * @param {null | undefined | T | T[]} value
	 * @param {(value: T, index: number) => void} callbackFn
	 * @returns {void}
	 * @template T
	 */
	function forEach(value, callbackFn) {
		if (Array.isArray(value)) {
			value.forEach(callbackFn);
		} else if (value != null) {
			callbackFn(value, 0);
		}
	}

	/**
	 * Returns a new set for the given string array.
	 *
	 * @param {string[]} array
	 * @returns {StringSet}
	 *
	 * @typedef {Object<string, true>} StringSet
	 */
	function toSet(array) {
		/** @type {StringSet} */
		var set = {};
		for (var i = 0, l = array.length; i < l; i++) {
			set[array[i]] = true;
		}
		return set;
	}

	/**
	 * Creates a map of every components id to its entry.
	 *
	 * @param {Components} components
	 * @returns {EntryMap}
	 *
	 * @typedef {{ readonly [id: string]: Readonly<ComponentEntry> | undefined }} EntryMap
	 */
	function createEntryMap(components) {
		/** @type {Object<string, Readonly<ComponentEntry>>} */
		var map = {};

		for (var categoryName in components) {
			var category = components[categoryName];
			for (var id in category) {
				if (id != 'meta') {
					/** @type {ComponentEntry | string} */
					var entry = category[id];
					map[id] = typeof entry == 'string' ? { title: entry } : entry;
				}
			}
		}

		return map;
	}

	/**
	 * Creates a full dependencies map which includes all types of dependencies and their transitive dependencies.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {DependencyResolver}
	 *
	 * @typedef {(id: string) => StringSet} DependencyResolver
	 */
	function createDependencyResolver(entryMap) {
		/** @type {Object<string, StringSet>} */
		var map = {};
		var _stackArray = [];

		/**
		 * Adds the dependencies of the given component to the dependency map.
		 *
		 * @param {string} id
		 * @param {string[]} stack
		 */
		function addToMap(id, stack) {
			if (id in map) {
				return;
			}

			stack.push(id);

			// check for circular dependencies
			var firstIndex = stack.indexOf(id);
			if (firstIndex < stack.length - 1) {
				throw new Error('Circular dependency: ' + stack.slice(firstIndex).join(' -> '));
			}

			/** @type {StringSet} */
			var dependencies = {};

			var entry = entryMap[id];
			if (entry) {
				/**
				 * This will add the direct dependency and all of its transitive dependencies to the set of
				 * dependencies of `entry`.
				 *
				 * @param {string} depId
				 * @returns {void}
				 */
				function handleDirectDependency(depId) {
					if (!(depId in entryMap)) {
						throw new Error(id + ' depends on an unknown component ' + depId);
					}
					if (depId in dependencies) {
						// if the given dependency is already in the set of deps, then so are its transitive deps
						return;
					}

					addToMap(depId, stack);
					dependencies[depId] = true;
					for (var transitiveDepId in map[depId]) {
						dependencies[transitiveDepId] = true;
					}
				}

				forEach(entry.require, handleDirectDependency);
				forEach(entry.optional, handleDirectDependency);
				forEach(entry.modify, handleDirectDependency);
			}

			map[id] = dependencies;

			stack.pop();
		}

		return function (id) {
			var deps = map[id];
			if (!deps) {
				addToMap(id, _stackArray);
				deps = map[id];
			}
			return deps;
		};
	}

	/**
	 * Returns a function which resolves the aliases of its given id of alias.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {(idOrAlias: string) => string}
	 */
	function createAliasResolver(entryMap) {
		/** @type {Object<string, string> | undefined} */
		var map;

		return function (idOrAlias) {
			if (idOrAlias in entryMap) {
				return idOrAlias;
			} else {
				// only create the alias map if necessary
				if (!map) {
					map = {};

					for (var id in entryMap) {
						var entry = entryMap[id];
						forEach(entry && entry.alias, function (alias) {
							if (alias in map) {
								throw new Error(alias + ' cannot be alias for both ' + id + ' and ' + map[alias]);
							}
							if (alias in entryMap) {
								throw new Error(alias + ' cannot be alias of ' + id + ' because it is a component.');
							}
							map[alias] = id;
						});
					}
				}
				return map[idOrAlias] || idOrAlias;
			}
		};
	}

	/**
	 * @typedef LoadChainer
	 * @property {(before: T, after: () => T) => T} series
	 * @property {(values: T[]) => T} parallel
	 * @template T
	 */

	/**
	 * Creates an implicit DAG from the given components and dependencies and call the given `loadComponent` for each
	 * component in topological order.
	 *
	 * @param {DependencyResolver} dependencyResolver
	 * @param {StringSet} ids
	 * @param {(id: string) => T} loadComponent
	 * @param {LoadChainer<T>} [chainer]
	 * @returns {T}
	 * @template T
	 */
	function loadComponentsInOrder(dependencyResolver, ids, loadComponent, chainer) {
		const series = chainer ? chainer.series : undefined;
		const parallel = chainer ? chainer.parallel : noop;

		/** @type {Object<string, T>} */
		var cache = {};

		/**
		 * A set of ids of nodes which are not depended upon by any other node in the graph.
		 * @type {StringSet}
		 */
		var ends = {};

		/**
		 * Loads the given component and its dependencies or returns the cached value.
		 *
		 * @param {string} id
		 * @returns {T}
		 */
		function handleId(id) {
			if (id in cache) {
				return cache[id];
			}

			// assume that it's an end
			// if it isn't, it will be removed later
			ends[id] = true;

			// all dependencies of the component in the given ids
			var dependsOn = [];
			for (var depId in dependencyResolver(id)) {
				if (depId in ids) {
					dependsOn.push(depId);
				}
			}

			/**
			 * The value to be returned.
			 * @type {T}
			 */
			var value;

			if (dependsOn.length === 0) {
				value = loadComponent(id);
			} else {
				var depsValue = parallel(dependsOn.map(function (depId) {
					var value = handleId(depId);
					// none of the dependencies can be ends
					delete ends[depId];
					return value;
				}));
				if (series) {
					// the chainer will be responsibly for calling the function calling loadComponent
					value = series(depsValue, function () { return loadComponent(id); });
				} else {
					// we don't have a chainer, so we call loadComponent ourselves
					loadComponent(id);
				}
			}

			// cache and return
			return cache[id] = value;
		}

		for (var id in ids) {
			handleId(id);
		}

		/** @type {T[]} */
		var endValues = [];
		for (var endId in ends) {
			endValues.push(cache[endId]);
		}
		return parallel(endValues);
	}

	/**
	 * Returns whether the given object has any keys.
	 *
	 * @param {object} obj
	 */
	function hasKeys(obj) {
		for (var key in obj) {
			return true;
		}
		return false;
	}

	/**
	 * Returns an object which provides methods to get the ids of the components which have to be loaded (`getIds`) and
	 * a way to efficiently load them in synchronously and asynchronous contexts (`load`).
	 *
	 * The set of ids to be loaded is a superset of `load`. If some of these ids are in `loaded`, the corresponding
	 * components will have to reloaded.
	 *
	 * The ids in `load` and `loaded` may be in any order and can contain duplicates.
	 *
	 * @param {Components} components
	 * @param {string[]} load
	 * @param {string[]} [loaded=[]] A list of already loaded components.
	 *
	 * If a component is in this list, then all of its requirements will also be assumed to be in the list.
	 * @returns {Loader}
	 *
	 * @typedef Loader
	 * @property {() => string[]} getIds A function to get all ids of the components to load.
	 *
	 * The returned ids will be duplicate-free, alias-free and in load order.
	 * @property {LoadFunction} load A functional interface to load components.
	 *
	 * @typedef {<T> (loadComponent: (id: string) => T, chainer?: LoadChainer<T>) => T} LoadFunction
	 * A functional interface to load components.
	 *
	 * The `loadComponent` function will be called for every component in the order in which they have to be loaded.
	 *
	 * The `chainer` is useful for asynchronous loading and its `series` and `parallel` functions can be thought of as
	 * `Promise#then` and `Promise.all`.
	 *
	 * @example
	 * load(id => { loadComponent(id); }); // returns undefined
	 *
	 * await load(
	 *     id => loadComponentAsync(id), // returns a Promise for each id
	 *     {
	 *         series: async (before, after) => {
	 *             await before;
	 *             await after();
	 *         },
	 *         parallel: async (values) => {
	 *             await Promise.all(values);
	 *         }
	 *     }
	 * );
	 */
	function getLoader(components, load, loaded) {
		var entryMap = createEntryMap(components);
		var resolveAlias = createAliasResolver(entryMap);

		load = load.map(resolveAlias);
		loaded = (loaded || []).map(resolveAlias);

		var loadSet = toSet(load);
		var loadedSet = toSet(loaded);

		// add requirements

		load.forEach(addRequirements);
		function addRequirements(id) {
			var entry = entryMap[id];
			forEach(entry && entry.require, function (reqId) {
				if (!(reqId in loadedSet)) {
					loadSet[reqId] = true;
					addRequirements(reqId);
				}
			});
		}

		// add components to reload

		// A component x in `loaded` has to be reloaded if
		//  1) a component in `load` modifies x.
		//  2) x depends on a component in `load`.
		// The above two condition have to be applied until nothing changes anymore.

		var dependencyResolver = createDependencyResolver(entryMap);

		/** @type {StringSet} */
		var loadAdditions = loadSet;
		/** @type {StringSet} */
		var newIds;
		while (hasKeys(loadAdditions)) {
			newIds = {};

			// condition 1)
			for (var loadId in loadAdditions) {
				var entry = entryMap[loadId];
				forEach(entry && entry.modify, function (modId) {
					if (modId in loadedSet) {
						newIds[modId] = true;
					}
				});
			}

			// condition 2)
			for (var loadedId in loadedSet) {
				if (!(loadedId in loadSet)) {
					for (var depId in dependencyResolver(loadedId)) {
						if (depId in loadSet) {
							newIds[loadedId] = true;
							break;
						}
					}
				}
			}

			loadAdditions = newIds;
			for (var newId in loadAdditions) {
				loadSet[newId] = true;
			}
		}

		/** @type {Loader} */
		var loader = {
			getIds: function () {
				var ids = [];
				loader.load(function (id) {
					ids.push(id);
				});
				return ids;
			},
			load: function (loadComponent, chainer) {
				return loadComponentsInOrder(dependencyResolver, loadSet, loadComponent, chainer);
			}
		};

		return loader;
	}

	return getLoader;

}());

if (typeof module !== 'undefined') {
	module.exports = getLoader;
}

},{}],"node_modules/prismjs/components/index.js":[function(require,module,exports) {
const components = require('../components.js');
const getLoader = require('../dependencies');


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();

/**
 * Loads the given languages and adds them to the current Prism instance.
 *
 * If no languages are provided, __all__ Prism languages will be loaded.
 *
 * @param {string|string[]} [languages]
 * @returns {void}
 */
function loadLanguages(languages) {
	if (languages === undefined) {
		languages = Object.keys(components.languages).filter(l => l != 'meta');
	} else if (!Array.isArray(languages)) {
		languages = [languages];
	}

	// the user might have loaded languages via some other way or used `prism.js` which already includes some
	// we don't need to validate the ids because `getLoader` will ignore invalid ones
	const loaded = [...loadedLanguages, ...Object.keys(Prism.languages)];

	getLoader(components, languages, loaded).load(lang => {
		if (!(lang in components.languages)) {
			if (!loadLanguages.silent) {
				console.warn('Language does not exist: ' + lang);
			}
			return;
		}

		const pathToLanguage = './prism-' + lang;

		// remove from require cache and from Prism
		delete require.cache[require.resolve(pathToLanguage)];
		delete Prism.languages[lang];

		require(pathToLanguage);

		loadedLanguages.add(lang);
	});
}

/**
 * Set this to `true` to prevent all warning messages `loadLanguages` logs.
 */
loadLanguages.silent = false;

module.exports = loadLanguages;

},{"../components.js":"node_modules/prismjs/components.js","../dependencies":"node_modules/prismjs/dependencies.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _undyne = _interopRequireDefault(require("./undyne"));

require("./style.styl");

require("./dracula-prism.css");

var _fs = _interopRequireDefault(require("fs"));

var _prismjs = _interopRequireDefault(require("prismjs"));

var _index = _interopRequireDefault(require("prismjs/components/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PrismUndyne = /*#__PURE__*/function (_Undyne) {
  _inherits(PrismUndyne, _Undyne);

  function PrismUndyne(canvas) {
    var _this;

    _classCallCheck(this, PrismUndyne);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrismUndyne).call(this, canvas));
    _this.fontFamily = "Fira Code";
    return _this;
  }

  _createClass(PrismUndyne, [{
    key: "tokenize",
    value: function tokenize() {
      var _this2 = this;

      this.colorMap = this.colorMap || {};

      var flattenTokens = function flattenTokens(token) {
        return token.content && Array.isArray(token.content) ? token.content.map(flattenTokens) : token;
      };

      var convertToken = function convertToken(token) {
        if (token.content) {
          if (!_this2.colorMap[token.type]) {
            var el = document.createElement("span");
            el.innerText = token.content;
            el.classList.add("token", token.type);
            document.body.appendChild(el);

            var _window$getComputedSt = window.getComputedStyle(el),
                color = _window$getComputedSt.color;

            el.remove();
            _this2.colorMap[token.type] = color;
          }

          return {
            content: token.content,
            color: _this2.colorMap[token.type]
          };
        }

        return {
          content: token
        };
      };

      var tokens = _prismjs.default.tokenize(this.content, _prismjs.default.languages.javascript).map(flattenTokens).flat(5).map(convertToken).map(function (token) {
        return token.content.includes("\n") ? token.content.split(/(?=\n)|(?<=\n)/).map(function (content) {
          return _objectSpread({}, token, {
            content: content
          });
        }) : token;
      }).flat();

      var lines = [];
      var line = [];

      while (tokens.length) {
        var token = tokens.shift();

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
  }]);

  return PrismUndyne;
}(_undyne.default);

var canvas = document.getElementById("undyne");

if (document.body.clientWidth < 992) {
  var width = document.body.clientWidth - 64;
  canvas.width = width;
  canvas.setAttribute("width", width + "px");
  canvas.style.width = width + "px";
}

var editor = new PrismUndyne(canvas);
editor.content = "class Undyne {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.content = \"\";\n    this.scrollLeft = 0;\n    this.scrollTop = 0;\n    this.caretX = 0;\n    this.caretY = 0;\n    this.blinkIn = true;\n    this.makeInput();\n    this.installEventHandlers();\n    this.retina();\n    this.render();\n    this.caretInterval = setInterval(() => this.caret(), 500);\n    this.fontSize = 16;\n    this.lineSpacing = 2;\n    this.lineHeight = this.fontSize + this.lineSpacing;\n    this.fontFamily = \"monospace\";\n    this.charWidth = this.getCharWidth();\n    this.rows = this.getRows();\n    this.columns = this.getColumns();\n    this.foreground = \"#f8f8f2\";\n  }\n  makeInput() {\n    this.input = document.createElement(\"input\");\n    this.input.setAttribute(\"type\", \"text\");\n    this.input.style.transform = \"translateX(-99999px) translateY(-99999px)\";\n    this.input.value = \"X\";\n    document.body.append(this.input);\n  }\n  focus() {\n    const { scrollTop, scrollLeft } = document.scrollingElement;\n    this.input.focus({ preventScroll: true });\n    document.scrollingElement.scrollTop = scrollTop;\n    document.scrollingElement.scrollLeft = scrollLeft;\n  }\n  retina() {\n    const widthAttr = this.canvas.getAttribute(\"width\");\n    const heightAttr = this.canvas.getAttribute(\"height\");\n    const width = Number(widthAttr.slice(0, -2));\n    const height = Number(heightAttr.slice(0, -2));\n    this.canvas.setAttribute(\"width\", `${width * 2}px`);\n    this.canvas.setAttribute(\"height\", `${height * 2}px`);\n    this.canvas.style.width = widthAttr;\n    this.canvas.style.height = heightAttr;\n    this.ctx.scale(0.5, 0.5);\n  }\n  getColumns() {\n    return Math.ceil(this.canvas.width / 2 / this.charWidth);\n  }\n  getRows() {\n    return Math.ceil(this.canvas.height / 2 / this.lineHeight);\n  }\n  installEventHandlers() {\n    this.canvas.setAttribute(\"tabindex\", \"0\");\n    this.focus();\n    this.input.addEventListener(\"keydown\", event => this.onKeyDown(event));\n    this.canvas.addEventListener(\"mousedown\", event => this.onMouseDown(event));\n    this.canvas.addEventListener(\"mouseup\", event => this.onMouseUp(event));\n    this.canvas.addEventListener(\"mousemove\", event => this.onMouseMove(event));\n    this.canvas.addEventListener(\"touchstart\", ev => this.onTouchStart(ev));\n    this.canvas.addEventListener(\"touchend\", event => this.onTouchEnd(event));\n    this.canvas.addEventListener(\"touchmove\", event => this.onTouchMove(event));\n    this.canvas.addEventListener(\"wheel\", event => this.onWheel(event));\n    this.canvas.addEventListener(\"dblclick\", event => this.onDblClick(event));\n  }\n  onWheel(event) {\n    const { deltaY } = event;\n    this.scrollY(deltaY);\n  }\n  getLeftPad() {\n    return this.getLines().length.toString().length + 3;\n  }\n  onTouchStart(event) {\n    event.preventDefault();\n    this.focus();\n    this.isDown = true;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const touch = event.touches[0];\n    const rect = this.canvas.getBoundingClientRect();\n    this.downPos = {\n      x: touch.clientX - rect.left - leftPad,\n      y: touch.clientY - rect.top\n    };\n    this.scrollTouch = event.touches.length > 1;\n  }\n  onTouchEnd(event) {\n    event.preventDefault();\n    this.isDown = false;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const touch = event.changedTouches[0];\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: touch.clientX - rect.left - leftPad,\n      y: touch.clientY - rect.top\n    };\n    if (!this.scrollTouch)\n      if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y)\n        this.click();\n      else this.select();\n  }\n  onTouchMove(event) {\n    if (!this.isDown) return;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const touch = event.touches[0];\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: touch.clientX - rect.left - leftPad,\n      y: touch.clientY - rect.top\n    };\n    if (!this.scrollTouch) {\n      this.select();\n      this.click(false);\n    } else {\n      this.scrollY(this.downPos.y - this.upPos.y);\n      this.scrollX(this.downPos.x - this.upPos.x);\n    }\n  }\n  onDblClick(event) {\n    event.preventDefault();\n    const leftPad = this.getLeftPad();\n    const rect = this.canvas.getBoundingClientRect();\n    const pos = {\n      x: event.clientX - rect.left - leftPad * this.charWidth,\n      y: event.clientY - rect.top\n    };\n    const lines = this.getLines()\n      .slice(this.scrollTop)\n      .slice(0, this.rows);\n    const rowAtY = Math.floor(pos.y / this.lineHeight);\n    const colAtX = Math.floor(pos.x / this.charWidth);\n    const lineAtY = lines[rowAtY];\n    const firstWordStart = lineAtY\n      .slice(0, colAtX + 1)\n      .search(/[^\\[\\]\\(\\).\"' !@#$%^&=-]+$/);\n    const firstWhiteAfterX = lineAtY\n      .slice(colAtX)\n      .search(/[\\[\\]\\(\\).\"' !@#$%^&=-]/);\n    const firstWordEnd =\n      firstWhiteAfterX < 0 ? lineAtY.length : colAtX + firstWhiteAfterX;\n    this.selection = {\n      startX: firstWordStart,\n      endX: firstWordEnd,\n      startY: rowAtY,\n      endY: rowAtY\n    };\n    this.clear();\n    this.render();\n  }\n  scrollY(deltaY) {\n    const deltaCols = Math.floor(deltaY / this.lineHeight);\n    const newScroll = deltaCols + this.scrollTop;\n    if (newScroll < 0) return (this.scrollTop = 0);\n    const lines = this.getLines().length;\n    const maxScroll = lines - Math.min(lines, this.rows + 1);\n    if (newScroll < maxScroll) this.scrollTop = newScroll;\n    else this.scrollTop = maxScroll;\n    this.clear();\n    this.render();\n  }\n  scrollX(deltaX) {\n    const deltaCols = Math.floor(deltaX / this.charWidth);\n    const newScroll = deltaCols + this.scrollLeft;\n    if (newScroll < 0) return (this.scrollLeft = 0);\n    const maxScroll = this.getLines()[this.scrollTop].length;\n    if (newScroll < maxScroll) this.scrollLeft = newScroll;\n    else this.scrollLeft = maxScroll;\n    this.clear();\n    this.render();\n  }\n  onMouseDown(event) {\n    event.preventDefault();\n    this.focus();\n    this.isDown = true;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const rect = this.canvas.getBoundingClientRect();\n    this.downPos = {\n      x: event.clientX - rect.left - leftPad,\n      y: event.clientY - rect.top\n    };\n  }\n  onMouseUp(event) {\n    event.preventDefault();\n    this.isDown = false;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: event.clientX - rect.left - leftPad,\n      y: event.clientY - rect.top\n    };\n    if (this.downPos.x == this.upPos.x && this.downPos.y == this.upPos.y)\n      this.click();\n    else this.select();\n  }\n  onMouseMove(event) {\n    if (!this.isDown) return;\n    const leftPad = this.getLeftPad() * this.charWidth;\n    const rect = this.canvas.getBoundingClientRect();\n    this.upPos = {\n      x: event.clientX - rect.left - leftPad,\n      y: event.clientY - rect.top\n    };\n    this.select();\n    this.click(false);\n  }\n  click(nullifySelection = true) {\n    const { x, y } = this.upPos;\n    const offsetX = Math.floor(x / this.charWidth) + this.scrollLeft;\n    const offsetY = Math.floor(y / this.lineHeight) + this.scrollTop;\n    const deltaX = offsetX - this.caretX;\n    const deltaY = offsetY - this.caretY;\n    if (nullifySelection) this.selection = null;\n    this.moveCaret(deltaX, deltaY);\n  }\n  select() {\n    const leftPad = this.getLeftPad();\n    const selection = {\n      startX:\n        Math.floor((this.downPos.x - leftPad) / this.charWidth) +\n        this.scrollLeft,\n      startY: Math.floor(this.downPos.y / this.lineHeight) + this.scrollTop,\n      endX:\n        Math.floor((this.upPos.x - leftPad) / this.charWidth) + this.scrollLeft,\n      endY: Math.floor(this.upPos.y / this.lineHeight) + this.scrollTop\n    };\n    const { endY, startY, endX, startX } = selection;\n    this.upDownSelection = true;\n    if (endY < startY) {\n      selection.endY = startY;\n      selection.startY = endY;\n      selection.endX = startX;\n      selection.startX = endX;\n      this.upDownSelection = false;\n    }\n    const lines = this.getLines();\n    selection.endY = Math.min(selection.endY, lines.length - 1);\n    selection.startY = Math.max(\n      Math.min(selection.startY, lines.length - 1),\n      0\n    );\n    if (endY == startY && startX > endX) {\n      selection.endX = startX;\n      selection.startX = endX;\n      this.upDownSelection = false;\n    }\n    const endLength = lines[selection.endY].length;\n    const startLength = lines[selection.startY].length;\n    selection.endX = Math.max(Math.min(selection.endX, endLength), 0);\n    selection.startX = Math.max(Math.min(selection.startX, startLength), 0);\n    const lineCount = lines.length;\n    if (selection.endY < lineCount && selection.startY < lineCount)\n      this.selection = selection;\n    this.clear();\n    this.render();\n  }\n  onKeyDown(event) {\n    event.preventDefault();\n    if (event.keyCode == 229) {\n      return setTimeout(() => {\n        const value = this.input.value.slice(1);\n        this.input.value = \"X\";\n        this.insertAtCaret(value);\n      }, 0);\n    }\n    const { key } = event;\n    const ignoreList = [\"Shift\", \"Control\", \"Alt\", \"Meta\"];\n    if (key == \"End\") this.caretToEnd(event.shiftKey);\n    else if (key == \"Home\") this.caretToHome(event.shiftKey);\n    else if (key.startsWith(\"Arrow\")) {\n      const direction = key.replace(/^Arrow/, \"\").toLowerCase();\n      if (direction == \"left\") this.moveCaret(-1, 0, event.shiftKey);\n      else if (direction == \"right\") this.moveCaret(1, 0, event.shiftKey);\n      else if (direction == \"down\") this.moveCaret(0, 1, event.shiftKey);\n      else if (direction == \"up\") this.moveCaret(0, -1, event.shiftKey);\n    } else if (event.ctrlKey || event.metaKey) {\n      if (key == \"c\") {\n        this.copy();\n      } else if (key == \"v\") {\n        this.paste();\n      } else if (key == \"x\") {\n        this.copy();\n        this.delete();\n      }\n    } else if (ignoreList.includes(key)) {\n      return;\n    } else {\n      this.insertAtCaret(key);\n    }\n  }\n  copy() {\n    if (!this.selection) return;\n    const text = this.getSelection();\n    navigator.clipboard.writeText(text);\n  }\n  paste() {\n    if (this.selection) this.delete();\n    navigator.clipboard.readText().then(text => this.insertAtCaret(text));\n  }\n  delete() {\n    if (!this.selection) return;\n    const { startX, startY, endX, endY } = this.selection;\n    const lines = this.getLines();\n    if (startY == endY) {\n      lines[endY] = lines[endY].slice(0, startX) + lines[endY].slice(endX);\n    } else {\n      lines[startY] = lines[startY].slice(0, startX) + lines[endY].slice(endX);\n      lines.splice(startY + 1, endY - startY);\n    }\n    this.content = lines.join(\"\\n\");\n    this.selection = null;\n    if (!this.upDownSelection) return;\n    const deltaX = startX - endX;\n    const deltaY = startY - endY;\n    this.moveCaret(deltaX, deltaY);\n  }\n  getSelection() {\n    const { startX, startY, endX, endY } = this.selection;\n    const lines = this.getLines();\n    if (startY == endY) {\n      return lines[startY].slice(startX, endX);\n    } else {\n      const firstLine = lines[startY].slice(startX);\n      const lastLine = lines[endY].slice(0, endX);\n      const rest = lines.slice(startY + 1, endY);\n      return [firstLine, ...rest, lastLine].join(\"\\n\");\n    }\n  }\n  insertAtCaret(str) {\n    const hasSelection = !!this.selection;\n    this.delete();\n    const lines = this.getLines();\n    const pre = lines.slice(0, this.caretY);\n    const curr = lines[this.caretY];\n    const post = lines.slice(this.caretY + 1);\n    const left = curr.slice(0, this.caretX);\n    const right = curr.slice(this.caretX);\n    if (str == \"Enter\") {\n      this.content = [...pre, left, right, ...post].join(\"\\n\");\n      this.moveCaret(-this.caretX, 1);\n    } else if (str == \"Tab\") {\n      this.content = [...pre, left + \"  \" + right, ...post].join(\"\\n\");\n      this.moveCaret(2, 0);\n    } else if (str == \"Backspace\") {\n      if (hasSelection) return;\n      if (!left.length) {\n        const lastOfPre = pre.pop() || \"\";\n        this.content = [...pre, lastOfPre + right, ...post].join(\"\\n\");\n        this.moveCaret(lastOfPre.length - this.caretX, -1);\n      } else {\n        this.content = [...pre, left.slice(0, -1) + right, ...post].join(\"\\n\");\n        this.moveCaret(-1, 0);\n      }\n    } else {\n      this.content = [...pre, left + str + right, ...post].join(\"\\n\");\n      this.moveCaret(str.length, 0);\n    }\n    this.clear();\n    this.render();\n  }\n  caretToHome(select) {\n    if (select) {\n      const startX = 0;\n      const startY = this.selection ? this.selection.startY : this.caretY;\n      const endY = this.selection ? this.selection.endY : this.caretY;\n      const endX = this.selection ? this.selection.endX : this.caretX;\n      this.selection = { startX, endX, startY, endY };\n    }\n    this.caretX = 0;\n    this.caret();\n  }\n  caretToEnd(select = false) {\n    const caretMax = this.getLines()[this.caretY].length;\n    if (select) {\n      const startX = this.selection ? this.selection.startX : this.caretX;\n      const startY = this.selection ? this.selection.startY : this.caretY;\n      const endY = this.selection ? this.selection.endY : this.caretY;\n      const endX = caretMax;\n      this.selection = { startX, endX, startY, endY };\n    }\n    this.caretX = caretMax;\n    this.caret();\n  }\n  moveCaret(dx = 0, dy = 0, select = false) {\n    if (dx + this.caretX < 0) return;\n    if (dy + this.caretY < 0) return;\n    const lines = this.getLines();\n    if (dy + this.caretY > lines.length - 1) return;\n    if (select) {\n      const selection = this.selection || {};\n      if (this.selection) {\n        const caretAtEnd = this.caretY == selection.endY;\n        if (caretAtEnd) selection.endY += dy;\n        else selection.startY += dy;\n        if (caretAtEnd) selection.endX += dx;\n        else selection.startX += dx;\n      } else {\n        selection.startY = this.caretY;\n        selection.endY = this.caretY + dy;\n        selection.startX = this.caretX;\n        selection.endX = this.caretX + dx;\n      }\n      const { endY, startY, endX, startX } = selection;\n      if (endY < startY) {\n        selection.endY = startY;\n        selection.startY = endY;\n        selection.endX = startX;\n        selection.startX = endX;\n      }\n      selection.endX = Math.min(lines[selection.endY].length, selection.endX);\n      this.selection = selection;\n    }\n    if (dy + this.caretY < lines.length) this.caretY += dy;\n    else this.caretY = lines.length;\n    if (dx + this.caretX <= lines[this.caretY].length) this.caretX += dx;\n    else this.caretX = lines[this.caretY].length;\n    this.scrollToCaret();\n    this.caret();\n  }\n  scrollToCaret() {\n    if (this.caretY >= this.scrollTop + this.rows - 1) {\n      const deltaRows = this.caretY - this.rows - this.scrollTop + 2;\n      this.scrollY(deltaRows * this.lineHeight);\n    }\n    if (this.caretY < this.scrollTop) {\n      const deltaRows = this.caretY - this.scrollTop;\n      this.scrollY(deltaRows * this.lineHeight);\n    }\n    if (this.caretX > this.scrollLeft + this.columns - 2) {\n      const deltaCols = this.caretX - this.scrollLeft - this.columns + 2;\n      this.scrollX(deltaCols * this.charWidth);\n    }\n    if (this.caretX < this.scrollLeft) {\n      const deltaCols = this.caretX - this.scrollLeft;\n      this.scrollX(deltaCols * this.charWidth);\n    }\n  }\n  drawSelectBackground() {\n    if (!this.selection) return;\n    const lines = this.getLines();\n    const leftPad = this.getLeftPad();\n    const { startX, startY, endX, endY } = this.selection;\n    const deltaX = this.scrollLeft;\n    const deltaY = this.scrollTop;\n    this.ctx.save();\n    this.ctx.fillStyle = \"rgba(68, 71, 90, 1)\";\n    if (startY == endY) {\n      this.ctx.fillRect(\n        (startX - deltaX + leftPad) * this.charWidth,\n        (startY - deltaY) * this.lineHeight + this.lineSpacing,\n        (endX - startX) * this.charWidth,\n        this.lineHeight\n      );\n    } else {\n      this.ctx.fillRect(\n        (startX - deltaX + leftPad) * this.charWidth,\n        (startY - deltaY) * this.lineHeight + this.lineSpacing,\n        (lines[startY].length - startX + leftPad) * this.charWidth,\n        this.lineHeight\n      );\n      for (let i = startY + 1; i < endY; i++)\n        this.ctx.fillRect(\n          leftPad * this.charWidth,\n          (i - deltaY) * this.lineHeight + this.lineSpacing,\n          lines[i].length * this.charWidth,\n          this.lineHeight\n        );\n      this.ctx.fillRect(\n        leftPad * this.charWidth,\n        (endY - deltaY) * this.lineHeight + this.lineSpacing,\n        endX * this.charWidth,\n        this.lineHeight\n      );\n    }\n    this.ctx.restore();\n  }\n  render() {\n    this.ctx.scale(2, 2);\n    this.drawSelectBackground();\n    const lineNumbers = Array(this.rows)\n      .fill(this.scrollTop + 1)\n      .map((n, i) => n + i);\n    const lineNumberMaxWidth = this.getLines().length.toString().length;\n    const tokens = this.tokenize();\n    const visibleTokenLines = tokens.slice(this.scrollTop).slice(0, this.rows);\n    const tokenLinesToDraw = visibleTokenLines.map(line => {\n      let removed = 0;\n      while (true) {\n        const token = line.shift();\n        if (!token) return [{ content: \"\" }];\n        if (removed + token.content.length < this.scrollLeft) {\n          removed += token.content.length;\n          continue;\n        }\n        line.unshift({\n          ...token,\n          content: token.content.slice(this.scrollLeft - removed)\n        });\n        break;\n      }\n      return line;\n    });\n    this.ctx.save();\n    tokenLinesToDraw.forEach((line, index) => {\n      const lineNumber = lineNumbers.shift();\n      const formattedLineNumber =\n        \" \".repeat(lineNumberMaxWidth - lineNumber.toString().length) +\n        lineNumber.toString() +\n        \" | \";\n      let offsetX = 0;\n      this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;\n      this.ctx.fillStyle = this.foreground;\n      this.ctx.fillText(\n        formattedLineNumber,\n        offsetX * this.charWidth,\n        this.lineHeight * index + this.lineHeight\n      );\n      offsetX = offsetX + formattedLineNumber.length;\n      for (const { content, color } of line) {\n        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;\n        this.ctx.fillStyle = color || this.foreground;\n        this.ctx.fillText(\n          content,\n          offsetX * this.charWidth,\n          this.lineHeight * index + this.lineHeight\n        );\n        offsetX = offsetX + content.length;\n      }\n    });\n    this.ctx.restore();\n  }\n  tokenize() {\n    return this.getLines().map(line => {\n      return line.split(\" \").map(token => {\n        return {\n          content: token + \" \"\n        };\n      });\n    });\n  }\n  getLines() {\n    return this.content.split(\"\\n\");\n  }\n  clear() {\n    this.canvas.width = this.canvas.width;\n  }\n  caret() {\n    this.clear();\n    this.render();\n    const leftPad = this.getLines().length.toString().length + 3;\n    const caretVisible =\n      this.scrollTop <= this.caretY && this.scrollLeft <= this.caretX + leftPad;\n    if (caretVisible && this.blinkIn) {\n      const offsetY = this.caretY - this.scrollTop;\n      const offsetX = this.caretX - this.scrollLeft + leftPad;\n      this.ctx.save();\n      this.ctx.beginPath();\n      this.ctx.strokeStyle = \"#ff66aa\";\n      this.ctx.moveTo(offsetX * this.charWidth, offsetY * this.lineHeight + 2);\n      this.ctx.lineTo(\n        offsetX * this.charWidth,\n        offsetY * this.lineHeight + this.lineHeight + 2 * this.lineSpacing + 2\n      );\n      this.ctx.stroke();\n      this.ctx.restore();\n    }\n    this.blinkIn = !this.blinkIn;\n  }\n  getCharWidth() {\n    const div = document.createElement(\"div\");\n    div.innerText = \"a\";\n    div.style.fontSize = this.fontSize + \"px\";\n    div.style.fontFamily = this.fontFamily;\n    div.style.display = \"inline-block\";\n    document.body.appendChild(div);\n    const { width } = window.getComputedStyle(div);\n    div.remove();\n    return Number(width.replace(/[a-z]+/gi, \"\"));\n  }\n}\n\nmodule.exports = Undyne;\n";
},{"./undyne":"undyne.js","./style.styl":"style.styl","./dracula-prism.css":"dracula-prism.css","fs":"node_modules/parcel/src/builtins/_empty.js","prismjs":"node_modules/prismjs/prism.js","prismjs/components/index":"node_modules/prismjs/components/index.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61290" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map