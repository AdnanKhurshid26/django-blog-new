window.onload = function exampleFunction() {
    if (screen.width < 800) {
        let list = document.getElementsByTagName("img");
        for (let i = 2; i < list.length - 1; i++) {
            if(list[i].className != "except"){
                list[i].style.width = "100%";
                list[i].style.height = "auto";
            }
          
        }
    }
}
