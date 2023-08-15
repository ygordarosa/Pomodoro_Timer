import state from './state.js';
import * as element from './elements.js';

export function countdown(){
if(!state.isRunning){
  return
}

let minutes = Number(element.minutes.textContent);
let seconds = Number(element.seconds.textContent);
seconds--;

if(seconds < 0){
  minutes--;
  seconds = 59;
}

if(minutes < 0){
  return;
}

updateDisplay(minutes, seconds)
setTimeout(() => countdown(), 1000);

}

export function minusMinutes(){
  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  minutes -= 5;
  if(minutes < 0){
    updateDisplay(0,seconds)
    return
  }
  else{
    updateDisplay(minutes,seconds)
    return
  }
}

export function plusMinutes(){
  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  minutes += 5;
  if(minutes > 60){
    updateDisplay(59,seconds)
    return
  }
  else{
    updateDisplay(minutes,seconds)
    return
  }
}


export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;
element.minutes.textContent = String(minutes).padStart(2,0);
element.seconds.textContent = String(seconds).padStart(2,0);
}