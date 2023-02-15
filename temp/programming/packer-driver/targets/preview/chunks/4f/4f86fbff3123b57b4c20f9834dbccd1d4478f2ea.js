System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PuBu, Piece, _crd, ccclass, property;

  _export({
    PuBu: void 0,
    Piece: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "313cexEQklA5I5mwHcaTLw/", "Piece", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PuBu", PuBu = class PuBu extends Component {
        constructor() {
          super(...arguments);
          this.type = 0;
          this.kill = -1;
          this.buidx = 0;
          this.pubus = "炮八平五";
        }

      });

      _export("Piece", Piece = class Piece extends Component {
        constructor() {
          super(...arguments);
          this.curridx = 0;
          this.nextidxs = [];
          this.PiecePuBus = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f86fbff3123b57b4c20f9834dbccd1d4478f2ea.js.map