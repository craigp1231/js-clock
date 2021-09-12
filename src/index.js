import dayjs from 'dayjs';

const urlParams = new URLSearchParams(window.location.search);

const dateFormat = urlParams.has('format') ? urlParams.get('format') : 'DD/MM/YYYY';

const element = document.createElement('div');
document.body.appendChild(element);

const updateTime = function () {
    element.innerText = dayjs().format(dateFormat);
}

setInterval(updateTime, 1000);

updateTime();