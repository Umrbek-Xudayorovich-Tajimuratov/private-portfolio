// // TEXTILLATE
$(function () {
    $('.txtl').textillate({
        loop: true,
        initialDelay: 300,

        in:{
            delayScale:1.5,
            delay: 100,
           
            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false
        },
        out:{
            delayScale:1.5,
            delay: 50,
            
            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,
            loop:false
        }
    });
});
// // TEXTILLATE END 

// // SCROLL_DA MENU NI ORQASIGA FON BERILISHI
window.addEventListener("scroll", function(){
    let navScroll=document.getElementById("nav");
    navScroll.classList.toggle("fixedman",window.scrollY>10)
})
// // ? SCROLL_DA MENU NI ORQASIGA FON BERILISHI END


    let navClick=document.getElementById("nav");
    navClick.classList.toggle("menu-back");
