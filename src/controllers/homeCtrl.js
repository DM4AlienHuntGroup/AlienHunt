function homeCtrl( $scope, homeService ) {
	const getUser = () => {
		homeService.getUser().then((response)=>{
			$scope.options = true;
			$scope.user = response.data
		})
	}
	$scope.getScoreboard = () => {
		homeService.getScoreboard().then( ( response ) => {
			$scope.scores = response.data
		})
	}
	$scope.play = () => {
		var renderer = PIXI.autoDetectRenderer(
			window.innerWidth, window.innerHeight, { backgroundColor : 0x000000 }
		);

		/// Renders game on view
		document.body.appendChild(renderer.view);

		// prior to scaling, sets width/height.
		const MAX_X = 800;
		const MAX_Y = 600;

		//creates container in which all elements will be contained.
		var stage = new PIXI.Container();

		// windowScale creates the number by which scale size is determined (container height / actual window size)
		// ex. window.innerHeight = 960, Max_Y = 600, windowScale = 1.6, so rendered stage with be 160% of actual size.
		var windowScale = window.innerHeight / MAX_Y;

		// takes the rendered width , subtracting the scaled width of the stage, divides by two to find needed left margin to center the stage element within the canvas
		var centerStage = (renderer.view.clientWidth - ( MAX_X * windowScale ) ) / 2;

		//adds left Margin to the stage, ensuring it is centered on the screen.
		stage.transform.position.set(centerStage, 0)



		renderer.view.style.display = 'flex';
		renderer.view.style.justifyContent = 'space-around';
		renderer.view.style.width = '100%';
		renderer.view.style.height = '100%';



		stage.scale.set(windowScale);

		const spaceship1 = PIXI.Texture.fromImage('./imgs/spaceship1.png');
		const spaceship2 = PIXI.Texture.fromImage('./imgs/spaceship2.png');
		const spaceship3 = PIXI.Texture.fromImage('./imgs/spaceship3.png');

		const oneLaserdot  = PIXI.Texture.fromImage('./imgs/oneLaserdot.png');
		const twoLaserdots = PIXI.Texture.fromImage('./imgs/twoLaserdots.png');
		const threeLaserdots = PIXI.Texture.fromImage('./imgs/threeLaserdots.png');


		const alienStop1 = PIXI.Texture.fromImage('./imgs/alienStop1.png');
		const alienStop2 = PIXI.Texture.fromImage('./imgs/alienStop2.png');
		const alienStop3 = PIXI.Texture.fromImage('./imgs/alienStop3.png');

		const alienStep1 = PIXI.Texture.fromImage('./imgs/alienStep1.png');
		const alienStep2 = PIXI.Texture.fromImage('./imgs/alienStep2.png');
		const alienStep3 = PIXI.Texture.fromImage('./imgs/alienStep3.png');

		const alienLaughing1 = PIXI.Texture.fromImage('./imgs/AlienLaughing1.png');
		const alienLaughing2 = PIXI.Texture.fromImage('./imgs/AlienLaughing2.png');

		const shot1 = PIXI.Texture.fromImage('./imgs/shot.png');

		const flashTexture = PIXI.Texture.fromImage('./imgs/flash.png');

		const transparent = PIXI.Texture.fromImage('./imgs/transparent.png');

		const alien = new PIXI.Sprite(alienStep1);
		const spaceship = new PIXI.Sprite(spaceship1);
		const laserDots = new PIXI.Sprite(threeLaserdots);
		const shot = new PIXI.Sprite(shot1);
		const alienLaughing = new PIXI.Sprite(alienLaughing1);
		const flash = new PIXI.Sprite(transparent);


		var background = new PIXI.Sprite.fromImage('./imgs/Background.png');
		var grass = new PIXI.Sprite.fromImage('./imgs/GrassBoard.png');
		let hunted = false;
		let laserCount = 0;
		let score = 0
		let scoreNumber = new PIXI.Text('0',{fontFamily : 'VT323', fontSize: 24, fill : '#fff', align : 'center' });
		var scoreImg = new PIXI.Sprite.fromImage('./imgs/scoreImg.png');

		//sounds
		const laserShoot = new Howl( { src: '../../sounds/Laser_Shoot.wav' } )
		const huntedSound = new Howl( { src: '../../sounds/huntedSound.mp3' } )
		const explosion = new Howl( {
			src: '../../sounds/Explosion.wav'
			, onend: function() {
    huntedSound.play()
  }
		 } )
		const spaceshipMove = new Howl( { src: '../../sounds/spaceshipMove.wav' , volume: 0.4 } )
		const laugh = new Howl( { src: '../../sounds/laughing.mp3' } );


			grass.anchor.y = 1;
			grass.position.y = 600;
			grass.scale.x = 3.2;
			grass.scale.y = 2.2;

			laserDots.anchor.set = 0.5;
			laserDots.position.y = 548;
			laserDots.position.x = 76.5;
			laserDots.scale.x = 0.96;
			laserDots.scale.y = 0.72;

			shot.anchor.set = 0.5;
			shot.position.y = 565;
			shot.position.x = 79.5;
			shot.scale.x = 0.32;
			shot.scale.y = 0.27;

			background.scale.set(MAX_Y * 0.0013)

		  alien.anchor.set = 0.5;
		  alien.position.y = MAX_Y - 195;
		  alien.scale.x = 3.2;
		  alien.scale.y = 3.3;

		  spaceship.anchor.x = 0.5;
		  spaceship.anchor.y = 0.5;
		  spaceship.scale.x = 0;
		  spaceship.scale.y = 0;
		  spaceship.position.x = MAX_X/2;
		  spaceship.position.y = 72;

			scoreImg.anchor.set = 0.5;
			scoreImg.position.y = 550;
			scoreImg.position.x = 625;
			scoreImg.scale.x = 0.56;
			scoreImg.scale.y = 1.29;

			scoreNumber.anchor.set = 0.5;
			scoreNumber.position.x = 700;
			scoreNumber.position.y = 554;
			scoreNumber.scale.x = 1;
			scoreNumber.scale.y = 1.6;

			alienLaughing.anchor.set = (0.5, 0);
			alienLaughing.scale.x = 2.8;
			alienLaughing.scale.y = 2.8;
			alienLaughing.position.x = MAX_X/2 ;
			alienLaughing.position.y = MAX_Y - 98;

			flash.scale.y = window.innerHeight;
			flash.scale.x = window.innerWidth;

		  stage.addChild(background);
			stage.addChild(alienLaughing);
		  stage.addChild(spaceship);
		  stage.addChild(grass);
		  stage.addChild(alien);
			stage.addChild(laserDots);
			stage.addChild(shot);
			stage.addChild(scoreNumber);
			stage.addChild(scoreImg);
			stage.addChild(flash);


			let alienLaughingMoving = false


			setInterval(function(){

				if(!hunted && spaceship.rotation === 0 ){
					laserCount = 4;


					setTimeout(function(){
					stage.removeChild(spaceship)
				} , 1000)
					setTimeout(	function(){
						shotBol = false
						shot.texture = shot1
						hunted = false
						spaceship.rotation = 0
						stage.addChildAt(spaceship, 2)
						laserCount = 0


					} , 3000)


				setTimeout(() => {
					laugh.play();
					alienLaughingMoving = true;
					setTimeout(function(){
						alienLaughingMoving = false;
						alienLaughing.position.x = MAX_X/2 ;
						alienLaughing.position.y = MAX_Y - 98;

					},4000)
				} , 400)
			}
		},9000)

			let animateCount = 0;


		  setInterval(function(){
				  animateCount++;
				  if (animateCount === 3 ){
					  animateCount = 0
				  }
		  }, 150)


		setInterval( function (){
					if(animateCount === 0)
					{
					spaceship.texture = spaceship2;
					}
					else if (animateCount === 1)
					{
					spaceship.texture = spaceship3;
					}
					else  if (animateCount === 2){
					  spaceship.texture = spaceship1
					}


				if (alien.position.x < MAX_X/2) {
					if(animateCount === 0)
					{
					alien.texture = alienStep1;
					}
					else if (animateCount === 1){
							alien.texture = alienStep2;
							}
							else  if (animateCount === 2){
								alien.texture = alienStep3
							}
						}
						else {
								alien.scale.x -= 0.1;
							  alien.scale.y -= 0.03;
								if(animateCount === 0)
								{
								alien.texture = alienStop1;
								}
								else if (animateCount === 1)
								{
								alien.texture = alienStop2;
								}
								else  if (animateCount === 2){
									alien.texture = alienStop3;
								}

							}


							} , 150)


	let	shotBol = false

 let spaceshipInteractive = 'NO';
		setTimeout(function(){
			spaceshipInteractive = 'YES';
			$( 'canvas' ).click(function(){
			if(laserCount < 3) {

				laserShoot.play();
				flash.texture = flashTexture;
				setTimeout(function(){
					flash.texture = transparent;
				},25)

			laserCount++;

		}


	})} , 6000)

		let shotBol1 = false;

		setInterval(() => {
			if (shotBol){
			shotBol1 = ! shotBol1;
					if (shotBol1) {
						shot.texture = transparent;
					}
					else {
						shot.texture = shot1;
					}
      }
			else {
				shot.texture = shot1
			}

		},125)

		alienLaughing.interactive = true;
		let alienLaughingBol = false



		setInterval( function ()
		{

		    alienLaughingBol = !alienLaughingBol;

		    if(alienLaughingBol)
		    {
		        alienLaughing.texture = alienLaughing1;
		    }
		    else
		    {
		        alienLaughing.texture = alienLaughing2;
		    }

	} , 130)






		var target = new PIXI.Point();



		function reset () {
		    target.x = Math.floor(Math.random() * MAX_X);
		    target.y = Math.floor(Math.random() * MAX_Y);

		}

		// start animating
		requestAnimationFrame(animate);

		let alienLaughingPositionCounter = 0
		function animate() {


			if ( laserCount === 0 && spaceshipInteractive === 'YES' ) {
				spaceship.interactive = true;
					laserDots.texture = threeLaserdots;
			}
			else if ( laserCount === 1  ) {
				spaceship.interactive = true;
					laserDots.texture = twoLaserdots;
			}
			else if ( laserCount === 2  ) {
				spaceship.interactive = true;
					laserDots.texture = oneLaserdot;
			}
			else {
				spaceship.interactive = false;
				laserDots.texture = transparent;

			}

		// 	if ( laserCount !== 0 || laserCount !== 1 || laserCount !== 2 ){
		// 		console.log('yes');
		//
		//
		// }
		if ( laserCount === 3 ) {
			shotBol = true }
		else {
				shotBol = false
		}

		if (alienLaughingMoving) {
			if (	alienLaughingPositionCounter !== 120 ) {
				alienLaughingPositionCounter++
			alienLaughing.position.y -= 1;
		}
			// console.log(alienLaughingPositionCounter);
			if (	alienLaughingPositionCounter === 120 ) {

				alienLaughing.position.y += 0.00000125;
			}

		}
		if (!alienLaughingMoving) {
			alienLaughingPositionCounter = 0
		}

			if ( laserCount > 3 ) {

				spaceship.position.x += 10;
				spaceship.position.y -= 10;


				if (spaceship.scale.x < 160 && spaceship.scale.y < 180) {

				if (	alienLaughingPositionCounter !== 120 ) {
					alienLaughingPositionCounter++
					alienLaughing.position.y -= 1;
				}
				if (	alienLaughingPositionCounter === 120 ) {

					alienLaughing.position.y += 1;
				}




				}
			}
			if ( laserCount <= 3  ) {
			if(!hunted && alien.position.x > MAX_X/2) {
		    spaceship.position.x += (target.x - spaceship.x) * 0.1;
		    spaceship.position.y += (target.y - spaceship.y) * 0.1;



				if (spaceship.scale.x < 1.75 && spaceship.scale.y < 1.75) {
					spaceship.scale.x += 0.04
					spaceship.scale.y += 0.04
				}

		  if(Math.abs(spaceship.x - target.x) < 1 && alien.position.x > MAX_X/2) {
				spaceshipMove.play()
		        reset();
		    }
			}

		}


					alienWalking();
					alienDisappear();

			contain(spaceship, {x: 0, y: -50, width: MAX_X, height: 575})

		    // render the container
		    renderer.render(stage);

		    requestAnimationFrame(animate);
		}



		function contain(sprite, container) {

		  var collision = "";

		  //Left
		  if (sprite.x < container.x) {
		    sprite.x = container.x;
		    collision = "left";
		  }

		  //Top
		  if (sprite.y < container.y) {
		    sprite.y = container.y;
		    collision = "top";
		  }

			//No right edge collision

		  //Bottom
		  if (sprite.y + sprite.height > container.height) {
		    sprite.y = container.height - sprite.height;
		    collision = "bottom";
		  }

		  //Return the `collision` value
		  return collision;
		}


function alienWalking() {
	if (alien.position.x <= MAX_X/2) {
		alien.position.x += 3;
	}
}

function alienDisappear() {
	if (alien.position.x > MAX_X/2) {
		createjs.Tween.get(alien).to({alpha: 0}, 1700);

	}
}

function onDown (eventData) {

// setTimeout(function() {
// 	if(!hunted){
// 		laserCount = 4;
// 	setTimeout(() => {laugh.play()} , 400)
// }
// },10000)
	explosion.play();
	hunted = true;
	animate2();
	// huntedSound.play()

	score += 500
	scoreNumber.setText(score)

	setTimeout(function(){
	stage.removeChild(spaceship)
} , 2000)
	setTimeout(	function(){
		shotBol = false
		shot.texture = shot1
		hunted = false
		spaceship.rotation = 0
		stage.addChildAt(spaceship, 2)
		laserCount = 0


	} , 5000)


}

	// spaceship.interactive = true;
	spaceship.on('mousedown', onDown);
	spaceship.on('touchstart', onDown);


function animate2() {
	if(hunted) {
		requestAnimationFrame(animate2);

		spaceship.rotation += 0.3;
		spaceship.position.x += 0;
		spaceship.position.y += 3 + Math.random() * 7;
	}
		// renderer.render(stage);


}

}
	getUser()
}
export default homeCtrl;

// // const spaceships = [];
//
// // const totalSpaceships = 10;
//
// // for (var i = 0; i < totalSpaceships; i++) {
//
// // 	const spaceship = new PIXI.Sprite(spaceship1);
//
// // 	spaceship.anchor.x = 0.5;
// // 	spaceship.anchor.y = 0.5;
// // 	spaceship.scale.x = 0;
// // 	spaceship.scale.y = 0;
// // 	spaceship.position.x = MAX_X/2;
// // 	spaceship.position.y = MAX_Y/2 - 140;

// // 	spaceships.push(spaceship);
//
// }
