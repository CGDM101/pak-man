let x=850
let y=350
let vx=0
let debugx =  850
let debugy =  350

// let vy=0.5916079783099616 //correct answer
 let vy=0.05345224837 // a=v^2/r -> v=sqrt(ra) -> v=sqrt (0.000008163265301*350)=0.05345224837...

let ax=0
let ay=0
let elapsedTime=0
let attitudeX=0
let attitudeY=0
let attitude=0
let burnX=0
let burnY=0
let groundmode=true
let testYacc=0
// dont let m= anything. Leave as 1
// kopierat från SO, hajar inte...
"use strict";
//////////////BEGIN////KEYLISTENER////////////////////
const is_key_down = (() => {
	const state = {};

window.addEventListener('keyup', (e) => state[e.key] = false);
window.addEventListener('keydown', (e) => state[e.key] = true);

	return (key) => state.hasOwnProperty(key) && state[key] || false;
	})();

////////////EXPERIMENTAL//////////////////
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
		groundmode=!groundmode
    }
}


/////////////////////////SETINTERVAL///////////////////////
setInterval(moveLander,1);
// setInterval(moveLander,10000);


///////////////////HELP///FUNCTIONS/////////////////
function toDegrees (angle) {
	return angle * (180 / Math.PI);
  }
  function toRadians (angle) {
	// return angle * (180 / Math.PI);
	return angle / (180 / Math.PI)
  }
function getDistance (X,Y,x,y)
	{
	if (X!=x || y!=Y)
	{
	return Math.sqrt((X-x)*(X-x)+ (Y-y)*(Y-y))
	}
	else 
	{
	return 0
	}
	}

function accelerateInDirectionOfTravel (){
	console.log("hi!")
	let v1=Math.sqrt((vx * vx) + (vy * vy))
	let v2=v1+0.00001
	vx=vx*(v2/v1)
	vy=vy*(v2/v1)
}

function justAddVy ()
{
	vy+=0.001
}
///////////////////////////////////////////////////MAIN///////////////////FUNCTION//////////// 
function moveLander()
{
let dist=getDistance(x,y,500,350)
 
let acceleration=1/(dist*dist) // blir 0.000008163265301...

// ax=((x-500)/(dist * dist))*0.41225  // rätta fysiken
// ay=((y-350)/(dist * dist))*0.41225 

ax=(((x-500)/dist)/(dist * dist))   // förslag...?  
ay=(((y-350)/dist)/(dist * dist))  

if ( x  > 500)
{
	ax = (Math.abs(ax)) * -1;
}
else
{
	ax = (Math.abs(ax));
}

if ( y  > 350)
{
	ay = (Math.abs(ay)) * -1;
}
else
{
	ay = (Math.abs(ay));
}

vx+=ax
vy+=ay
 

x= (x+vx)
y= (y+vy)         
let X=Math.round(x)
let Y=Math.round(y)

///////////////BEGIN////GROUNDMODE///////////////////////////////
let XX=0
let yy= y-350
let xx= x-500
let angle=0;


 if (yy >=  0 && xx >= 0){//1STQUAD

	// XX=(((Math.asin(yy/dist))/2*Math.PI)*1000)
	angle = toDegrees( Math.asin(yy/dist))       
	XX=angle*1000/360
	// console.log("1st y+ x+",angle)
}
 
else if (xx  < 0 && yy >=  0) {  //2ndQUAD
	// XX=(((Math.PI -  Math.abs(Math.asin(yy/dist)))/2*Math.PI)*1000)
	angle = toDegrees( Math.PI - Math.abs(Math.asin(yy/dist)  ))       
	XX=angle*1000/360

	// console.log("2nd y- x+",x,y,angle)
}
 
else if (yy <  0 && xx <  0){ //3rdQUAD
	// XX=(((Math.PI + Math.abs(Math.asin(yy/dist)))/2*Math.PI)*1000)  
	angle = toDegrees( Math.PI + Math.abs(Math.asin(yy/dist)))      
	// console.log("3rd y- x-",angle)
	XX=angle*1000/360

}
 
else if (xx >=  0 && yy < 0) {  
	// XX=(((2*Math.PI - Math.abs(Math.asin(yy/dist)))/2*Math.PI)*1000)
	angle = toDegrees( 2*Math.PI - Math.abs(Math.asin(yy/dist) ) )            
	// console.log("4th y+ x-",angle)
	XX=angle*1000/360

}
 
else {//SHOULDN'T HAPPEN
	console.log("WTF MATE x",xx,"y",yy)
}

 
//////////////////////BEGIN////CONTROL///////////////////////////////

if (is_key_down('ArrowLeft')  ){
 
 	attitude-=0.2
console.log("attitude",attitude) 

}
if (is_key_down('ArrowRight') ){
 
	attitude+=0.2

}
if (is_key_down('ArrowUp')  ){
//   burnX+=0.00001
//   burnY+=0.00001
accelerateInDirectionOfTravel()
// justAddVy()
}
else{
	burnX=0
	burnY=0
}
// attitude=Math.round(attitude)%360

let negangle=0
if (groundmode){ 
 negangle=angle*-1 + attitude
}
else{
	negangle= attitude + 90
}
////////////////////TEST//////MOVEMENT///////////////
// if ( Math.round(y) === 350 &&  x < 500){
// 	console.log("firing")
// 	vy+=0.01
// }
// else{
// 	testYacc=0	
// }
/////////////////////////////


///////////////////////////////BEGIN////////////////////DISPLAY//////////////////////
attitudeY=Math.sin(attitude - 180)
attitudeX=Math.cos(attitude - 180)
 
lander.style.transform       = 'rotate('+negangle+'deg)'; 
// textbox.innerHTML="Altitude: "+Math.round(dist)+"<br> Vx: "+Math.round(vx*100)/100+"<br> Vy: "+Math.round(vy*100)/100 
textbox.innerHTML="Altitude: "+Math.round(dist)+"<br> Ax: "+Math.round(ax*100000)/100000+"<br> Ay: "+Math.round(ay*100000)/100000 +"<br>acc:" + Math.round(acceleration*10000000)/10000000
  
let YY=dist
 
elapsedTime++
 
 
if ( groundmode ){ 
	ground.className = "not";
	moon.className ="hide"
	lander.style.position = 'absolute';	
lander.style.left=XX+"px";
lander.style.top=700-YY+"px";
// lander.style.bottom=YY+"px";
}
else{
	ground.className = "hide";
	moon.className ="not";
	lander.style.position = 'absolute';	
lander.style.left=X+"px";
lander.style.top=Y+"px";
}
}