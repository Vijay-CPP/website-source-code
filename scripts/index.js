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

  if (fname == "" || fphone == "") {
    alert("Kindly fill the mandatory details! Name & Phone No. is must!");
  }
  else {

    // emailjs.send("service_5j95idg", "template_tdtcz3c", {
    //     from_name: fname,
    //     email: femail,
    //     phone: fphone,
    //     message: fmessage,
    // });

    document.getElementById('inputEmail4').value = "";
    document.getElementById('inputAddress').value = "";
    document.getElementById('inputPassword4').value = "";
    document.getElementById('exampleFormControlTextarea1').value = "";

    alert("Successfully submitted! We will contact you soon!")
  }
}
document.getElementById("submit").onclick = enquiry;

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// When the user scrolls the page, execute myFunction
window.onscroll = function () { scr() };

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scr() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}