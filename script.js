"use strict"

// ------ События на мобильных устройствах -----------------------

// touchstart - коснулись пальцем и событие обработалось

// touchmove - срабатывает когда провести пальцем по элементу

// touchend - убрали палец и сработало

// touchenter - наскальзывание пальцем

// touchleave - наоборот ентеру

// touchcancel -

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (event) => {
        event.preventDefault();

        console.log("Start");
        console.log(event.changedTouches);
    });

    box.addEventListener("touchcancel", (event) => {
        event.preventDefault();

        console.log("Move");
    });
});


// touches - инфа по нажатию (кол во пальцев и тд)
// targetTouches 
// changedTouches