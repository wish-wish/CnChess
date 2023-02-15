System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, Hrdaya, _dec, _class, _crd, ccclass, property, Slice;

  function _reportPossibleCrUseOfHrdaya(extras) {
    _reporterNs.report("Hrdaya", "./cells/Hrdaya", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      Hrdaya = _unresolved_2.Hrdaya;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c997fjmZLVCzbiGgTshQ8ar", "Slice", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Slice", Slice = (_dec = ccclass('Slice'), _dec(_class = class Slice extends Component {
        start() {
          var eb = this.node.getComponentInChildren(EditBox);
          var hd = this.getComponentInChildren(_crd && Hrdaya === void 0 ? (_reportPossibleCrUseOfHrdaya({
            error: Error()
          }), Hrdaya) : Hrdaya);
          eb.string = hd.fansec.toString();
        }

        update(deltaTime) {}

        onReturn() {
          var eb = this.node.getComponentInChildren(EditBox);
          var hd = this.getComponentInChildren(_crd && Hrdaya === void 0 ? (_reportPossibleCrUseOfHrdaya({
            error: Error()
          }), Hrdaya) : Hrdaya);
          var num = 20;

          try {
            num = Number.parseInt(eb.string);
          } catch (error) {}

          hd.fansec = num;
          var speed = hd.interval * hd.fansec;

          if (speed / 1000 > hd.speeds[1]) {
            hd.interval = hd.speeds[1] * 1000 / hd.fansec;
          } else if (speed / 1000 < hd.speeds[0]) {
            hd.interval = hd.speeds[0] * 1000 / hd.fansec;
          }

          hd.Draw();
          hd.reCurve();
          hd.reDraw((t, act) => {});
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6bfcd9314d1ec62a35c4fb88e8c2abc99f746a0d.js.map