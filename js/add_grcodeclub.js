function addRow(column1, column2) {
    var table = document.getElementById("table").querySelector("tbody");
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Προσθήκη των τιμών στις στήλες
    cell1.textContent = column1;
    cell2.textContent = column2;
}

addRow("PC build", "2024-05-10");
addRow("SIM", "2024-1-10")
addRow("NFC", "2024-2-25");
