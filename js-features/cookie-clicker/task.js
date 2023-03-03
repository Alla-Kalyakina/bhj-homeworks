const cookie = document.getElementById("cookie");
cookie.onclick =function() {    
        const clicker__counter = document.getElementById("clicker__counter");
        clicker__counter.textContent++;
        if(Number(clicker__counter.textContent) % 2) {
                cookie.width = 300;
        } else {
               cookie.width = 200; 
        }
}
