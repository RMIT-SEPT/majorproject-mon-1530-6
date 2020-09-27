//for validation
function validateForm(event, state) {
    // clear all error messages
    const inputs = document.getElementsByClassName("is-danger");
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].classList.contains("error")) {
            inputs[i].classList.remove("is-danger");
        }
    }




    if (state.hasOwnProperty("name") && state.name === "") {
        document.getElementById("name").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("username") && state.username === "") {
        document.getElementById("username").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("firstname") && state.firstname === "") {
        document.getElementById("firstname").classList.add("is-danger");
        return { blankfield: true };
    }
    if (state.hasOwnProperty("lastname") && state.lastname === "") {
        document.getElementById("lastname").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("email") && state.email === "") {
        document.getElementById("email").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("address") && state.address === "") {
        document.getElementById("address").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("phone") && state.phone === "") {
        document.getElementById("phone").classList.add("is-danger");
        return { blankfield: true };
    }
    if (
        state.hasOwnProperty("verificationcode") &&
        state.verificationcode === ""
    ) {
        document.getElementById("verificationcode").classList.add("is-danger");
        return { blankfield: true };
    }
    if (state.hasOwnProperty("password") && state.password === "") {
        document.getElementById("password").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("confirmpassword") && state.confirmpassword === "") {
        document.getElementById("confirmpassword").classList.add("is-danger");
        return { blankfield: true };
    }
    if (
        state.hasOwnProperty("password") &&
        state.hasOwnProperty("confirmpassword") &&
        state.password !== state.confirmpassword
    ) {
        document.getElementById("password").classList.add("is-danger");
        document.getElementById("confirmpassword").classList.add("is-danger");
        return { passwordmatch: true };
    }
    if (
        state.hasOwnProperty("newpassword") &&
        state.hasOwnProperty("confirmpassword") &&
        state.newpassword !== state.confirmpassword
    ) {
        document.getElementById("newpassword").classList.add("is-danger");
        document.getElementById("confirmpassword").classList.add("is-danger");
        return { passwordmatch: true };
    }

    if ((state.hasOwnProperty("service_prodider") || state.hasOwnProperty("name")) && (state.service_prodider === "" || state.name === "")) {
        document.getElementById("service_prodider").classList.add("is-danger");
        return { blankfield: true };
    }

    if (state.hasOwnProperty("appointment_day") && state.appointment_day === "") {
        document.getElementById("appointment_day").classList.add("is-danger");
        return { blankfield: true };
    }
    if (state.hasOwnProperty("appointment_time") && state.appointment_time === "") {
        document.getElementById("appointment_time").classList.add("is-danger");
        return { blankfield: true };
    }
    if (state.hasOwnProperty("service") && state.service === "") {
        document.getElementById("service").classList.add("is-danger");
        return { blankfield: true };
    }
    return;
}

export default validateForm;