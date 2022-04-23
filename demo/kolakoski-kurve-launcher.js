/*
 * dam-plus-widgets-0.2.js and kolakoski-kurve.js should be loaded before this.
 * After this is loaded, call launch() to start the gewgaw.
 */

function launch(config) {
  var div=DAM.maker('div'), button=DAM.maker('button'), canvas=DAM.maker('canvas');

  var can = canvas({ width: 800, height: 400 });
  config.container.appendChild(can);

  var gewgaw = new KolakoskiKurve();

  var controlPanel = div(
    { id: "control-panel" },
    div(
      DAM.makeRange({
        title: "Segment length:",
        min: 2,
        max: 25,
        value: 5,
        onchange: function(v) {
          gewgaw.dist = v;
        }
      })
    ),
    div(
      DAM.makeRange({
        title: "Start index:",
        min: 1,
        max: 10000,
        value: 1,
        onchange: function(v) {
          gewgaw.startIndex = v - 1;
          gewgaw.reset();
        }
      })
    ),
    div(
      DAM.makeRange({
        title: "End index:",
        min: 1,
        max: 10000,
        value: 10000,
        onchange: function(v) {
          gewgaw.endIndex = v - 1;
          gewgaw.reset();
        }
      }),
    ),
    div(
      DAM.makeSelect({
        title: "Draw style:",
        options: [
          {
            text: 'Opaque',
            value: 'opaque'
          },
          {
            text: 'Translucent',
            value: 'translucent'
          },
          {
            text: 'XOR',
            value: 'xor'
          }
        ],
        onchange: function(option) {
          gewgaw.setStyle(option.value);
        }
      })
    ),
    div(
      button("Reset", {
        onclick: function() {
          // this circumlocution is only to avoid weird glitching when resetting 'xor' style.
          var style = gewgaw.style;
          gewgaw.setStyle('opaque');
          gewgaw.setStyle(style);
        }
      })
    )
  );
  config.container.appendChild(controlPanel);

  gewgaw.init({ canvas: can });
}
