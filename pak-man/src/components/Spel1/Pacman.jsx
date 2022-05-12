import pakstyle from './pakstyle.css';
import Pacmini from './Pacmini.png';
import Pinky from './Pinky.png';

const rawHTML = `
<div>
<html>
    <head>
        <title>Pakman</title>
        <link href="pakstyle.css" rel="stylesheet">
    </head>

     
    
    <body>
        <div id="labyrinth">
 
            <div id="inner-labyrinth">



            </div>
            <div id ="pacman">
				
				<img src="Pacmini.png"/>
				
			</div>
			
			<div id="pinky"><img src="Pinky.png"/></div>
			
        </div>
    </body>


    <script src="pakscript.js"></script> 
    
</html>

</div>
`;

const Pacman = () => {

  
	return (
	  <div>
    <html>
    <head>
        <title>Pakman</title>
        <link href={pakstyle} rel="stylesheet" />
    </head>
    <body>
        <div id="labyrinth">
 
            <div id="inner-labyrinth">



            </div>
            <div id ="pacman">
				
				<img src={Pacmini}/>
				
			</div>
			
			<div id="pinky"><img src="Pinky.png"/></div>
			
        </div>
    </body>
    
    
</html>

    
</div>
	  

	);
  };
  
  export default Pacman;

  