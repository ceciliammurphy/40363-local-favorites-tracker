// ==========================================
// PROJECT 2: LOCAL FAVORITES TRACKER
// LAB13: Functions & DOM Manipulation
// ==========================================

console.log('LAB13: Functions & DOM Manipulation');

// Array to store all favorites (we'll use this in LAB14)
let favorites = [];

// Get references to DOM elements
const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

console.log('Form:', form);
console.log('Favorites list container:', favoritesList);

// Function to handle adding a new favorite
function addFavorite(event) {
    event.preventDefault();  // Prevent page reload

    console.log('Add Favorite button clicked!');

    // Step 1: Get values from form inputs
    const nameInput = document.getElementById('name');
    const categoryInput = document.getElementById('category');
    const ratingInput = document.getElementById('rating');
    const notesInput = document.getElementById('notes');

    const nameValue = nameInput.value;
    const categoryValue = categoryInput.value;
    const ratingValue = ratingInput.value;
    const notesValue = notesInput.value;

    // Step 2: Log values to see what we captured
    console.log('Name:', nameValue);
    console.log('Category:', categoryValue);
    console.log('Rating:', ratingValue);
    console.log('Notes:', notesValue);

    // Step 3: Create a favorite object (like LAB12!)
    const newFavorite = {
        name: nameValue,
        category: categoryValue,
        rating: ratingValue,
        notes: notesValue,
        dateAdded: new Date().toLocaleDateString()
    };

    console.log('Created favorite object:', newFavorite);

    // Step 4: Add to favorites array (for LAB14)
    favorites.push(newFavorite);
    console.log('Total favorites:', favorites.length);
    console.log('All favorites:', favorites);

    // Step 5: Clear the form for next entry
    form.reset();
    console.log('Form reset - ready for next favorite!');
}

// Connect the addFavorite function to the form submit event
form.addEventListener('submit', addFavorite);

console.log('Event listener attached - form is ready!');