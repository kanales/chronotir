export class Clock {
    secs: number
    mins: number
    cbs: (() => void)[]
    paused: boolean

    constructor(mins: number, secs: number) {
        this.secs  = secs
        this.mins = mins
        this.cbs   = []
        this.paused = false
    }

    decrTime() {
        if (this.secs === 0) {
            this.mins--
            this.secs = 59
        } else {
            this.secs--
        }
    }

    update() {
        if (this.paused) return
        if (this.secs > 0 || this.mins > 0) this.decrTime()
    }

    static sliceTime(t: number) {
        return ("0" + t).substr(-2)
    }

    clockRepr() {
        return `${Clock.sliceTime(this.mins)}:${Clock.sliceTime(this.secs)}`
    }

    setOnCountdownEnds(cb: () => void) {
        this.cbs.push(cb)
    }

    onCoundownEnds() {
        this.cbs.forEach(cb => cb())
        this.cbs = [] // free the list of cbs
    }
}