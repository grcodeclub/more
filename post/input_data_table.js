const itemsPerPage = 15;
let currentPage = 1;
let rows1 = []; // Αρχικοποίηση των γραμμών του πίνακα
const table1 = document.getElementById('search_table_page_1');
const headerRow = table1.querySelector('#title-table');

const filePath = 'data.txt'; // Ορισμός του path πριν το try

// Χρήση fetch για φόρτωση του αρχείου
fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Σφάλμα φόρτωσης αρχείου: ' + response.statusText);
        }
        return response.text();
    })
    .then(htmlData => {
        table1.insertAdjacentHTML('beforeend', htmlData); // Εισαγωγή HTML στο τέλος του πίνακα
        rows1 = table1.querySelectorAll('tr'); // Ενημέρωση των γραμμών μετά την προσθήκη
        displayTable(currentPage); // Κλήση της displayTable για αρχική εμφάνιση
    })
    .catch(error => {
        console.error('Σφάλμα φόρτωσης δεδομένων:', error);
    });

function displayTable(page) {
    const start = (page - 1) * itemsPerPage + 1; // +1 για να παρακάμψουμε τη γραμμή επικεφαλίδας
    const end = start + itemsPerPage;
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    // Σελιδοποίηση γραμμών, παρακάμπτοντας τη γραμμή επικεφαλίδας
    const paginatedItems = Array.from(rows1).slice(start, end);
    paginatedItems.forEach(row => {
        tableBody.appendChild(row.cloneNode(true));
    });

    applyRowColors(); // Εφαρμογή χρωματισμού
    displayPagination();
}

function fullTable() {
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        // Get cells from the row
        const cells = row.querySelectorAll('td');

        // Check if at least one of the specified columns contains the search term
        const column1Match = cells[0].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
}

function fullTable1() {
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    const searchTerm = document.getElementById('searchInput2').value.trim().toLowerCase();

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        // Get cells from the row
        const cells = row.querySelectorAll('td');

        // Check if at least one of the specified columns contains the search term
        const column1Match = cells[1].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
}

function fullTable2() {
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    const searchTerm = document.getElementById('searchInput3').value.trim().toLowerCase();

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        // Get cells from the row
        const cells = row.querySelectorAll('td');

        // Check if at least one of the specified columns contains the search term
        const column1Match = cells[2].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil((rows1.length - 1) / itemsPerPage); // Adjusted for header row
    const maxPagesToShow = 5;

    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(totalPages, maxPagesToShow);
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.disabled = true;
        }
        button.addEventListener('click', () => {
            currentPage = i;
            displayTable(currentPage);
        });
        pagination.appendChild(button);
    }
}

function applyRowColors() {
    const tableRows = document.querySelectorAll('#search_table_page_1  tr:not(tr[id="title-table"])'); // Επιλέγουμε όλες τις γραμμές εκτός από την επικεφαλίδα

    tableRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Αλλάζουμε το χρώμα σε ανοιχτό γκρι για τις ζυγές γραμμές
        }
    });
}

function checkAndDisplayTable() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput.value.trim() !== '') {
        // Εμφάνιση πλήρους πίνακα όταν το input αναζήτησης έχει περιεχόμενο
        fullTable();
        searchInput.style.display = 'block';
        const pagination = document.getElementById('pagination');
        pagination.style.display = 'none';
    } else {
        // Επαναφορά της σελιδοποίησης
        displayTable(currentPage);
        searchInput.style.display = 'block';
        const pagination = document.getElementById('pagination');
        pagination.style.display = 'block';
    }
}

// Πρόσθεσε event listeners στα inputs αναζητήσεων
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', checkAndDisplayTable);

const searchInput2 = document.getElementById('searchInput2');
searchInput2.addEventListener('input', checkAndDisplayTable1);  

const searchInput3 = document.getElementById('searchInput3');
searchInput3.addEventListener('input', checkAndDisplayTable2);  

// Αρχική εμφάνιση του πίνακα
checkAndDisplayTable();
