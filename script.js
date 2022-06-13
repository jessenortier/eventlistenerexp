window.addEventListener('mousemove', asoelHe);

function asoelHe(event) { 
    let r = 256 / window.innerHeight * event.clientY;
    let g = 256 / window.innerWidth * event.clientX;
    let b = ((r+g)/2);
    let draai = b*1.40625;
    document.querySelector(".container").innerHTML = "<div style='position: absolute; bottom: " + (event.clientY - 25) + "px; " + "right: " + (event.clientX - 25) + "px; " + "background-color: rgb(" + r  + ", " + g + ", " + b + "); height: 100px; width: 100px; border-radius: 20%; transform: rotate("+draai+"deg);'></div>";

    console.log("R="+r.toFixed(0)+" G="+g.toFixed(0) + " B="+b.toFixed(0) + " Rotation=" + draai.toFixed(0));
    

};