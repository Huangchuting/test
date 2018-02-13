/*
* @Author: hct
* @Date:   2018-02-13 20:12:20
* @Last Modified by:   hct
* @Last Modified time: 2018-02-13 20:29:49
*/
var ball = { x : 600 , y : 100 , r : 20 , g : 2 , vx : -4 , vy : 0 , color : '#576b95'};
window.onload = function(){
    var canvas = document.getElementById('ball');
    canvas.width = 1024;
    canvas.height = 768;

    var cxt = canvas.getContext("2d");

    setInterval(function(){
        render(cxt);
        update();
    }, 50);
}
function update(){
    //物理知识
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g;

    if(ball.y >= 768 - ball.r){
        ball.y = 768 - ball.r;
        ball.vy = - ball.vy * 0.8; //0.8摩擦系数
    }
}
function render(cxt){
    cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
    cxt.beginPath();
    cxt.fillStyle = ball.color;
    cxt.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    cxt.fill();
    cxt.closePath();
}