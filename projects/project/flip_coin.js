

function flipItUp(){
	if(Math.random()>.5){
		
		// window.document.sound.src = "coin.mp3";
		window.document.coins.src = 'head.jpg';
	}else{
		window.document.coins.src = 'head1.jpg';
		// window.document.sound.src = "coin.mp3";

	}
 return false;

}



// $(document).on('pageinit', function(){

// var soundName = new Audio();
// sound.src = "coin.mp3";	

// $('#click').click(function(){
	// if(Math.random()>.5){
		// var sound = new Audio();
		// sound.src = "coin.mp3";
		// window.document.coins.src = 'head.jpg';
	// }else{
		// window.document.coins.src = 'head1.jpg';
	// }
 // return false;

// });

// var sound = document.createElement('audio');
    // sound.id = 'player';
    // e.target.id = 'playing';
    // source.src = soundName;
    // document.body.appendChild(sound);
    // sound.play();
	// $('#click').click(function(){
		// $(sound.src).play();


