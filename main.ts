/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: oct 2025
 * This program calculates the distance using sonar
*/

// variables
let distanceToObject: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// find distance
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})