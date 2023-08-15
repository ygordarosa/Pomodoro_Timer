import * as element from './elements.js';
import state from './state.js';
import * as sounds from './sounds.js';
import * as timer from './timer.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  
  timer.countdown();

  sounds.buttonPressAudio.play();

}

export function toggleReset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay()

  sounds.buttonPressAudio.play();

}

export function moreMinutes(){
  
  timer.plusMinutes();
  
  sounds.buttonPressAudio.play();
  
}

export function lessMinutes(){
  
  timer.minusMinutes();
  sounds.buttonPressAudio.play();

}

export function forest(){
  if(!state.musicOn || document.documentElement.classList.contains("forest")){
    state.musicOn = document.documentElement.classList.toggle("music-on")
    document.documentElement.classList.toggle("forest")
    element.forest.classList.toggle('active');
    sounds.forestSound.play();
    if(!state.musicOn){
      sounds.forestSound.pause();
    }
  }

}

export function rain(){
  if(!state.musicOn || document.documentElement.classList.contains("rain")){
    state.musicOn = document.documentElement.classList.toggle("music-on")
    document.documentElement.classList.toggle("rain")
    element.rain.classList.toggle('active');
    sounds.rainSound.play();
    if(!state.musicOn){
      sounds.rainSound.pause();
    }
  }

}

export function coffe(){
  if(!state.musicOn || document.documentElement.classList.contains("coffe")){
    state.musicOn = document.documentElement.classList.toggle("music-on")
    document.documentElement.classList.toggle("coffe")
    element.coffe.classList.toggle('active');
    sounds.coffeSound.play();
    if(!state.musicOn){
      sounds.coffeSound.pause();
    }
  }

  
}

export function campfire(){
  if(!state.musicOn || document.documentElement.classList.contains("campfire")){
    state.musicOn = document.documentElement.classList.toggle("music-on")
    document.documentElement.classList.toggle("campfire")
    element.campfire.classList.toggle('active');
    sounds.campfireSound.play();
    if(!state.musicOn){
      sounds.campfireSound.pause();
    }
  }
  
}