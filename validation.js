function validateForm() {
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var age = document.myForm.age.value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}