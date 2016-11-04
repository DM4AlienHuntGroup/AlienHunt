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

		const flashTexture = PIXI.Texture.fromImage('./imgs/flash.png');

		const transparent = PIXI.Texture.fromImage('./imgs/transparent.png');

		const explosionImg1   = PIXI.Texture.fromImage('./imgs/explosionImgs/1.png')
				  ,explosionImg2  = PIXI.Texture.fromImage('./imgs/explosionImgs/2.png')
				  ,explosionImg3  = PIXI.Texture.fromImage('./imgs/explosionImgs/3.png')
					,explosionImg4  = PIXI.Texture.fromImage('./imgs/explosionImgs/4.png')
				  ,explosionImg5  = PIXI.Texture.fromImage('./imgs/explosionImgs/5.png')
					,explosionImg6  = PIXI.Texture.fromImage('./imgs/explosionImgs/6.png')
					,explosionImg7  = PIXI.Texture.fromImage('./imgs/explosionImgs/7.png')
					,explosionImg8  = PIXI.Texture.fromImage('./imgs/explosionImgs/8.png')
					,explosionImg9  = PIXI.Texture.fromImage('./imgs/explosionImgs/9.png')
					,explosionImg10 = PIXI.Texture.fromImage('./imgs/explosionImgs/10.png')
					,explosionImg11 = PIXI.Texture.fromImage('./imgs/explosionImgs/11.png')
					,explosionImg12 = PIXI.Texture.fromImage('./imgs/explosionImgs/12.png')
					,explosionImg13 = PIXI.Texture.fromImage('./imgs/explosionImgs/13.png')
				  ,explosionImg14 = PIXI.Texture.fromImage('./imgs/explosionImgs/14.png')
					,explosionImg15 = PIXI.Texture.fromImage('./imgs/explosionImgs/15.png');



		const alien = new PIXI.Sprite(alienStep1);
		const spaceship = new PIXI.Sprite(spaceship1);
		const laserDots = new PIXI.Sprite(threeLaserdots);
		const shot = new PIXI.Sprite(shot1);
		const alienLaughing = new PIXI.Sprite(alienLaughing1);
		const flash = new PIXI.Sprite(transparent);
		const explosionImg = new PIXI.Sprite(transparent);





		var background = new PIXI.Sprite.fromImage('./imgs/Background.png');
		var grass = new PIXI.Sprite.fromImage('./imgs/GrassBoard.png');
		let hunted = false;
		let laserCount = 0;
		let score = 0
		let scoreNumber = new PIXI.Text('0',{fontFamily : 'VT323', fontSize: 24, fill : '#fff', align : 'center' });
		var scoreImg = new PIXI.Sprite.fromImage('./imgs/scoreImg.png');

		let explosionCounter = 20;

		//sounds
		const laserShoot = new Howl( { src: '../../sounds/Laser_Shoot.wav' } )
		const huntedSound = new Howl( { src: '../../sounds/huntedSound.mp3' } )
		const explosion = new Howl( {
			src: '../../sounds/Explosion.wav'
			,onplay: function(){
				explosionCounter = 0

			}
			, onend: function() {
    huntedSound.play()
  }
		 } )
		const spaceshipMove = new Howl( { src: '../../sounds/spaceshipMove.wav' , volume: 0.4 } )
		const laugh = new Howl( { src: '../../sounds/laughing.mp3' } );




		  alien.anchor.set = 0.5;
		  alien.position.y = window.innerHeight * 0.675;
		  alien.scale.x = window.innerWidth * 0.004;
		  alien.scale.y = window.innerHeight * 0.0055;


			setInterval(function(){
					// console.log(explosionCounter);



				if (explosionCounter < 20){
					explosionCounter++
				}

					if(explosionCounter === 1 ) {
						explosionImg.texture = explosionImg1;
					}
					else if(explosionCounter === 2 ) {
						explosionImg.texture = explosionImg2;
					}
					else if(explosionCounter === 3 ) {
						explosionImg.texture = explosionImg3;
					}
					else if(explosionCounter === 4 ) {
						explosionImg.texture = explosionImg4;
					}
					else if(explosionCounter === 5 ) {
						explosionImg.texture = explosionImg5;
					}
					else if(explosionCounter === 6 ) {
						explosionImg.texture = explosionImg6;
					}
					else if(explosionCounter === 7 ) {
						explosionImg.texture = explosionImg7;
					}
					else if(explosionCounter === 8 ) {
						explosionImg.texture = explosionImg8;
					}
					else if(explosionCounter === 9 ) {
						explosionImg.texture = explosionImg9;
					}
					else if(explosionCounter === 10 ) {
						explosionImg.texture = explosionImg10;
					}
					else if(explosionCounter === 11 ) {
						explosionImg.texture = explosionImg11;
					}

					else if(explosionCounter === 12 ) {
						explosionImg.texture = explosionImg12;
					}
					else if(explosionCounter === 13 ) {
						explosionImg.texture = explosionImg13;
					}
					else if(explosionCounter === 14 ) {
						explosionImg.texture = explosionImg14;
					}
					else if(explosionCounter === 15 ) {
						explosionImg.texture = explosionImg15;
					}
					else {
						// explosionCounter = 0
						explosionImg.texture = transparent;
						}

				// }
			},40)




			alienLaughing.anchor.set = 0.5;
			alienLaughing.scale.x = window.innerWidth * 0.003;
		  alienLaughing.scale.y = window.innerHeight * 0.005;
			alienLaughing.position.x = window.innerWidth/2 ;


			alienLaughing.position.y = window.innerHeight * 0.85765;



		  spaceship.anchor.x = 0.5;
		  spaceship.anchor.y = 0.5;
		  spaceship.scale.x = 0;
		  spaceship.scale.y = 0;
		  spaceship.position.x = window.innerWidth/2;
		  spaceship.position.y = window.innerHeight * 0.12;

			// explosionImg.scale.set(0.8)


		  grass.anchor.y = 1;
		  grass.position.y = window.innerHeight;
		  grass.scale.x = window.innerWidth * 0.004;
		  grass.scale.y = window.innerWidth * 0.002;


			laserDots.anchor.set = 0.5;
			laserDots.position.y = window.innerHeight * 0.91225;
			laserDots.position.x = window.innerWidth * 0.094;
			laserDots.scale.x = window.innerWidth * 0.0012;
			laserDots.scale.y = window.innerHeight * 0.0012;


			shot.anchor.set = 0.5;
			shot.position.y = window.innerHeight * 0.942005;
			shot.position.x = window.innerWidth * 0.09869005;
			shot.scale.x = window.innerWidth * 	0.0004;
			shot.scale.y = window.innerHeight * 0.00045;

			scoreImg.anchor.set = 0.5;
			scoreImg.position.y = window.innerHeight * 0.9178;
			scoreImg.position.x = window.innerWidth  * 0.8;
			scoreImg.scale.x = window.innerWidth * 	0.0007;
			scoreImg.scale.y = window.innerHeight * 0.00215;


			flash.scale.y = window.innerHeight;
			flash.scale.x = window.innerWidth;


		  background.scale.set(window.innerWidth * 0.0013, window.innerHeight * 0.0013)
			console.log(window.innerHeight * 0.0013);


		  stage.addChild(background);
			stage.addChild(alienLaughing);
		  stage.addChild(spaceship);
			stage.addChild(explosionImg)
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
						alienLaughing.position.x = window.innerWidth/2 ;
						alienLaughing.position.y = window.innerHeight * 0.85765;

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
							  alien.scale.y -= 0.1;
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
		    target.x = Math.floor(Math.random() * window.innerWidth);
		    target.y = Math.floor(Math.random() * window.innerHeight);

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

				alienLaughing.position.y +=1;
			}

		}
		if (!alienLaughingMoving) {
			alienLaughingPositionCounter = 0
		}

			if ( laserCount > 3 ) {

				spaceship.position.x += 10;
				spaceship.position.y -= 10;




				if (spaceship.scale.x < window.innerWidth * 0.2 && spaceship.scale.y < window.innerHeight * 0.3) {

				if (	alienLaughingPositionCounter !== 120 ) {
					alienLaughingPositionCounter++
					alienLaughing.position.y -= 1;
				}
				// console.log(alienLaughingPositionCounter);
				if (	alienLaughingPositionCounter === 120 ) {

					alienLaughing.position.y += 1;
				}




				}
			}
			if ( laserCount <= 3  ) {
			if(!hunted && alien.position.x > window.innerWidth/2) {
		    spaceship.position.x += (target.x - spaceship.x) * 0.1;
		    spaceship.position.y += (target.y - spaceship.y) * 0.1;



				if (spaceship.scale.x < window.innerWidth * 0.00275 && spaceship.scale.y < window.innerHeight * 0.00275){

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

			contain(spaceship, {x: 0, y: -50, width: window.innerWidth, height: window.innerHeight})

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
		alien.position.x += 3;
	}
}

function alienDisappear() {
	if (alien.position.x > window.innerWidth/2) {
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

		explosionImg.position.x = spaceship.position.x - 120;
		explosionImg.position.y = spaceship.position.y - 240;
	}
		// renderer.render(stage);


}

// function animateNewSpaceship() {
//
// }

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
// // 	spaceship.position.x = window.innerWidth/2;
// // 	spaceship.position.y = window.innerHeight/2 - 140;

// // 	spaceships.push(spaceship);
//
// }
