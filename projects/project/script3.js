//Start by creating a variable that is gonna call the  class of player
$(document).on('pageinit', function(){
	$('.player').each(function(){

var player = document.querySelector('ul.player2');
player.addEventListener('click', function(e) {

  var songName = e.target.getAttribute('data-src');//this var will get the attribute data-src
  //data is an HTML5 element which gives us freedom to attach anything that's ours to define
  var audioPlayer = document.querySelector('#player'); // this player ID prevent the player from
  //being repeated same song on top of the first one, when clicked again and again

  if (audioPlayer) {
  
// good source -w3schools, HTML audio/video DOM

    if (songName===audioPlayer.getAttribute('src')) {
      if (audioPlayer.paused) {
        audioPlayer.play();
        e.target.id = 'playing';//this calls the css id property which appears when played
      } else {
        audioPlayer.pause();
        e.target.id = 'paused';
      }
    } else {
      audioPlayer.src = songName;
      audioPlayer.play();
	  
      if (document.querySelector('#playing')) {
        document.querySelector('#playing').id='';
      } else {
        document.querySelector('#paused').id='';
      }
        e.target.id = 'playing';
    }



  } else {
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

 //
    audioPlayer.addEventListener('ended', function() {
      audioPlayer.parentNode.removeChild(audioPlayer); //have to call the parent object when removing the child
      e.target.id='';//this will put back the player to its idle position when the song ends
    }, false);
  }

});

});
});
 //false to make it work properly