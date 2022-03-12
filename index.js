      
let prev = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let yt = document.querySelector('#yt');
let link = document.querySelector('.link');
let img = document.querySelector('#track-image');
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");




var autoplay = 1;

var no = 0;
var playing_song = false;
var updateTimer;

var audio = document.querySelector('#aaa');
var ball = document.querySelector('#ball');


var all_name = [
    "Bae",
    "Oru Pakkam Uthadu Marupakkam Neruppu",
    "Into Your Arms",
    "Keep Your Mind <br> Wide Open",
    "WIT YOU",
    "BABY I LOVE"];

var all_img = [
    "https://z.zz.fo/qIrbO.png",
    "https://z.zz.fo/mJepB.png",  
    "https://z.zz.fo/VDmdd.png",
    "https://z.zz.fo/yBTG1.png",
    "https://z.zz.fo/e2iWp.png",
    "https://z.zz.fo/iIMYM.png"];

var all_audio = [
    "https://z.zz.fo/Hpnsp.m4a",
    "https://z.zz.fo/jwVOS.m4a",
    "https://z.zz.fo/pLSJt.m4a",
    "https://z.zz.fo/A9IoH.m4a",
    "https://z.zz.fo/oiK8E.m4a",
    "https://z.zz.fo/FF8vM.m4a"];

var all_yt = [
    "MM EDITZ",
    "UNKNOWM PERSON",
    "BEAST REMIXZ",
    "STEVE EDITZ",
    "NWM",
    "NWM"];

var all_ytch = [
    "https://www.youtube.com/channel/UChAvpl3XC8rcMYvQh9lQk-Q",
    "#",
    "https://www.youtube.com/channel/UCNaog8jZlPeZI17JF32dGaA",
    "https://www.youtube.com/channel/UCpPG-MDcQc20EIsPb5Fe5RA",
    "https://www.youtube.com/channel/UCC4pZxpeGOdxpsP_qYISRKA",
    "https://www.youtube.com/channel/UCC4pZxpeGOdxpsP_qYISRKA"];

load(no);   

function load(no){
    clearInterval(updateTimer);
    resetValues();
    img.setAttribute("src",all_img[no]); 
    audio.setAttribute("src",all_audio[no]); 
    title.innerHTML = (all_name[no]);
    yt.innerHTML = (all_yt[no]);
    link.setAttribute("href",all_ytch[no]);
    audio.addEventListener("ended", nextk);
    updateTimer = setInterval(seekUpdate, 1000);   
}
function resetValues() 
    {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
    }
function seekTo() {

seekto = audio.duration * (seek_slider.value / 100);
audio.currentTime = seekto;

}

function seekUpdate() {
let seekPosition = 0;


if (!isNaN(audio.duration)) {
seekPosition = audio.currentTime * (100 / audio.duration);
seek_slider.value = seekPosition;

// Calculate the time left and the total duration
let currentMinutes = Math.floor(audio.currentTime / 60);
let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
let durationMinutes = Math.floor(audio.duration / 60);
let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

// Add a zero to the single digit time values
if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

// Display the updated duration
curr_time.textContent = currentMinutes + ":" + currentSeconds;
total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}





    function playk() {
                    if(playing_song == false)
                        {    
                            palysong(); 
                        }
                    else
                        {
                            pausesong();   
                        }
                 }
function palysong()
{  
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
    audio.play();   
}

function pausesong()
    {
        playing_song = false;
        play.innerHTML = '<i class="fa fa-play"></i>';
        audio.pause(); 
    }  
    

function nextk(){

                if(no<all_audio.length-1)
                    {
                        no += 1;
                        load(no);
                        
                        palysong();
                    }
                else
                    {
                        no = 0;
                        load(no);
                    
                        palysong();
                    }
                }

function prevk(){

                if(no>0)
                        {
                            no -= 1;
                            load(no);
                            prev.innerHTML = '<i class="fa fa-backward"></i>';
                            palysong();
                        }
                else
                        {
                            no = all_audio.length-1;
                            load(no);
                            prev.innerHTML = '<i class="fa fa-backward"></i>';
                            palysong();
                        }
                }
play.addEventListener("click",playk);
prev.addEventListener("click",prevk);
next.addEventListener("click",nextk);
