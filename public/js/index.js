class Clock {
    constructor(mins, secs) {
        this.secs  = secs
        this.mins = mins
        this.cbs   = []
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
        console.log("Second passed!")
        if (this.secs > 0 || this.mins > 0) this.decrTime()
    }

    static sliceTime(t) {
        return ("0" + t).substr(-2)
    }

    clockRepr() {
        return `${Clock.sliceTime(this.mins)}:${Clock.sliceTime(this.secs)}`
    }

    setOnCountdownEnds(cb) {
        this.cbs.push(cb)
    }

    onCoundownEnds() {
        this.cbs.forEach(cb => cb())
        this.cbs = [] // free the list of cbs
    }
}

function init() {
    c = new Clock(1,10)
    window.setInterval(() => {
        c.update()
        $("#clock").text(c.clockRepr())
    },1000)
}

function next() {

}

function back() {

}

function pause() {
    
}

$(() => {
    
})


