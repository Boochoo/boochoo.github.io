//Start by creating a variable that is gonna call the  class of player
$(document).on('pageinit', function(){
	$('.player').each(function(){
		
		var player = document.querySelector('ul.player');
		player.addEventListener('click', function(e) {

		  var nameOfSong = e.target.getAttribute('data-src');//this var will get the attribute data-src
													//data is an HTML5 element which gives us freedom to attach
													//anything that's ours to define
		  var mp3Player = document.querySelector('#player'); // this player ID prevent the player from
															//being repeated same song on top of the first one,
															//when clicked again and again

		  if (mp3Player) {				// best source -w3schools, HTML audio/video DOM

  
    if (nameOfSong===mp3Player.getAttribute('src')) {
      if (mp3Player.paused) {
        mp3Player.play();
        e.target.id = 'playing';//this calls the css id property which appears when played
      }else {
        mp3Player.pause();
        e.target.id = 'paused';
      }
      } else {           //there gotta be some command
      mp3Player.src = nameOfSong;
      mp3Player.play();
	  
      if (document.querySelector('#playing')) {  //this is for the DOM to stop changing whenever we scroll over songs
        document.querySelector('#playing').id='';
      } else {
        document.querySelector('#paused').id='';
      }
        e.target.id = 'playing';
    }



  } else {
    var mp3Player = document.createElement('audio');
    mp3Player.id = 'player';
    e.target.id = 'playing';
    mp3Player.src = nameOfSong;
    document.body.appendChild(mp3Player);
    mp3Player.play();

 //
    mp3Player.addEventListener('ended', function() {
      mp3Player.parentNode.removeChild(mp3Player); //have to call the parent object when removing the child
      e.target.id='';								//this will put back the player to 
													//its idle position when the song ends
		}, false);
	  }

	});//false is to make it work properly or avoid bubbling
	});
});