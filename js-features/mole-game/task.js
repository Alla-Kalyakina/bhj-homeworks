const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    let id = document.getElementById(`hole${i}`);
    id.onclick = function () { 
        if (id.className === "hole hole_has-mole") {
            dead.textContent++;
            if (Number(dead.textContent) === 10) {
                alert("Победа!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
        else {
            lost.textContent++;
            if (Number(lost.textContent) === 5) {
                alert("Вы проиграли!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    };
}