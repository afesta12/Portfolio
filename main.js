// Toggle nav menu open
$(document).ready(function () {
    $(".menu-toggler").on("click", function () {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    });

    // Menu open
    $(".top-nav .nav-link").on("click", function () {
        $('.menu-toggler').removeClass('open');
        $(".top-nav").removeClass("open");
    });

    // Smooth scroll between sections
    $('nav a[href*="#"]').on("click", function () {
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1500);
    });

    // Scroll back to top
    $('#up').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });

    // AOS
    AOS.init({

        easing: 'ease',
        duration: 1800,
        once: true
    });
});

// Email functionality
function sendMail() {

    const formDetails = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("subject").value
    }

    const serviceID = "service_iqymb6e";
    const templateID = "template_eximq3a";

    emailjs.send(serviceID, templateID, formDetails).then(
        res => {
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("subject").value = ""

            console.log(res);
            alert("Your message has been sent, thank you!")
        }
    ).catch((error) => console.log(error));
}
