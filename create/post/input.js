function addNewItem() {
    const container = document.getElementById("inputContainer");
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const selectedValue = document.getElementById("itemSelect").value;
    const selectElement = document.getElementById("itemSelect"); // Επιλογή του select

    if (selectedValue === "title") {
        newItem.innerHTML = `
          <label for="content">Εισάγετε τίτλο Ενοτητας:</label>
            <h3 class="highlight">  <input type="text" class="unity" placeholder="Εισάγετε τίτλο Ενοτητας"/></h3>
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    } else if (selectedValue === "text") {
        newItem.innerHTML = `
            <label for="content">Κείμενο:</label>
            <p>  <textarea class="content" placeholder="Εισάγετε Κείμενο"/></textarea></p>
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    } else if (selectedValue === "image") {
        newItem.innerHTML = `
            <label for="image">Εικόνα (URL):</label>
            <input type="text" class="image" placeholder="Εισάγετε URL εικόνας" />
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    }
    else if (selectedValue === "mycode") {
        newItem.innerHTML = `
            <label for="image">Κωδικας</label>
            <textarea class="mycode" placeholder="Εισάγετε Κωδικα"/></textarea>
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    }

    // Εύρεση του γονέα του select για να γίνει insert ακριβώς πάνω από το select
    const parentElement = selectElement.parentElement;
    parentElement.insertBefore(newItem, selectElement);
}

function removeItem(button) {
    const item = button.parentElement;
    item.remove();
}
