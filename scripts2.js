/* --- INDEX --- */

/* ELEVATOR */
function elevAppear () {
    const element = document.getElementById("elevAppear");
    const rect = element.getBoundingClientRect();
    let topVal = rect.top.toFixed();
    if (parseInt(topVal) < 400) {
        document.getElementById("elevator").className = "elevator";
    }else{
        document.getElementById("elevator").className = "close";
    }
}

function elevGoesDown (){
    document.getElementById("oops").className="oops";
    const element = document.getElementById("oops-img");
    const y = element.getBoundingClientRect().top + window.scrollY + element.clientHeight;
    window.scroll({
        top: y, 
        behavior: 'smooth',
    });

    let elevInterval = setInterval(function(){
        window.scrollTo({
            top: 0, 
            behavior: 'smooth',
        });
        document.getElementById("oops").className="close";
        clearInterval(elevInterval);  
    }, 2000);
       
}

document.addEventListener('DOMContentLoaded', function () {
    /* MY STORY >> ONCLICK "SHOW" */
   /* const buttons = document.querySelectorAll("button.doors");
    for (let button in buttons) {
        document.addEventListener("click", show);
    }*/
    let allImages = document.querySelectorAll("img");
        allImages.forEach((value)=>{
        value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})
})

/* TEXTS FOR DOORS PURPOSE*/
const idText = {
    david1 : "Oh, David, you suprised me! I am not prepared! Oh, what time is it ... ",
    david2 : "... wow, it is so late! Sorry Dave, we have to go ... NOW.",
    wc1 : "Oh no, not there! We are not that close...",
    wc2 : "Thanks God Michal is not here! <br> <br> But I have a feeling that this is not the end of our troubles. That crazy, what happens to people when they see the toilet.",
    wc3 : "Uff... We are lucky, so lucky. But it was very risky. Next time listen to me!",
    england : "Oh no! Where you are looking for him? In Chernobyl? RUN!",
    american : "",
    classic : "This is David. David is weird. Let's get out of here...",
    stone : "",
    broken : "These are pickled cucumbers, not Michal... I don't understand. Do you want to lure him or something?",
    twinp : "Be quiet, I hear someone...  <br>Laura is that you? Is Michal with you? ... <br>She says there is only Bob with her. <br>We have to look further.",
}

/* CURRENT TIME */	
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();

/* WC OPENING */
document.addEventListener('DOMContentLoaded', function () {
    const wc = document.getElementById("wc");
    wc.addEventListener("click", showWc);
    }
) 

let clicks = 0;

function showWc () {
    const wc = document.getElementById("wc");
    const wccount = document.getElementById("wccount");
    const txtfs = document.getElementById("text-field-small");
    const txtfs2 = document.getElementById("text-field-small2");
    clicks ++;  

    if (clicks == 1) {
        txtfs.innerHTML= idText.wc1;
        txtfs2.innerHTML= idText.wc1;
        
    } else if (clicks >= 2) {
        wc.className = "close";
        wccount.className = "container-green-red";
        txtfs.innerHTML= idText.wc2;
        txtfs2.innerHTML= idText.wc2;

        /* adds BOOM*/
        const buttons = document.querySelectorAll(".btn");
        for (let button in buttons) {
            document.addEventListener("click", boom);
        }

        let timeleft = 10; 
        let doorInterval = setInterval(function(){
            if (timeleft = 0){
                wccount.className = "close";   
                wc.className = "open";
                wc.getElementsByTagName('img')[0].className = "open";
                txtfs.innerHTML= idText.wc3;
                txtfs2.innerHTML= idText.wc3;
            } else {
                timeleft -= 1;
            }    
        }, 1000);  
    
    }
}

function boom () {
    document.getElementById("wccount").className = "close";   
    document.getElementById("wc").className = "open";
    document.getElementById("wc").getElementsByTagName('img')[0].className = "open";
    document.getElementById("text-field-small").innerHTML= idText.wc3;
    document.getElementById("text-field-small2").innerHTML= idText.wc3;
}
/*
const show = (e) => {
    
    if (e.target.id === 'david') {
        document.getElementById(e.target.id).getElementsByTagName('img')[0].className = "open";
        document.getElementById("classic").getElementsByTagName('img')[0].className = "open";
        document.getElementById("text-field-small").innerHTML= idText.david1 + time + idText.david2 ;
        document.getElementById("text-field-small2").innerHTML= idText.david1 + time + idText.david2;
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

        let timeleft = 10; 
        let doorInterval = setInterval(function(){
            if(timeleft = 0){
            document.getElementById("wccount").className = "close";   
            document.getElementById("wc").className = "open";
            document.getElementById("wc").getElementsByTagName('img')[0].className = "open";
            document.getElementById("text-field-small").innerHTML= idText.wc3;
            document.getElementById("text-field-small2").innerHTML= idText.wc3;
            }
            timeleft -= 1;

        }, 1000)    
        
    } else {
        const idName = e.target.id;
        document.getElementById(e.target.id).getElementsByTagName('img')[0].className = "open";
        document.getElementById("text-field-small").innerHTML= idText[e.target.id];
        document.getElementById("text-field-small2").innerHTML= idText[e.target.id];
    }
}
*/


