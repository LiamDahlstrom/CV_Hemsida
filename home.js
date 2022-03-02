var x = 0

function clickCount() {
    x += 1;
    clicks = "click " + x;

switch(clicks) {
    case "click 1":

        document.getElementById('work1').style.cssText = 'height: 80vh; margin-top: 10vh;'

        document.getElementById('txt_work').style.cssText = 'opacity: 100%; height: 0%'
      
break;
    case "click 2":
            document.getElementById('work1').style.cssText = 'height: 10vh; margin-top: 45vh;'

            document.getElementById('txt_work').style.cssText = 'opacity: 0%; height: 100%'

            x = 0
      break;
}
}



function work2() {
document.getElementById('work2').style.cssText = 'height: 80vh; margin-top: 10vh;'
}
function work3() {
document.getElementById('work3').style.cssText = 'height: 80vh; margin-top: 10vh;'
}
function work4() {
document.getElementById('work4').style.cssText = 'height: 80vh; margin-top: 10vh;'
}