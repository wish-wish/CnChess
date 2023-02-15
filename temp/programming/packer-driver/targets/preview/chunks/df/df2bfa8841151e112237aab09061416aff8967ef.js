System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Intersection2D, _dec, _class, _crd, ccclass, property, Polygon;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Intersection2D = _cc.Intersection2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61a853VsQdCjZlyQK/UCi4F", "Polygon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Polygon", Polygon = (_dec = ccclass('Polygon'), _dec(_class = class Polygon extends Component {
        constructor() {
          super(...arguments);
          this.poly = [];
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
//# sourceMappingURL=df2bfa8841151e112237aab09061416aff8967ef.js.map