let beats = {
    "81": {
        beat: new Beat("./assets_Piano Chord 331.mp3"),
        button: new Button("#FF60E7", 81)
    },
    "87": {
        beat: new Beat("./assets_Piano Chord 209.mp3"),
        button: new Button("#FF60E7", 87)
    },
    "69": {
        beat: new Beat("./assets_Piano Chord 208.mp3"),
        button: new Button("#FF60E7", 69)
    },
    "65": {
        beat: new Beat("./assets_Piano Chord 331.mp3"),
        button: new Button("#FBFA81", 65)
    },
    "83": {
        beat: new Beat("./assets_Piano Chord 209.mp3"),
        button: new Button("#FBFA81", 83)
    },
    "68": {
        beat: new Beat("./assets_Piano Chord 208.mp3"),
        button: new Button("#FBFA81", 68)
    },
    "90": {
        beat: new Beat("./assets_Piano Chord 331.mp3"),
        button: new Button("#3ED0EF", 90)
    },
    "88": {
        beat: new Beat("./assets_Piano Chord 209.mp3"),
        button: new Button("#3ED0EF", 88)
    },
    "67": {
        beat: new Beat("./assets_Piano Chord 208.mp3"),
        button: new Button("#3ED0EF", 67)
    },
}

triggerBeat = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
    }
}

const myBeat = document.querySelectorAll(".button");

myBeat.forEach(beat => {
    console.log(beat.id)
})

myBeat.forEach(beat => beat.addEventListener('click', () => {
    let keyPress = beats[beat.id];
    keyPress.beat.play();
    keyPress.button.select();
    setTimeout(()=> {keyPress.button.deselect()},100)
}))

const end = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.button.deselect();
    }
}

document.addEventListener('keydown', triggerBeat)
