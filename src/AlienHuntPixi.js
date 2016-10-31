// <<<<<<< HEAD
// var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {backgroundColor : 0x000000});
// document.body.appendChild(renderer.view);
// var stage = new PIXI.Container();
//
// renderer.view.style.display = 'block';
// renderer.view.style.width = '100%';
// renderer.view.style.height = '100%';
// renderer.autoResize = true;
//
//
// var spaceship = new PIXI.Sprite.fromImage('./imgs/UFO.png');
// var alien = new PIXI.Sprite.fromImage('./imgs/alien.png')
// var background = new PIXI.Sprite.fromImage('./imgs/Background.png');
// var corn = new PIXI.Sprite.fromImage('./imgs/corn.png');
// var scoreboard = new PIXI.Sprite.fromImage('./imgs/Scoreboard.png');
// var c = new Charm(PIXI);
//
//
//   alien.anchor.set(0.5, 0);
//   // alien.position.x = window.innerWidth / 2;
//   // alien.position.x = 0;
//   // alien.position.y = 100;
//   alien.position.y = window.innerHeight - 325;
//   alien.scale.set(0.3)
//
//   spaceship.anchor.set = 0.5;
//   spaceship.scale.set(0.4);
//   spaceship.position.x = Math.random() * renderer.width;
//   spaceship.position.y = Math.random() * renderer.height;
//
//   scoreboard.anchor.y = 0.9;
//   scoreboard.position.x = 0;
//   scoreboard.position.y = window.innerHeight;
//   scoreboard.scale.x = 1.215;
//   scoreboard.scale.y = 0.65;
//   console.log(scoreboard);
//
//   corn.anchor.y = 0.9;
//   corn.position.y = window.innerHeight - 100;
//   console.log(scoreboard._texture._frame);
//   corn.scale.x = 1.215;
//   corn.scale.y = 0.8;
//   // corn.postion.x =
//   // corn.postion.x =
//   // corn.scale.set
//
//   background.scale.set(1.25)
//
//
//   stage.addChild(background);
//   stage.addChild(spaceship);
//   stage.addChild(corn);
//   stage.addChild(scoreboard);
//   stage.addChild(alien);
//
// var target = new PIXI.Point();
//
// function reset () {
//     target.x = Math.floor(Math.random() * window.innerWidth);
//     target.y = Math.floor(Math.random() * window.innerHeight);
// }
// // start animating
// requestAnimationFrame(animate);
// function animate() {
//
//     spaceship.position.x += (target.x - spaceship.x) * 0.1;
//     spaceship.position.y += (target.y - spaceship.y) * 0.1;
//
//   if (alien.position.x <= window.innerWidth/2) {
//     alien.position.x += 4;
//   }
//
//
//   function fadeOutFromCenter() {
//     if (alien.position.x === window.innerWidth/2) {
//         c.fadeOut(alien);
//     }
//
//
//   }
//
//     c.update();
//
//   if(Math.abs(spaceship.x - target.x) < 1)
//     {
//         reset();
//     }
//     // render the container
//     renderer.render(stage);
//
//     requestAnimationFrame(animate);
// }
//
// // function play(){
// // 	var renderer = PIXI.autoDetectRenderer(
// // 		window.innerWidth, window.innerHeight, { backgroundColor : 0x000000 }
// // 	);
// // 	document.body.appendChild(renderer.view);
// // 	var stage = new PIXI.Container();
// //
// // 	renderer.view.style.display = 'block';
// // 	renderer.view.style.width = '100%';
// // 	renderer.view.style.height = '100%';
// // 	renderer.autoResize = true;
// //
// //
// // 	var spaceship = new PIXI.Sprite.fromImage('./imgs/UFO.png');
// // 	var alien = new PIXI.Sprite.fromImage('./imgs/alien.png')
// // 	var background = new PIXI.Sprite.fromImage('./imgs/Background.png');
// // 	var corn = new PIXI.Sprite.fromImage('./imgs/corn.png');
// // 	var scoreboard = new PIXI.Sprite.fromImage('./imgs/Scoreboard.png');
// //
// // 	  alien.anchor.set = 0.1;
// // 	  alien.position.x = window.innerWidth / 2;
// // 	  alien.position.y = 100;
// // 	  alien.scale.set(0.3)
// //
// // 	  spaceship.anchor.set = 0.5;
// // 	  spaceship.scale.set(0.4);
// // 	  spaceship.position.x = Math.random() * renderer.width;
// // 	  spaceship.position.y = Math.random() * renderer.height;
// //
// // 	  scoreboard.anchor.y = 0.9;
// // 	  scoreboard.position.x = 0;
// // 	  scoreboard.position.y = window.innerHeight;
// // 	  scoreboard.scale.x = 1.215;
// // 	  scoreboard.scale.y = 0.65;
// // 	  console.log(scoreboard);
// //
// // 	  corn.anchor.y = 0.9;
// // 	  corn.position.y = window.innerHeight - 100;
// // 	  console.log(scoreboard._texture._frame);
// // 	  corn.scale.x = 1.215;
// // 	  corn.scale.y = 0.8;
// // 	  // corn.postion.x =
// // 	  // corn.postion.x =
// // 	  // corn.scale.set
// //
// // 	  background.scale.set(1.25)
// //
// //
// // 	  stage.addChild(background);
// // 	  stage.addChild(spaceship);
// // 	  stage.addChild(corn);
// // 	  stage.addChild(scoreboard);
// // 	  stage.addChild(alien);
// //
// // 	var target = new PIXI.Point();
// //
// // 	function reset () {
// // 	    target.x = Math.floor(Math.random() * window.innerWidth);
// // 	    target.y = Math.floor(Math.random() * window.innerHeight);
// // 	}
// // 	// start animating
// // 	requestAnimationFrame(animate);
// // 	function animate() {
// //
// // 	    spaceship.position.x += (target.x - spaceship.x) * 0.1;
// // 	    spaceship.position.y += (target.y - spaceship.y) * 0.1;
// //
// // 	  if(Math.abs(spaceship.x - target.x) < 1)
// // 	    {
// // 	        reset();
// // 	    }
// // 	    // render the container
// // 	    renderer.render(stage);
// //
// // 	    requestAnimationFrame(animate);
// // 	}
// //
// //
// // }
