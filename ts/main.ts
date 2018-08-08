import {Clock} from "./Clock"
import {AppState, SetupState, ClockState} from "./AppState"


let main = () => {
    $('.container').hide()

    let state: AppState = new ClockState(new Clock(1,10))
    state.run()
}

$(() => main())