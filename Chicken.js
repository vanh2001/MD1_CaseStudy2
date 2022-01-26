// class ChickenClass {
//     constructor(x,y,) {
//     }
// }
// window.onload= function () {
    let ctx = document.getElementById('canvas').getContext('2d');
    function drawChicken() {
        let img = document.getElementById('chicken');
        img.src = 'image/chicken.png';
        img.crossOrigin = 'anonymous';
        // ctx.clearRect(0, 0, 900, 800);
        ctx.drawImage(img, 48, 50,48,48);
        // ctx.fillRect(0,0, 48, 48);
    }
    drawChicken();
// }