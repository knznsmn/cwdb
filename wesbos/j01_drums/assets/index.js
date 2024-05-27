// Selectors
const key = {
    a: document.getElementById('a'),
    s: document.getElementById('s'),
    d: document.getElementById('d'),
    f: document.getElementById('f'),
    g: document.getElementById('g'),
    h: document.getElementById('h'),
    j: document.getElementById('j'),
    k: document.getElementById('k'),
    l: document.getElementById('l'),
}

// Listeners
document.addEventListener('keydown', (e) => {
    let pressedKey = e.key;
    console.log(e.key);
    playSound(pressedKey);

})

function playSound(l) {
    switch (l) {
        case 'a':
            const boom = new Audio('./assets/wav/boom.wav');
            boom.play();
            key.a.classList.add('pressed');
            setTimeout(function () { key.a.classList.remove('pressed'); }, 100);
            break;
        case 's':
            const clap = new Audio('./assets/wav/clap.wav');
            clap.play();
            key.s.classList.add('pressed');
            setTimeout(function () { key.s.classList.remove('pressed'); }, 100);
            break;
        case 'd':
            const hihat = new Audio('./assets/wav/hihat.wav');
            hihat.play();
            key.d.classList.add('pressed');
            setTimeout(function () { key.d.classList.remove('pressed'); }, 100);
            break;
        case 'f':
            const kick = new Audio('./assets/wav/kick.wav');
            kick.play();
            key.f.classList.add('pressed');
            setTimeout(function () { key.f.classList.remove('pressed'); }, 100);
            break;
        case 'g':
            const openhat = new Audio('./assets/wav/openhat.wav');
            openhat.play();
            key.g.classList.add('pressed');
            setTimeout(function () { key.g.classList.remove('pressed'); }, 100);
            break;
        case 'h':
            const ride = new Audio('./assets/wav/ride.wav');
            ride.play();
            key.h.classList.add('pressed');
            setTimeout(function () { key.h.classList.remove('pressed'); }, 100);
            break;
        case 'j':
            const snare = new Audio('./assets/wav/snare.wav');
            snare.play();
            key.j.classList.add('pressed');
            setTimeout(function () { key.j.classList.remove('pressed'); }, 100);
            break;
        case 'k':
            const tink = new Audio('./assets/wav/tink.wav');
            tink.play();
            key.k.classList.add('pressed');
            setTimeout(function () { key.k.classList.remove('pressed'); }, 100);
            break;
        case 'l':
            const tom = new Audio('./assets/wav/tom.wav');
            tom.play();
            key.l.classList.toggle('pressed');
            setTimeout(function () { key.l.classList.remove('pressed'); }, 100);
            break;
    }
}