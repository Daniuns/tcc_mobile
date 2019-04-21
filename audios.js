import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export const DESCRIPTION_SCENE_AUDIOS =[
    {
         id: 'waking_up_p.mp3',
         url: require('./android/app/src/main/res/raw/waking_up_p.mp3'),
    },

    {
         id: 'waking_up_a.mp3',
         url: require('./android/app/src/main/res/raw/waking_up_a.mp3'),
    },
    {
         id: 'on_the_car_p.mp3',
         url: require('./android/app/src/main/res/raw/on_the_car_p.mp3'),
    },{
         id: 'on_the_car_a.mp3',
         url: require('./android/app/src/main/res/raw/on_the_car_a.mp3'),
    },{
         id: 'try_sick_p.mp3',
         url: require('./android/app/src/main/res/raw/try_sick_p.mp3'),
    },{
         id: 'try_sick_a.mp3',
         url: require('./android/app/src/main/res/raw/try_sick_a.mp3'),
    },{
         id: 'tell_mom_p.mp3',
         url: require('./android/app/src/main/res/raw/tell_mom_p.mp3'),
    },{
         id: 'tell_mom_a.mp3',
         url: require('./android/app/src/main/res/raw/tell_mom_a.mp3'),
    },{
         id: 'at_the_school_p.mp3',
         url: require('./android/app/src/main/res/raw/at_the_school_p.mp3'),
    },{
         id: 'at_the_school_a.mp3',
         url: require('./android/app/src/main/res/raw/at_the_school_a.mp3'),
    },
    {
         id: 'stay_home_p.mp3',
         url: require('./android/app/src/main/res/raw/stay_home_p.mp3'),
    },
    {
         id: 'stay_home_a.mp3',
         url: require('./android/app/src/main/res/raw/stay_home_a.mp3'),
    },
    {
         id: 'tell_teacher_p.mp3',
         url: require('./android/app/src/main/res/raw/tell_teacher_p.mp3'),
    },
    {
         id: 'tell_teacher_a.mp3',
         url: require('./android/app/src/main/res/raw/tell_teacher_a.mp3'),
    },
    {
         id: 'calling_to_mom_p.mp3',
         url: require('./android/app/src/main/res/raw/calling_to_mom_p.mp3'),
    },{
         id: 'calling_to_mom_a.mp3',
         url: require('./android/app/src/main/res/raw/calling_to_mom_a.mp3'),
    },
    {
         id: 'dont_do_anything_p.mp3',
         url: require('./android/app/src/main/res/raw/dont_do_anything_p.mp3'),
    },
    {
         id: 'dont_do_anything_a.mp3',
         url: require('./android/app/src/main/res/raw/dont_do_anything_a.mp3'),
    }
]

// AUDIOS DAS CENAS

export const SCENE_AUDIOS = [
     {
         name: 'rain.mp3',
         audio: new Sound('rain.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio rain.mp3');
             }
 
         })
     },
     {
         name: 'thunder.mp3',
         audio: new Sound('thunder.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio thunder.mp3');
             }
 
         })
     },
     {
         name: 'on_the_car_suburban.mp3',
         audio: new Sound('on_the_car_suburban.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio on_the_car_suburban.mp3');
             }
 
         })
     },
     {
         name: 'rain_on_the_car.mp3',
         audio: new Sound('rain_on_the_car.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio rain_on_the_car.mp3');
             }
 
         })
     },
     {
         name: 'rain_on_roof.mp3',
         audio: new Sound('rain_on_roof.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio rain_on_roof.mp3');
             }
 
         })
     },
     {
         name: 'at_the_classroom.mp3',
         audio: new Sound('at_the_classroom.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio at_the_classroom.mp3');
             }
 
         })
     },
     {
         name: 'phone_ringing.mp3',
         audio: new Sound('phone_ringing.mp3', Sound.MAIN_BUNDLE, (error) => {  
                     
             if(error){
                 console.log('error on load the audio phone_ringing.mp3');
             }
 
         })
     }
]