// let x=850

// let x=1000
let x=850
let y=350
 
let vx=0
let omega=0
let debugx =  850
let debugy =  350
let thrusty=0
let thrustx=0
let goon=true
let intervalId=0

// let vy=0.044721359549995793928183 //sqrt (1/500)
let vy=0.049721359549995793928183 //sqrt (1/500)

//  let vy=0.05345224837 // a=v^2/r -> v=sqrt(ra) -> v=sqrt (0.000008163265301*350)=0.05345224837...
//  let vy=0.05745224837 // a=v^2/r -> v=sqrt(ra) -> v=sqrt (0.000008163265301*350)=0.05345224837...

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
let screen=0
 
let mountains0 = [
	[false,true ,false,false,false,false,false,false,false,false,false,true ,false,false,false,false,false,false,false,false],	
	[false,true ,true ,false,false,false,false,true ,false,false,false,true ,true ,false,false,false,false,true ,false,false],
	[true ,true ,true ,false,false,false,false,true ,true ,false,true ,true ,true ,false,false,false,false,true ,true ,false],
	[true ,true ,true ,false,false,false,false,true ,true ,true,true ,true  ,true ,false,false,false,false,true ,true ,true],	
	[true ,true ,true ,true ,true ,true ,true ,true ,true ,true,true ,true  ,true ,true ,true ,true ,true ,true ,true ,true]
 
	] 

	let mountains1 = [
		[false,true ,false ,false,false,true,false,false,false,false,false,true  ,false,false ,false,false,false,false,true,false],	
		[true ,true ,false ,false,false,true,false,true ,false,false,true ,true  ,true ,false ,false,false,false,true ,true,false],
		[true ,true ,false ,false,false,true,false,true ,true ,false,true ,true  ,true ,false ,false,false,false,true ,true ,false],
		[true ,true ,false ,false,true ,true,false,true ,true ,true ,true ,true  ,true ,false ,true ,false,false,true ,true ,true],	
		[true ,true ,true  ,true ,true ,true,true ,true ,true ,true ,true ,true  ,true ,true  ,true ,true ,true ,true ,true ,true]
	 
		] 

		let mountains2 = [
			[false,false ,false,false,false,false,false,false,false,false,false ,false ,false,false,false,false,false,false,false,false],	
			[false,false ,true ,false,false,false,false,false ,false,false,false,false ,false ,false,false,false,false,true ,false,false],
			[true ,false ,true ,false,false,false,false,false ,true ,false,true ,false ,false ,false,false,false,false,true ,false ,false],
			[true ,false ,true ,false,true ,false,true ,false ,true ,false,true ,false ,true ,false,false,true,false,true ,false ,true],	
			[true ,true  ,true ,true ,true ,true ,true ,true  ,true ,true ,true ,true  ,true ,true ,true ,true ,true ,true ,true ,true]
		 
			] 		

			let mountains3 = [
				[false,true ,true ,false,false,false,false,false,false,true,false,true ,false,false,false,true ,false,false,false,false],	
				[true ,true ,true ,false,true ,false,true ,true ,false,true,false,true ,true ,false,false,true ,false,true ,true,false],
				[true ,true ,true ,false,true ,false,true ,true ,true ,true,true ,true ,true ,false,true ,true ,false,true ,true ,false],
				[true ,true ,true ,false,true ,false,true ,true ,true ,true,true ,true ,true ,false,true ,true ,false,true ,true ,true],	
				[true ,true ,true ,true ,true ,true ,true ,true ,true ,true,true ,true ,true ,true ,true ,true ,true ,true ,true ,true]
			 
				] 
	space.style.backgroundImage = "url('space0.jpg')"; 
for (let i=0; i < 5 ; i++){
	for(let j=0; j < 20 ; j++){
		// console.log("i",i,"j",j)
		let node = document.createElement("img");
		if (mountains0[i][j] && i < 4){
 
			node.src="lunarsurface.png"
 
		}
		else if (mountains0[i][j]){
			node.src="lunarsurface2.png"
		}
 		else{
 
			node.src="empty2.png"
		}
		document.getElementById("ground").appendChild(node);
	}
 }

 
// kopierat från SO, hajar inte...
"use strict";
//////////////BEGIN////KEYLISTENER////////////////////
const is_key_down = (() => {
	const state = {};

window.addEventListener('keyup', (e) => state[e.key] = false);
window.addEventListener('keydown', (e) => state[e.key] = true);

	return (key) => state.hasOwnProperty(key) && state[key] || false;
	})();

////////////Switch//To//Groundmode//////////////////
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
		groundmode=!groundmode
    }
}


/////////////////////////SETINTERVAL///////////////////////
if (goon){
intervalId=setInterval( moveLander,1 );
// setInterval(moveLander,10000);
}
else{
	console.log("NOT GOON")
}

///////////////////HELP///FUNCTIONS/////////////////
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

function checkCrash(angle,XX,dist){
	// console.log("debug: angle",angle,"XX",XX,"dist",dist)
	
	let mx=Math.round(XX/50)
	// let my=Math.round((dist-250)/10)
	let my=Math.round((dist-300)/10)
	
	// console.log("debug: angle",angle,"XX",XX,"dist",dist,"mx",mx,"my",my)

	console.log("angle",angle,"XX",XX,"mx",mx,"my",my)
	if (my > 4) return false
	else if (angle >= 0 && angle < 90){
		return mountains0[4-my][mx]
	}
	else if (angle >= 90 && angle < 180){
		return mountains1[4-my][mx]		
	}
	else if (angle >= 180 && angle < 270){
		return mountains2[4-my][mx]		
	}
	else if (angle >= 270 && angle < 360){
		return mountains3[4-my][mx]		
	}
}

function switchMountains (num){
 

	 
	let target = document.getElementById("ground")
	removeChilds(target)
	if (num===0){ 
	// document.body.style.backgroundImage = "url('img_tree.png')"; 
	space.style.backgroundImage = "url('space0.jpg')"; 

	for (let i=0; i < 5 ; i++){
		for(let j=0; j < 20 ; j++){
			// console.log("i",i,"j",j)
			let node = document.createElement("img");
			if (mountains0[i][j] && i < 4){
	 
				node.src="lunarsurface.png"
	 
			}
			else if (mountains0[i][j]){
				node.src="lunarsurface2.png"
			}
			 else{
	 
				node.src="empty2.png"
			}
			document.getElementById("ground").appendChild(node);
		}
	 }
	}
	else if (num===1)
		{
 
				// space.style.backgroundImage = "url('space1.jpg')";
				space.style.backgroundImage = "url('space1.png')";

		for (let i=0; i < 5 ; i++){
			for(let j=0; j < 20 ; j++){
				// console.log("i",i,"j",j)
				let node = document.createElement("img");
				if (mountains1[i][j] && i < 4){
		 
					node.src="lunarsurface.png"
		 
				}
				else if (mountains1[i][j]){
					node.src="lunarsurface2.png"
				}
				 else{
		 
					node.src="empty2.png"
				}
				document.getElementById("ground").appendChild(node);
			}
		 }
	}

	else if (num===2)
	{
 
	space.style.backgroundImage = "url('space2.png')";
	for (let i=0; i < 5 ; i++){
		for(let j=0; j < 20 ; j++){
			// console.log("i",i,"j",j)
			let node = document.createElement("img");
			if (mountains2[i][j] && i < 4){
	 
				node.src="lunarsurface.png"
	 
			}
			else if (mountains2[i][j]){
				node.src="lunarsurface2.png"
			}
			 else{
	 
				node.src="empty2.png"
			}
			document.getElementById("ground").appendChild(node);
		}
	 }

	 
	}
	else if (num===3)
	{
		space.style.backgroundImage = "url('space3.jpg')";		
	for (let i=0; i < 5 ; i++){
		for(let j=0; j < 20 ; j++){
			// console.log("i",i,"j",j)
			let node = document.createElement("img");
			if (mountains3[i][j] && i < 4){
	 
				node.src="lunarsurface.png"
	 
			}
			else if (mountains3[i][j]){
				node.src="lunarsurface2.png"
			}
			 else{
	 
				node.src="empty2.png"
			}
			document.getElementById("ground").appendChild(node);
		}
	 }
}
}

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

function accelerateInDirectionPointing (){
	console.log("hi again!")
	vx+=thrustx
	vy+=thrusty
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
	// XX=(angle)*1000/360
 
	XX=(angle*4*1000/360)%1000
 
 
	// console.log("1st y+ x+",angle)
}
 
else if (xx  < 0 && yy >=  0) {  //2ndQUAD
	// XX=(((Math.PI -  Math.abs(Math.asin(yy/dist)))/2*Math.PI)*1000)
	angle = toDegrees( Math.PI - Math.abs(Math.asin(yy/dist)  ))       
	XX=(angle*4*1000/360)%1000

	// console.log("2nd y- x+",x,y,angle)
}
 
else if (yy <  0 && xx <  0){ //3rdQUAD
	// XX=(((Math.PI + Math.abs(Math.asin(yy/dist)))/2*Math.PI)*1000)  
	angle = toDegrees( Math.PI + Math.abs(Math.asin(yy/dist)))      
	// console.log("3rd y- x-",angle)
	XX=((angle-180)*4*1000/360)%1000

}
 
else if (xx >=  0 && yy < 0) {  
	// XX=(((2*Math.PI - Math.abs(Math.asin(yy/dist)))/2*Math.PI)*1000)
	angle = toDegrees( 2*Math.PI - Math.abs(Math.asin(yy/dist) ) )            
	// console.log("4th y+ x-",angle)
	XX=((angle-180)*4*1000/360)%1000

}
 
else {//SHOULDN'T HAPPEN
	console.log("WTF MATE x",xx,"y",yy)
}

 
//////////////////////BEGIN////CONTROL///////////////////////////////

if (is_key_down('ArrowLeft')  ){
	omega-=0.01
	landerimg.src='lander4l.png'
 	// attitude-=0.2
// console.log("attitude",attitude) 

}
else if (is_key_down('ArrowRight') ){
	omega+=0.01
	// attitude+=0.2
	landerimg.src='lander4r.png'

}

if (!is_key_down('ArrowRight') && !is_key_down('ArrowLeft') && !is_key_down('Insert') ){
	landerimg.src='lander4.png'	
}
// if (is_key_down('ArrowUp')  ){
if (is_key_down('Insert')  ){
	landerimg.src='lander4f.png'
 

// accelerateInDirectionOfTravel()

accelerateInDirectionPointing()
 
}
else{
	burnX=0
	burnY=0
}
// attitude=Math.round(attitude)%360
attitude+=omega

// console.log("attitude",attitude)

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
// attitudeY=Math.sin(attitude - 180)
// attitudeX=Math.cos(attitude - 180)
 
//  thrustx=0.00001*Math.cos(toRadians(attitude +90))
//  thrusty=0.00001*Math.sin(toRadians(attitude +90))

 thrustx=0.00001*Math.cos(toRadians(attitude ))
 thrusty=0.00001*Math.sin(toRadians(attitude ))

lander.style.transform       = 'rotate('+negangle+'deg)'; 
// textbox.innerHTML="Altitude: "+Math.round(dist)+"<br> Vx: "+Math.round(vx*100)/100+"<br> Vy: "+Math.round(vy*100)/100 
// textbox.innerHTML="Altitude: "+Math.round(dist-250)+"<br> Ax: "+Math.round(ax*10000000)/100000+"<br> Ay: "+Math.round(ay*10000000)/100000 +"<br>acc:" + Math.round(acceleration*10000000)/10000000
textbox.innerHTML="Altitude: "+Math.round(dist-250)+"<br> Vx: "+Math.round(vx*10000000)/100000+"<br> Vy: "+Math.round(vy*10000000)/100000 
  
let YY=dist
 
elapsedTime++
 
 
if ( groundmode ){ 
	ground.className = "not";
	ground.style.display = "grid";
	moon.className ="hide"
	lander.style.position = 'absolute';	
	// lander.style.left=XX+"px";
	// console.log("XX",XX)

	lander.style.left=XX+"px";
	lander.style.top=700-(YY-250)+"px";
	// lander.style.bottom=YY-550+"px";


	// if (XX >= 999 && screen===0){//Använd angle istället
	if (screen!=0 && angle >= 0 && angle < 90){//Använd angle istället
			switchMountains(0)
			screen=0
	}
	// else if (XX >= 999 && screen===1)
	else if (screen!=1 && angle >= 90 && angle < 180)
	{
		switchMountains(1)
		screen=1
	}
	else if (screen!=2 && angle >= 180 && angle < 270)
	{
		switchMountains(2)
		screen=2
	}
	else if (screen!=3 && angle >= 270 && angle < 360)
	{
		switchMountains(3)
		screen=3
	}	
// lander.style.bottom=YY+"px";
}
else{
	// ground.className = "hide";
	ground.style.display = "none";
	moon.className ="not";
	lander.style.position = 'absolute';	

// lander.style.left=X+"px";
// lander.style.top=Y+"px";

lander.style.left=(500 +((X-500)*0.4 ) )+"px";
lander.style.top=(350 +((Y-350)*0.4 ) )+"px";
}

// if (angle < 90 && angle >= 0){

	if (!isNaN(angle)){ 
// checkCrash(angle,XX,dist)
 

	if (checkCrash(angle,XX,dist)){
		alert("You crashed.Game Over!");
		goon=false
		clearInterval( intervalId)
		return
	}
	else if (dist < 295 && dist > 250 && Math.abs(vx) < 0.005 && Math.abs(vy) < 0.005 ){
		alert("You have landed!");
		goon=false
		clearInterval( intervalId)
		return

	}
}

}