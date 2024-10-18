input.onButtonPressed(Button.A, function () {
    if (A == 1) {
        LvlSelector += -1
        basic.showNumber(LvlSelector)
    } else {
        Player.set(LedSpriteProperty.Y, 2)
        basic.pause(220)
        Player.set(LedSpriteProperty.Y, 1)
        basic.pause(300)
        Player.set(LedSpriteProperty.Y, 3)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (A == 1) {
        StartLvl(LvlSelector)
    }
})
input.onButtonPressed(Button.B, function () {
    if (A == 1) {
        LvlSelector += 1
        basic.showNumber(LvlSelector)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
function StartLvl (Number2: number) {
    Player = game.createSprite(0, 3)
    Spike = game.createSprite(4, 3)
    G1 = game.createSprite(0, 4)
    G2 = game.createSprite(1, 4)
    G3 = game.createSprite(2, 4)
    G4 = game.createSprite(3, 4)
    G5 = game.createSprite(4, 4)
    A = 2
    if (Number2 == 1) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 12; index++) {
                Spike.move(-1)
                if (Player.isTouching(Spike)) {
                    control.reset()
                }
                basic.pause(500)
            }
            Spike.set(LedSpriteProperty.X, 4)
            for (let index = 0; index < 8; index++) {
                Spike2 = game.createSprite(3, 3)
                Spike2.move(-1)
                Spike.move(-1)
                if (Player.isTouching(Spike) || Player.isTouching(Spike2)) {
                    control.reset()
                }
                basic.pause(500)
            }
            Spike2.delete()
            Spike.set(LedSpriteProperty.X, 4)
        }
    }
}
let Spike2: game.LedSprite = null
let G5: game.LedSprite = null
let G4: game.LedSprite = null
let G3: game.LedSprite = null
let G2: game.LedSprite = null
let G1: game.LedSprite = null
let Spike: game.LedSprite = null
let Player: game.LedSprite = null
let LvlSelector = 0
let A = 0
A = 1
LvlSelector = 2
basic.showLeds(`
    # # # . .
    # # # # .
    # # # # #
    # # # # .
    # # # . .
    `)
