function band(){
    document.getElementById("band").src="https://ichef.bbci.co.uk/images/ic/960x540/p01bqsqd.jpg";
}

function geddy(){
    document.getElementById("band").src="http://www.progarchives.com/progressive_rock_discography_band/2525.jpg";
}

function lifeson(){
    document.getElementById("band").src="https://cdn.mos.cms.futurecdn.net/kwRRtPC3m7ZucGVRn7Gvz5.jpg";
}

function peart(){
    document.getElementById("band").src="https://www.drummerworld.com/drummerworld/neilpeart450sabian.jpg";
}

document.getElementById("button1").addEventListener("click", band);

document.getElementById("button2").addEventListener("click", geddy);

document.getElementById("button3").addEventListener("click", lifeson);

document.getElementById("button4").addEventListener("click", peart);