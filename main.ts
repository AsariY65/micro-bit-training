input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
})
for (let index = 0; index < 4; index++) {
    music.playMelody("C D E F G A B C5 ", 120)
}
basic.forever(function () {
	
})
