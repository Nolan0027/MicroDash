def on_button_pressed_a():
    global LvlSelector
    if B == 1:
        LvlSelector += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global A
    if A == 0:
        A = 0
        if LvlSelector == 1:
            StartLvl(1)
        if LvlSelector == 2:
            StartLvl(2)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global LvlSelector
    if B == 1:
        LvlSelector += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def StartLvl(Number2: number):
    global B, Player
    B = 0
    if Number2 == 1:
        Player = game.create_sprite(1, 3)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            """)
Player: game.LedSprite = None
B = 0
A = 0
LvlSelector = 0
LvlSelector = 1
basic.show_leds("""
    # # # . .
    # # # # .
    # # # # #
    # # # # .
    # # # . .
    """)
A = 1

def on_forever():
    pass
basic.forever(on_forever)
