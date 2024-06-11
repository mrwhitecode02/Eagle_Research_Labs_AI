document.addEventListener('DOMContentLoaded', () => {
    const trafficLights = document.querySelectorAll('.traffic-light .light');
    const pedestrianLights = document.querySelectorAll('.pedestrian-light .light');
    const redButton = document.getElementById('red-button');
    const yellowButton = document.getElementById('yellow-button');
    const greenButton = document.getElementById('green-button');
    const crosswalkButton = document.getElementById('crosswalk-button');
    const lightDurations = [4000, 1000, 3000]; // Red, Yellow, Green durations in milliseconds
    let currentIndex = 0;
    let crosswalkRequested = false;
    let manualOverride = false;
    let timeoutId;

    function changeLight() {
        trafficLights.forEach(light => light.classList.remove('on'));
        pedestrianLights.forEach(light => light.classList.remove('on'));

        trafficLights[currentIndex].classList.add('on');
        if (currentIndex === 0) {
            pedestrianLights[1].classList.add('on'); // Green pedestrian light
        } else {
            pedestrianLights[0].classList.add('on'); // Red pedestrian light
        }

        let currentDuration = lightDurations[currentIndex];
        if (crosswalkRequested && currentIndex === 2) {
            currentDuration = 1000; // Shorten green light if crosswalk is requested
            crosswalkRequested = false;
        }

        if (!manualOverride) {
            timeoutId = setTimeout(() => {
                currentIndex = (currentIndex + 1) % trafficLights.length;
                changeLight();
            }, currentDuration);
        }

        playSound();
    }

    function playSound() {
        const audio = new Audio('beep.mp3');
        audio.play();
    }

    function setLight(index) {
        clearTimeout(timeoutId);
        manualOverride = true;
        currentIndex = index;
        changeLight();
        manualOverride = false;
        timeoutId = setTimeout(() => {
            currentIndex = (currentIndex + 1) % trafficLights.length;
            changeLight();
        }, lightDurations[currentIndex]);
    }

    redButton.addEventListener('click', () => setLight(0));
    yellowButton.addEventListener('click', () => setLight(1));
    greenButton.addEventListener('click', () => setLight(2));

    crosswalkButton.addEventListener('click', () => {
        crosswalkRequested = true;
    });

    changeLight();
});
