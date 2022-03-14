

function validate() {
    let a = document.form.user.value;
    let b = document.form.email.value;
    let c = document.form.pass.value;

    if (a.length < 6 || a.length > 14) {
        document.getElementById('error').innerHTML = 'Length must be >6 and <14'
        return false;
    }

    if (b.indexOf('@') <= 0 || b.charAt(b.length - 4) != '.') {
        document.getElementById('error1').innerHTML = 'Worng Email use @ and .com'
        return false;
    }

    if (c.length >= 12 || c == "") {
        document.getElementById('error3').innerHTML = 'Password length must be <12 and cannot be empty'
        return false;
    }



}
