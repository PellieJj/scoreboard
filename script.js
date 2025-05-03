
let homeCount = 0; 
let guestCount = 0;
let homeDisplay = document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");


function incrementHomeScore1() {
   homeCount = homeCount + 1;
  homeDisplay.textContent = homeCount;
}

function incrementHomeScore2() {
  homeCount = homeCount + 2;
  homeDisplay.textContent = homeCount;
    
}

function incrementHomeScore3() {
    homeCount = homeCount + 3;
  homeDisplay.textContent = homeCount;
}

function incrementGuestScore1() {
     guestCount = guestCount + 1;
    guestDisplay.textContent = guestCount;
    
}
function incrementGuestScore2() {
  guestCount = guestCount + 2;
  guestDisplay.textContent = guestCount;
}
function incrementGuestScore3(){
  guestCount = guestCount + 3
  guestDisplay.textContent = guestCount;
}
homeDisplay.textContent = incrementHomeScore1() += incrementHomeScore2() += incrementHomeScore3();
guestDisplay.textContent = incrementGuestScore1() += incrementGuestScore2() += incrementGuestScore3();

