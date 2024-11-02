function updateClock() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const time = now.toLocaleTimeString();
    document.getElementById('clock').innerText = `${day}, ${time}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();
