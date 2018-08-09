import {Clock} from "./Clock"
import { exists } from "fs";

export interface AppState {
    run(): void
    exit(): void
}

export class ClockState implements AppState {
    clock: Clock

    constructor(clock: Clock) {
        this.clock = clock
    }
    private do() {

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
    
        // todo
        $("#back").addClass("disabled")
        $("#next").addClass("disabled")
    
        $("#play").click(e => {
            c.paused = !c.paused
        })
    }

    exit() {
        $("#crono").hide()
    }
}

export class SetupState implements AppState {
    exit(): void {
        $("#setup").hide()
    }
    run(): void {
        $("#setup").show()
    }
}