System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec2, Intersection2D, Pot, _dec, _class, _crd, ccclass, property, Polygon;

  _export("Pot", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
      Intersection2D = _cc.Intersection2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61a853VsQdCjZlyQK/UCi4F", "Polygon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pot", Pot = class Pot {
        constructor() {
          this.act = "";
          this.pt = new Vec2();
        }

      });

      _export("Polygon", Polygon = (_dec = ccclass('Polygon'), _dec(_class = class Polygon extends Component {
        constructor() {
          super(...arguments);
          this.poly = [];
          this.Potly = [];
          this.pname = "";
          this.hint = "";
        }

        start() {}

        update(deltaTime) {}

        hitInPolygon(pt) {
          if (Intersection2D.pointInPolygon(pt, this.poly)) {
            return true;
          }

          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1fc841522332f627b014822918abfd1081caca4.js.map