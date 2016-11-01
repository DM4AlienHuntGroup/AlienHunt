angular.module( "app" )
.controller( "homeCtrl", function( $scope, homeService ) {
	const getUser = () => {
		homeService.getUser().then((response)=>{
			console.log(response.data);
			$scope.options = true;
			$scope.user = response.data

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

		const alienStop1 = PIXI.Texture.fromImage('./imgs/alienStop1.png');
		const alienStop2 = PIXI.Texture.fromImage('./imgs/alienStop2.png');
		const alienStop3 = PIXI.Texture.fromImage('./imgs/alienStop3.png');

		const alienStep1 = PIXI.Texture.fromImage('./imgs/alienStep1.png');
		const alienStep2 = PIXI.Texture.fromImage('./imgs/alienStep2.png');
		const alienStep3 = PIXI.Texture.fromImage('./imgs/alienStep3.png');

		const alien = new PIXI.Sprite(alienStep1);
		const spaceship = new PIXI.Sprite(spaceship1);

		var background = new PIXI.Sprite.fromImage('./imgs/Background.png');
		var corn = new PIXI.Sprite.fromImage('./imgs/grass.png');
		var scoreboard = new PIXI.Sprite.fromImage('./imgs/scoreboard-3.png');

		let hunted = false;
		let laserCount = 0;



		//sounds
		const laserShoot = new Howl( { src: '../../sounds/Laser_Shoot.wav' } )
		$( 'canvas' ).click(function(){
			laserCount++;
			if ( laserCount <=3 ) {
				laserShoot.play()
			}
		})
		const explosion = new Howl( { src: '../../sounds/Explosion.wav' } )
		const spaceshipMove = new Howl( { src: '../../sounds/spaceshipMove.wav' , volume: 0.4 } )



		  alien.anchor.set = 0.5;
		  alien.position.y = window.innerHeight - 300;
		  alien.scale.x = 4;
		  alien.scale.y = 5.5;

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
		  // console.log(scoreboard);

		  corn.anchor.y = 1;
		  corn.position.y = window.innerHeight - 135;
		  // console.log(scoreboard._texture._frame);
		  corn.scale.x = window.innerWidth * 0.004;
		  corn.scale.y = 3;
		  // corn.postion.x =
		  // corn.postion.x =
		  // corn.scale.set

		  background.scale.set(1.5)



		  stage.addChild(background);
		  stage.addChild(spaceship);
		  stage.addChild(corn);
		  stage.addChild(scoreboard);
		  stage.addChild(alien);


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




		var target = new PIXI.Point();



		function reset () {
		    target.x = Math.floor(Math.random() * window.innerWidth);
		    target.y = Math.floor(Math.random() * window.innerHeight);

		}
		// start animating
		requestAnimationFrame(animate);
		function animate() {



			if ( laserCount > 3 ) {
				spaceship.position.x += 10;
				spaceship.position.y -= 10;

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


		///test

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

}
	getUser()
} );
