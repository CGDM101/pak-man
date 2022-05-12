
let x=51;
let y=51;
let pinkyX=250
let pinkyY=250
let pinkyTargetX=250
let pinkyTargetY=250

keepGoing=true

let maze = [
[true,true ,true ,true ,true ,true ,true ,true ,true ,true],	
[true,false,false,true,false,false,false,false,false,true],
[true,false,false,true,false,false,false,false,false,true],
[true,false,false,true,false,false,false,false,false,true],
[true,false,true,true,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,false,false,false,false,true],
[true,false,false,false,false,true,false,false,false,true],
[true,false,false,false,false,true,false,false,false,true],
[true,true ,true ,true ,true ,true ,true ,true ,true ,true]
] //2d array bool

let visited =  [
	[true,true ,true ,true ,true ,true ,true ,true ,true ,true],	
	[true,false,false,true,false,false,false,false,false,true],
	[true,false,false,true,false,false,false,false,false,true],
	[true,false,false,true,false,false,false,false,false,true],
	[true,false,true,true,false,false,false,false,false,true],
	[true,false,false,false,false,false,false,false,false,true],
	[true,false,false,false,false,false,false,false,false,true],
	[true,false,false,false,false,true,false,false,false,true],
	[true,false,false,false,false,true,false,false,false,true],
	[true,true ,true ,true ,true ,true ,true ,true ,true ,true]
	] 

for (let a=0; a < 10 ; a++){
	for(let b=0; b < 10 ; b++){
		visited[a][b]=maze[a][b]
	}
}
 
for (let i=0; i < 10 ; i++){
	for(let j=0; j < 10 ; j++){

		let node = document.createElement("img");
		if (maze[i][j]){
 
			node.src="wallsegment.png"
 
		}
		else if (!visited[i][j] && !maze[i][j]){
			node.src="pill.png"
		}
		else{
 
			node.src="empty.png"
		}
		document.getElementById("inner-labyrinth").appendChild(node);
	}
 }
 
// kopierat från SO, hajar inte...
"use strict";

const is_key_down = (() => {
	const state = {};

window.addEventListener('keyup', (e) => state[e.key] = false);
window.addEventListener('keydown', (e) => state[e.key] = true);

	return (key) => state.hasOwnProperty(key) && state[key] || false;
	})();
//----------------
 
setInterval(listenAndMove,1);
// setInterval(moveGhosts,1);
 
function moveGhosts(){
	// if ( pinkyY===pinkyTargetY && pinkyX === pinkyTargetX){
	if (  pinkyX === pinkyTargetX){
		pinkyTargetX= Math.floor(Math.random() * 400) + 80
		// pinkyTargetY= Math.floor(Math.random() * 480);

	}
	if (  pinkyY === pinkyTargetY){
		pinkyTargetY= Math.floor(Math.random() * 400) +80
		// pinkyTargetY= Math.floor(Math.random() * 480);
		
	}
	let coinFlip=Math.floor(Math.random() * 2) 
 
	if (coinFlip===0){
		if (pinkyTargetX > pinkyX){
		pinkyX++
		}
		else{
			pinkyX--
		}
	}
	else{
		if (pinkyTargetY > pinkyY){
			pinkyY++
			}
			else{
				pinkyY--
			}
	}
// console.log("I do noting!")
}
 

function checkVisited(){
	for( let e=0 ; e <10 ; e++){
		for (let f=0 ; f <10 ; f++){
			if (!visited[e][f]){
				return false
			}
		}
	}
	return true
}

function listenAndMove()
{
	if (keepGoing && document.readyState === 'complete'){ 
  
	let TLx=Math.trunc(x/50)
	let TLy=Math.trunc(y/50)
	let TRx=Math.trunc((x+30)/50)
	let TRy=Math.trunc(y/50)
	let BLx=Math.trunc(x/50)
	let BLy=Math.trunc((y+30)/50)
	let BRx=Math.trunc((x+30)/50)
	let BRy=Math.trunc((y+30)/50)
	 
	function redefine() {
		// console.log("hi there!")
	  TLx=Math.trunc(x/50)
	  TLy=Math.trunc(y/50)
	  TRx=Math.trunc((x+30)/50)
	  TRy=Math.trunc(y/50)
	  BLx=Math.trunc(x/50)
	  BLy=Math.trunc((y+30)/50)
	  BRx=Math.trunc((x+30)/50)
	  BRy=Math.trunc((y+30)/50)	
	}

 

	// let TLx=(x)
	// let TLy=(y)
	// let TRx=(x+30)
	// let TRy=(y)
	// let BLx=(x)
	// let BLy=(y+30)
	// let BRx=(x+30)
	// let BRy=(y+30)
	visited[TLy][TLx]=true
	visited[BLy][BLx]=true
	visited[TRy][TRx]=true
	visited[BRy][BRx]=true
	if (is_key_down('ArrowLeft')  && !maze[ TLy ][ TLx ] && !maze[BLy][BLx] ){
 
		x--
		redefine()
		if(maze[ TLy ][ TLx ]  || maze[BLy][BLx]){
			// console.log("this happens!")
			x+=2
		}
	}
	if (is_key_down('ArrowRight')  && !maze[TRy][TRx] && !maze[BRy][BRx]){
 
		x++
		redefine()
		if(maze[TRy][TRx] || maze[BRy][BRx]){
			x-=2
		}
	}
	// && !maze[gridYminus][gridX] 
	if (is_key_down('ArrowUp' )  && !maze[TLy][TLx] && !maze[TRy][TRx]    ){

 
		y--
		redefine()
		if(maze[TLy][TLx]  || maze[TRy][TRx]){
			y+=2
		}
	}
		 
	 
	if (is_key_down('ArrowDown'  )   && !maze[BLy][BLx] && !maze[BRy][BRx]   ){
 
		y++
		redefine()
		if(maze[BLy][BLx] || maze[BRy][BRx]){
			y-=2
		}
	}
	moveGhosts()
	pacman.style.left=x+"px";
	pacman.style.top=y+"px";
	pinky.style.left=pinkyX+"px";
	pinky.style.top=pinkyY+"px";
	let count=1
	 
	for ( let c=0; c <10 ; c++){
			for (d=0; d<10;d++){
				if ( visited[c][d] && !maze[c][d]){
				// if ( maze[c][d]){
 
				// if (c===2 && d===2){
					//const third = document.querySelector('#parent :nth-child(3)');
					let child=document.querySelector('#inner-labyrinth :nth-child('+count+')')
					// console.log("count:",count,"c",c,"d",d, "child",child)
					child.src="empty.png"
				}
				count++
			}
		
	}

	// console.log("x+15:",x+15,"pinkyX +24:",pinkyX+24,"y+15:",y+15,"pinkyY+24:",pinkyY +24)
	if( Math.abs((x+15) - (pinkyX +24 )  ) < 33 &&  Math.abs((y+15)-(pinkyY +25 )   )< 33 ){
		// console.log("x,pinkyX,y,pinkyY",x,pinkyX,y,pinkyY)
	 keepGoing=false
	 
	alert("Game Over");
	window.location.reload(true);
	}
	let status=checkVisited()
	if (status ){
		alert("You Beat the Game!");
		window.location.reload(true);
	}
 } 
}
	



