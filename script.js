function updateClock(){

    const now = new Date();

    document.getElementById("time")
    .innerHTML =
    now.toLocaleTimeString("id-ID");

    document.getElementById("date")
    .innerHTML =
    now.toLocaleDateString(
        "id-ID",
        {
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        }
    );
}

setInterval(updateClock,1000);

updateClock();



const hour = new Date().getHours();

let greeting="";

if(hour < 12){
    greeting = "Good Morning, Sena";
}
else if(hour < 18){
    greeting = "Good Afternoon, Sena";
}
else{
    greeting = "Good Evening, Sena";
}

document
.getElementById("greeting")
.innerHTML = greeting;



const quotes = [

"Be yourself. YOLO.",

"Life does not ask us to compete.",

"Still alive.",

"Humans should not become wolves to other humans.",

"I will become whatever I want.",

"A complicated person trying to become something."

];

const random =
quotes[
Math.floor(
Math.random() * quotes.length
)
];

document
.getElementById("quote")
.innerHTML = random;
