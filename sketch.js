

const core = () => {

  // create a new hydra-synth instance. makeGlobal is set to false,
  // so that commands can be directed to a specific canvas.
  const h0 = new Hydra({
    canvas: document.getElementById("myCanvas0"),
    makeGlobal: false
  }).synth;

  // create a second hydra-synth instance
  var h1 = new Hydra({
    canvas: document.getElementById("myCanvas1"),
    makeGlobal: true
  }).synth;

  // draw an oscilator in hydra0, and a shape in hydra1
  h0.osc().out();
  shape().out();

  p1 = new P5({ width: 400, height: 400 }) // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

  // draw a rectangle at point 300, 100
  // p1.rect(300, 100, 100, 100)

  p1.draw = () => {
    p1.fill(p1.mouseX / 5, p1.mouseY / 5, 255, 100)
    p1.rect(p1.mouseX, p1.mouseY, 30, 30)
  }

  // s0.initCam()
  p1.setup()

  s0.init({src: p1.canvas })
  src(s0).repeat().out()

}

core()