System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Utils, _dec, _class, _crd, ccclass, property, Qipu;

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPuBu(extras) {
    _reporterNs.report("PuBu", "./Piece", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ef78p73TFDQ739euq36MTQ", "Qipu", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qipu", Qipu = (_dec = ccclass('Qipu'), _dec(_class = class Qipu extends Component {
        constructor() {
          super(...arguments);
          this.FightPuBus = [];
        }

        start() {}

        update(deltaTime) {}

        static parse(steps) {
          var step = steps.split('');

          for (var i = 0; i < step.length; i++) {
            var pieces = "车马跑象士将兵車馬炮相仕帥卒帅將";
            var dirs = "进退平進";
            var vertidxs = "九八七六五四三二一987654321"; //let fbs="前后";
            //let fb=fbs.indexOf(step[idx]);            

            var idxpiece = pieces.indexOf(step[0]);
            var idxp = idxpiece % (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).redchs.length;
            var vertidx = vertidxs.indexOf(step[3]);
            var dir = dirs.indexOf(step[2]) % 3;
            var pos = vertidxs.indexOf(step[1]);
            var pics = "";
            var x = 0,
                y = 0;

            if (idxpiece > 13) {
              idxp = 5;
            }

            if (vertidx > 8) {
              pics = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).redchs[idxp];
            } else {
              pics = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).blackchs[idxp];
            }

            var idx = pos;

            if (pos > 8) {
              ;
            }

            if (dir == 0) {
              //...
              y = y + (vertidx % 9 + 1);
            } else if (dir == 1) {//...
            } else {//...
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a332803d4e24e964b1a934b9eba4ff1453d94dde.js.map