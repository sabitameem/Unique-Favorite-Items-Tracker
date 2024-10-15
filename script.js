// 1.Create a Set to store unique favorite items
const favoriteItems = new Set();

// 2.Create a Map to store details of each item
const itemDetails = new Map();

// GetDOM elements
const itemNameInput = document.getElementById('itemName');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

// function to add item to Set and Map
function addItem() {
    const itemName = itemNameInput.value.trim();

    // If item is empty,show an alert
    if (itemName === "") {
        alert("Please enter an item name");
        return;
    }

    // Add the item to the Set (only Unique items are allowed)
    if (favoriteItems.has(itemName)) {
        alert(`${itemName} is already in your favorite list!`);
    } else {
        favoriteItems.add(itemName);

        // Store details for each item in map
        itemDetails.set(itemName, {
            addedOn: new Date().toLocaleString()
        });

        displayItems();
    }

    // Clear input field
    itemNameInput.value = "";
}

// Function to display items in the list
function displayItems() {
    itemList.innerHTML = ''; // Clear the list before updating

    favoriteItems.forEach(item => {
        const details = itemDetails.get(item);

        // Create list item
        const li = document.createElement('li');
        li.textContent = `${item} (Added on: ${details.addedOn})`;

        itemList.appendChild(li);
    });
}

// Event listener for button click
addItemBtn.addEventListener('click', addItem);




// Explanation
// Store unique favorite items using Set.
// Track and display the details of each item using Map.


// Set: We use a Set to store favorite items because a Set only allows unique values. This ensures that a user can't add the same item multiple times.

// Map: We use a Map to store extra details (here the time when the item was added). The Map allows us to associate each item with its details.

// Features
// The user inputs their favorite item and clicks "Add Item."
// If the item is new, it gets added to the list.
// If the item already exists, the user will be notified with an alert.
// The time when each item was added is shown alongside the item.
// This simple project demonstrates how Set and Map can be used in real-world scenarios, such as keeping track of unique items and storing additional details for each item.
