angular.module( "app" )
.controller( "homeCtrl", function( $scope, homeService ) {
	const assignUser = () => {
		homeService.assignUser()
		.then( response => {
			console.log(response.data);
			$scope.user = response.data
		} )
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


		var spaceship = new PIXI.Sprite.fromImage('./imgs/UFO2.png');
		var alien = new PIXI.Sprite.fromImage('./imgs/alien2.png')
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
		  alien.position.y = window.innerHeight - 350;
		  alien.scale.x = 4.5;
		  alien.scale.y = 6;

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
			console.log(spaceship.scale.x);


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



		    // render the container
		    renderer.render(stage);

		    requestAnimationFrame(animate);
		}









function alienWalking() {
	if (alien.position.x <= window.innerWidth/2) {
		alien.position.x += 3;
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




	assignUser();
	}
} );
