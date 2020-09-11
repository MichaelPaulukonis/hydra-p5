

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
    makeGlobal: false
  }).synth;

  // draw an oscilator in hydra0, and a shape in hydra1
  h0.osc().out();
  // h1.shape().out();

  p1 = new P5({ width: 400, height: 400 }) // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

  // draw a rectangle at point 300, 100
  // p1.rect(300, 100, 100, 100)

  p1.draw = () => {
    p1.fill(p1.mouseX / 5, p1.mouseY / 5, 255, 100)
    p1.rect(p1.mouseX, p1.mouseY, 30, 30)
  }

  // s0.initCam()
  p1.setup()

  h1.s0.init({src: p1.canvas })
  h1.src(h1.s0).repeat().out()

  // src(s0)
  // .out(o0);
  
  // // send oscillator to buffer o2
  // osc(
  //   60, 0, 0
  // ).out(o2);
  
  // // take buffer o0
  // // blend it using diff
  // // send to buffer o1
  // src( o0 )
  // .diff(
  //   o2, 1
  // )
  // .out( o1 );
  
  // // render buffer o1
  // render( o1 );


}

core()