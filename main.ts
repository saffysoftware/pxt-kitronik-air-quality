input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.measureData()
    basic.showNumber(kitronik_air_quality.readHumidity())
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.measureData()
    basic.showNumber(kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.Pa))
})
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
basic.forever(function () {
	
})
