basic.forever(function on_forever() {
    let degrees = input.compassHeading()
    if (degrees < 45 || degrees > 315) {
        basic.showString("North")
    } else if (degrees < 135) {
        basic.showString("East")
    } else if (degrees < 225) {
        basic.showString("South")
    } else {
        basic.showString("West")
    }
    
})
