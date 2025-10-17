/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: oct 2025
 * This program calculates the distance using sonar
*/

// variables
let distanceTooObject = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// calculate the distance
input.onButtonPressed(Button.A, function () {
    distanceTooObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber (distanceTooObject)
    basic.showIcon(IconNames.Happy)
})
