///foundationtest///


window.onload = function () {
    setTimeout(showPopup, 5000);
};

function showPopup() {
    document.getElementById("popupBox").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupBox").style.display = "none";
}

function login(role) {
    alert("Login as " + role);
    closePopup();
}

function signup(role) {
    alert("Sign up as " + role);
    closePopup();
}
