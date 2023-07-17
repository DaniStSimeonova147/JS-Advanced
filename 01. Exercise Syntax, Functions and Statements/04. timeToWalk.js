function solve(steps, footPrint, speed) {
    const distance = steps * footPrint;
    let time = Math.round(distance / speed * 3.6); //от км/ч в м/с
    time += Math.floor(distance / 500) * 60; //добавяме време за почивка

    const seconds = time % 60;
    time -= seconds;
    time /= 60;
    const minutes = time % 60;
    time -= minutes;
    time /= 60;
    const hours = time;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
        //return ('0' + num).slice(-2);
    }
}

solve(4000, 0.60, 5);
solve(564, 0.70, 5.5);