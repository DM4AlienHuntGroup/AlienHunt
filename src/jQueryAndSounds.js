const splashMusic = new Howl(
    {
    src: ['sounds/splashMusic.mp3']
    ,autoplay: true
    ,loop: true
   }
);
const beep = new Howl( { src: [ 'sounds/beep.wav' ] } )




function moveAlien() {
  let alienXCssPosition = $('.alien').css('left')
  let alienPosition = parseInt(alienXCssPosition.replace(/px/gi, ''));


  if (alienPosition !== -91) {
    // console.log(huntPosition);
    $('.alien').css('left' , (alienPosition + 3 ) + 'px'  )

  }
}

setInterval(moveAlien, 1);


function moveHunt() {
  let huntXCssPosition = $('.hunt').css('right')
  let huntPosition = parseInt(huntXCssPosition.replace(/px/gi, ''));


  if (huntPosition !== -125) {

    $('.hunt').css('right' , (huntPosition + 5 ) + 'px'  )

  }
}

setTimeout(function() {
  setInterval(moveHunt, 1)
} , 1500)




function stopSplashMusic() {
  splashMusic.pause()
}


$('.selectImg').css('opacity','0')

$( document ).ready(function (){

$('.splashbutton').hover(function() {
  beep.play();
})

$('.splashbutton1').hover(function() {
  $('.selectImg1').css('opacity','1')
})

$('.splashbutton2').hover(function() {
  $('.selectImg2').css('opacity','1')
})

$('.splashbutton3').hover(function() {
  $('.selectImg3').css('opacity','1')
})

$('.splashbutton4').hover(function() {
  $('.selectImg4').css('opacity','1')
})


$('.splashbutton').mouseout(function() {
  $('.selectImg').css('opacity','0')
})

} )
