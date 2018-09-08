//Jobs page email handler client side
btnSubmit.addEventListener('click', e => {

    e.preventDefault(); 

    const firstName = document.getElementById('firstName').value; 
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (!validatePhoneNumber(phoneNumber)) {
        alert("Invalid phone number. Please make sure the format is correct.");
        return; 
    }

    if (!validateEmail(email)) {
        alert("Invalid email address. Please make sure the format is correct.");
        return; 
    }

    const User = {
        'firstName': firstName,
        'lastName': lastName,
        'email':email,
        'phoneNumber': phoneNumber
    };
    let JSONstring = JSON.stringify(User); 

    setTimeout(function() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                alert("Your application has been submitted.");
            }
        };
        xhttp.open("GET", `../sendEmail/?JSONstring=${JSONstring}`, true);
        xhttp.send();
    }, 500);

});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
    var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return re.test(phoneNumber);
}
