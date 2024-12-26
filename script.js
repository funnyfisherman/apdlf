document.getElementById("join-btn").addEventListener("click", function () {
    document.getElementById("membership-modal").style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("membership-modal").style.display = "none";
});

window.onclick = function (event) {
    if (event.target === document.getElementById("membership-modal")) {
        document.getElementById("membership-modal").style.display = "none";
    }
};
