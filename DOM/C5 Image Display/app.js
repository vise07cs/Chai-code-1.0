/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let carousel = document.getElementById("carouselTrack");

let myCaption = document.getElementById("caption");
// carousel.style.backgroundColor="green"
let img = document.createElement("img");

let currentIndex = 0;

displayImage();
// function to display image
function displayImage() {
  img.src = images[currentIndex].url;
  img.style.width = "100%"; // Adjust size if needed
  img.style.height = "auto";
  img.alt = images[currentIndex].caption;
  carousel.appendChild(img);
  carousel.appendChild(myCaption);
  myCaption.textContent = images[currentIndex].caption;
  // console.log(currentIndex)
}

const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
  // console.log("clicked")
  currentIndex = (currentIndex + 1) % images.length;
  // console.log(currentIndex)
  displayImage();
});

const prevButton = document.getElementById("prevButton");
prevButton.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = images.length;
    return;
  }
  currentIndex = (currentIndex - 1) % images.length;
  displayImage();
});

// logic for autoplay button
let intervalId = null;
const autoplayButton = document.getElementById("autoPlayButton");
autoplayButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId); // Stop the autoplay if already running
    intervalId = null;
    autoplayButton.textContent = "Start Autoplay"; // Update button text
  } else {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex].url;
      img.alt = images[currentIndex].caption;
      console.log("Current Index:", currentIndex);
    }, 1000);
    autoplayButton.textContent = "Stop Autoplay"; // Update button text
  }
});
