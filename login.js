
function validate() {
    let a = document.form.user.value;

    let c = document.form.pass.value;

    if (a.length < 4) {
        document.getElementById('error').innerHTML = "Username must be greater than 4"
        return false;
    }

    if (c.length >= 12 || c == "") {
        document.getElementById('error1').innerHTML = 'Password length must be <12 and cannot be empty'
        return false;
    }
}
