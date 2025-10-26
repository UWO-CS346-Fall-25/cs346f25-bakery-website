const hour = new Date().getHours();
const day = new Date().getDay();
const message = document.getElementById('open-or-not');
if((hour >= 7 && hour <= 17 && day != 0 ||hour >= 10 && hour <= 17 && day == 0 )){
    message.textContent = "We Are Open! Come Visit Us Now!";
}else{
     message.textContent = "We Are Currently Closed For The Day, See You Tommorrow Morning!";
}
