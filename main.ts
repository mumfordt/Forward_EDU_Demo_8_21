basic.forever(function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(20, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
