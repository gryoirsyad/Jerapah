function updateClock(){

    const now = new Date();

    document
    .getElementById("clock")
    .innerHTML =
    now.toLocaleTimeString(
        "id-ID"
    );

    document
    .getElementById("date")
    .innerHTML =
    now.toLocaleDateString(
        "id-ID",
        {
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );
}

setInterval(updateClock,1000);

updateClock();



const hour =
new Date().getHours();

let greeting="";

if(hour < 12){

    greeting =
    "Good Morning, Sena";

}
else if(hour < 18){

    greeting =
    "Good Afternoon, Sena";

}
else{

    greeting =
    "Good Evening, Sena";

}

document
.getElementById("greeting")
.innerHTML = greeting;



const quotes=[

"Be yourself. YOLO.",

"Life does not ask us to compete.",

"I will become whatever I want.",

"Still alive.",

"Humans should not become wolves to other humans.",

"A complicated person trying to become something."

];

const random =
quotes[
Math.floor(
Math.random()
*
quotes.length
)
];

document
.getElementById("quote")
.innerHTML =
random;



const audio =
document
.getElementById(
"rainAudio"
);

const button =
document
.getElementById(
"musicButton"
);

audio.volume = 0.3;

audio.play()
.catch(()=>{

    button.innerHTML =
    "▶ Start Journey";

});

button.onclick=()=>{

    if(audio.paused){

        audio.play();

        button.innerHTML =
        "🌧 Rain";

    }

    else{

        audio.pause();

        button.innerHTML =
        "🔇 Muted";

    }

};
