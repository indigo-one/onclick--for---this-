"use strict";

let blocks = document.querySelectorAll('.block');
//let blocks2 = document.querySelectorAll('.block');
//console.log(blocks2);

for (let i = 0; i < blocks.length; i++) {
  blocks[i].onclick = one
}

function one() {
  if(this.style.background != 'aqua') {
    this.style.background = 'aqua';
  }
else {
  this.style.background = 'black';
}
}
