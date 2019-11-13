var i = 0;
var time = 3000;
var bool = true;

var images = [];
var titles = [];
var list_items = [];

images[0] = "https://img.icons8.com/ios/100/000000/web-design.png";
images[1] = "https://img.icons8.com/ios/100/000000/apple-app-store.png"
images[2] = "https://img.icons8.com/ios/100/000000/emu4ios.png";


titles[0] = "Desarrollo Web";
titles[1] = "Desarrollo de Apps móviles";
titles[2] = "Desarrollo de videojuegos";


list_items[0] = "Diseño web profesional, hecho a la medida";
list_items[1] = "Landing page, blogs, e-commerce, etc."
list_items[2] = "Adaptable a celulares y tabletas";
list_items[3] = "Optimización en buscadores (SEO)";

var list_item_1 = document.getElementById("li1");
var list_item_2 = document.getElementById("li2");
var list_item_3 = document.getElementById("li3");
var list_item_4 = document.getElementById("li4");


function changeImg() {
    var img = document.getElementById("icon");
    var header = document.getElementById("header");
    //img.src = images[i];
    //header.textContent = titles[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}


window.onload = changeImg;
