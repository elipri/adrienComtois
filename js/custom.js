window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    let bg = document.getElementById("bg");
   // let bg2 = document.getElementById("bg2");
   // let bg3 = document.getElementById("bg3");
    changeBg.nr = 0;
    setInterval(changeBg, 5000);
    function changeBg() {
        let bg_s= ["img/1.jpg", "img/3.jpg", "img/4.jpg"]
        
        document.getElementById("bg").src=bg_s[changeBg.nr]; 
        changeBg.nr ++;
        console.log(changeBg.nr);
        if(changeBg.nr >=3){
            changeBg.nr = 0;
        }

    };

});