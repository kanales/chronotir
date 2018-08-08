var Clock = /** @class */ (function () {
    function Clock(mins, secs) {
        this.secs = secs;
        this.mins = mins;
        this.cbs = [];
        this.paused = false;
    }
    Clock.prototype.decrTime = function () {
        if (this.secs === 0) {
            this.mins--;
            this.secs = 59;
        }
        else {
            this.secs--;
        }
    };
    Clock.prototype.update = function () {
        if (this.paused)
            return;
        if (this.secs > 0 || this.mins > 0)
            this.decrTime();
    };
    Clock.sliceTime = function (t) {
        return ("0" + t).substr(-2);
    };
    Clock.prototype.clockRepr = function () {
        return Clock.sliceTime(this.mins) + ":" + Clock.sliceTime(this.secs);
    };
    Clock.prototype.setOnCountdownEnds = function (cb) {
        this.cbs.push(cb);
    };
    Clock.prototype.onCoundownEnds = function () {
        this.cbs.forEach(function (cb) { return cb(); });
        this.cbs = []; // free the list of cbs
    };
    return Clock;
}());
export { Clock };
