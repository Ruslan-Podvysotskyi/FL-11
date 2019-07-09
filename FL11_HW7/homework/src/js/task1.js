let email = prompt('Enter your Email', '');
let trueEmailLength = 6;
let password;
let question;
let checkPass;
let newPassword;
let checkNewPassword;
let truePassLength = 5;
let user = {
    email: 'user@gmail.com',
    pass: 'UserPass'
};
let admin = {
    email: 'admin@gmail.com',
    pass: 'AdminPass'
};
let msg = {
    CENCELED: 'Canceled',
    WRONG: 'Wrong password'
};

if (email === null || email.length === 0) {
    alert(msg.CENCELED);
} else if (email.length < trueEmailLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (email === user.email || email === admin.email) {
    password = prompt('Enter your password', '');
    if (email === user.email && password === user.pass || email === admin.email && password === admin.pass) {
        question = confirm('Do you want to change your password?');
        if (question === true) {
            checkPass = prompt('Enter your old password', '');
            if (email === user.email && checkPass === user.pass || email === admin.email && checkPass === admin.pass) {
                newPassword = prompt('Enter your new password', '');
                if (newPassword.length >= truePassLength) {
                    checkNewPassword = prompt('Enter the new password again', '');
                    if (checkNewPassword === newPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                } else {
                    alert('It’s too short password. Sorry.');
                }
            } else if (checkPass === null || checkPass.length === 0) {
                alert(msg.CENCELED);
            } else {
                alert(msg.WRONG);
            }
        } else {
            alert('You have failed the change.');
        }
    } else if (password === null || password.length === 0) {
        alert(msg.CENCELED);
    } else {
        alert(msg.WRONG);
    }
} else {
    alert('I don’t know you');
}