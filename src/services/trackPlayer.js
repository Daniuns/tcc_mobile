import TrackPlayer from 'react-native-track-player';


TrackPlayer.setupPlayer();
TrackPlayer.registerPlaybackService(() => require('./service.js'));

module.exports = async function() {
    // This service needs to be registered for the module to work
	// but it will be used later in the "Receiving Events" section
}

let track = {
    id: 'trackId',
    url: 'http://www.varmintal.com/elkpowerhowl.mp3',
    title: 'Track Title',
    artist: 'Track Artist',
    // artwork: require('track.png')
}
TrackPlayer.add(track).then(function(){
    
});