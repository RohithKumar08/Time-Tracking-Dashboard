import data from './data.json' with { type: 'json' };

var daily = document.getElementById('daily');
var weekly = document.getElementById('weekly');
var monthly = document.getElementById('monthly');

async function updateData(title, timeframe) {
    let currentHours;
    let previousHours
    try {
        data.forEach(b => {
            if (b.title == title && b.timeframes.hasOwnProperty(timeframe)) {
                currentHours = b.timeframes[timeframe].current;
                previousHours = b.timeframes[timeframe].previous;
                if (timeframe == 'daily') {
                    document.getElementById(`time-${title}`).innerText = `${currentHours}hrs`;
                    document.getElementById(`past-${title}`).innerText = `Yesterday - ${previousHours}hrs`;
                }
                else if (timeframe == 'weekly') {
                    document.getElementById(`time-${title}`).innerText = `${currentHours}hrs`;
                    document.getElementById(`past-${title}`).innerText = `Last Week - ${previousHours}hrs`;
                }
                else if (timeframe == 'monthly') {
                    document.getElementById(`time-${title}`).innerText = `${currentHours}hrs`;
                    document.getElementById(`past-${title}`).innerText = `Last Month - ${previousHours}hrs`;
                }
            }
        });
    }
    catch (error) {
        console.error(`Error updating data for ${title}:`, error);
    }
}

function updateAllData(timeframe) {
    data.forEach(a => {
        updateData(a.title, timeframe);
    });
}

daily.addEventListener('click', daily1);
weekly.addEventListener('click', weekly1);
monthly.addEventListener('click', monthly1);

function daily1() {
    updateAllData('daily');
}

function weekly1() {
    updateAllData('weekly');
}

function monthly1() {
    updateAllData('monthly');
}

weekly1();
