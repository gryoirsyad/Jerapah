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

function countdown(){

    const examDate =
    new Date("2026-07-01");

    const kknDate =
    new Date("2026-08-01");

    const now =
    new Date();

    const examDays =
    Math.ceil(
        (examDate - now)
        /
        (1000*60*60*24)
    );

    const kknDays =
    Math.ceil(
        (kknDate - now)
        /
        (1000*60*60*24)
    );

    document
    .getElementById("exam")
    .innerHTML =
    `📚 Ujian: ${examDays} hari`;

    document
    .getElementById("kkn")
    .innerHTML =
    `🏕 KKN: ${kknDays} hari`;

}

countdown();

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

async function getWeather(){

    const API_KEY =
    "MASUKKAN_API_KEY";

    const city =
    "Bandung";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response =
    await fetch(url);

    const data =
    await response.json();

    document
    .getElementById("weather")
    .innerHTML =
    `${data.main.temp}°C • ${data.weather[0].main}`;

}

getWeather();

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
