const itemsPerPage = 15;
let currentPage = 1;
let rows1 = []; // Αρχικοποίηση των γραμμών του πίνακα
const table1 = document.getElementById('search_table_page_1');
const headerRow = table1.querySelector('#title-table');

const filePaths = ['./data/1.txt']; // Πίνακας με τα paths των αρχείων

// Χρήση fetch για φόρτωση του αρχείου
function loadData() {
    const fetchPromises = filePaths.map(filePath => {
        return fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Σφάλμα φόρτωσης αρχείου: ' + response.statusText);
                }
                return response.text();
            });
    });

    Promise.all(fetchPromises)
        .then(htmlDataArray => {
            htmlDataArray.forEach(htmlData => {
                table1.insertAdjacentHTML('beforeend', htmlData); // Εισαγωγή HTML στο τέλος του πίνακα
            });
            rows1 = table1.querySelectorAll('tr'); // Ενημέρωση των γραμμών μετά την προσθήκη
            displayTable(currentPage); // Κλήση της displayTable για αρχική εμφάνιση
        })
        .catch(error => {
            console.error('Σφάλμα φόρτωσης δεδομένων:', error);
        });
}



function displayTable(page) {
    const start = (page - 1) * itemsPerPage + 1; // +1 για να παρακάμψουμε τη γραμμή επικεφαλίδας
    const end = start + itemsPerPage;
    const tableBody = document.querySelector('#search_table_page_1 '); // Αποκτήστε το 

    tableBody.innerHTML = ''; // Καθαρίστε το τρέχον περιεχόμενο

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

// Αναζητήστε και εμφανίστε τα δεδομένα από το τρέχον αρχείο
function fullTable(searchTerm) {
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        const cells = row.querySelectorAll('td');
        const column1Match = cells[0].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού
}

function fullTable1(searchTerm) {
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        const cells = row.querySelectorAll('td');
        const column1Match = cells[1].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού
}

function fullTable2(searchTerm) {
    const tableBody = document.querySelector('#search_table_page_1 ');
    tableBody.innerHTML = '';

    // Προσθήκη γραμμής επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true));
    }

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        const cells = row.querySelectorAll('td');
        const column1Match = cells[2].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού
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
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm !== '') {
        // Εμφάνιση πλήρους πίνακα όταν το input αναζήτησης έχει περιεχόμενο
        fullTable(searchTerm);
        const pagination = document.getElementById('pagination');
        pagination.style.display = 'none';
    } else {
        // Επαναφορά της σελιδοποίησης
        displayTable(currentPage);
        const pagination = document.getElementById('pagination');
        pagination.style.display = 'block';
    }
}

function checkAndDisplayTable1() {
    const searchInput2 = document.getElementById('searchInput2');
    const searchTerm = searchInput2.value.trim().toLowerCase();
    if (searchTerm !== '') {
        fullTable1(searchTerm);
    } else {
        displayTable(currentPage);
    }
}

function checkAndDisplayTable2() {
    const searchInput3 = document.getElementById('searchInput3');
    const searchTerm = searchInput3.value.trim().toLowerCase();
    if (searchTerm !== '') {
        fullTable2(searchTerm);
    } else {
        displayTable(currentPage);
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
loadData();
