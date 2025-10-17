/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: oct 2025
 * This program calculates the distance using sonar
*/

// variables
let distanceToObject = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// calculate the distance
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})
