function splashPage (  ) {
	return {

		restrict: "E"
		, templateUrl: "../../public/splash.html"
    , link: function( scope ) {

			const splashMusic = new Howl(
				{
					src: [ "../sounds/splashMusic.mp3" ]
					, autoplay: true
					, loop: true
				}
			);
			const beep = new Howl( { src: [ "../sounds/beep.wav" ] } );

			const moveAlien = (  ) => {
				const alienXCssPosition = $( ".alien" ).css( "left" );
				const alienPosition = parseInt( alienXCssPosition.replace( /px/gi, "" ) );

				if ( alienPosition !== -91 ) {
          // console.log( huntPosition );
					$( ".alien" ).css( "left", `${ alienPosition + 3 }px` );

				}
			};

			const mute = (  ) => {
				Howler.mute(true);
			};

			const unmute = (  ) => {
				Howler.mute(false);
			}

			setInterval( moveAlien, 1 );

			const moveHunt = (  ) => {
				const huntXCssPosition = $( ".hunt" ).css( "right" );
				const huntPosition = parseInt( huntXCssPosition.replace( /px/gi, "" ) );

				if ( huntPosition !== -125 ) {

					$( ".hunt" ).css( "right", `${ huntPosition + 5 }px`  );

				}
			};

			setTimeout( (  ) => {
				setInterval( moveHunt, 1 );
			}, 1500 );

			const stopSplashMusic = (  ) => {
				splashMusic.pause(  );
				
				$('section').hide()
			};

			$( ".selectImg" ).css( "opacity", "0" );

			$( document ).ready( () => {

				$( ".splashbutton" ).hover( () => {
					beep.play();
				} );

				$( ".splashbutton1" ).hover( () => {
					$( ".selectImg1" ).css( "opacity", "1" );
				} );

				$( ".splashbutton2" ).hover( () => {
					$( ".selectImg2" ).css( "opacity", "1" );
				} );

				$( ".login" ).hover( () => {
					$( ".selectImg3" ).css( "opacity", "1" );
				} );

				$( ".splashbutton4" ).hover( () => {
					$( ".selectImg4" ).css( "opacity", "1" );
				} );

				$( ".splashbutton5" ).hover( () => {
					$( ".selectImg5" ).css( "opacity", "1" );
				} );

				$( ".splashbutton" ).mouseout( () => {
					$( ".selectImg" ).css( "opacity", "0" );
				} );

			} );

			scope.mute = mute;
			scope.unmute = unmute;
			scope.stopSplashMusic = stopSplashMusic;

		}
	};
};
export default splashPage;
