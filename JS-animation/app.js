let bars = document.querySelectorAll('.grid > div');
console.log(bars);

let count = 0;
let barShade = 0;
setInterval(function () {
    if (count < bars.length) {
        bars[count].style.opacity = barShade += 0.1;
        count++;
        if (barShade > 0.5) {
            barShade = 0.5;
        }
    } else {
        return
   }
}, 1000)

