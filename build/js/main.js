import { Clock } from "./Clock";
import { ClockState } from "./AppState";
var main = function () {
    $('.container').hide();
    var state = new ClockState(new Clock(1, 10));
    state.run();
};
$(function () { return main(); });
