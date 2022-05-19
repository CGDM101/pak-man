let x=51;
let y=51;
let direction="right"
 
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

for (let i=0; i < 10 ; i++){
	for(let j=0; j < 10 ; j++){

		let node = document.createElement("img");
		if (maze[i][j]){
 
			node.src="wallsegment.png"
 
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


 

function listenAndMove()
{

  
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



	if (is_key_down('ArrowLeft')  && !maze[ TLy ][ TLx ] && !maze[BLy][BLx] ){
		direction="left"
		x--
		redefine()
		if(maze[ TLy ][ TLx ]  || maze[BLy][BLx]){
			// console.log("this happens!")
			x+=2
		}

	}
	if (is_key_down('ArrowRight')  && !maze[TRy][TRx] && !maze[BRy][BRx]){
		direction="right"
		x++
		redefine()
		if(maze[TRy][TRx] || maze[BRy][BRx]){
			x-=2
		}
 
	}
 
	if (is_key_down('ArrowUp' )  && !maze[TLy][TLx] && !maze[TRy][TRx]    ){

		direction="up"
		y--
		redefine()
		if(maze[TLy][TLx]  || maze[TRy][TRx]){
			y+=2
		}
	}
		 
	 
	if (is_key_down('ArrowDown'  )   && !maze[BLy][BLx] && !maze[BRy][BRx]   ){

		direction="down"
		// console.log("This doesn't happen?")
		y++
		// document.getElementById("pacimg").style.display="none";
		// console.log(document.getElementById("pacimg"))
		redefine()
		if(maze[BLy][BLx] || maze[BRy][BRx]){
			y-=2
		}
 
 
	}

	// function addNewClass(elem){   elem.className="newClass"; }
 
	pacman.style.left=x+"px";
	pacman.style.top=y+"px";
}