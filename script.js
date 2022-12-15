// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
// Your JS goes here
const body = document.getElementsByTagName('body')[0];
console.log(body);

function makeSquareBlack() {
    var div = document.createElement('div')
    div.style.width = '11.1%'
    div.style.height = '11.1%'
    div.style.float = 'left'
    var backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = '#' + backgroundColor;
    div.style.paddingBottom = '11.1%'
    body.append(div)
}


function loop(num) {
    for(var i = 1; i < num; i++) {
       makeSquareBlack()

    }
}

loop(82);