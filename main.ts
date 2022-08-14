basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
