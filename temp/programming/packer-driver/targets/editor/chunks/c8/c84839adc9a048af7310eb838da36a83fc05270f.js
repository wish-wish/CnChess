System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Graphics, Vec2, Intersection2D, Vec3, Size, view, screen, UITransform, PointInRect, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, Hrdaya;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPointInRect(extras) {
    _reporterNs.report("PointInRect", "./PointInRect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Vec2 = _cc.Vec2;
      Intersection2D = _cc.Intersection2D;
      Vec3 = _cc.Vec3;
      Size = _cc.Size;
      view = _cc.view;
      screen = _cc.screen;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      PointInRect = _unresolved_2.PointInRect;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b470lv/7lCX4bm2APLB6gh", "Hrdaya", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hrdaya", Hrdaya = (_dec = ccclass('Hrdaya'), _dec(_class = (_class2 = class Hrdaya extends Component {
        constructor(...args) {
          super(...args);
          this.arr = [];

          _initializerDefineProperty(this, "fansec", _descriptor, this);

          _initializerDefineProperty(this, "drawbox", _descriptor2, this);

          this.boxcap = false;
          this.idx = 0;
          this.idx_fan = 0;
          this.xscale = 3;
          this.yscale = 17 * 1.1;
          this.interval = 0;
          this.drawtimes = 0;
          this.iscb = false;
          this.g = null;
          this.pts = [];
          this.minx = 1;
          this.miny = 1;
          this.maxx = 1;
          this.maxy = 1;

          _initializerDefineProperty(this, "mode", _descriptor3, this);

          this.csize = new Size(100, 100);

          _initializerDefineProperty(this, "hitmode", _descriptor4, this);

          _initializerDefineProperty(this, "width", _descriptor5, this);

          _initializerDefineProperty(this, "height", _descriptor6, this);

          _initializerDefineProperty(this, "isAnimDraw", _descriptor7, this);

          _initializerDefineProperty(this, "maxtimes", _descriptor8, this);

          _initializerDefineProperty(this, "intval", _descriptor9, this);

          _initializerDefineProperty(this, "speeds", _descriptor10, this);
        }

        onLoad() {
          let self = this;
          let g = self.node.getComponent(Graphics);
          self.g = g;
        }

        start() {
          const self = this;

          if (self.mode == 0) {
            self.Draw();
            self.reDraw((times, act) => {});
          } else if (self.mode == 1) {
            self.RoundRect(() => {});
          }
        }

        Circle(cb) {
          let self = this;
          let g = self.g;

          if (g) {
            g.clear();
            g.circle(0, 0, 60);
            g.stroke();
            g.fill();
            if (cb) cb("end");
          }
        }

        Ellipse(cb) {
          let self = this;
          let g = self.g;

          if (g) {
            g.clear();
            g.ellipse(0, 0, 100, 70);
            g.stroke();
            g.fill();
            if (cb) cb("end");
          }
        }

        Rect(cb) {
          let self = this;
          let g = self.g;

          if (g) {
            g.clear();
            g.rect(-self.csize.width / 2, -self.csize.height / 2, self.csize.width, self.csize.height);
            g.stroke();
            g.fill();
            if (cb) cb("end");
          }
        }

        RoundRect(cb) {
          let self = this;
          let g = self.g;

          if (g) {
            g.clear();
            g.roundRect(-self.csize.width / 2, -self.csize.height / 2, self.csize.width, self.csize.height, self.csize.width * 0.1);
            g.stroke();
            g.fill();
            if (cb) cb("end");
          }
        }

        Draw() {
          let self = this;
          let g = self.g;

          if (g) {
            self.reCurve();
            self.idx = 0;
            g.clear();
            g.moveTo(self.arr[0][0], self.arr[0][1]);

            for (let i = 0; i < self.arr.length + 1; i++) {
              self.idx = self.Line(g, self.idx);
            }
          }
        }

        reCurve() {
          let self = this;

          if (self.mode == 0) {
            self.arr = self.Hrdaya(self.fansec, self.fansec, self.fansec);
            self.minx = self.maxx = this.arr[0][0];
            self.miny = self.maxy = this.arr[0][1];
            self.pts = [];

            for (let i = 0; i < self.arr.length + 1; i++) {
              if (i >= self.arr.length) continue;

              if (self.minx > self.arr[i][0]) {
                self.minx = self.arr[i][0];
              }

              if (self.maxx < self.arr[i][0]) {
                self.maxx = self.arr[i][0];
              }

              if (self.miny > self.arr[i][1]) {
                self.miny = self.arr[i][1];
              }

              if (self.maxy < self.arr[i][1]) {
                self.maxy = self.arr[i][1];
              }
            }

            self.width = self.maxx - self.minx;
            self.height = self.maxy - self.miny;
            let rect = self.node.getComponent(UITransform);
            let scalew = self.width / rect.width;
            let scaleh = self.height / rect.height;

            for (let i = 0; i < self.arr.length; i++) {
              self.arr[i][0] /= scalew;
              self.arr[i][1] /= scaleh;
            }

            self.minx /= scalew;
            self.miny /= scaleh;
            self.maxx /= scalew;
            self.maxy /= scaleh;
            self.width = self.maxx - self.minx;
            self.height = self.maxy - self.miny; //console.log(self.width+":"+self.height);

            if (self.drawbox) self.drawOutline(1);
          } else if (self.mode == 1) {
            let g_fan = self.node.getComponentInChildren(Graphics);
            g_fan == null ? void 0 : g_fan.clear();
          }
        }

        stopAnimDraw() {
          const self = this;
          self.isAnimDraw = false;
          clearInterval(self.interval);
          self.interval = 0;
        }

        drawFragile(cb) {
          let self = this;
          if (self.arr.length < 1) return;
          let g = self.g;
          let node = self.node.getChildByName("Node");

          if (self.isAnimDraw) {
            let g_fan = node.getComponent(Graphics);
            if (!g_fan) g_fan = node.addComponent(Graphics);
            g_fan.strokeColor = g.strokeColor;
            g_fan.lineWidth = g.lineWidth;
            self.iscb = false;
            self.idx = 0;
            self.idx_fan = 0;
            self.drawtimes = 0;

            if (cb) {
              cb(self.idx, "clear");
            }

            clearInterval(self.interval);
            self.interval = setInterval(() => {
              if (self.idx_fan == 0) {
                var _g_fan, _g_fan2;

                //g!.clear();
                g.moveTo(self.arr[0][0], self.arr[0][1]);
                (_g_fan = g_fan) == null ? void 0 : _g_fan.clear();
                (_g_fan2 = g_fan) == null ? void 0 : _g_fan2.moveTo(self.arr[0][0], self.arr[0][1]);
                if (self.drawtimes == 2 && self.drawbox) self.drawOutline(1);
              }

              self.idx = self.Line(g, self.idx);
              self.idx_fan = self.LineFan(g_fan, self.idx_fan);

              if (self.drawtimes >= self.maxtimes) {
                clearInterval(self.interval);
                self.interval = 0;
                self.isAnimDraw = false;

                if (cb) {
                  cb(self.drawtimes, "end");
                }
              }

              if (self.drawtimes >= self.maxtimes - 1) {
                if (cb && self.idx > self.fansec / 2 && !self.iscb) {
                  self.iscb = true;
                  cb(self.drawtimes, "anim");
                }
              }

              if (cb) {
                cb(self.idx, "idx");
              }
            }, self.intval);
          } else {
            self.idx = 0;
            g.clear();
            g.moveTo(self.arr[0][0], self.arr[0][1]);

            for (let i = 0; i < self.arr.length + 1; i++) {
              self.idx = self.Line(g, self.idx);
            }

            if (cb) cb(1, "end");
          }
        }

        reDraw(cb) {
          const self = this;

          if (self.mode == 0) {
            self.drawFragile(cb);
          } else if (self.mode == 1) {
            self.RoundRect(cb);
          }
        }

        hitHrdaya(pt) {
          //TODO:横竖屏切换时的判断
          const self = this;
          let n = self.node;
          self.pts = [];
          let offset = new Vec2(0, 0);
          let scale = self.node.getScale();

          for (let i = 0; i < self.arr.length; i++) {
            self.pts.push(new Vec2(self.arr[i][0] * scale.x + offset.x, self.arr[i][1] * scale.y + offset.y));
          }

          let isin = Intersection2D.pointInPolygon(pt, self.pts);
          return isin;
        }

        ptInRect(pt, rect) {
          const self = this;

          if (pt.x > rect[0].x && pt.x < rect[1].x && pt.y > rect[0].y && pt.y < rect[1].y) {
            return true;
          }

          return false;
        }

        hitRect(pt) {
          const self = this;
          let n = self.node;
          let rect = [];
          let offset = new Vec2(n.position.x, n.position.y);
          let vs = view.getCanvasSize();
          rect.push(new Vec2(-self.width / 2 + offset.x + vs.width / 2, -self.height / 2 + offset.y + vs.height / 2));
          rect.push(new Vec2(self.width / 2 + offset.x + vs.width / 2, self.height / 2 + offset.y + vs.height / 2));
          let isin = self.ptInRect(pt, rect);
          return isin;
        }

        inHrdaya1(pt) {
          const self = this;

          if (self.hitmode == 0) {
            let pta = [pt.x, pt.y];
            return self.hitRect2(pta);
          } else if (self.hitmode == 1) {
            let hit = self.hitHrdaya(pt);
            return hit;
          }
        }

        hitRect1(pt) {
          const self = this;
          let n = self.node;
          let rect = [];
          let offset = new Vec2(n.position.x, n.position.y);
          let scale = new Vec3(n.scale.x, n.scale.y, n.scale.z);
          let point = [];
          screen.windowSize;
          let cs = view.getCanvasSize();
          let ds = view.getDesignResolutionSize();
          point = [pt[0] / cs.width * ds.width, pt[1] / cs.height * ds.height];
          rect.push([self.minx * scale.x + offset.x + ds.width / 2, self.miny * scale.y + offset.y + ds.height / 2]);
          rect.push([self.maxx * scale.x + offset.x + ds.width / 2, self.miny * scale.y + offset.y + ds.height / 2]);
          rect.push([self.maxx * scale.x + offset.x + ds.width / 2, self.maxy * scale.y + offset.y + ds.height / 2]);
          rect.push([self.minx * scale.x + offset.x + ds.width / 2, self.maxy * scale.y + offset.y + ds.height / 2]);
          let isin = (_crd && PointInRect === void 0 ? (_reportPossibleCrUseOfPointInRect({
            error: Error()
          }), PointInRect) : PointInRect).pointInPolygonNested(point, rect);
          return isin;
        }

        hitRect2(pt) {
          const self = this;

          if (!self.node.active) {
            return false;
          }

          let n = self.node;
          let rect = [];
          let offset = new Vec2(n.position.x, n.position.y);
          let scale = new Vec3(n.scale.x * 1.13, n.scale.y * 1.13, n.scale.z * 1.13);
          let cs = view.getCanvasSize();
          let ds = view.getDesignResolutionSize();
          let fs = view.getFrameSize();
          let x = pt[0] / cs.width * ds.width;
          let y = pt[1] / cs.height * ds.height;
          let fh = ds.width / fs.width * fs.height;
          let scaleh = fh / ds.height;
          let pt1 = [x - ds.width / 2, (y - ds.height / 2) * scaleh];
          rect.push([self.minx * scale.x + offset.x, self.miny * scale.y + offset.y]);
          rect.push([self.maxx * scale.x + offset.x, self.miny * scale.y + offset.y]);
          rect.push([self.maxx * scale.x + offset.x, self.maxy * scale.y + offset.y]);
          rect.push([self.minx * scale.x + offset.x, self.maxy * scale.y + offset.y]);
          let isin = (_crd && PointInRect === void 0 ? (_reportPossibleCrUseOfPointInRect({
            error: Error()
          }), PointInRect) : PointInRect).pointInPolygonNested(pt1, rect);
          return isin;
        }

        drawOutline(scale = 1) {
          var _g_box;

          const self = this;
          let rect = [];
          let offset = new Vec2(0, 0);
          rect.push(new Vec2(self.minx * scale + offset.x, self.miny * scale + offset.y));
          rect.push(new Vec2(self.maxx * scale + offset.x, self.miny * scale + offset.y));
          rect.push(new Vec2(self.maxx * scale + offset.x, self.maxy * scale + offset.y));
          rect.push(new Vec2(self.minx * scale + offset.x, self.maxy * scale + offset.y));
          let box = self.node.getChildByName("box"); // if(!box)
          // {
          //     box=new Node();
          //     box.name="box"
          //     box.setParent(self.node);
          // }

          let g_box = box.getComponent(Graphics);

          if (!g_box) {
            g_box = box.addComponent(Graphics);
          }

          (_g_box = g_box) == null ? void 0 : _g_box.clear();
          g_box.strokeColor = self.g.strokeColor;
          g_box.moveTo(rect[0].x, rect[0].y);
          g_box.lineTo(rect[1].x, rect[1].y);
          g_box.lineTo(rect[2].x, rect[2].y);
          g_box.lineTo(rect[3].x, rect[3].y);
          g_box.lineTo(rect[0].x, rect[0].y);
          g_box.stroke();
        }

        inHrdaya(pt) {
          const self = this;

          if (self.mode == 0) {
            return self.hitRect(pt);
          } else if (self.mode == 1) {//TODO:
          }
        }

        Line(g, idx) {
          const self = this;

          if (idx < self.arr.length) {
            g.lineTo(self.arr[idx][0], self.arr[idx][1]);
            g.stroke();
            idx += 1;
          } else if (idx <= self.arr.length + 10) {
            if (idx == self.arr.length) {
              g.close();
              g.stroke();
              g.fill();
            }

            idx += 1;
          } else if (idx > self.arr.length + 10) {
            self.drawtimes++;
            g.moveTo(self.arr[0][0], self.arr[0][1]);
            idx = 0;
          }

          return idx;
        }

        LineFan(g, idx) {
          const self = this;

          if (idx < self.arr.length) {
            g.lineTo(self.arr[idx][0], self.arr[idx][1]);
            g.stroke();
            g.moveTo(self.arr[0][0], self.arr[0][1]);
            g.lineTo(self.arr[idx][0], self.arr[idx][1]);
            g.stroke();
            idx += 1;
          } else if (idx <= self.arr.length + 10) {
            if (idx == self.arr.length) {
              g.clear();
            }

            idx += 1;
          } else if (idx > self.arr.length + 10) {
            self.drawtimes++;
            idx = 0;
          }

          return idx;
        }

        Hrdaya(len, pos, count) {
          const self = this;
          let num = Math.sqrt(len);
          let x = pos % num;
          let y = Math.trunc(pos / num);
          let arc = 0;
          let big = 16;

          if (count >= big) {
            arc = 2 * Math.PI / (count + 4 + count % 2);
          } else {
            arc = 2 * Math.PI / (count + 4);
          }

          let radius = Math.min(count / Math.PI / 4, 1.4);
          let start = 0;
          let toset = 0;
          let half = Math.trunc(Math.ceil(count / 2));
          let arr = [];

          for (let i = 0; i < count; i++) {
            if (count % 2 == 0) {
              if (i == 1 || i == half || i == half + 1) toset += 1;
            } else {
              if (count >= big) {
                if (i == 0) {
                  toset += 1;
                } else if (i == half + 1) {
                  toset += 1.5;
                } else if (i == half + 2) {
                  toset += 0.5;
                }
              } else {
                if (i == 0) {
                  toset += 1;
                } else if (i == half + 1) {
                  toset += 2.0;
                } else if (i == half + 2) {
                  toset += 0.5;
                }
              }
            }

            let xp = radius * 16 * Math.pow(Math.sin(start + arc * toset), 3);
            let yp = radius * (13 * Math.cos(start + arc * toset) - 5 * Math.cos(start + 2 * arc * toset) - 2 * Math.cos(start + 3 * arc * toset) - Math.cos(start + 4 * arc * toset));
            let offsety = 1.7;
            arr.push([xp * 1.18 * self.xscale, (yp + offsety) * 0.18 * self.yscale]);

            if (count % 2 == 0) {
              toset += 1.0;
            } else {
              toset += 1.0;
            }
          }

          return arr;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fansec", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "drawbox", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hitmode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "width", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "height", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isAnimDraw", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maxtimes", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "intval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "speeds", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [0.6, 6];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c84839adc9a048af7310eb838da36a83fc05270f.js.map