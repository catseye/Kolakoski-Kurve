/*
 * dam-plus-widgets-0.2.js and kolakoski-kurve.js should be loaded before this.
 * After this is loaded, call launch() to start the gewgaw.
 */

function launch(config) {
  var div=DAM.maker('div'), button=DAM.maker('button'), canvas=DAM.maker('canvas');

  var can = canvas({ width: 800, height: 600 });
  var viewport = div({ id: "canvas_viewport" });
  viewport.appendChild(can);
  config.container.appendChild(viewport);

  var gewgaw = new KolakoskiKurve();

  var slidersPanel = div({ id: "sliders-panel" });
  config.container.appendChild(slidersPanel);

  gewgaw.init({ canvas: can });
}
