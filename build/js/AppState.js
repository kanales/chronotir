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
export { ClockState };
var SetupState = /** @class */ (function () {
    function SetupState() {
    }
    SetupState.prototype.run = function () {
        throw new Error("Method not implemented.");
    };
    return SetupState;
}());
export { SetupState };
