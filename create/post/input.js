function addNewItem() {
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const selectedValue = document.getElementById("itemSelect").value;
    const selectElement = document.getElementById("itemSelect"); // Επιλογή του select

    if (selectedValue === "title") {
        newItem.innerHTML = `
            <h3 class="highlight">  <input type="text" class="unity" placeholder="Εισάγετε τίτλο Ενότητας"/></h3>
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    } else if (selectedValue === "text") {
        newItem.innerHTML = `
            <p>  <textarea class="content" placeholder="Εισάγετε Κείμενο"/></textarea></p>
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    } else if (selectedValue === "image") {
        newItem.innerHTML = `
            <input type="text" class="image" placeholder="Εισάγετε URL Εικόνας" />
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    }
    else if (selectedValue === "mycode") {
        newItem.innerHTML = `
            <textarea class="mycode" placeholder="Εισάγετε Κωδικά Html"/></textarea>
            <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    }
    else if (selectedValue === "mycode_table" && !document.querySelector('.mytable')) {
        newItem.innerHTML = `
            <textarea class="mytable" placeholder="Εισάγετε Table"/>
   
</textarea>
           <select id="itemSelectTable" style="margin-left: 1%;">
                        <option value="2">Στήλες 2</option>
                        <option value="3">Στήλες 3</option>
                        <option value="4">Στήλες 4</option>
                    </select>
                    <button onclick="addRawHeader(this)" id="TableHeader" class="mybutton">Add Raw Headder</button> 
                    <button onclick="addRaw(this)" id="table_raw" class="mybutton" disabled>Add Raw</button> 
                    <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>`;
    }

    else if (selectedValue === "programming") {
        newItem.innerHTML = `
             <select id="itemSelectLanguage" style="margin-left: 1%;">
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                    </select>
            <textarea class="programming" placeholder="Εισάγετε Κωδικά "/></textarea>
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
