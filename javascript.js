var cursor = document.querySelector(".cursor");

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
