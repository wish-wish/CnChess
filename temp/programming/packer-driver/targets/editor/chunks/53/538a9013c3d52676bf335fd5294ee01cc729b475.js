System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Piece, _dec, _class, _crd, ccclass, property, Ma;

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

      _cclegacy._RF.push({}, "0da93zbkwBGFb/mocdIx3xm", "Ma", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ma", Ma = (_dec = ccclass('Ma'), _dec(_class = class Ma extends (_crd && Piece === void 0 ? (_reportPossibleCrUseOfPiece({
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
//# sourceMappingURL=538a9013c3d52676bf335fd5294ee01cc729b475.js.map