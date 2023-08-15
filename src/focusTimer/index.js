import * as events from './events.js';
import state from './state.js';
import * as timer from './timer.js'

export function focusTimer(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDisplay(minutes, seconds);

  events.registerControls();
}