const button = document.getElementById('cute-button');
const canvas = document.getElementById('confetti-canvas');


// Preload image
const mewCat = new Image();
mewCat.src = 'images/mewing.jpg';
let catLoaded = false;
mewCat.onload = () => { catLoaded = true; };

button.addEventListener('click', () => {
    const sound = new Audio('sounds/yahoo.mp3');
    sound.currentTime = 1;
    sound.play();

    if (!catLoaded) return;

    confetti({
        spread: 360,
        ticks: 200,
        flat: true,
        gravity: 1,
        decay: 0.94,
        startVelocity: 50,
        particleCount: 5,
        scalar: 12,
        shapes: ["image"],
        shapeOptions: {
            image: [{
                src: "images/mewing.jpg",
                width: 32,
                height: 32,
            }],
        },
    });
});