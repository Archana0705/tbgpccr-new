// authGuard.js
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const isLoginPage = currentPage === "login.html";

    if (!isLoginPage) {
        loadToastLayout(() => {
            //    const token = localStorage.getItem("authToken");
            const token = sessionStorage.getItem("authToken");
            if (!token) {
                if (document.getElementById("errorToast")) {
                    showErrorToast("You are not logged in. Please log in to continue.");
                }
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 500);
            }
        });
    }
});
