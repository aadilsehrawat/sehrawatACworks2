var inputs = document.querySelectorAll('.phone-input');
inputs.forEach(function(input) {
    var warning = document.getElementById(input.id.replace('phone', 'warning'));
    input.addEventListener('input', function(e) {
        var value = input.value;
        value = value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        input.value = value;
        if (value.length === 10) {
            warning.style.display = 'none';
        }
    });
    input.addEventListener('blur', function(e) {
        var value = input.value;
        if (value.length !== 10 && value.length > 0) {
            warning.style.display = 'block';
        } else {
            warning.style.display = 'none';
        }
    });
});


var mybutton = document.getElementById("scrollToTopBtn");
var scrollThresholdDesktop = 300; 
var scrollThresholdMobile = 900;
window.onscroll = function() { scrollFunction() };
function scrollFunction() {
    var scrollThreshold = window.innerWidth < 768 ? scrollThresholdMobile : scrollThresholdDesktop;
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        fadeInButton();
    } else {
        fadeOutButton();
    }
}
function fadeInButton() {
    if (mybutton.style.visibility !== "visible") {
        mybutton.style.display = "block";
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
        mybutton.style.transform = "scale(1)";
    }
}
function fadeOutButton() {
    if (mybutton.style.visibility !== "hidden") {
        mybutton.style.opacity = "0";
        mybutton.style.visibility = "hidden";
        mybutton.style.transform = "scale(0.8)";
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}