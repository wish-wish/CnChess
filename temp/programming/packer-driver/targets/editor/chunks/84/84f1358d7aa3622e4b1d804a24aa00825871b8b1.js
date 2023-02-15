System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Piece, _dec, _class, _crd, ccclass, property, Jiang;

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

      _cclegacy._RF.push({}, "54713DeSW5CeqoO3UvY9NF9", "Jiang", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Jiang", Jiang = (_dec = ccclass('Jiang'), _dec(_class = class Jiang extends (_crd && Piece === void 0 ? (_reportPossibleCrUseOfPiece({
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
//# sourceMappingURL=84f1358d7aa3622e4b1d804a24aa00825871b8b1.js.map