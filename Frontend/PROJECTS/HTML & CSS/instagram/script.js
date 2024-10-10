
 // Get a reference to the button with class "tag"
 var tagButton = document.querySelector('.tag');

 // Get a reference to the "yourPosts" container
 var yourPostsContainer = document.querySelector('.yourPosts');

 // Add a click event listener to the tagButton
 tagButton.addEventListener('click', function () {
     // Toggle the visibility of the yourPostsContainer
     if (yourPostsContainer.style.display === 'none' || yourPostsContainer.style.display === '') {
         yourPostsContainer.style.display = 'block';
     } else {
         yourPostsContainer.style.display = 'none';
     }
 });