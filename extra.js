document.addEventListener('DOMContentLoaded', function(){
  var bodyId = document.getElementsByTagName('body')[0].getAttribute('id'); // get the ID of <body>

  if(bodyId === "home") { // if home page
    // // When the user scrolls the page, execute myFunction
    var tagline = 0;
    var txt = 'Hair, brow, and lash artists all under one roof'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    // function to loop through txt
    function typeWriter() {
      if (tagline < txt.length) {
        document.getElementById("typetype").innerHTML += txt.charAt(tagline);
        tagline++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  } else if(bodyId === "wedding") { // if wedding page
    var h2s = document.getElementsByClassName('services-toggle'); // get the h2s

    for (i = 0; i < h2s.length; i++) { // loop through h2s
      h2s[i].addEventListener('click', function() { // add event listener to each h2
        this.nextElementSibling.classList.toggle('active');
      });
    }

    var prevBtn = document.getElementById('previous');
    var nextBtn = document.getElementById('next');
    var imagesCarousel = document.getElementById('images');
    var images = document.getElementById('images').children;
    var carouselPosition = 0;

    function updateCarousel(action) {
      if(action == 'prev') {
        carouselPosition = carouselPosition + 500;
        imagesCarousel.setAttribute('style', 'transform: translateX(' + carouselPosition + 'px)')
      } else if(action == 'next') {
        carouselPosition = carouselPosition - 500;
        imagesCarousel.setAttribute('style', 'transform: translateX(' + carouselPosition + 'px)')
      }
    }

    prevBtn.addEventListener('click', function() {
      if(carouselPosition < 0) {
        updateCarousel('prev');
      }
    });
    nextBtn.addEventListener('click', function() {
      if(carouselPosition > (images.length * -500) + 500) {
        updateCarousel('next');
      }
    });
  }
});

window.addEventListener('scroll', function(e) {
  if(window.scrollY > 100) {
    document.getElementsByClassName('navbar')[0].setAttribute('class','navbar active');
  } else {
    document.getElementsByClassName('navbar')[0].setAttribute('class','navbar');
  }
});
