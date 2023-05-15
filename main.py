def on_forever():
    degrees = input.compass_heading()
    if degrees < 45 or degrees > 315:
        basic.show_string("North")
    elif degrees < 135:
        basic.show_string("East")
    elif degrees < 225:
        basic.show_string("South")
    else:
        basic.show_string("West")
basic.forever(on_forever)