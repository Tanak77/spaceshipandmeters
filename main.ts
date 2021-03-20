input.onButtonPressed(Button.A, function () {
    if (Корабль_X > 0) {
        led.unplot(Корабль_X, 4)
        Корабль_X += -1
        led.plot(Корабль_X, 4)
    }
})
function GameOn () {
    basic.clearScreen()
    пусто = randint(0, 4)
    led.plot(Корабль_X, 4)
    for (let Метеор_Y = 0; Метеор_Y <= 4; Метеор_Y++) {
        for (let Метеор_X = 0; Метеор_X <= 4; Метеор_X++) {
            if (пусто != Метеор_X) {
                led.plot(Метеор_X, Метеор_Y)
            }
        }
        basic.pause(300 - очки)
        for (let Метеор_X = 0; Метеор_X <= 4; Метеор_X++) {
            led.unplot(Метеор_X, Метеор_Y)
        }
        if (Метеор_Y == 4) {
            if (Корабль_X != пусто) {
                basic.showIcon(IconNames.No)
                basic.pause(2000)
                basic.clearScreen()
                basic.showNumber(очки)
                if (очки > МаксОчки) {
                    МаксОчки = очки
                }
                очки = 0
                Корабль_X = 2
            } else {
                очки += 1
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    Игра = 0
    game.setScore(МаксОчки)
    game.gameOver()
})
function Preparations () {
    Корабль_X = 2
    очки = 0
    МаксОчки = 0
    led.setBrightness(100)
    led.plot(Корабль_X, 4)
    Игра = 1
}
input.onButtonPressed(Button.B, function () {
    if (Корабль_X < 4) {
        led.unplot(Корабль_X, 4)
        Корабль_X += 1
        led.plot(Корабль_X, 4)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (Игра == 1) {
        GameOn()
    }
})
let Игра = 0
let МаксОчки = 0
let очки = 0
let пусто = 0
let Корабль_X = 0
Preparations()
