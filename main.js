"use strict";
let bars = document.querySelectorAll(".bar");
let values = document.querySelectorAll(".value");

fetch('./data.json')
    .then(results => results.json())
    .then(data => data.map(obj => obj.amount))
    .then(data => {
        for(let i = 0; i < values.length; i++){
            values[i].innerHTML = "$" + data[i];
        }
        return data
    })
    .then(data => data.map(num => (num/Math.max(...data)).toFixed(2)* 130))
    .then(arr => {
        for(let i = 0; i < bars.length; i++){
            bars[i].style.height= arr[i] + "px";
        }
        bars[arr.indexOf(Math.max(...arr))].style.background = "hsl(186, 34%, 60%)"
    });



    

