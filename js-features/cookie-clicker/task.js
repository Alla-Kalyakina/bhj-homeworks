const cookie = document.getElementById("cookie");
cookie.onclick =function() {    
        const clicker__counter = document.getElementById("clicker__counter");
        cookie.width = ++clicker__counter.textContent % 2 ? 250 : 200;
}
