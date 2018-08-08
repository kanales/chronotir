import {Clock} from "./Clock"

export interface AppState {
    run(): void
}

export class ClockState implements AppState {
    clock: Clock

    constructor(clock: Clock) {
        this.clock = clock
    }

    run() {
        console.log("Starting...")
        // esto es horrible
        let c = this.clock

        $("#crono").show()

        $("#clock").text(c.clockRepr())

        // actualizar cada 1000 ms
        window.setInterval(() => {
            c.update()
            $("#clock").text(c.clockRepr())
        },1000)
    
        $("#back").addClass("disabled")
        $("#next").addClass("disabled")
    
        $("#play").click(e => {
            if (c.paused) {
                c.paused = false
                // resume
            } else {
                c.paused = true
                // pause
            }
        })
        
    }

}

export class SetupState implements AppState {
    run() {
        throw new Error("Method not implemented.");
    }
}