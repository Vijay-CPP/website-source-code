window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Email Js
let femail = "";
let fname = "";
let fphone = "";
let fmessage = "";

function enquiry() {

    femail = document.getElementById('inputEmail4').value;
    fname = document.getElementById('inputAddress').value;
    fphone = document.getElementById('inputPassword4').value;
    fmessage = document.getElementById('exampleFormControlTextarea1').value;

    emailjs.send("service_5j95idg", "template_tdtcz3c", {
        from_name: fname,
        email: femail,
        phone: fphone,
        message: fmessage,
    });

    document.getElementById('inputEmail4').value = "";
    document.getElementById('inputAddress').value = "";
    document.getElementById('inputPassword4').value = "";
    document.getElementById('exampleFormControlTextarea1').value = "";
}

document.getElementById("submit").onclick = enquiry;