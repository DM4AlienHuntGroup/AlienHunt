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
		document.body.appendChild(renderer.view);
		var stage = new PIXI.Container();

		renderer.view.style.display = 'block';
		renderer.view.style.width = '100%';
		renderer.view.style.height = '100%';
		renderer.autoResize = true;




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

		const transparent = PIXI.Texture.fromImage('./imgs/transparent.png');

		const alien = new PIXI.Sprite(alienStep1);
		const spaceship = new PIXI.Sprite(spaceship1);
		const laserDots = new PIXI.Sprite(threeLaserdots);
		const shot = new PIXI.Sprite(shot1);
		const alienLaughing = new PIXI.Sprite(alienLaughing1);


		var background = new PIXI.Sprite.fromImage('./imgs/Background.png');
		var grass = new PIXI.Sprite.fromImage('./imgs/grass.png');
		var scoreboard = new PIXI.Sprite.fromImage('./imgs/scoreboard-3.png');

		let hunted = false;
		let laserCount = 0;



		//sounds
		const laserShoot = new Howl( { src: '../../sounds/Laser_Shoot.wav' } )
		const explosion = new Howl( { src: '../../sounds/Explosion.wav' } )
		const spaceshipMove = new Howl( { src: '../../sounds/spaceshipMove.wav' , volume: 0.4 } )
		const laugh = new Howl( { src: '../../sounds/laughing.mp3' } )



		  alien.anchor.set = 0.5;
		  alien.position.y = window.innerHeight - 300;
		  alien.scale.x = 4;
		  alien.scale.y = 5.5;



			alienLaughing.anchor.set = 0.5;
			// fix it Julian :)
			alienLaughing.scale.x = 3.5;
		  alienLaughing.scale.y = 5;
			alienLaughing.position.x = window.innerWidth/2 ;
			alienLaughing.position.y = window.innerHeight/2 + 70;

		  spaceship.anchor.x = 0.5;
		  spaceship.anchor.y = 0.5;
		  spaceship.scale.x = 0;
		  spaceship.scale.y = 0;
		  spaceship.position.x = window.innerWidth/2;
		  spaceship.position.y = window.innerHeight/2 - 140;

		  scoreboard.anchor.y = 1;
		  scoreboard.position.x = 0;
		  scoreboard.position.y = window.innerHeight;
		  scoreboard.scale.x = window.innerWidth * 0.004;
		  scoreboard.scale.y = 2.8;

		  grass.anchor.y = 1;
		  grass.position.y = window.innerHeight - 135;
		  grass.scale.x = window.innerWidth * 0.004;
		  grass.scale.y = 3;


			laserDots.anchor.set = 0.5;
			laserDots.position.y = window.innerHeight - 70;
			laserDots.position.x = window.innerWidth/12.5;
			laserDots.scale.x = window.innerWidth * 0.0012;
			laserDots.scale.y = window.innerHeight * 0.0012;


			shot.anchor.set = 0.5;
			shot.position.y = window.innerHeight - 45;
			shot.position.x = window.innerWidth/12.1;
			shot.scale.x = window.innerWidth * 	0.0004;
			shot.scale.y = window.innerHeight * 0.00045;


		  background.scale.set(1.5)



		  stage.addChild(background);
			stage.addChild(alienLaughing);
		  stage.addChild(spaceship);
		  stage.addChild(grass);
		  stage.addChild(scoreboard);
		  stage.addChild(alien);
			stage.addChild(laserDots);
			stage.addChild(shot);


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


				if (alien.position.x < window.innerWidth/2) {
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
							  alien.scale.y -= 0.2;
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

		let shotBol = false

		$( 'canvas' ).click(function(){
			laserCount++;

			if ( laserCount <=3 ) {
				laserShoot.play()

			}
			if (laserCount === 4) {
					setTimeout(() => {laugh.play()} , 400)
			}

			if ( laserCount === 0  ) {
					laserDots.texture = treeLaserdots;
			}
			else if ( laserCount === 1  ) {
					laserDots.texture = twoLaserdots;
			}
			else if ( laserCount === 2  ) {
					laserDots.texture = oneLaserdot;
			}
			else {
					laserDots.texture = transparent;

					shotBol = true

			}

		})

		let shotBol1 = false;

		setInterval(() => {
			if (shotBol)
			shotBol1 = ! shotBol1;

			if (shotBol1) {
				shot.texture = transparent;
			}
			else {
				shot.texture = shot1;
			}
		},125)

		alienLaughing.interactive = true;
		let alienLaughingBol = false



		setInterval( function ()
		{
			if ( laserCount > 3 ) {
		    alienLaughingBol = !alienLaughingBol;

		    if(alienLaughingBol)
		    {
		        alienLaughing.texture = alienLaughing1;
		    }
		    else
		    {
		        alienLaughing.texture = alienLaughing2;
		    }
		}
	} , 130)






		var target = new PIXI.Point();



		function reset () {
		    target.x = Math.floor(Math.random() * window.innerWidth);
		    target.y = Math.floor(Math.random() * window.innerHeight);

		}
		// start animating
		requestAnimationFrame(animate);

		let alienLaughingPositionCounter = 0
		function animate() {



			if ( laserCount > 3 ) {
				spaceship.position.x += 10;
				spaceship.position.y -= 10;

				if (	alienLaughingPositionCounter !== 120 ) {
					alienLaughingPositionCounter++
				alienLaughing.position.y -= 1;
			}
				// console.log(alienLaughingPositionCounter);
				if (	alienLaughingPositionCounter === 120 ) {

					alienLaughing.position.y +=1;
				}


				if (spaceship.scale.x !== 0.019999999999999938 && spaceship.scale.y !== 0.019999999999999938) {
					spaceship.scale.x -= 0.02;
					spaceship.scale.y -= 0.02;


				}
			}
			if ( laserCount <= 3  ) {
			if(!hunted && alien.position.x > window.innerWidth/2) {
		    spaceship.position.x += (target.x - spaceship.x) * 0.1;
		    spaceship.position.y += (target.y - spaceship.y) * 0.1;

				if (spaceship.scale.x !== 2.000000000000001 && spaceship.scale.y !== 2.000000000000001){
					spaceship.scale.x += 0.04
					spaceship.scale.y += 0.04
				}

		  if(Math.abs(spaceship.x - target.x) < 1 && alien.position.x > window.innerWidth/2)
		    {



				spaceshipMove.play()
		        reset();
		    }
			}

		}


					alienWalking();
					alienDisappear();

			contain(spaceship, {x: 0, y: -50, width: window.innerWidth, height: 670})
			alienLaughing._texture._frame.width = 200;
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
	if (alien.position.x <= window.innerWidth/2) {
		alien.position.x += 2;
	}
}

function alienDisappear() {
	if (alien.position.x > window.innerWidth/2) {
		createjs.Tween.get(alien).to({alpha: 0}, 2000);

	}
}




function onDown (eventData) {

	explosion.play();
	hunted = true;
	animate2();

	setTimeout(function(){
		renderer.destroy(true)
	} , 2000)
	setTimeout($scope.play, 2000)


}
	spaceship.interactive = true;
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
function animateNewSpaceship() {

}

}
	getUser()
}
export default homeCtrl;

// // const spaceships = [];

// // const totalSpaceships = 10;

// // for (var i = 0; i < totalSpaceships; i++) {

// // 	const spaceship = new PIXI.Sprite(spaceship1);

// // 	spaceship.anchor.x = 0.5;
// // 	spaceship.anchor.y = 0.5;
// // 	spaceship.scale.x = 0;
// // 	spaceship.scale.y = 0;
// // 	spaceship.position.x = window.innerWidth/2;
// // 	spaceship.position.y = window.innerHeight/2 - 140;



// // 	spaceships.push(spaceship);

// }
