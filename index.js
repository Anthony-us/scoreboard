let home = 0
let guest = 0

document.getElementById("homeCounter").textContent = home
document.getElementById("guessCounter").textContent = guest

function addOneH(){
    home += 1
    document.getElementById("homeCounter").textContent = home
}

function addTwoH(){
    home += 2
    document.getElementById("homeCounter").textContent = home
}

function addThreeH(){
    home += 3
    document.getElementById("homeCounter").textContent = home
}

function addOneG(){
    guest += 1
    document.getElementById("guessCounter").textContent = guest
}

function addTwoG(){
    guest += 2
    document.getElementById("guessCounter").textContent = guest
}

function addThreeG(){
    guest += 3
    document.getElementById("guessCounter").textContent = guest
}