// JavaScript for search functionality
function filterCards() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let cardContainer = document.querySelector('.card-container');
    let cards = cardContainer.getElementsByClassName('box');
    
    // Loop through each card and hide/show based on search input
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('.content h2').textContent.toLowerCase();
        let location = cards[i].querySelector('.content h3').textContent.toLowerCase();

        if (title.indexOf(filter) > -1 || location.indexOf(filter) > -1) {
            cards[i].style.display = "";  // Show the card
        } else {
            cards[i].style.display = "none";  // Hide the card
        }
    }
}
