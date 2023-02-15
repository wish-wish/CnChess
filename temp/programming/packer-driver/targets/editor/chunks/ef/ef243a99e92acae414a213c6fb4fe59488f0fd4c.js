System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Piece, _dec, _class, _crd, ccclass, property, Xiang;

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

      _cclegacy._RF.push({}, "7616bY0/tJB15lhS5A41PB0", "Xiang", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Xiang", Xiang = (_dec = ccclass('Xiang'), _dec(_class = class Xiang extends (_crd && Piece === void 0 ? (_reportPossibleCrUseOfPiece({
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
//# sourceMappingURL=ef243a99e92acae414a213c6fb4fe59488f0fd4c.js.map