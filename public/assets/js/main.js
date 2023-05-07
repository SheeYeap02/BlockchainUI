// Parallax effect
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('#Opportunities',{delay: 200, origin: 'top'})
sr.reveal('#feedback',{delay: 200, origin: 'top'})
sr.reveal('#role',{delay: 200, origin: 'top'})
sr.reveal('.how-works',{delay: 400, origin: 'top'})
sr.reveal('#contact',{delay: 400, origin: 'top'})


// Back to top button
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 1500) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
// });

window.onscroll = function() {
    var backToTopButton = document.querySelector(".back-to-top");
    if (document.documentElement.scrollTop < 500) {
        backToTopButton.style.display = "none";
    } else {
        backToTopButton.style.display = "block";
    }
};
  
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});