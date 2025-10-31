

//  this works

// div style transform will only work
// if we concat the angle as string
// and pass to div style property

/*global
    window
    getComputedStyle
*/
var div = {};
var box = [];
var i = 0;
var putHere = {};

var text = [
    "Fishing",
    "Camping",
    "Sports",
    "Theater",
    "Dancing",
    "Shopping",
    "Movies",
    "Museums",
    "Concerts",
    "Pinics"
];

var color = [
    "hsl(36, 100%,50%)",
    "hsl(72, 100%, 50%)",
    "hsl(108, 100%,50%)",
    "hsl(144, 100%,50%)",
    "hsl(180, 100%, 50%)",
    "hsl(216, 100%, 50%)",
    "hsl(252, 100%,50%)",
    "hsl(288, 100%,50%)",
    "hsl(324, 100%,50%)",
    "hsl(360,100%,50%)"
];

//  color.length is the control for the for loop

//  event listeners

function expand(event) {
    "use strict";
    var h = document.getElementById("header");
    var y = event.target.id;
    box[y].style.transition = "all 1s";
    box[y].style.height = 150 + "px";
    box[y].style.width = 150 + "px";
    h.style.backgroundColor = color[y];
}
function contract(event) {
    "use strict";
    var y = event.target.id;
    box[y].style.transistion = "0.25s";
    box[y].style.height = 90 + "px";
    box[y].style.width = 90 + "px";
}
//  event listeners

function makeDiv() {
    "use strict";
    putHere = document.getElementById("content");
    div = document.createElement("div");
    div.id = "container";
    putHere.appendChild(div);
}
//  in container
//  text-align: center
//  create 10 boxes

//  must use mousedown and mouseup to stop "flickering"

function makeMore() {
    "use strict";
    var abc = document.getElementById("container");
    for (i = 0; i < color.length; i = i + 1) {
        box[i] = document.createElement("div");
        box[i].id = i;
        box[i].innerHTML += text[i];
        box[i].style.height = 90 + "px";
        box[i].style.width = 90 + "px";
        box[i].style.display = "inline-block";
        box[i].style.marginTop = 6 + "px";
        box[i].style.marginRight = 5 + "px";
        box[i].style.marginLeft = 5 + "px";
        box[i].style.marginBottom = 6 + "px";
        box[i].style.borderRadius = 5 + "px";
        box[i].style.backgroundColor = color[i];
        box[i].addEventListener("mousedown", expand, false);
        box[i].addEventListener("mouseup", contract, false);
        abc.appendChild(box[i]);
    }
}
makeDiv();
makeMore();
