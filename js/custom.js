let items_in_cart = localStorage.getItem("cartcontents") || 0;;

function add(){
   items_in_cart++;
   // document.getElementById("no_of_prod").textContent=items_in_cart;
   localStorage.setItem("cartcontents", items_in_cart);
   console.log(items_in_cart);
}


changeBg.nr = 0;
function changeBg() {
    let bg_s= ["img/1.jpg", "img/3.jpg", "img/4.jpg"]
    
    document.getElementById("bg").src = bg_s[changeBg.nr]; 
    
    changeBg.nr++;
    if(changeBg.nr >= 3){
        changeBg.nr = 0;
    }

};
function empty(){
    localStorage.setItem("cartcontents", 0);
    location.reload();
}



window.addEventListener('load', (event) => {
    console.log('page is fully loaded');


    //vahetab taustapilti seal kus saab
    if (document.getElementById("bg"))
        setInterval(changeBg, 5000);
    
    //töötab veebis, aga mitte kohalikus masinas
    let t = document.getElementById("no_of_prod");
    if (t) {
        t.textContent = localStorage.getItem("cartcontents") || 0;
        console.log(localStorage.getItem("cartcontents"))
    }
        
});