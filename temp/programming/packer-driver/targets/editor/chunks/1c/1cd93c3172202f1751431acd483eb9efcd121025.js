System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Graphics, Vec2, UITransform, view, Polygon, Pot, _dec, _class, _crd, ccclass, property, Head;

  function _reportPossibleCrUseOfPolygon(extras) {
    _reporterNs.report("Polygon", "./Polygon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPot(extras) {
    _reporterNs.report("Pot", "./Polygon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Graphics = _cc.Graphics;
      Vec2 = _cc.Vec2;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }, function (_unresolved_2) {
      Polygon = _unresolved_2.Polygon;
      Pot = _unresolved_2.Pot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eed7bwX/mRJro6zIJHIf35y", "Head", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Head", Head = (_dec = ccclass('Head'), _dec(_class = class Head extends Component {
        constructor(...args) {
          super(...args);
          this.polygons = [];
        }

        start() {
          let pathjson = [["m 62.4,27.3 14.7,7.5 21,4.5 h 8.1 v 42.3 l -0.9,19.5 -1.8,2.7 -14.1,5.4 -14.1,15.9 v 23.4 l 10.2,13.8 H 66.3 l -16.8,-3.6 -15.3,-3.3 -12.6,-17.1 -6.9,-26.1 3,-23.7 6,-15.6 L 32.1,51.3 44.7,39", "path24"]]; //    [
          //         ["m 42,268.5 12.6,-14.7 0.9,-23.4 0.3,-22.5 -2.7,-15 -5.1,-19.2 -6.6,-11.1 23.4,5.4 28.5,1.8 12.3,6 -1.2,21.3 -0.3,53.4 -0.9,37.5 -18.6,-3.6 -21.9,-6 -15.9,-7.5 z","path22"]
          //         ,["m 62.4,27.3 14.7,7.5 21,4.5 h 8.1 v 42.3 l -0.9,19.5 -1.8,2.7 -14.1,5.4 -14.1,15.9 v 23.4 l 10.2,13.8 H 66.3 l -16.8,-3.6 -15.3,-3.3 -12.6,-17.1 -6.9,-26.1 3,-23.7 6,-15.6 L 32.1,51.3 44.7,39 Z","path24"]
          //         ,["m 67.5,22.8 19.2,-7.2 30.6,-2.4 16.2,0.9 21,2.1 18.9,3.6 2.4,1.5 -15.6,7.2 L 141,32.1 118.5,33 98.7,31.5 H 87.6 L 74.1,26.7 Z","path26"]
          //         ,["m 114.6,38.1 -2.1,19.5 0.6,26.1 v 14.7 l -1.2,3.6 12.3,3.3 11.4,6.6 3,7.8 h 21.3 l 7.5,-2.1 3.3,-13.2 6,-13.5 2.4,-3.3 -7.2,-19.5 -8.1,-21.3 -4.5,-12.3 -12.6,1.8 H 132 Z","path28"]
          //         ,["m 181.8,25.2 -12.3,6.6 -4.5,1.5 -1.5,1.2 7.5,21.3 10.2,26.1 1.8,3.3 8.1,-6.3 13.5,-5.4 12,-2.1 -1.5,-9.9 -5.7,-13.5 -3.3,-6.3 -8.1,-7.2 z","path30"]
          //         ,["m 103.5,111 -15.6,7.2 -6.9,15.3 2.4,15.6 7.2,11.1 15,9.9 16.5,3 19.8,-6.6 7.8,-7.2 -3,-8.1 -6.9,-4.5 -2.7,-4.8 -1.2,-11.4 -3.6,-10.2 -9,-7.8 -8.1,-4.5 h -9 z","path32"]
          //         ,["m 110.4,174.9 1.8,35.7 -1.5,57.9 -0.6,16.5 v 2.7 l -0.9,-3 18.6,3.9 26.4,2.7 8.1,0.3 -0.6,-12.6 4.5,-16.2 6,-15.9 4.5,-9.6 20.7,-5.4 9.9,-1.8 2.4,-1.2 -14.1,-0.6 -17.1,-2.7 -12,-2.1 -14.7,-4.8 -10.5,-5.4 -6.3,-5.1 -2.4,-6 -1.2,-12.6 -1.5,-13.2 v -1.2 z","path34"]
          //         ,["m 211.5,78.3 -14.4,3.3 -11.7,6.9 -4.8,7.8 -5.4,15.9 -2.1,6.6 3.3,3.9 9.6,5.1 5.7,3.6 15.9,-3.6 8.1,-5.7 3.9,-3.3 -0.3,-8.1 1.8,-6.9 0.3,-10.5 0.3,-10.2 -3.9,-7.2 z","path36"]
          //         ,["m 141.9,124.5 0.9,12.3 0.3,3.3 7.8,6.3 4.2,17.7 -10.8,6.3 -9.6,5.4 0.3,10.8 2.7,17.4 5.1,4.5 12.9,5.1 11.7,4.5 16.2,3.3 24.9,2.7 9.6,-1.8 5.1,-7.8 -3,-6.6 -0.6,-8.1 -0.3,-3 -17.7,-1.2 -16.5,-3.9 -13.2,-3.6 -4.5,-3.6 6.3,-14.1 7.2,-9 h 5.4 l 12,4.5 10.2,1.8 12.3,1.8 3.3,0.3 2.4,-3.6 -0.6,-3 4.5,-5.1 6.3,-0.6 1.5,-5.1 -1.2,-3.3 -0.6,-5.1 -5.1,-7.8 -6.3,-10.8 -3,-3.6 -9.3,6.3 -6.3,4.5 -8.7,2.4 -9.9,-0.6 -10.8,-5.4 -8.4,-5.4 h -6.3 l -12.6,0.9 z","path38"]
          //         ,["m 184.2,167.7 -7.2,12.3 -1.5,2.1 15.3,5.1 14.7,1.8 16.2,2.4 3.6,-4.2 -2.1,-3.6 4.5,-7.8 -2.1,-1.2 -22.8,-3.3 z","path40"]
          //         ,["m 123.9,125.4 -7.8,-8.7 -9.6,-0.9 -8.1,3.9 -4.2,5.4 -0.3,13.5 3.3,13.2 8.4,10.2 7.2,8.1 6,-1.5 2.7,-5.7 -1.2,-0.9 2.7,7.8","path42"]
          //         ,["m 146.7,139.8 20.7,-1.5 7.5,-3 2.7,-3.3","path44"]
          //         ,["m 119.1,127.8 -6,-6 -7.2,-0.9 -3.9,3.6 -2.7,8.7 -0.9,6 -0.3,3.9","path46"]
          //         ,["m 114.3,125.1 -5.4,7.2 -6.9,3.6 -1.8,10.2 3.6,5.1 7.5,1.8 2.4,0.9","path48"]
          //         ,["m 119.1,127.8 v 0 l -1.8,7.2 -3.9,0.3 -4.5,6 -1.8,3.3 0.9,4.8","path50"]
          //         ,["m 129,134.7 -8.4,1.8 -6,5.7 2.1,6.3 3.9,6 h 3.9","path52"]
          //         ,["m 215.7,100.8 -9.6,-1.2 -12.9,2.4 -6.6,7.2 -0.3,7.2 v 6.6 l 5.1,4.5","path54"]
          //         ,["m 190.2,119.1 7.2,-6.9 5.4,-2.1 2.1,-1.8 1.8,-0.9 5.7,-0.6 3.3,-6","path56"]
          //         ,["m 206.7,107.4 2.4,4.8 -4.5,3.3 -6.9,3.3 -2.1,1.5 7.2,1.5 4.5,-3.3 0.9,-5.7 0.3,8.1","path58"]
          //         ,["m 202.8,121.8 -0.9,-3.9","path60"]
          //         ,["m 212.4,106.8 6.9,0.3","path62"]];

          this.parsePolygons(pathjson);
          this.node.on(Node.EventType.TOUCH_START, touch => {
            let pt = this.getTouchPoint(this.node, touch);

            for (let i = 0; i < this.polygons.length; i++) {
              if (this.polygons[i].hitInPolygon(pt)) {
                console.log(this.polygons[i].hint);
              }
            }
          });
        }

        getTouchPoint(node, touch) {
          const self = this;
          let touchLoc = touch.getLocation();
          let pos = node.getPosition();
          let trans = self.node.getComponent(UITransform);
          let size = trans.contentSize;
          let pt = new Vec2(touchLoc.x / view.getScaleX() - size.width / 2 - pos.x, touchLoc.y / view.getScaleY() - size.height / 2 - pos.y);
          return pt;
        }

        parsePolygons(s) {
          let last = new Vec2(0, 0);

          for (let i = 0; i < s.length; i++) {
            let pts = s[i][0].split(' ');
            let polygon = new (_crd && Polygon === void 0 ? (_reportPossibleCrUseOfPolygon({
              error: Error()
            }), Polygon) : Polygon)();
            let cmds = "MHVLmhvl";
            let p = null;
            let j = 0;

            while (j < pts.length) {
              if (cmds.indexOf(pts[j]) > 0) {
                p = new (_crd && Pot === void 0 ? (_reportPossibleCrUseOfPot({
                  error: Error()
                }), Pot) : Pot)();
                p.act = pts[j];
                j = j + 1;
              }

              let xy = pts[j].split(',');

              if (p.act == "M") {
                let v = new Vec2(Number.parseFloat(xy[0]), Number.parseFloat(xy[1]));
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "H") {
                let v = new Vec2(Number.parseFloat(xy[0]), last.y);
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "V") {
                let v = new Vec2(Number.parseFloat(xy[0]));
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "L") {
                let v = new Vec2(Number.parseFloat(xy[0]), Number.parseFloat(xy[1]));
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "Z") {
                p.pt = null;
              } else if (p.act == "m") {
                let v = new Vec2(last.x + Number.parseFloat(xy[0]), last.y + Number.parseFloat(xy[1])); //let v=new Vec2(Number.parseFloat(xy[0]),Number.parseFloat(xy[1]));

                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "h") {
                let v = new Vec2(last.x + Number.parseFloat(xy[0]), last.y);
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "v") {
                let v = new Vec2(last.x, last.y + Number.parseFloat(xy[0]));
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "l") {
                let v = new Vec2(last.x + Number.parseFloat(xy[0]), last.y + Number.parseFloat(xy[0]));
                last = v;
                polygon.poly.push(v);
                p.pt = v;
                j = j + 1;
              } else if (p.act == "z") {
                p.pt = null;
              }

              polygon.Potly.push(p);
            }

            polygon.pname = s[i][1];
            polygon.hint = s[i][1];
            this.polygons.push(polygon);
          }

          this.draw();
        }

        draw() {
          let g = this.getComponent(Graphics);
          g.moveTo(this.polygons[0].poly[0].x, this.polygons[0].poly[0].x);

          for (let i = 1; i < this.polygons[0].poly.length; i++) {
            g.lineTo(this.polygons[0].poly[i].x, this.polygons[0].poly[i].y);
          }

          g.close();
          g.stroke();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1cd93c3172202f1751431acd483eb9efcd121025.js.map