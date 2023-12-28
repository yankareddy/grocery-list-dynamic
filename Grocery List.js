let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("groceryListContainer");

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading");
groceryListContainerEl.appendChild(headingEl);

let unorderLisetContainer = document.createElement("ul");
unorderLisetContainer.classList.add("unorderLiset");
groceryListContainerEl.appendChild(unorderLisetContainer);

let listContainer = document.createElement("li");
listContainer.classList.add("listContainer");
for (let eachItem of groceryList) {
    listContainer.textContent = eachItem;
}
unorderLisetContainer.appendChild(listContainer);