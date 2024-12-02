// Sample recipes data
const recipes = [
    { name: "Avocado Toast", description: "Healthy avocado on whole grain toast." },
    { name: "Quinoa Salad", description: "Nutritious salad with quinoa and vegetables." },
    { name: "Smoothie Bowl", description: "Delicious smoothie topped with fruits and nuts." }
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = `${recipe.name}: ${recipe.description}`;
        recipeList.appendChild(li);
    });
}

// Event listener for contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store the message in localStorage
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ name, email, message });
    localStorage.setItem('messages', JSON.stringify(messages));

    alert('Thank you for your message!');
});

// Call the displayRecipes function on the recipes page
if (document.getElementById('recipe-list')) {
    displayRecipes();
}