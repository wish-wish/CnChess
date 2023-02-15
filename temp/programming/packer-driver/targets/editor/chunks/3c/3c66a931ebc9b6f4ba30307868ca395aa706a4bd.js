System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Color, Graphics, UITransform, Size, Vec3, Label, math, instantiate, RichTextComponent, Utils, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Plate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
      math = _cc.math;
      instantiate = _cc.instantiate;
      RichTextComponent = _cc.RichTextComponent;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "194170VOOdElpznrkwiPTzX", "Plate", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Plate", Plate = (_dec = ccclass('Plate'), _dec2 = property({
        type: Color
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = class Plate extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "color", _descriptor, this);

          _initializerDefineProperty(this, "label", _descriptor2, this);

          this.grap = null;
          this.ut = null;
          this.xPoints = [];
          this.xPlusPot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 19, 25, 27, 29, 31, 33, 35];
          this.XRoad = [3, 13, 23, 21, 13, 5];
          this.xWords = [37, 38, 41, 42];
          this.blackchs = ["black_ju", "black_ma", "black_pao", "black_xiang", "black_shi", "black_jiang", "black_bing"];
          this.redchs = ["red_ju", "red_ma", "red_pao", "red_xiang", "red_shi", "red_shuai", "red_bing"];
          this.xChessPos = [];
          this.blackpos = [[0, 0, 8], [1, 1, 7], [2, 19, 25], [4, 3, 5], [3, 2, 6], [5, 4], [6, 27, 29, 31, 33, 35]];
          this.redpos = [[0, 0, 8], [1, 1, 7], [2, 19, 25], [4, 3, 5], [3, 2, 6], [5, 4], [6, 27, 29, 31, 33, 35]];
          this.allpos = new Map();
          this.cells = void 0;
          this.rect = [];
          this.border = 15;
          this.edge = 20;
        }

        initPos() {
          for (let i = 0; i < this.blackpos.length; i++) {
            for (let j = 1; j < this.blackpos[i].length; j++) {
              this.redpos[i][j] = this.xPoints.length - this.blackpos[i][j] - 1;
              this.allpos.set(this.blackpos[i][j], this.blackchs[this.blackpos[i][0]]);
              this.allpos.set(this.redpos[i][j], this.redchs[this.redpos[i][0]]);
            }
          }

          this.xChessPos = [];

          for (let i = 0; i < this.xPlusPot.length; i++) {
            this.xChessPos.push(this.xPlusPot[i]);
          }

          for (let i = 0; i < this.xPlusPot.length; i++) {
            this.xChessPos.push(this.xPoints.length - this.xPlusPot[i] - 1);
          }
        }

        start() {
          this.grap = this.getComponent(Graphics);

          if (!this.grap) {
            console.warn("please add graphic to the node");
            return;
          }

          this.grap.color = this.color;
          this.ut = this.getComponent(UITransform);
          this.draw();
          this.initPos();
          console.log("start");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).loadPrefabs("cell/Chess", prefab => {
            this.allpos.forEach((img, key) => {
              let n = instantiate(prefab);
              let rtc = n.getComponentInChildren(RichTextComponent);
              rtc.string = "<img src='" + img + "'/>";
              rtc.lineHeight = 100;
              rtc.fontSize = 100;
              n.setParent(this.node);
              n.setPosition(this.xPoints[key]); //let scale=Math.sqrt((this.cells.width/90));
              //n.setScale(new Vec3(scale,scale,scale));
            }); //let words:string="<color=#00ff00>楚河界汉</color>";

            let words = "楚河界汉";

            for (let i = 0; i < this.xWords.length; i++) {
              let n = instantiate(prefab);
              let rtc = n.getComponentInChildren(RichTextComponent);
              rtc.string = words[i];
              n.setParent(this.node);
              n.setPosition(this.xPoints[this.xWords[i]].add(new Vec3(this.cells.width / 2, this.cells.height / 2, 0)));

              if (i > 1) {
                let quat = math.Quat.fromEuler(n.rotation, 0, 0, 180);
                n.setRotation(quat);
              }
            }

            let ords = "九八七六五四三二一987654321";

            for (let i = 0; i < ords.length; i++) {
              let n = instantiate(prefab);
              let rtc = n.getComponentInChildren(RichTextComponent);
              rtc.string = ords[i];
              rtc.fontSize = 50;
              n.setParent(this.node);
              let idx = i;

              if (i > 8) {
                idx = this.xPoints.length - i - 1;
                let pos = new Vec3(this.xPoints[idx].x, this.rect[2].y, 0);
                n.setPosition(pos);
              } else {
                let pos = new Vec3(this.xPoints[idx].x, this.rect[0].y, 0);
                n.setPosition(pos);
              }
            }
          });
        }

        draw() {
          let border = 15,
              edge = 20;
          this.border = border;
          this.edge = edge;
          let s = this.ut.contentSize;
          this.grap.strokeColor = Color.RED; //bigbox

          let pts = [];
          pts.push(new Vec3(-s.width / 2 + border, -s.height / 2 + border, 0));
          pts.push(new Vec3(-s.width / 2 + border, s.height / 2 - border, 0));
          pts.push(new Vec3(s.width / 2 - border, s.height / 2 - border, 0));
          pts.push(new Vec3(s.width / 2 - border, -s.height / 2 + border, 0));
          this.rect.push(...pts); //points

          let row = 9,
              col = 8;
          let width = (s.width - border * 2 - edge * 2) / (col + 1);
          let height = (s.height - border * 2 - edge * 2) / (row + 1);
          this.cells = new Size(width, height);
          this.grap.strokeColor = Color.RED;

          for (let i = 0; i < row + 1; i++) {
            for (let j = 0; j < col + 1; j++) {
              this.xPoints.push(new Vec3(border + edge + width * (j + 0.5) - s.width / 2, border + edge + height * (i + 0.5) - s.height / 2, 0));
            }
          }

          this.grap.stroke(); //this.grap.strokeColor=Color.BLUE;

          this.grap.moveTo(pts[pts.length - 1].x, pts[pts.length - 1].y);

          for (let i = 0; i < pts.length; i++) {
            this.grap.lineTo(pts[i].x, pts[i].y);
          }

          for (let i = 0; i < col + 1; i++) {
            let leftx = pts[0].x + i * width + width / 2 + edge;
            let lefty = pts[0].y + height / 2 + edge;

            if (i > 0 && i < col) {
              this.grap.moveTo(leftx, lefty);
              this.grap.lineTo(leftx, lefty + height * 4);
              this.grap.moveTo(leftx, lefty + height * 5);
              this.grap.lineTo(leftx, lefty + height * 9);
            } else {
              this.grap.moveTo(leftx, lefty);
              this.grap.lineTo(leftx, lefty + height * 9);
            }
          }

          for (let i = 0; i < row + 1; i++) {
            let leftx = pts[0].x + width / 2 + edge;
            let lefty = pts[0].y + height / 2 + edge;
            this.grap.moveTo(leftx, lefty + height * i);
            this.grap.lineTo(leftx + s.width - border * 2 - width - edge * 2, lefty + height * i);
          }

          this.grap.moveTo(this.xPoints[this.XRoad[0]].x, this.xPoints[this.XRoad[0]].y);

          for (let i = 1; i < this.XRoad.length; i++) {
            let idx = this.XRoad[i];
            this.grap.lineTo(this.xPoints[idx].x, this.xPoints[idx].y);
          }

          this.grap.moveTo(this.xPoints[this.xPoints.length - this.XRoad[0] - 1].x, this.xPoints[this.xPoints.length - this.XRoad[0] - 1].y);

          for (let i = 1; i < this.XRoad.length; i++) {
            let idx = this.xPoints.length - this.XRoad[i] - 1;
            this.grap.lineTo(this.xPoints[idx].x, this.xPoints[idx].y);
          }

          this.drawCorss(0, 0);

          for (let i = 0; i < this.xPlusPot.length; i++) {
            let p = this.xPoints[this.xPlusPot[i]];
            this.drawCorss(p.x, p.y);
            let p1 = this.xPoints[this.xPoints.length - this.xPlusPot[i] - 1];
            this.drawCorss(p1.x, p1.y);
          }

          this.grap.stroke();
          this.unicodeTest();
        }

        unicodeTest() {
          let v = this.hex2Num('$1FA60');
          console.log(v); //this.label.string=String.fromCodePoint(v);
          // this.label.string=String.fromCharCode(0x1FA60)+String.fromCodePoint(129632);        
          // this.label.string='0x1FA60';
          // this.label.string='\u{1FA60}';
          // this.label.string=String.fromCodePoint(...[0x1FA60]);
          //TODO:query and display javascript version
        }

        parseHex(str, i) {
          // escape()	使用转义序列替换某些字符来对字符串进行编码
          // unescape()	对使用 escape() 编码的字符串进行解码
          // encodeURI()	通过转义某些字符对 URI 进行编码
          // decodeURI()	对使用 encodeURI() 方法编码的字符串进行解码
          // encodeURIComponent()	通过某些转义字符对 URI 的组件进行编码
          // deencodeURIComponent()	对使用 encodeURIComponent() 方法编码的字符串进行解码
          // ES6新增了几个专门处理4字节码点的函数。
          // String.fromCodePoint()：从Unicode码点返回对应字符
          // String.prototype.codePointAt()：从字符返回对应的码点
          // String.prototype.at()：返回字符串给定位置的字符
          let ret = 0;

          if (i < str.length) {
            let ch = str[i];

            if (ch == 'A' || ch == 'a') {
              ret = 10;
            } else if (ch == 'B' || ch == 'b') {
              ret = 11;
            } else if (ch == 'C' || ch == 'c') {
              ret = 12;
            } else if (ch == 'D' || ch == 'd') {
              ret = 13;
            } else if (ch == 'E' || ch == 'e') {
              ret = 14;
            } else if (ch == 'F' || ch == 'f') {
              ret = 15;
            } else {
              ret = Number.parseInt(ch);
            }
          } else {
            ret = 0;
          }

          return ret;
        }

        hex2Num(str) {
          let ret = 0,
              hex = 1;

          for (let i = 0; i < str.length - 1; i++) {
            let val = this.parseHex(str, str.length - 1 - i);
            ret += val * hex; //console.log(val+":"+hex+":"+ret);

            hex *= 16;
          }

          return ret;
        }

        drawCorss(x, y) {
          let p = new Vec3(x, y, 0);
          let plslen = 13,
              spare = 7;

          if (p.x - spare > this.xPoints[0].x && p.x - spare < this.xPoints[this.xPoints.length - 1].x && p.y - spare > this.xPoints[0].y && p.y - spare < this.xPoints[this.xPoints.length - 1].y) {
            this.grap.moveTo(p.x - spare - plslen, p.y - spare);
            this.grap.lineTo(p.x - spare, p.y - spare);
            this.grap.lineTo(p.x - spare, p.y - spare - plslen);
          }

          if (p.x - spare > this.xPoints[0].x && p.x - spare < this.xPoints[this.xPoints.length - 1].x && p.y + spare > this.xPoints[0].y && p.y + spare < this.xPoints[this.xPoints.length - 1].y) {
            this.grap.moveTo(p.x - spare - plslen, p.y + spare);
            this.grap.lineTo(p.x - spare, p.y + spare);
            this.grap.lineTo(p.x - spare, p.y + spare + plslen);
          }

          if (p.x + spare > this.xPoints[0].x && p.y + spare > this.xPoints[0].y && p.x + spare < this.xPoints[this.xPoints.length - 1].x && p.y + spare < this.xPoints[this.xPoints.length - 1].y) {
            this.grap.moveTo(p.x + spare + plslen, p.y + spare);
            this.grap.lineTo(p.x + spare, p.y + spare);
            this.grap.lineTo(p.x + spare, p.y + spare + plslen);
          }

          if (p.x + spare > this.xPoints[0].x && p.x + spare < this.xPoints[this.xPoints.length - 1].x && p.y - spare > this.xPoints[0].y && p.y - spare < this.xPoints[this.xPoints.length - 1].y) {
            this.grap.moveTo(p.x + spare + plslen, p.y - spare);
            this.grap.lineTo(p.x + spare, p.y - spare);
            this.grap.lineTo(p.x + spare, p.y - spare - plslen);
          }
        }

        update(deltaTime) {//this.draw();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c66a931ebc9b6f4ba30307868ca395aa706a4bd.js.map