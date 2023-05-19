document.addEventListener('DOMContentLoaded', function () {
    /* ONCLICK "SHOW" */
    const buttons = document.querySelectorAll("button:not([class=btn])");
    for (let button in buttons) {
        document.addEventListener("click", show);
    }

    /* IMAGES PROTECTION*/
    let allImages = document.querySelectorAll("img");
        allImages.forEach((value)=>{
        value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})
})

/* TEXTS FOR DOORS PURPOSE*/
let idText = {
    david : "Oh, David, you suprised me!",
    wc1 : "Oh no, not there! We are not that close...",
    wc2 : "Thanks God Michal is not here!",
    wc3 : "Uff...",
    england : "",
    american : "",
    classic : "This is David. David is weird. Let's get out of here...",
    stone : "",
    broken : "These are pickled cucumbers, not Michael... I don't understand. Do you want to lure him or something?",
    twinp : "Be quiet, I hear someone...  <br>Laura is that you? Is Michal with you? ... <br>She says there is only Bob with her. <br>We have to look further.",
}

/* ONLY FOR WC PURPOSE */
var clicks = 1;       
function clicked() {
    clicks++;
}

/* LOOKING FOR MICHAL */
const show = (e) => {
    
    if (e.target.id === 'david') {
        document.getElementById(e.target.id).getElementsByTagName('img')[0].className = "open";
        document.getElementById("classic").getElementsByTagName('img')[0].className = "open";
        document.getElementById("text-field-small").innerHTML= idText[e.target.id];
        document.getElementById("text-field-small2").innerHTML= idText[e.target.id];
    } else if (e.target.id === 'wc'){
        document.getElementById("wc").addEventListener("click", clicked);
        if (clicks==1) {
            document.getElementById("text-field-small").innerHTML= idText.wc1;
            document.getElementById("text-field-small2").innerHTML= idText.wc1;
        } else if (clicks>=2) {
            document.getElementById("wc").className = "close";
            document.getElementById("wccount").className = "container-green-red";
            const buttonswithclass = document.querySelectorAll(".btn");
            for (let button in buttonswithclass) {
            document.addEventListener("click", boom);

            document.getElementById("text-field-small").innerHTML= idText.wc2;
            document.getElementById("text-field-small2").innerHTML= idText.wc2;
        }}
        
        var timeleft = 10; 
        var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
            document.getElementById("wccount").className = "close";   
            document.getElementById("wc").className = "open";
            document.getElementById("wc").getElementsByTagName('img')[0].className = "open";
            clearInterval(downloadTimer);
            document.getElementById("text-field-small").innerHTML= idText.wc3;
            document.getElementById("text-field-small2").innerHTML= idText.wc3;
            }
            timeleft -= 1;
            
        }, 1000)    
        
    } else {
        const idName = e.target.id
        console.log(idName)
        
        document.getElementById(e.target.id).getElementsByTagName('img')[0].className = "open";
        document.getElementById("text-field-small").innerHTML= idText[e.target.id];
        document.getElementById("text-field-small2").innerHTML= idText[e.target.id];
    }
}

function boom () {
    document.getElementById("wccount").className = "close";   
    document.getElementById("wc").className = "open";
    document.getElementById("wc").getElementsByTagName('img')[0].className = "open";
    document.getElementById("text-field-small").innerHTML= wc3;
    document.getElementById("text-field-small2").innerHTML= wc3;
}
