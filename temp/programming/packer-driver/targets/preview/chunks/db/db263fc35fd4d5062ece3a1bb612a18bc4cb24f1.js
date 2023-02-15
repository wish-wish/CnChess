System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec2, Intersection2D, _dec, _class, _crd, ccclass, property, Head;

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

      _cclegacy._RF.push({}, "eed7bwX/mRJro6zIJHIf35y", "Head", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Head", Head = (_dec = ccclass('Head'), _dec(_class = class Head extends Component {
        constructor() {
          super(...arguments);
          this.polygons = [];
        }

        start() {
          var path = '\
        <?xml version="1.0" encoding="UTF-8"?>\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 42,268.5 12.6,-14.7 0.9,-23.4 0.3,-22.5 -2.7,-15 -5.1,-19.2 -6.6,-11.1 23.4,5.4 28.5,1.8 12.3,6 -1.2,21.3 -0.3,53.4 -0.9,37.5 -18.6,-3.6 -21.9,-6 -15.9,-7.5 z"\
       id="path22" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 62.4,27.3 14.7,7.5 21,4.5 h 8.1 v 42.3 l -0.9,19.5 -1.8,2.7 -14.1,5.4 -14.1,15.9 v 23.4 l 10.2,13.8 H 66.3 l -16.8,-3.6 -15.3,-3.3 -12.6,-17.1 -6.9,-26.1 3,-23.7 6,-15.6 L 32.1,51.3 44.7,39 Z"\
       id="path24" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 67.5,22.8 19.2,-7.2 30.6,-2.4 16.2,0.9 21,2.1 18.9,3.6 2.4,1.5 -15.6,7.2 L 141,32.1 118.5,33 98.7,31.5 H 87.6 L 74.1,26.7 Z"\
       id="path26" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 114.6,38.1 -2.1,19.5 0.6,26.1 v 14.7 l -1.2,3.6 12.3,3.3 11.4,6.6 3,7.8 h 21.3 l 7.5,-2.1 3.3,-13.2 6,-13.5 2.4,-3.3 -7.2,-19.5 -8.1,-21.3 -4.5,-12.3 -12.6,1.8 H 132 Z"\
       id="path28" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 181.8,25.2 -12.3,6.6 -4.5,1.5 -1.5,1.2 7.5,21.3 10.2,26.1 1.8,3.3 8.1,-6.3 13.5,-5.4 12,-2.1 -1.5,-9.9 -5.7,-13.5 -3.3,-6.3 -8.1,-7.2 z"\
       id="path30" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 103.5,111 -15.6,7.2 -6.9,15.3 2.4,15.6 7.2,11.1 15,9.9 16.5,3 19.8,-6.6 7.8,-7.2 -3,-8.1 -6.9,-4.5 -2.7,-4.8 -1.2,-11.4 -3.6,-10.2 -9,-7.8 -8.1,-4.5 h -9 z"\
       id="path32" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 110.4,174.9 1.8,35.7 -1.5,57.9 -0.6,16.5 v 2.7 l -0.9,-3 18.6,3.9 26.4,2.7 8.1,0.3 -0.6,-12.6 4.5,-16.2 6,-15.9 4.5,-9.6 20.7,-5.4 9.9,-1.8 2.4,-1.2 -14.1,-0.6 -17.1,-2.7 -12,-2.1 -14.7,-4.8 -10.5,-5.4 -6.3,-5.1 -2.4,-6 -1.2,-12.6 -1.5,-13.2 v -1.2 z"\
       id="path34" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 211.5,78.3 -14.4,3.3 -11.7,6.9 -4.8,7.8 -5.4,15.9 -2.1,6.6 3.3,3.9 9.6,5.1 5.7,3.6 15.9,-3.6 8.1,-5.7 3.9,-3.3 -0.3,-8.1 1.8,-6.9 0.3,-10.5 0.3,-10.2 -3.9,-7.2 z"\
       id="path36" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 141.9,124.5 0.9,12.3 0.3,3.3 7.8,6.3 4.2,17.7 -10.8,6.3 -9.6,5.4 0.3,10.8 2.7,17.4 5.1,4.5 12.9,5.1 11.7,4.5 16.2,3.3 24.9,2.7 9.6,-1.8 5.1,-7.8 -3,-6.6 -0.6,-8.1 -0.3,-3 -17.7,-1.2 -16.5,-3.9 -13.2,-3.6 -4.5,-3.6 6.3,-14.1 7.2,-9 h 5.4 l 12,4.5 10.2,1.8 12.3,1.8 3.3,0.3 2.4,-3.6 -0.6,-3 4.5,-5.1 6.3,-0.6 1.5,-5.1 -1.2,-3.3 -0.6,-5.1 -5.1,-7.8 -6.3,-10.8 -3,-3.6 -9.3,6.3 -6.3,4.5 -8.7,2.4 -9.9,-0.6 -10.8,-5.4 -8.4,-5.4 h -6.3 l -12.6,0.9 z"\
       id="path38" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 184.2,167.7 -7.2,12.3 -1.5,2.1 15.3,5.1 14.7,1.8 16.2,2.4 3.6,-4.2 -2.1,-3.6 4.5,-7.8 -2.1,-1.2 -22.8,-3.3 z"\
       id="path40" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 123.9,125.4 -7.8,-8.7 -9.6,-0.9 -8.1,3.9 -4.2,5.4 -0.3,13.5 3.3,13.2 8.4,10.2 7.2,8.1 6,-1.5 2.7,-5.7 -1.2,-0.9 2.7,7.8"\
       id="path42" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 146.7,139.8 20.7,-1.5 7.5,-3 2.7,-3.3"\
       id="path44" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 119.1,127.8 -6,-6 -7.2,-0.9 -3.9,3.6 -2.7,8.7 -0.9,6 -0.3,3.9"\
       id="path46" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 114.3,125.1 -5.4,7.2 -6.9,3.6 -1.8,10.2 3.6,5.1 7.5,1.8 2.4,0.9"\
       id="path48" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 119.1,127.8 v 0 l -1.8,7.2 -3.9,0.3 -4.5,6 -1.8,3.3 0.9,4.8"\
       id="path50" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 129,134.7 -8.4,1.8 -6,5.7 2.1,6.3 3.9,6 h 3.9"\
       id="path52" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 215.7,100.8 -9.6,-1.2 -12.9,2.4 -6.6,7.2 -0.3,7.2 v 6.6 l 5.1,4.5"\
       id="path54" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 190.2,119.1 7.2,-6.9 5.4,-2.1 2.1,-1.8 1.8,-0.9 5.7,-0.6 3.3,-6"\
       id="path56" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 206.7,107.4 2.4,4.8 -4.5,3.3 -6.9,3.3 -2.1,1.5 7.2,1.5 4.5,-3.3 0.9,-5.7 0.3,8.1"\
       id="path58" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 202.8,121.8 -0.9,-3.9"\
       id="path60" />\
    <path\
       style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\
       d="m 212.4,106.8 6.9,0.3"\
       id="path62" />';
          var pathjson = [["m 42,268.5 12.6,-14.7 0.9,-23.4 0.3,-22.5 -2.7,-15 -5.1,-19.2 -6.6,-11.1 23.4,5.4 28.5,1.8 12.3,6 -1.2,21.3 -0.3,53.4 -0.9,37.5 -18.6,-3.6 -21.9,-6 -15.9,-7.5 z", "path22"], ["m 62.4,27.3 14.7,7.5 21,4.5 h 8.1 v 42.3 l -0.9,19.5 -1.8,2.7 -14.1,5.4 -14.1,15.9 v 23.4 l 10.2,13.8 H 66.3 l -16.8,-3.6 -15.3,-3.3 -12.6,-17.1 -6.9,-26.1 3,-23.7 6,-15.6 L 32.1,51.3 44.7,39 Z", "path24"], ["m 67.5,22.8 19.2,-7.2 30.6,-2.4 16.2,0.9 21,2.1 18.9,3.6 2.4,1.5 -15.6,7.2 L 141,32.1 118.5,33 98.7,31.5 H 87.6 L 74.1,26.7 Z", "path26"], ["m 114.6,38.1 -2.1,19.5 0.6,26.1 v 14.7 l -1.2,3.6 12.3,3.3 11.4,6.6 3,7.8 h 21.3 l 7.5,-2.1 3.3,-13.2 6,-13.5 2.4,-3.3 -7.2,-19.5 -8.1,-21.3 -4.5,-12.3 -12.6,1.8 H 132 Z", "path28"], ["m 181.8,25.2 -12.3,6.6 -4.5,1.5 -1.5,1.2 7.5,21.3 10.2,26.1 1.8,3.3 8.1,-6.3 13.5,-5.4 12,-2.1 -1.5,-9.9 -5.7,-13.5 -3.3,-6.3 -8.1,-7.2 z", "path30"], ["m 103.5,111 -15.6,7.2 -6.9,15.3 2.4,15.6 7.2,11.1 15,9.9 16.5,3 19.8,-6.6 7.8,-7.2 -3,-8.1 -6.9,-4.5 -2.7,-4.8 -1.2,-11.4 -3.6,-10.2 -9,-7.8 -8.1,-4.5 h -9 z", "path32"], ["m 110.4,174.9 1.8,35.7 -1.5,57.9 -0.6,16.5 v 2.7 l -0.9,-3 18.6,3.9 26.4,2.7 8.1,0.3 -0.6,-12.6 4.5,-16.2 6,-15.9 4.5,-9.6 20.7,-5.4 9.9,-1.8 2.4,-1.2 -14.1,-0.6 -17.1,-2.7 -12,-2.1 -14.7,-4.8 -10.5,-5.4 -6.3,-5.1 -2.4,-6 -1.2,-12.6 -1.5,-13.2 v -1.2 z", "path34"], ["m 211.5,78.3 -14.4,3.3 -11.7,6.9 -4.8,7.8 -5.4,15.9 -2.1,6.6 3.3,3.9 9.6,5.1 5.7,3.6 15.9,-3.6 8.1,-5.7 3.9,-3.3 -0.3,-8.1 1.8,-6.9 0.3,-10.5 0.3,-10.2 -3.9,-7.2 z", "path36"], ["m 141.9,124.5 0.9,12.3 0.3,3.3 7.8,6.3 4.2,17.7 -10.8,6.3 -9.6,5.4 0.3,10.8 2.7,17.4 5.1,4.5 12.9,5.1 11.7,4.5 16.2,3.3 24.9,2.7 9.6,-1.8 5.1,-7.8 -3,-6.6 -0.6,-8.1 -0.3,-3 -17.7,-1.2 -16.5,-3.9 -13.2,-3.6 -4.5,-3.6 6.3,-14.1 7.2,-9 h 5.4 l 12,4.5 10.2,1.8 12.3,1.8 3.3,0.3 2.4,-3.6 -0.6,-3 4.5,-5.1 6.3,-0.6 1.5,-5.1 -1.2,-3.3 -0.6,-5.1 -5.1,-7.8 -6.3,-10.8 -3,-3.6 -9.3,6.3 -6.3,4.5 -8.7,2.4 -9.9,-0.6 -10.8,-5.4 -8.4,-5.4 h -6.3 l -12.6,0.9 z", "path38"], ["m 184.2,167.7 -7.2,12.3 -1.5,2.1 15.3,5.1 14.7,1.8 16.2,2.4 3.6,-4.2 -2.1,-3.6 4.5,-7.8 -2.1,-1.2 -22.8,-3.3 z", "path40"], ["m 123.9,125.4 -7.8,-8.7 -9.6,-0.9 -8.1,3.9 -4.2,5.4 -0.3,13.5 3.3,13.2 8.4,10.2 7.2,8.1 6,-1.5 2.7,-5.7 -1.2,-0.9 2.7,7.8", "path42"], ["m 146.7,139.8 20.7,-1.5 7.5,-3 2.7,-3.3", "path44"], ["m 119.1,127.8 -6,-6 -7.2,-0.9 -3.9,3.6 -2.7,8.7 -0.9,6 -0.3,3.9", "path46"], ["m 114.3,125.1 -5.4,7.2 -6.9,3.6 -1.8,10.2 3.6,5.1 7.5,1.8 2.4,0.9", "path48"], ["m 119.1,127.8 v 0 l -1.8,7.2 -3.9,0.3 -4.5,6 -1.8,3.3 0.9,4.8", "path50"], ["m 129,134.7 -8.4,1.8 -6,5.7 2.1,6.3 3.9,6 h 3.9", "path52"], ["m 215.7,100.8 -9.6,-1.2 -12.9,2.4 -6.6,7.2 -0.3,7.2 v 6.6 l 5.1,4.5", "path54"], ["m 190.2,119.1 7.2,-6.9 5.4,-2.1 2.1,-1.8 1.8,-0.9 5.7,-0.6 3.3,-6", "path56"], ["m 206.7,107.4 2.4,4.8 -4.5,3.3 -6.9,3.3 -2.1,1.5 7.2,1.5 4.5,-3.3 0.9,-5.7 0.3,8.1", "path58"], ["m 202.8,121.8 -0.9,-3.9", "path60"], ["m 212.4,106.8 6.9,0.3", "path62"]];
          this.hitInPolygon(new Vec2(0, 0), pathjson);
        }

        hitInPolygon(pt, s) {
          //let g=this.getComponent(Graphics);
          for (var i = 0; i < s.length; i++) {
            var pts = s[i][0].split(' ');
            var polygon = [];

            for (var j = 1; j < pts.length; j++) {
              if (pts.length > 1) {
                polygon.push(new Vec2(Number.parseFloat(pts[0]), Number.parseFloat(pts[1])));
              }
            }

            if (Intersection2D.pointInPolygon(pt, polygon)) {
              console.log("hitInPolygon:" + s[i][1]);
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db263fc35fd4d5062ece3a1bb612a18bc4cb24f1.js.map