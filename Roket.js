window.onload=function(){
    let canvas = document.getElementById('canvas');
    let g = canvas.getContext('2d');
    function drawCanvas(mouseX, mouseY) {
        let img = new Image();
        img.src = 'image/roket.png';
        img.crossOrigin = 'anonymous';
        g.clearRect(0, 0, 1200, 800);
        g.drawImage(img, mouseX - 15, mouseY - 15, 30, 30);
        if(mouseX < 15 || mouseY < 15 || mouseX > 200 - 15 || mouseY > 200 - 15) {
            g.fillStyle = 'rgba(255, 0, 0, 0.3)'; // 30% opacity red
            g.fillRect(mouseX - 15, mouseY - 15, 30, 30); // Draw this over top of your image
        }
    }
    drawCanvas(0, 0);
    canvas.addEventListener('mousemove', function(e) {
        drawCanvas(e.pageX, e.pageY);
    }, false);
}
