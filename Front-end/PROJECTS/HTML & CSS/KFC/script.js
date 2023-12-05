// JavaScript for image navigation
let currentImageIndex = 0; // Keep track of the current image index

// Function to show the image at a specific index
function showImage(index) {
    const images = document.querySelectorAll('.image');
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Function to go to the previous image
function goToPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + 3) % 3; // 3 is the number of images
    showImage(currentImageIndex);
}

// Function to go to the next image
function goToNextImage() {
    currentImageIndex = (currentImageIndex + 1) % 3; // 3 is the number of images
    showImage(currentImageIndex);
}

// Initial display of the first image
showImage(currentImageIndex);

// Event listeners for the backward and forward buttons
document.querySelector('.backward').addEventListener('click', goToPreviousImage);
document.querySelector('.forward').addEventListener('click', goToNextImage);
