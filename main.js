Webcam.set({
    height: 300,
    width: 350,
    img_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"envoirment"
    }
});

camera=document.getElementById("camera");
Webcam.attach("#camera"); 