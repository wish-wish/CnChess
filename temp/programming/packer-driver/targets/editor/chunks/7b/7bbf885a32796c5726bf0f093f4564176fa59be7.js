System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Piece, _dec, _class, _crd, ccclass, property, Shi;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "./Piece", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Piece = _unresolved_2.Piece;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b57c8e4rhCHp3d/l79auFP", "Shi", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Shi", Shi = (_dec = ccclass('Shi'), _dec(_class = class Shi extends (_crd && Piece === void 0 ? (_reportPossibleCrUseOfPiece({
        error: Error()
      }), Piece) : Piece) {
        start() {}

        update(deltaTime) {}

        getIdx(str) {
          //...
          return this.curridx;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bbf885a32796c5726bf0f093f4564176fa59be7.js.map