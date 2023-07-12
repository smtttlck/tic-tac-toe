let box;
let boxes = document.querySelectorAll("input");
let resetButton = document.getElementById("resetButton");
let turn = "X";
let status = document.getElementById("status");
const win = ["1-2-3","4-5-6","7-8-9","1-4-7","2-5-8","3-6-9","1-5-9","3-5-7"];        

function selectBox(boxId) {
    box = document.getElementById(boxId);
    if(box.value == "") {
        status.textContent = "Player " + turn + " Turn";
        box.value = turn;
        for(var i=0; i<win.length; i++) {
            var elements = win[i].split("-");
            var a = document.getElementById(elements[0]).value;
            var b = document.getElementById(elements[1]).value;
            var c = document.getElementById(elements[2]).value;
            if((a == b) && (b == c) && (b != "")) {
                status.textContent = "Player " + turn + " Won!";
                boxes.forEach(function(x) {
                    x.disabled = true;
                });
                break;
            }
        }
        (turn == "X") ? turn = "O" : turn = "X";
    }
}

resetButton.addEventListener("click", function() {
    boxes.forEach(function(x) {
        x.disabled = false;
        x.value = "";
        });
    turn = "X";
    status.textContent = "Player " + turn + " Turn";
});
