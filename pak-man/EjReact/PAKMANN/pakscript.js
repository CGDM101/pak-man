  
let x=51;
let y=51;
let pinkyX=250
let pinkyY=250
let pinkyTargetX=250
let pinkyTargetY=250
let blinkyTargetX=450
let blinkyTargetY=450
let inkyX=350
let inkyY=350
let blinkyX=375
let blinkyY=375
let inkyTargetX=150
let inkyTargetY=150
let dir=0
let oppositeDir=1
let count=0
let start=false
 
function startgame(){
	start=true
	startscreen.className='hide'
}

keepGoing=true

let maze = [
[true,true ,true ,true ,true ,true ,true ,true ,true ,true],	
[true,false,true ,false,true,false,false,false,false,true],
[true,false,true ,false,true,false,true,false ,true,true],
[true,false,false,false,true,true ,true ,false ,true,true],
[true,true, true ,false,true,false,false,false,false,true],
[true,false,false,false,false,false,true,true,false,true],
[true,false,true ,false,true,false,true,false,false,true],
[true,false,true ,true ,true,false,true,false,true,true],
[true,false,false,false,false,false,false,false,false,true],
[true,true ,true ,true ,true ,true ,true ,true ,true ,true]
] 

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

function moveBlinky() {
	let distance = getDistance(blinkyX,blinkyY,x,y)
	if (distance < 150){ 
		console.log("detected")
		blinkyTargetX=x
		blinkyTargetY=y 
	 }
	 
 
				if (  blinkyX === blinkyTargetX){
					blinkyTargetX= Math.floor(Math.random() * 400) + 80
				}
				if (  blinkyY === blinkyTargetY){
					blinkyTargetY= Math.floor(Math.random() * 400) +80
 				}
				let coinFlip=Math.floor(Math.random() * 2) 
			 
				if (coinFlip===0){
					if (blinkyTargetX > blinkyX){
					blinkyX++
					}
					else{
						blinkyX--
					}
				}
				else{
					if (blinkyTargetY > blinkyY){
						blinkyY++
						}
						else{
							blinkyY--
						}
				}
}

function getDistance (X,Y,x,y){
return Math.sqrt((X-x)*(X-x)+ (Y-y)*(Y-y))
}
  function fightApathyOrDont(){
	if (start){
	listenAndMove()
	}
	else
	{
		// console.log("waiting...")
	}
  }
 
// setInterval(listenAndMove,1);
setInterval(fightApathyOrDont,1);
 
function moveGhosts(){
 
		if (  inkyX === inkyTargetX){
			inkyTargetX= Math.floor(Math.random() * 400) + 80
		}
		if (  inkyY === inkyTargetY){
			inkyTargetY= Math.floor(Math.random() * 400) +80
		}
		let coinFlip=Math.floor(Math.random() * 2) 
	 
		if (coinFlip===0){
			if (inkyTargetX > inkyX){
			inkyX++
			}
			else{
				inkyX--
			}
		}
		else{
			if (inkyTargetY > inkyY){
				inkyY++
				}
				else{
					inkyY--
				}
		}
	}

function moveGhosts2(){
 
		if (dir===0){
			chooseDir(0)
		}

		function numDirs(){
			let numblocked=0

			let GTLx=Math.trunc(pinkyX/50)
			let GTLy=Math.trunc(pinkyY/50)
			let GTRx=Math.trunc((pinkyX+48)/50)
			let GTRy=Math.trunc(pinkyY/50)
			let GBLx=Math.trunc(pinkyX/50)
			let GBLy=Math.trunc((pinkyY+48)/50)
			let GBRx=Math.trunc((pinkyX+48)/50)
			let GBRy=Math.trunc((pinkyY+48)/50)
 
			return (numblocked)
			
		}

	 function chooseDir(not) {
		 count=0 
			do{ 
	 		dir=Math.floor(Math.random() * 4) + 1 
 
			}while(   dir === not )
 			
	 }

	 let GTLx=Math.trunc(pinkyX/50)
	 let GTLy=Math.trunc(pinkyY/50)
	 let GTRx=Math.trunc((pinkyX+49)/50)
	 let GTRy=Math.trunc(pinkyY/50)
	 let GBLx=Math.trunc(pinkyX/50)
	 let GBLy=Math.trunc((pinkyY+49)/50)
	 let GBRx=Math.trunc((pinkyX+49)/50)
	 let GBRy=Math.trunc((pinkyY+49)/50)

	 function redefineGhost() {
		  GTLx=Math.trunc(pinkyX/50)
		  GTLy=Math.trunc(pinkyY/50)
		  GTRx=Math.trunc((pinkyX+49)/50)
		  GTRy=Math.trunc(pinkyY/50)
		  GBLx=Math.trunc(pinkyX/50)
		  GBLy=Math.trunc((pinkyY+49)/50)
		  GBRx=Math.trunc((pinkyX+49)/50)
		  GBRy=Math.trunc((pinkyY+49)/50)
	}

	count++
	switch(dir){
		case 1:
 
 
				oppositeDir=2				
			if ( !maze[ GTLy ][ GTLx ] && !maze[GBLy][GBLx] ){
 
				pinkyX--
				redefineGhost()
				if(maze[ GTLy ][ GTLx ]  || maze[GBLy][GBLx]){
 
					pinkyX+=1
					chooseDir(oppositeDir)
				}
				if (count===100){
					chooseDir(oppositeDir)
				}
				
			}
		break;
		
		case 2:
 

			oppositeDir=1
			if (  !maze[GTRy][GTRx] && !maze[GBRy][GBRx]){
 
				pinkyX++
				redefineGhost()
				if(maze[GTRy][GTRx] || maze[GBRy][GBRx]){
					pinkyX-=1
					chooseDir(oppositeDir)
				}
				if (count===100){
					chooseDir(oppositeDir)
				}
			}
		break;

		case 3:
 

			oppositeDir=4
			if (   !maze[GTLy][GTLx] && !maze[GTRy][GTRx]    ){
 
				pinkyY--
				redefineGhost()
				if(maze[GTLy][GTLx]  || maze[GTRy][GTRx]){
					pinkyY+=1
					chooseDir(oppositeDir)
				}
				if (count===100){
					chooseDir(oppositeDir)
				}
			}
		break;

		case 4:
 

			oppositeDir=3
			if (  !maze[GBLy][GBLx] && !maze[GBRy][GBRx]   ){

					   pinkyY++
					   redefineGhost()
					   if(maze[GBLy][GBLx] || maze[GBRy][GBRx]){
						  pinkyY-=1
						  chooseDir(oppositeDir)
					   }
					   if (count===100){
						chooseDir(oppositeDir)
					}
				   }		
		break;
	}
 
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
		pacman.className = 'left';
		x--
		redefine()
		if(maze[ TLy ][ TLx ]  || maze[BLy][BLx]){
			x+=2
		}
	}
	if (is_key_down('ArrowRight')  && !maze[TRy][TRx] && !maze[BRy][BRx]){
		pacman.className = 'right';
		x++
		redefine()
		if(maze[TRy][TRx] || maze[BRy][BRx]){
			x-=2
		}
	}
 
	if (is_key_down('ArrowUp' )  && !maze[TLy][TLx] && !maze[TRy][TRx]    ){
		pacman.className = 'up';
 
		y--
		redefine()
		if(maze[TLy][TLx]  || maze[TRy][TRx]){
			y+=2
		}
	}
		 
	 
	if (is_key_down('ArrowDown'  )   && !maze[BLy][BLx] && !maze[BRy][BRx]   ){
 
 pacman.className = 'down';
		y++
		redefine()
		if(maze[BLy][BLx] || maze[BRy][BRx]){
			y-=2
		}
	}
	moveGhosts2()
	let coinFlip2=Math.floor(Math.random() * 3)
	if (coinFlip2===0){
	moveGhosts()
	}
	else if (coinFlip2===1){
		moveBlinky()
	}
	pacman.style.left=x+"px";
	pacman.style.top=y+"px";
	pinky.style.left=pinkyX+"px";
	pinky.style.top=pinkyY+"px";
	inky.style.left=inkyX+"px";
	inky.style.top=inkyY+"px";
 
	blinky.style.left=blinkyX+"px"; 
	blinky.style.top=blinkyY+"px";	
	circle.style.display="inline"
	circle.style.left=blinkyX-127+"px";
	circle.style.top=blinkyY-127+"px";
	let count=1
	 
	for ( let c=0; c <10 ; c++){
			for (d=0; d<10;d++){
				if ( visited[c][d] && !maze[c][d]){
					let child=document.querySelector('#inner-labyrinth :nth-child('+count+')')
					child.src="empty.png"
				}
				count++
			}
		
	}
	if  
	( 
		Math.abs((x+15) - (pinkyX +24 )  ) < 33 &&  Math.abs((y+15)-(pinkyY +25 )   )< 33 
		||
		Math.abs((x+15) - (inkyX +24 )  ) < 33 &&  Math.abs((y+15)-(inkyY +25 )   )< 33 
		||
		Math.abs((x+15) - (blinkyX +24 )  ) < 33 &&  Math.abs((y+15)-(blinkyY +25 )   )< 33 
	)
		
	{
	 keepGoing=false
	 
	alert("Game Over");
	window.location.reload(true);
	}
	let status=checkVisited()
	if (status ){
		keepGoing=false
		alert("You Beat the Game!");
		window.location.reload(true);
	}
 } 
}
 