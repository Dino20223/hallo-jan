def on_button_a():
    basic.show_string("Hallo Jan ")
    motors.motor_power(100)
    music.play_melody("- F D F D G E - ", 500)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)
