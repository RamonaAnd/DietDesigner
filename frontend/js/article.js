const addCommentButton = document.querySelector('.add-comment-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal-button');
const submitCommentButton = document.querySelector('.submit-comment-button');

addCommentButton.addEventListener('click', function() {
    modal.style.display = "flex";
})

closeButton.addEventListener('click', function() {
    modal.style.display = "none";
})

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})