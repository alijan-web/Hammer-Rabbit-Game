var cursor = document.querySelector(".cursor");
var holes = [...document.querySelectorAll(".hole")];
var score = 0;
var scoreall = document.querySelector(".score span");
var sound = new Audio("images/smash.mp3")



function run(){
    var i = Math.floor(Math.random() * holes.length)
    var hole = holes[i];
    var timer;
    var img = document.createElement("img");
    img.classList.add ("rabbit");
    img.src = 'images/rabbit.png';

    img.addEventListener("click", function(){
        sound.play();
        score += 10;
        scoreall.textContent = score;
        img.src = 'images/smash-rabbit.png';
         
    })

hole.appendChild(img);
timer =setTimeout(() => {
    hole.removeChild(img);
    run();
}, 1500);
}
run();















window.addEventListener("mousemove", function(e){
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})
window.addEventListener("mousedown", function(){
    cursor.classList.add("active");
})
window.addEventListener("mouseup", function(){
    cursor.classList.remove("active");
})
