
var pdl = [];

var points = [];

function setup() {
  createCanvas(800,800);
  addScreenPositionFunction();
  
  // triangle
  pdl.push(new Pendulum(200,1));
  pdl.push(new Pendulum(50,-3));
  
  //pdl = (Pendulum[]) append(pdl, new Pendulum(50,1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(200,-1.5));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,1));
  
  //pdl = (Pendulum[]) append(pdl, new Pendulum(10,1.3));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,-2.4));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(50,6));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(30,9));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(60,-5));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(20,8));
  
  // 8
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(50,-2));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(50,4));

  // star
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(30,-5));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(10,10));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(-10,-10));
  
  // w
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,-2));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,.75));
  
  // spinner field
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,6));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,-12));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,1.75));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,-3.5));
  
  // romashka
  //pdl = (Pendulum[]) append(pdl, new Pendulum(150,1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,-4.1));

  // cat
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(100,-2));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(-15,-2));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(80,4));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(-100,-2));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(-10,-2));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(-20,-1));
  //pdl = (Pendulum[]) append(pdl, new Pendulum(20,6));
  
  // pdl = (Pendulum[]) append(pdl, new Pendulum(190,1));
  // pdl = (Pendulum[]) append(pdl, new Pendulum(20,-4));
  // pdl = (Pendulum[]) append(pdl, new Pendulum(30,4));




}

function draw() {
  // background(0, 0, 20, 0.1);
  background(0,0,20);
  stroke(220, 220, 70);
  strokeWeight(2);
  for(let i = 0; i < points.length-2; i += 2) {
    line(points[i],points[i+1],
         points[i+2],points[i+3]);
  }
    //background(0,0,0,100);
  
  translate(width/2, height/2);
  
  for(let i = 0; i < pdl.length; i++)
    pdl[i].upd();
    
  points.push(screenPosition(0,0).x);
  points.push(screenPosition(0,0).y);
}



function addConf() {
  document.querySelector('.confs').innerHTML += `
    <li>
      <input name="len" type="number" placeholder="длина">
      <input name="spd" type="number" placeholder="скорость">
    </li>
  `;
}

function aplyConfs() {
  pdl = [];
  points = [];
  let confs = document.querySelector('.confs').querySelectorAll('li');
  for(let i = 0; i < confs.length; i++) {
    pdl.push(new Pendulum(
      parseInt(confs[i].querySelector('input[name="len"]').value),
      parseInt(confs[i].querySelector('input[name="spd"]').value)));
  }
}

function removeConf() {
  document.querySelector('.confs').querySelector('li').remove();
}
