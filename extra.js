document.addEventListener('DOMContentLoaded', function(){
  var bodyId = document.getElementsByTagName('body')[0].getAttribute('id'); // get the ID of <body>

  if(bodyId === "home") { // if home page
    // // When the user scrolls the page, execute myFunction
    var index = 0;
    var tagline = 'Hair, brow, and lash artists all under one roof';
    var speed = 50; // speed in milliseconds

    // function to loop through txt
    function typing() {
      if (index < tagline.length) {
        document.getElementById("typetype").innerHTML += tagline.charAt(index); // innerHTML starting at nothing, index starts at 0, grabbing first character from tagline
        index++; //increments the index
        setTimeout(typing, speed); //sets delay before calling typing function
      }
    }

    typing();
  } else if(bodyId === "wedding") { // if wedding page
    var h2s = document.getElementsByClassName('services-toggle'); // get the h2s

    for (i = 0; i < h2s.length; i++) { // loop through h2s, for i = 0, if i is less than the length of h2, add one
      h2s[i].addEventListener('click', function() { // add event listener to each h2
        this.nextElementSibling.classList.toggle('active'); //once someone clicks it, it will toggle active
      });
    }

    var prevBtn = document.getElementById('previous'); // getting previous button
    var nextBtn = document.getElementById('next'); // getting next button
    var imagesCarousel = document.getElementById('images'); // getting carousel container
    var images = document.getElementById('images').children; // getting list of images
    var carouselPosition = 0; //starting picture

    function updateCarousel(action) { // function that updates position of carasoul, accepts parameter called action
      if(action == 'prev') {
        carouselPosition = carouselPosition + 500;
        imagesCarousel.setAttribute('style', 'transform: translateX(' + carouselPosition + 'px)') // adding 500 pixels to transform and move carousel to the right
      } else if(action == 'next') {
        carouselPosition = carouselPosition - 500;
        imagesCarousel.setAttribute('style', 'transform: translateX(' + carouselPosition + 'px)') // subtracting 500 pixels to transform and move carousel to the left
      }
    }

    prevBtn.addEventListener('click', function() { //attaching eventlistener to previous and next buttons
      if(carouselPosition < 0) { //if carousel position is less than 0, meaning moved to the left, you can go back to something, basically if there is an image, you can keep going.
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
