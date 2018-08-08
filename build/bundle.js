(function () {
    'use strict';

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

    var ClockState = /** @class */ (function () {
        function ClockState(clock) {
            this.clock = clock;
        }
        ClockState.prototype.run = function () {
            console.log("Starting...");
            // esto es horrible
            var c = this.clock;
            $("#crono").show();
            $("#clock").text(c.clockRepr());
            // actualizar cada 1000 ms
            window.setInterval(function () {
                c.update();
                $("#clock").text(c.clockRepr());
            }, 1000);
            $("#back").addClass("disabled");
            $("#next").addClass("disabled");
            $("#play").click(function (e) {
                if (c.paused) {
                    c.paused = false;
                    // resume
                }
                else {
                    c.paused = true;
                    // pause
                }
            });
        };
        return ClockState;
    }());

    var main = function () {
        $('.container').hide();
        var state = new ClockState(new Clock(1, 10));
        state.run();
    };
    $(function () { return main(); });

}());
