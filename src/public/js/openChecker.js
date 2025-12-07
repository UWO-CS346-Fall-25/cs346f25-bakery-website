const hour = new Date().getHours();
const day = new Date().getDay();
const message = document.getElementById('open-or-not');
//if its not sunday open between 7am and 5pm otherwise open between 10am and 5pm
if((hour >= 7 && hour <= 17 && day != 0 ||hour >= 10 && hour <= 17 && day == 0 )){
    message.textContent = "We Are Open! Come Visit Us Now!";
}else{
     message.textContent = "We Are Currently Closed For The Day, See You Tommorrow Morning!";
}
