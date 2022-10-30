let audio = document.getElementById("aud1");
let btnplay = document.getElementById("btn");
let btnmute = document.getElementById("btn3");
let volume = document.querySelector(".slider");
let next = document.getElementById("btn2");
let image = document.getElementById("imge");
let songname = document.getElementById("musictitle");
let analyzer = document.getElementById("btn9");
let starbtn = document.getElementById("btnstar");
let prev = document.getElementById("btn0");
let bb =9;

btnplay.addEventListener("click", playpause2);
btnmute.addEventListener("click", muteaudio2);
next.addEventListener("click", nextsong1);
starbtn.addEventListener("click", showcreator);
prev.addEventListener("click", prevsong1);


audio.addEventListener('ended', function () {
    nextsong();
})

function jaiplay() {
    document.getElementById("btn10").style.display = "block";
    document.getElementById("btn9").style.display = "none";
}
function jaipause() {
    document.getElementById("btn10").style.display = "none";
    document.getElementById("btn9").style.display = "block";
}


//function for show/hide creator.

let cnt = 0;

function showcreator(){
    if(cnt === 0){
        document.getElementById("creatorimg").style.display = "block";
        document.querySelector(".about").style.display = "block";
        cnt = 1;
    }else{
        document.getElementById("creatorimg").style.display = "none";
        document.querySelector(".about").style.display = "none";
        cnt = 0;
    }
}
let tt=0;
window.onload = function () {
    alert("This website plays random songs when next/previous clicked!")
    audio.pause();
    songname.textContent = "paused...click to play";
    document.getElementById("playicon").style.display = "block";
    document.getElementById("pauseicon").style.display = "none";
    document.getElementById("pauseicon1").style.display = "none";
    count = 1;
    

}





let count2 = 0;

//function for the volume bar.


volume.addEventListener("input", function (e) {
    audio.volume = volume.value / 100;
    if (audio.volume === 0 && count2 === 0) {
        // audio.muted = "true";
        document.getElementById("unmuteicon").style.display = "none"
        document.getElementById("muteicon").style.display = "block"
        document.getElementById("muteicon1").style.display = "block"
        // count2 = 1;
    } else if (audio.volume > 0 && count2 != 1) {
        // audio.muted = "false";
        document.getElementById("unmuteicon").style.display = "block"
        document.getElementById("muteicon").style.display = "none"
        document.getElementById("muteicon1").style.display = "none"
        // count2 = 0;
    }
})


let count = 0;

//function for audio pause-play.


function playpause(arrsong) {
    
    if (count === 0) {

        audio.pause();
        songname.textContent = "paused...click to play";
        document.getElementById("playicon").style.display = "block";
        document.getElementById("pauseicon").style.display = "none";
        document.getElementById("pauseicon1").style.display = "none";
        jaipause();
        count = 1;
    }

    else if (count === 1) {
        if (count2 === 1) {
            songname.textContent = "muted...click to unmute"
            audio.play();
            document.getElementById("playicon").style.display = "none";
            document.getElementById("pauseicon").style.display = "block";
            document.getElementById("pauseicon1").style.display = "block";
            // jaiplay();
            count = 0;
        }
        else if(tt===0 ){
            audio.play();
            songname.textContent = "tere bina...";
            document.getElementById("playicon").style.display = "none";
            document.getElementById("pauseicon").style.display = "block";
            document.getElementById("pauseicon1").style.display = "block";
            jaiplay();

            count = 0; 
            
        
        }
        
        else if(bb===1) {
                audio.play();
                songname.textContent = arrsong.songname;
                document.getElementById("playicon").style.display = "none";
                document.getElementById("pauseicon").style.display = "block";
                document.getElementById("pauseicon1").style.display = "block";
                jaiplay();
                count = 0;
        }

    }

}


//function for mute-unmute audio.


function muteaudio(arrsong) {
    if (count2 === 0 && volume.value != 0) {
        audio.muted = true;
        songname.textContent = "muted...click to unmute";
        document.getElementById("unmuteicon").style.display = "none"
        document.getElementById("muteicon").style.display = "block"
        document.getElementById("muteicon1").style.display = "block"
        jaiplay();
        count2 = 1;
    }
    // else if (count2 === 1 && volume.value === 0) {
    //     audio.muted = false;
    //     title.textContent = "tere bina..."
    //     document.getElementById("unmuteicon").style.display = "block"
    //     document.getElementById("muteicon").style.display = "none"
    //     document.getElementById("muteicon1").style.display = "none"
    //     document.querySelector(".slider").value = "30";
    //     count2 = 0;

    // }
    else if (count2 === 1) {
        if (count === 1) {
            audio.muted = false;
            songname.textContent = "paused...click to play"
            document.getElementById("unmuteicon").style.display = "block"
            document.getElementById("muteicon").style.display = "none"
            document.getElementById("muteicon1").style.display = "none"
            jaipause();
            count2 = 0;
        }
        // else if(volume.value <= 0){
        //     audio.muted = false;
        //     title.textContent = "tere bina...";
        //     document.getElementById("unmuteicon").style.display = "block"
        //     document.getElementById("muteicon").style.display = "none"
        //     document.getElementById("muteicon1").style.display = "none"
        //     document.querySelector(".slider").value = "30";
        //     count2 = 0;

        // }
        else if(tt===0){
            audio.muted = false;
            songname.textContent = "tere bina...";
            document.getElementById("unmuteicon").style.display = "block"
            document.getElementById("muteicon").style.display = "none"
            document.getElementById("muteicon1").style.display = "none"
            jaiplay();
            count2 = 0;
        }
        else if(bb===1){
            audio.muted = false;
            songname.textContent = arrsong.songname;
            document.getElementById("unmuteicon").style.display = "block"
            document.getElementById("muteicon").style.display = "none"
            document.getElementById("muteicon1").style.display = "none"
            jaiplay(); 
            count2 = 0;
        }
    }


}


//function for next song.



let arrsong = [
    {
        songname: "paniyon sa...",
        image: "2.gif",
        audio: "paniyosa.mp3"
    },
    {
        songname: "o re piya...",
        image: "3.gif",
        audio: "orepiya.mp3"
    },
    {
        songname: "bekhayali...",
        image: "4.gif",
        audio: "bekhayali.mp3"
    },
    {
        songname: "tune jo na kaha...",
        image: "5.gif",
        audio: "tunejonakaha.mp3"
    },
    {
        songname: "beete lamhein...",
        image: "6.gif",
        audio: "beetelamhein.mp3"
    },
    {
        songname: "chaand baaliyan...",
        image: "7.gif",
        audio: "chandbaliyan.mp3"
    },
    {
        songname: "kun faya...",
        image: "8.gif",
        audio: "kunfaya.mp3"
    },
    {
        songname: "mann bhareya...",
        image: "9.gif",
        audio: "mannbharya.mp3"
    },
    {
        songname: "chaand sifarish...",
        image: "10.gif",
        audio: "chandsifarish.mp3"
    },
    {
        songname: "afreen afreen...",
        image: "11.gif",
        audio: "afreen.mp3"
    },
    {
        songname: "agar tum saath ho...",
        image: "12.gif",
        audio: "agartumsathho.mp3"
    },
    {
        songname: "kaali kaali...",
        image: "13.gif",
        audio: "kalikali.mp3"
    },
    {
        songname: "mast magan...",
        image: "14.gif",
        audio: "mastmagan.mp3"
    },
    {
        songname: "tera hone laga...",
        image: "15.gif",
        audio: "terahonelagahu.mp3"
    },
    {
        songname: "ishq sufiyana...",
        image: "16.gif",
        audio: "ishqsufiyana.mp3"
    },
    {
        songname: "main agar kahu...",
        image: "17.gif",
        audio: "meinagarkahu.mp3"
    },
    {
        songname: "ranjha...",
        image: "18.gif",
        audio: "ranjha.mp3"
    },
    {
        songname: "tum tak...",
        image: "19.gif",
        audio: "tumtak.mp3"
    },
    {
        songname: "main rang...",
        image: "20.gif",
        audio: "mainrangsharbatoka.mp3"
    },
    {
        songname: "sajdaa...",
        image: "21.gif",
        audio: "sajdaa.mp3"
    },
    {
        songname: "kalank...",
        image: "22.gif",
        audio: "kalank.mp3"
    },
    {
        songname: "ishq wala love...",
        image: "23.gif",
        audio: "ishqwalalove.mp3"
    },
    {
        songname: "ye dooriyan...",
        image: "24.gif",
        audio: "yedooriyan.mp3"
    },
    {
        songname: "tum se hi...",
        image: "25.gif",
        audio: "tumsehi.mp3"
    },
    {
        songname: "excuses...",
        image: "26.gif",
        audio: "excuses.mp3"
    },
    {
        songname: "tum mile...",
        image: "27.gif",
        audio: "tummile.mp3"
    },
    {
        songname: "kabira...",
        image: "28.gif",
        audio: "kabira.mp3"
    },
    {
        songname: "iktara...",
        image: "29.gif",
        audio: "iktara.mp3"
    },
    {
        songname: "hawayein...",
        image: "30.gif",
        audio: "hawayein.mp3"
    },
    {
        songname: "teri ore...",
        image: "31.gif",
        audio: "teriore.mp3"
    },

]


function rendermusic(arrsong) {
    songname.textContent = arrsong.songname;
    image.src = arrsong.image;
    audio.src = arrsong.audio;
}

let y = Math.floor(Math.random()*arrsong.length);


function nextsong() {
    
    y = (y + 1) % arrsong.length;
    rendermusic(arrsong[y]);
    audio.play();
    // playpause(arrsong[y]);
    // audio.play();
    // songname.textContent = arrsong.songname;
    document.getElementById("playicon").style.display = "none";
    document.getElementById("pauseicon").style.display = "block";
    document.getElementById("pauseicon1").style.display = "block";
    count = 0;
    jaiplay();
    
}


function prevsong(){
    y = (y-1)%arrsong.length;
    rendermusic(arrsong[y]);
    audio.play();
    document.getElementById("playicon").style.display = "none";
    document.getElementById("pauseicon").style.display = "block";
    document.getElementById("pauseicon1").style.display = "block";
    count = 0;
    jaiplay();

}

// function nextsong() {
//     // y=(y+1) % arrsong.length;
//     let y = Math.floor(Math.random()*arrsong.length);
//     // let k = Math.floor(Math.random()*arrsong.length);
//     // let y = Math.floor((j+k)/2);

//     rendermusic(arrsong[y]);
//     console.log(y);
//     console.log(j);
//     console.log(k);
//     audio.play();
//     // playpause(arrsong[y]);

// }






function nextsong1() {
    setTimeout(nextsong, 7);
    bb=1;
    tt = 7;
}
function prevsong1() {
    setTimeout(nextsong, 7);
    bb=1;
    tt = 7;
}





function playpause2() {
    playpause(arrsong[y]);
}

function muteaudio2() {
    muteaudio(arrsong[y]);
}
