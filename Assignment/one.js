window.onload = function() {
    alert("Welcome to Lonisha's Portfolio!");
};


document.getElementById("welcomeBtn").addEventListener("click", function() {
    alert("Thanks for visiting my portfolio!");
});

document.getElementById("k1").addEventListener("click", function() {
    this.style.color = "darkgreen";
});


function editRole() {
    debugger;
    let newRole = prompt("Enter your new role:");

    if (newRole && newRole.trim() !== "") {
        document.querySelector(".h").innerText = newRole;
    } else {
        alert("Please enter a valid role!");
    }
}
