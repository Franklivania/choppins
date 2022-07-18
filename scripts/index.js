alert("tap on the cards if you're in mobile mode")

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src = "image/sun.png";
    }else{
        icon.src = "image/moon.png";
    }
}