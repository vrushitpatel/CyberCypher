// var countDownDate = new Date("Oct 19, 2021 8:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML =
//     days + "d " + hours + "h " + minutes + "m ";

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
var countDownDate = new Date("jan 21, 2022 8:00:00").getTime();
function flipTo(digit, n){
    var current = digit.attr('data-num');
    digit.attr('data-num', n);
    digit.find('.front').attr('data-content', current);
    digit.find('.back, .under').attr('data-content', n);
    digit.find('.flap').css('display', 'block');
    setTimeout(function(){
        digit.find('.base').text(n);
        digit.find('.flap').css('display', 'none');
    }, 350);
}

function jumpTo(digit, n){
    digit.attr('data-num', n);
    digit.find('.base').text(n);
}

function updateGroup(group, n, flip){
    var digit1 = $('.ten'+group);
    var digit2 = $('.'+group);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.attr('data-num') != num1){
        if(flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if(digit2.attr('data-num') != num2){
        if(flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function setTime(flip){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateGroup('day',days, flip);
    updateGroup('hour', hours, flip);
    updateGroup('min', minutes, flip);
    updateGroup('sec', seconds, flip);
    if (distance < 0) {
    updateGroup('day',00, flip);
    updateGroup('hour', 00, flip);
    updateGroup('min', 00, flip);
    updateGroup('sec', 00, flip);
    }
}

$(document).ready(function(){

    setTime(false);
    setInterval(function(){
        setTime(true);
    }, 1000);

});