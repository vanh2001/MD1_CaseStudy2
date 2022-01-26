class Bullet {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    createBullet(){
        let ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }
}
window.onload = function () {
    let ctx = document.getElementById('canvas').getContext('2d');

}
let bullet = new Bullet(50,50, 20);
bullet.createBullet();