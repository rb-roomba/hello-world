////////////////////////////////////////////////
//   上半分
////////////////////////////////////////////////
var c1 = document.getElementById("canvas1");
c1.width = 300;
c1.height = 300;
var ctx = c1.getContext("2d");

// ---------- 変数 ---------- 
var theta;
var step = 0;

// 実行
timer = setInterval(display, 20);// displayを定期的に実行


// ---------- その他の関数 ---------- 
// ボタン
function start(){
    timer = setInterval(display, 20);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    step = 0;
    display();
}

function draw_circle(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI, true);
    ctx.fill();
}

function draw_spiral(n, theta){
    var cx = 150;// (150, 150): center
    var cy = 150;
    var r = 10;
    r *= Math.sqrt(n);
    draw_circle(cx + r*Math.cos(n*theta*Math.PI/180.0),
		cy + r*Math.sin(n*theta*Math.PI/180.0), 5);
}

function display(){
    ctx.clearRect(0, 0, 300, 300);// 残像を消す
    // 角度を計算
    if (Math.pow(-1, Math.floor(step/500)) > 0){
	theta = 132.5 + (step%500)/50;
    }else{
	theta = 142.5 - (step%500)/50;
    }
    // 角度を表示
    document.getElementById('theta').innerHTML = 'theta=' + theta;
    // 色指定・描画
    for (i=0; i<200; i++){
	ctx.fillStyle = "rgb(" + String(250-i) + ", 255, " + String(i+100) + ")";
	draw_spiral(i, theta);
    }
    
    step = step + 1;
    if (step > 1000){
	clearInterval(timer);
    }
}



////////////////////////////////////////////////
//   下半分
////////////////////////////////////////////////
var c2 = document.getElementById("canvas2");
c2.width = 300;
c2.height = 300;
var ctx2 = c2.getContext("2d");

// ---------- 変数 ---------- 
var theta2 = 137.5;

// 描画
display2();


// ---------- その他の関数 ---------- 
// スライドバー
function changeValue(value){
    theta2 = value;
    display2();
}

function draw_circle2(x, y, r){
    ctx2.beginPath();
    ctx2.arc(x, y, r, 0, 2*Math.PI, true);
    ctx2.fill();
}

function draw_spiral2(n, theta){
    var cx = 150;// (150, 150): center
    var cy = 150;
    var r = 10;
    r *= Math.sqrt(n);
    draw_circle2(cx + r*Math.cos(n*theta*Math.PI/180.0),
		cy + r*Math.sin(n*theta*Math.PI/180.0), 5);
}

function display2(){
    ctx2.clearRect(0, 0, 300, 300);// 残像を消す
    // 角度を表示
    document.getElementById('theta2').innerHTML = 'theta=' + theta2;
    // 色指定・描画
    for (i=0; i<200; i++){
	ctx2.fillStyle = "rgb(" + String(250-i) + ", 255, " + String(i+100) + ")";
	draw_spiral2(i, theta2);
    }

}
