input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("Hallo Jan ")
    motors.motorPower(100)
    music.playMelody("- F D F D G E - ", 500)
    led.plotBarGraph(
    31,
    51
    )
})
