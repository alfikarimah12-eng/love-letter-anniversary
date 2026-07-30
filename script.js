/* ==========================================
   PASSWORD
========================================== */

const PASSWORD = "06042026";

/* ==========================================
   LOGIN
========================================== */

function checkPassword(){

    const input = document.getElementById("password").value;

    const error = document.getElementById("errorMessage");

    if(input === "06042026"){

        document.getElementById("loginPage").style.display="none";

        document.getElementById("mainPage").style.display="block";

    }else{

        error.innerHTML="❌ Password salah.";

    }

}

/* ==========================================
   MUSIC
========================================== */

const music = document.getElementById("bgMusic");

function playMusic(){

    if(music.paused){

        music.play();

    }else{

        music.pause();

    }

}

/* ==========================================
   QUIZ
========================================== */

function checkAnswer(button,isCorrect){

    if(isCorrect){

        button.style.background="#6BCB77";

        alert("🥹❤️ Jawaban benar!");

    }else{

        button.style.background="#FF6B6B";

        alert("😂 Jawaban belum tepat. Coba lagi ya sayang.");

    }

}

/* ==========================================
   HITUNG LAMA HUBUNGAN
========================================== */

function relationshipDays(){

    const startDate = new Date("2026-04-06");

    const today = new Date();

    const diff = today-startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    document.getElementById("relationshipTime").innerHTML=

    days+" Hari";

}

relationshipDays();
/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-30px";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animation="fallHeart 8s linear forwards";

    heart.style.pointerEvents="none";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,1000);


/* ==========================================
   FALLING TULIPS
========================================== */

function createTulip(){

    const tulip=document.createElement("div");

    tulip.innerHTML="🌷";

    tulip.style.position="fixed";

    tulip.style.left=Math.random()*100+"vw";

    tulip.style.top="-40px";

    tulip.style.fontSize=(25+Math.random()*15)+"px";

    tulip.style.animation="fallTulip 10s linear forwards";

    tulip.style.pointerEvents="none";

    document.body.appendChild(tulip);

    setTimeout(()=>{

        tulip.remove();

    },10000);

}

setInterval(createTulip,1200);


/* ==========================================
   TYPING EFFECT
========================================== */

const text=document.getElementById("typingText");

const original=text.innerHTML;

text.innerHTML="";

let i=0;

function typing(){

    if(i<original.length){

        text.innerHTML+=original.charAt(i);

        i++;

        setTimeout(typing,25);

    }

}

window.onload=typing;


/* ==========================================
   CONFETTI
========================================== */

function confetti(){

    for(let i=0;i<80;i++){

        const conf=document.createElement("div");

        conf.innerHTML="🎉";

        conf.style.position="fixed";

        conf.style.left=Math.random()*100+"vw";

        conf.style.top="-20px";

        conf.style.fontSize=(15+Math.random()*20)+"px";

        conf.style.animation="fallHeart 5s linear forwards";

        document.body.appendChild(conf);

        setTimeout(()=>{

            conf.remove();

        },5000);

    }

}


/* ==========================================
   QUIZ SELESAI
========================================== */

let score=0;

function checkAnswer(button,isCorrect){

    if(button.disabled) return;

    button.disabled=true;

    if(isCorrect){

        score++;

        button.style.background="#65d46e";

        if(score>=4){

            setTimeout(()=>{

                confetti();

                alert("🥹❤️ Selamat sayang! Semua jawaban benar. I Love You ❤️");

            },300);

        }

    }else{

        button.style.background="#ff6b6b";

    }

}


/* ==========================================
   CSS ANIMATION
========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fallHeart{

0%{

transform:translateY(-50px);

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

@keyframes fallTulip{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);