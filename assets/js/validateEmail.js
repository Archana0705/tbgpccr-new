// validateInput.js

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) return false;
    const domain = email.split('@')[1];
    if ((domain.match(/\./g) || []).length > 1) return false;

    return true;
}


function isValidMobile(mobile) {
    const mobilePattern = /^[6-9]\d{9}$/;
    return mobilePattern.test(mobile);
}

function attachEmailValidation(inputId) {
    const input = document.getElementById(inputId);

    if (input) {
        input.addEventListener("blur", function () {
            const email = this.value.trim();
            if (email && !isValidEmail(email)) {
                alert("Please enter a valid email address.");
                this.value = "";
                this.focus();
            }
        });

        input.addEventListener("input", function () {
            this.value = this.value.replace(/[<>]/g, "");
        });
    }
}

function attachMobileValidation(inputId) {
    const input = document.getElementById(inputId);

    if (input) {
        input.addEventListener("blur", function () {
            const mobile = this.value.trim();
            if (mobile && !isValidMobile(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                this.value = "";
                this.focus();
            }
        });

        input.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, ""); // Only digits
        });

        input.addEventListener("paste", function (e) {
            const pasteData = (e.clipboardData || window.clipboardData).getData("text");
            if (!/^\d+$/.test(pasteData)) {
                e.preventDefault();
                alert("Only digits are allowed.");
            }
        });
    }
}

function attachRequiredFieldValidation(fieldIds = []) {
    fieldIds.forEach((id) => {
        const field = document.getElementById(id);
        if (!field) return;

        const tag = field.tagName.toLowerCase();

        if (tag === "input" || tag === "textarea") {
            field.addEventListener("blur", function () {
                const value = this.value.trim();
                if (!value && !this.dataset.alertShown) {
                    const label = document.querySelector(`label[for="${id}"]`);
                    const fieldName = label ? label.innerText : id;
                    alert(`${fieldName} is required.`);
                    this.dataset.alertShown = "true";
                }
            });

            field.addEventListener("input", function () {
                if (this.dataset.alertShown) {
                    delete this.dataset.alertShown;
                }
            });
        }

        if (tag === "select") {
            field.addEventListener("change", function () {
                const value = this.value.trim();
                const label = document.querySelector(`label[for="${id}"]`);
                const fieldName = label ? label.innerText : id;

                if (!value || value.toLowerCase().includes("select")) {
                    alert(`${fieldName} is required.`);
                    this.dataset.alertShown = "true";
                } else {
                    delete this.dataset.alertShown;
                }
            });
        }
    });
}




function initializeValidations() {
    const emailFields = ["email", "emailInput"];
    const mobileFields = ["mobno", "mobnoInput", "contactMobile"];
    const requiredFields = ["name", "email", "emailInput", "mobno", "mobnoInput", "contactMobile", "username", "address", "designation",
        "language", "languageTypeSelect", "contentTypeSelect", "nameInput"
    ];

    attachRequiredFieldValidation(requiredFields);
    emailFields.forEach((id) => attachEmailValidation(id));
    mobileFields.forEach((id) => attachMobileValidation(id));
}
