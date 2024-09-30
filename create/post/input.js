function addNewItem() {
    const container = document.getElementById("inputContainer");
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    
    newItem.innerHTML = `
                            <h3 class="highlight">  <input type="text" class="unity" placeholder="Εισάγετε τίτλο"/></h3>

                    <label for="content">Κείμενο:</label>
                    <textarea class="content" placeholder="Εισάγετε κείμενο"></textarea><br><br>

                    <label for="image">Εικόνα (URL):</label>
                    <input type="text" class="image" placeholder="Εισάγετε URL εικόνας" />

                    <br><br>
                    <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>
    `;

    container.appendChild(newItem);
}

function removeItem(button) {
    const item = button.parentElement;
    item.remove();
}
