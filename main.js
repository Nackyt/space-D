var canvas = document.querySelector('canvas')
var Hh= document.querySelector('#Hh')
var Ss = document.querySelector('#Ss')
var Ps = document.querySelector('#Ps')
var Pm = document.querySelector('#Pm')

var c = canvas.getContext('2d')
canvas.width = innerWidth 
canvas.height = innerHeight
var start = 0
class Menu {
  constructor(){
    this.position ={
      x:0
      ,y:0
    }
    var image = new Image()
    image.src='/background .png'
    this.width = canvas.width 
    this.height =canvas.height 
    this.image = image
  }
 draw(){
   c.fillRect (this.position.x,this.position.y,
   this.width,this.height)
   c.drawImage(this.image,this.position.x,
   this.position.y,this.width,this.height)
 }
}

class Play {
  constructor(){
    this.position ={
      x: canvas.width/2 - 50,
      y: canvas.height/2
    }
    var image = new Image()
    image.src='/Play.png'
    this.width = 100
    this.height= 70
    this.image = image
  }
  draw(){
    c.fillStyle ='green'
    c.fillRect(this.position.x,this.position.y,
    this.width,this.height)
    c.drawImage(this.image, this.position.x,
      this.position.y, this.width, this.height)
  }
}
var menup = new Menu()
var play = new Play()


function menu(){

var menua = window.requestAnimationFrame(menu)
  c.clearRect(0,0,canvas.width, canvas.height)
  
  play.draw()
  
  var st = function (event){
  event.preventDefault();
  var startX = parseInt(event.clientX)
  var startY = parseInt(event.clientY)
  if (startX >= play.position.x &&
  startX <= play.position.x + play.height &&
  startY >= play.position.y && startY <= play
  .position.y + play.height && start==0){
  start=1
  console.log (start)
game()

  }
}
canvas.onclick = st
}
  if (start>=1){
  c.clearRect(0,0,canvas.width, canvas.height)
  cancelAnimationFrame(menu,200)
}

menu()

class Space {
  constructor(){
    this.position ={
      x:0
      ,y:0
    }
    var image = new Image()
    image.src='/background .png'
    this.width = canvas.width 
    this.height =canvas.height 
    this.image = image
  }
 draw(){
   c.fillRect (this.position.x,this.position.y,
   this.width,this.height)
   c.drawImage(this.image,this.position.x,
   this.position.y,this.width,this.height)
 }
}

 

class Player{
  constructor(){
    this.position ={
      x: canvas.width/2 - 15,
      y: canvas.height/2 + 120
    }
  var image = new Image()
  image.src = '/ship.gif'
    this.width = 20
    this.height= 35
    this.image = image

  }
  draw(){
    c.fillStyle ='green'
//c.fillRect(this.position.x,this.position.y,
    //this.width,this.height)
c.drawImage(this.image,this.position.x-5
,this.position.y,this.width+10,this.height)


}
  
}


class Meteor {
  constructor(){
    this.position = {
      x: Math.random() * canvas.width,
      y: -100
    }
    this.velocity ={
      x:0,
      y: Math.random() * 5
    }
    var image = new Image()
    image.src='/meteor .png'
    this.width = Math.random() * 150
    this.height= this.width
    this.image = image
    this.rotate = 1
  }
   draw() {
  
// c.fillRect(this.position.x, this.position.y,
  //this.width, this.height)
  c.drawImage(this.image, this.position.x,
  this.position.y, this.width, this.height)
  
   }
   update(){
     this.draw()
     this.position.y += this.velocity.y
   }
}

class PowerupS{
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: -100
    }
    this.velocity = {
      x: 0,
      y: Math.random() * 5
    }
    var image = new Image()
    image.src = '/shield .png'
    this.width = 50
    this.height = 50
    this.image = image
    this.rotate = 1
  }
  draw() {

     c.fillRect(this.position.x, this.position.y,
    this.width, this.height)
    c.drawImage(this.image, this.position.x,
      this.position.y, this.width, this.height)

  }
  update() {
    this.draw()
    this.position.y += this.velocity.y
  }
}

class PowerupM {
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: -100
    }
    this.velocity = {
      x: 0,
      y: Math.random() * 5
    }
    var image = new Image()
    image.src = '/times 2.png'
    this.width = 50
    this.height = 50
    this.image = image
    this.rotate = 1
  }
  draw() {

    c.fillRect(this.position.x, this.position.y,
      this.width, this.height)
    c.drawImage(this.image, this.position.x,
      this.position.y, this.width, this.height)

  }
  update() {
    this.draw()
    this.position.y += this.velocity.y
  }
}

var P_counter = 0
var P_active = false
var M_active = false

var counter = 0
var score = 0
var highscore = 0
var player = new Player()
var meteors =[]
var powers =[]
var powerm =[]


function game()
{
  requestAnimationFrame(game)
  c.clearRect(0,0,canvas.width, canvas.height)
  player.draw()
  if (start>1,start<1){
player.position.x = canvas.width/2

  }
  meteors.forEach((meteor,m) =>{
    meteor.update()
    
    if(start>1,start<1){
     meteors.splice(m)
     counter=0
     
    } 
    
    if (meteor.velocity.y < 1){
      meteors.splice(m,1)
      counter--
    }else{
    if (meteor.position.y > canvas.height && start==1 && M_active==false){
      meteors.splice(m,1)
      counter--
      score+=20
        Ss.innerHTML = score

    }else{
      if (meteor.position.y > canvas.height && start==1 && M_active==true){
        meteors.splice(m, 1)
        counter--
    score += 20 * 5
        Ss.innerHTML = score
      }else{
      if (meteor.width < 50){
        meteors.splice(m,1)
        counter--
      }
        if (counter>8){
         
          counter==8
        }else{
          if (meteor.velocity.y > 5) {
            meteors.splice(m, 1)
            counter--
          }
        }
      }
    }
  }
 //if (canvas.width > 412 && meteor.width > 130
 //&& meteor.velocity.y > 1)
  //  {meteor.width = Math.random() *550
 // meteor.height = meteor.width 
  //  }
    
    if (meteor.position.x < 30) {
      meteor.position.x = -30
    }
    
  if (player.position.y + player.height >= 
  meteor.position.y && player.position.y <= 
  meteor.position.y + meteor.height &&
  player.position.x + player.width >= meteor
  .position.x && player.position.x <= meteor
.position.x + meteor.width && P_active==false){
    start= 2
  }
    
  })
  setInterval(function(){
    if (counter<8 && start==1){
          counter++
    meteors.push(new Meteor())
  }
  },500)

powers.forEach((power,p) =>{
  power.update()
  
if (player.position.y + player.height >=
  power.position.y && player.position.y <=
  power.position.y + power.height &&
  player.position.x + player.width >= power
  .position.x && player.position.x <= power
  .position.x + power.width) {
    
  P_active = true
  Ps.innerHTML = P_active
  setTimeout(function(){
  P_counter--
  
  },15000)
  
  setTimeout(function(){
    if (P_active==true){
      
      P_active=false
  Ps.innerHTML = P_active

    }
  },4000)
  
  powers.splice(p,1)
}
  if (power.velocity.y < 2) {
      powers.splice(p,1)
   P_counter--
  } else {
    if (power.position.y > canvas.height) {
  powers.splice(p,1)
    setTimeout(function(){
     P_counter--
    },15000)
    }else{
      if (start>1,start<1){
        powers.splice(p)
        P_counter=0
      }
    }
  }

})

powerm.forEach((power, p) => {
  power.update()

  if (player.position.y + player.height >=
    power.position.y && player.position.y <=
    power.position.y + power.height &&
    player.position.x + player.width >= power
    .position.x && player.position.x <= power
    .position.x + power.width) {

    M_active = true
    Pm.innerHTML = M_active
    setTimeout(function() {
      P_counter--

    }, 15000)

    setTimeout(function() {
      if (M_active == true) {

        M_active = false
        Pm.innerHTML = M_active

      }
    }, 4000)

    powerm.splice(p, 1)
  }
  if (power.velocity.y < 2) {
    powerm.splice(p, 1)
    P_counter--
  } else {
    if (power.position.y > canvas.height) {
      powerm.splice(p, 1)
      setTimeout(function() {
        P_counter--
      }, 15000)
    } else {
      if (start > 1, start < 1) {
        powerm.splice(p)
        P_counter = 0
      }
    }
  }

})

    setInterval(function(){
var  P_Maker = Math.floor(Math.random() * 100)
 if (P_Maker==39 && start==1 && P_counter<1 && 
 score>999){
      powers.push(new PowerupS())
      P_counter++
      console.log (P_counter)}else{
 if (P_Maker==62 && start==1 && P_counter<1 && 
 score>499){
      powerm.push(new PowerupM())
      P_counter++
      console.log (P_counter)}
      }
    },1000)
  
  
var mes = function (event){
  event.preventDefault();
  var startX = parseInt(event.clientX)
  var startY = parseInt(event.clientY)
  player.position.x = startX + player.width/2
}


canvas.onclick = mes
  
  if (start<1 , start>1){
    
  c.clearRect(0,0,canvas.width,canvas.height)
  cancelAnimationFrame(game,100)
      scors()
}

}


  class Restart {
    constructor() {
      this.position = {
        x: canvas.width / 2 - 50,
        y: canvas.height / 2
      }
      var image = new Image()
      image.src = '/Play.png'
      this.width = 100
      this.height = 70
      //this.image = image
    }
    draw() {
      c.fillStyle = 'green'
  c.fillRect(this.position.x, this.position.y,
        this.width, this.height)
    //c.drawImage(this.image, this.position.x,
    //this.position.y, this.width, this.height)
    }
  }

var restart = new Restart()

function scors(){
  requestAnimationFrame(scors)
  
  if (score>highscore && start==2){
    highscore=score
  Hh.innerHTML = highscore
  score=0
  }
  Ss.innerHTML = score
  restart.draw()
  
  
var re = function (event){
  event.preventDefault();
  var startX = parseInt(event.clientX)
  var startY = parseInt(event.clientY)
  if (startX >= restart.position.x &&
  startX <= restart.position.x + restart.width
  && startY >= restart.position.y && startY
  <= restart.position.y + restart.height ){
    start=0
    
  c.clearRect(0,0,canvas.width, canvas.height)
  cancelAnimationFrame(scors)
  
  menu()
  }
}

canvas.onclick = re

}
