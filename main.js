"use strict";
let bars = document.getElementsByClassName("bar");


fetch('./data.json')
    .then(results => results.json())
    .then(data => data.map(obj => obj.amount))
    .then(data => data.map(num => (num/Math.max(...data)).toFixed(2)* 130))
    .then(arr => {
        bar1.style.height= arr[0] + "px";
        bar2.style.height= arr[1] + "px";
        bar3.style.height= arr[2] + "px";
        bar4.style.height= arr[3] + "px";
        bar5.style.height= arr[4] + "px";
        bar6.style.height= arr[5] + "px";
        bar7.style.height= arr[6] + "px";
        bars[arr.indexOf(Math.max(...arr))].style.background = "hsl(186, 34%, 60%)"
    });



