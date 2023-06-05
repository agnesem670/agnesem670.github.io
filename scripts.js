
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
    return;
}

function elevGoesDown (){
    const oops = document.getElementById("oops");
    oops.className="oops";
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
        clearInterval(elevInterval);
        oops.className="close";  
    }, 2000);
    return;   
}

document.addEventListener('DOMContentLoaded', function () {
    let allImages = document.querySelectorAll("img");
    allImages.forEach((value)=>{
        value.oncontextmenu = (e)=>{
            e.preventDefault();
        }
    })
    return;
})

/* --- MY STORY --- */

/* TEXTS FOR DOORS PURPOSE*/
const idText = {
    david1 : "Oh, David, you suprised me! I am not prepared! Oh, what time is it ... <br> ",
    david2 : " <br>... wow, it is so late! Sorry Dave, we have to go ... NOW.",
    wc1 : "Oh no, not there! We are not that close...",
    wc2 : "Thanks God Michal is not here! But I have a feeling that this is not the end of our troubles. That crazy, what happens to people when they see the toilet.",
    wc3 : "Uff... We are lucky, so lucky. But it was very risky. Next time listen to me!",
    england : "Oh no! Where you are looking for him? In Chernobyl? RUN!",
    american : "I'm making up...",
    classic : "This is David. David is weird. Let's get out of here...",
    stone : "Sorry, maybe next time...",
    broken : "These are pickled cucumbers, not Michal... I don't understand. Do you want to lure him or something?",
    twinp : "Be quiet, I hear someone...  <br>Laura is that you? Is Michal with you? ... <br>She says there is only Bob with her. <br>We have to look further.",
}

/* WC */

let clicks = 0;       

function showWc () {
    clearInterval(timerDavid);
    
    const wc = document.getElementById("wc");
    const wc2 = document.getElementById("wc2");
    const wc3 = document.getElementById("wc3");
    const txtfs = document.getElementById("text-field-small");
    const txtfs2 = document.getElementById("text-field-small2");
    
    clicks ++;

    /* CLICK 1*/
    if (clicks==1) {
        txtfs.innerHTML= idText.wc1;
        txtfs2.innerHTML= idText.wc1;

    /* CLICK 2*/
    } else if (clicks=2) {
        wc.className = "close";
        wc2.className = "container-green-red";
        txtfs.innerHTML= idText.wc2;
        txtfs2.innerHTML= idText.wc2;
        wc.removeEventListener("click", showWc);

        /* ADDS ONCLICK BOOM*/
        document.getElementById("red").addEventListener("click", boom);
        document.getElementById("green").addEventListener("click", boom);
            
        let boomClicked = false;
        function boom () {
            boomClicked = true;
        }     

        /*CLICK 3 OR COUNTING DOWN*/
        let timeleft = 10; 
        let timer = setInterval(function(){
            if (boomClicked == true || timeleft == 0){
                wc2.className = "close";   
                wc3.className = "container-boom";
                txtfs.innerHTML= idText.wc3;
                txtfs2.innerHTML= idText.wc3;

                document.getElementById("red").addEventListener("click", boom);
                document.getElementById("green").addEventListener("click", boom);

                boomClicked = false;

            } else if (timeleft <= 0) {
                clearInterval(timer);
            }
        timeleft -= 1;
        }, 1000)    
    }
    return;
}

/* DAVID */
let timerDavid = ""
function showDavid () {
    timerDavid = setInterval (function () {
        let now = new Date();
        let hr = now.getHours();
        let sec = now.getSeconds()>=10?now.getSeconds():('0'+now.getSeconds());
        let min = now.getMinutes()>=10?now.getMinutes():('0'+now.getMinutes());
        time = hr + ":" + min + ":" + sec;
        document.getElementById("text-field-small").innerHTML= idText.david1 + time + idText.david2;
        document.getElementById("text-field-small2").innerHTML= idText.david1 + time + idText.david2;
    }, 10);
    document.getElementById("david").getElementsByTagName('img')[0].className = "open";
    document.getElementById("classic").getElementsByTagName('img')[0].className = "open";
    return ;
}

/* RANDOM DOOR */
function showTarget(event) {
    clearInterval(timerDavid);
    const idName = event.target.id;
    document.getElementById(idName).getElementsByTagName('img')[0].className = "open";
    document.getElementById("text-field-small").innerHTML= idText[idName];
    document.getElementById("text-field-small2").innerHTML= idText[idName];
    return ;
}