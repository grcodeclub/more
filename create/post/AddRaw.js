function addRawHeader(button) {



    // Βρες το textarea
    const textarea = document.querySelector(".mytable");

    // Λάβε την τρέχουσα επιλογή του χρήστη
    const selectedValue = document.getElementById("itemSelectTable").value;

    let newHtmlCode;
    if (selectedValue === "2") { 
        newHtmlCode = `<tr id="title-table"><td>Στήλη 1</td><td>Στήλη 2</td></tr>\n`;
    } else if (selectedValue === "3") { 
        newHtmlCode = `<tr id="title-table"><td>Στήλη 1</td><td>Στήλη 2</td><td>Στήλη 3</td></tr>\n`;
    } else if (selectedValue === "4") { 
        newHtmlCode = `<tr id="title-table"><td>Στήλη 1</td><td>Στήλη 2</td><td>Στήλη 3</td><td>Στήλη 4</td></tr>\n`;
    }

    // Πρόσθεσε τον HTML κώδικα στο υπάρχον κείμενο του textarea
    textarea.value += newHtmlCode;

    let button_raw = document.getElementById("TableHeader");
    button_raw.disabled = true;


    let select_value = document.getElementById("itemSelectTable");
    select_value.disabled = true;


    button_raw = document.getElementById("table_raw");
    button_raw.disabled = false;
}

function addRaw(button) {
    // Βρες το textarea
    const textarea = document.querySelector(".mytable");

    // Λάβε την τρέχουσα επιλογή του χρήστη
    const selectedValue = document.getElementById("itemSelectTable").value;

    let newHtmlCode;
    if (selectedValue === "2") { 
        newHtmlCode = `<tr><td>Στήλη 1</td><td>Στήλη 2</td></tr>\n`;
    } else if (selectedValue === "3") { 
        newHtmlCode = `<tr><td>Στήλη 1</td><td>Στήλη 2</td><td>Στήλη 3</td></tr>\n`;
    } else if (selectedValue === "4") { 
        newHtmlCode = `<tr><td>Στήλη 1</td><td>Στήλη 2</td><td>Στήλη 3</td><td>Στήλη 4</td></tr>\n`;
    }

    // Πρόσθεσε τον HTML κώδικα στο υπάρχον κείμενο του textarea
    textarea.value += newHtmlCode;
}


function handleSelectChange() {
    const selectElement = document.getElementById("itemSelect");
    const selectedValue = selectElement.value;

    if (selectedValue === "mycode_table") {
        // Αφαίρεσε το option με value "mycode_table"
        const optionToRemove = Array.from(selectElement.options).find(option => option.value === "mycode_table");
        if (optionToRemove) {
            selectElement.remove(optionToRemove.index); // Αφαίρεση από το select
        }

        // Εδώ μπορείτε να προσθέσετε την λογική για να προσθέσετε την table ή ότι άλλο χρειάζεστε
        console.log("Επιλέξατε το Table. Αφαιρέθηκε το option.");
    }
}

