import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import UTC from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(AdvancedFormat);
dayjs.extend(UTC);
dayjs.extend(timezone);

const urlParams = new URLSearchParams(window.location.search);

const dateFormat = urlParams.has('format') ? urlParams.get('format') : 'DD/MM/YYYY HH:mm:ss';
const useUTC = urlParams.has('utc') ? urlParams.get('utc') == '1' : false;

const element = document.createElement('div');
document.body.appendChild(element);

const updateTime = function () {
    const dateObj = useUTC ? dayjs.utc() : dayjs();
    element.innerText = dateObj.format(dateFormat);
}

setInterval(updateTime, 1000);

updateTime();