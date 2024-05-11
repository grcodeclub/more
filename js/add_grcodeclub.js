function addRow(column1, column2) {
    var table = document.getElementById("table").querySelector("tbody");
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Έλεγχος αν η πρώτη στήλη περιέχει HTML κώδικα
    if (/<[a-z][\s\S]*>/i.test(column1)) {
        cell1.innerHTML = column1; // Εάν περιέχει HTML, χρησιμοποιήστε innerHTML
    } else {
        cell1.textContent = column1; // Διαφορετικά, χρησιμοποιήστε textContent
    }
    cell2.textContent = column2;
}

addRow("PC build", "2024-05-10");
addRow("<a href='https://grcodeclub.gr/post/mobile/sim'>SIM</a>", "2024-1-10");
addRow("NFC", "2024-2-25");
