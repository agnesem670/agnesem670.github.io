document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll("button:not([class=btn])");
    for (let button in buttons) {
        document.addEventListener("click", show);
        }
})


const show = (e) => {
    if (e.target.id === 'david') {
        document.getElementById(e.target.id).getElementsByTagName('img')[0].className = "open";
        document.getElementById("classic").getElementsByTagName('img')[0].className = "open";
    } else if (e.target.id === 'wc'){
        document.getElementById(e.target.id).className = "close";
        document.getElementById("wccount").className = "container-green-red";
        const buttonswithclass = document.querySelectorAll(".btn");
        for (let button in buttonswithclass) {
            document.addEventListener("click", boom);
        }
        
        var timeleft = 10; 
        var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
            document.getElementById("wccount").className = "close";   
            document.getElementById("wc").className = "open";
            document.getElementById("wc").getElementsByTagName('img')[0].className = "open";
            clearInterval(downloadTimer);
            }
            timeleft -= 1;
        }, 1000)    
        
    } else {
        document.getElementById(e.target.id).getElementsByTagName('img')[0].className = "open";
    }
}

function boom () {
    document.getElementById("wccount").className = "close";   
    document.getElementById("wc").className = "open";
    document.getElementById("wc").getElementsByTagName('img')[0].className = "open";
}
