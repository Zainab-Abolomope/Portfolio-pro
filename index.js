function newTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const nowPlusOneHour = new Date(now.getTime() + 60 * 60 * 1000); 
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[nowPlusOneHour.getUTCDay()];

    currentTimeUTC.textContent = `Current Time (UTC+1): ${nowPlusOneHour.toUTCString()}`;
    currentDay.textContent = `Current Day: ${dayName}`;
}

newTime();
setInterval(newTime, 1000);
