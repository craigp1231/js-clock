import dayjs from 'dayjs';

const urlParams = new URLSearchParams(window.location.search);

const dateFormat = urlParams.has('format') ? urlParams.get('format') : 'DD/MM/YYYY HH:mm:ss';
const useUTC = urlParams.has('utc') ? urlParams.get('utc') == '1' : false;

const element = document.createElement('div');
document.body.appendChild(element);

const updateTime = function () {
    const dateObj = useUTC ? dayjs.UTC() : dayjs();
    element.innerText = dateObj.format(dateFormat);
}

setInterval(updateTime, 1000);

updateTime();