document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 10;
    let currentPage = 1;

    const table1 = document.getElementById('table');
    const rows1 = table1.querySelectorAll('tr');
    const headerRow = table1.querySelector('#title-table');

    function displayTable(page) {
        const start = (page - 1) * itemsPerPage + 1; // +1 to skip header row
        const end = start + itemsPerPage;
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        // Paginate rows, skipping the header row
        const paginatedItems = Array.from(rows1).slice(start, end);
        paginatedItems.forEach(row => {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        });

        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πίνακα
        displayPagination();
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
            if (i === currentPage) {button.disabled = true;}
            button.addEventListener('click', () => {
                currentPage = i;
                displayTable(currentPage);
            });
            pagination.appendChild(button);
        }
    }

    function applyRowColors() {
        const tableRows = document.querySelectorAll('#table tbody tr:not(#title-table)'); // Επιλέγουμε όλες τις γραμμές εκτός από την επικεφαλίδα
        tableRows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Αλλάζουμε το χρώμα σε ανοιχτό γκρι για τις ζυγές γραμμές
            }
        });
    }

    function fullTable_searchInput() {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';
        if (headerRow) {tableBody.appendChild(headerRow.cloneNode(true));}         // Add header row
        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
        rows1.forEach(row => {
            if (row === headerRow) return; 
            const cells = row.querySelectorAll('td');
            const column1Match = cells[0].textContent.toLowerCase().includes(searchTerm);
            if (column1Match) {tableBody.appendChild(row.cloneNode(true)); }
        });
        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
    }

    function checkAndDisplayTable_searchInput() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput.value.trim() !== '') {
            const pagination = document.getElementById('pagination'); // Display full table when search input is not empty
            searchInput.style.display = 'block';
            pagination.style.display = 'none';
            fullTable_searchInput();
        } else {
            displayTable(currentPage); // Otherwise, display paginated table
            searchInput.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'block';
        }
    }

    function fullTable_searchInputAuthor() {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';
        if (headerRow) {tableBody.appendChild(headerRow.cloneNode(true));}         // Add header row
        const searchTerm = document.getElementById('searchInputAuthor').value.trim().toLowerCase();
        rows1.forEach(row => {
            if (row === headerRow) return; 
            const cells = row.querySelectorAll('td');
            const column1Match = cells[2].textContent.toLowerCase().includes(searchTerm);
            if (column1Match) {tableBody.appendChild(row.cloneNode(true)); }
        });
        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
    }
    
    function checkAndDisplayTable_searchInputAuthor() {
        const searchInput = document.getElementById('searchInputAuthor');
        if (searchInput.value.trim() !== '') {
            const pagination = document.getElementById('pagination'); // Display full table when search input is not empty
            searchInput.style.display = 'block';
            pagination.style.display = 'none';
            fullTable_searchInputAuthor();
        } else {
            displayTable(currentPage); // Otherwise, display paginated table
            searchInput.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'block';
        }
    }

    function fullTable_searchInputCategory() {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';
        if (headerRow) {tableBody.appendChild(headerRow.cloneNode(true));}         // Add header row
        const searchTerm = document.getElementById('searchInputCategory').value.trim().toLowerCase();
        rows1.forEach(row => {
            if (row === headerRow) return; 
            const cells = row.querySelectorAll('td');
            const column1Match = cells[1].textContent.toLowerCase().includes(searchTerm);
            if (column1Match) {tableBody.appendChild(row.cloneNode(true)); }
        });
        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
    }
    
    function checkAndDisplayTable_searchInputCategory() {
        const searchInput = document.getElementById('searchInputCategory');
        if (searchInput.value.trim() !== '') {
            const pagination = document.getElementById('pagination'); // Display full table when search input is not empty
            searchInput.style.display = 'block';
            pagination.style.display = 'none';
            fullTable_searchInputCategory();
        } else {
            displayTable(currentPage); // Otherwise, display paginated table
            searchInput.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'block';
        }
    }


    // Add event listener to the search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', checkAndDisplayTable_searchInput);
    const searchInputAthor = document.getElementById('searchInputAuthor');
    searchInputAthor.addEventListener('input', checkAndDisplayTable_searchInputAuthor);
    const searchInputCategory = document.getElementById('searchInputCategory');
    searchInputCategory.addEventListener('input', checkAndDisplayTable_searchInputCategory);
    checkAndDisplayTable_searchInput();
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchInputAuthor = document.getElementById('searchInputAuthor');
    const searchInputCategory = document.getElementById('searchInputCategory');

    function updatePlaceholdersAndInputs(activeInput) {
    const inputs = [searchInput, searchInputAuthor, searchInputCategory];
    
    // Αποθήκευση αρχικών placeholders μόνο μία φορά
    inputs.forEach(input => {
        if (!input.getAttribute('data-original-placeholder')) {
            input.setAttribute('data-original-placeholder', input.placeholder);
        }
    });

    inputs.forEach(input => {
        if (input !== activeInput) {
            input.disabled = activeInput.value.trim() !== '';

            if (activeInput.value.trim() !== '') {
                input.placeholder = 'Εκτελείται αναζήτηση';
            } else {
                input.placeholder = input.getAttribute('data-original-placeholder');
            }
        } else {
            if (activeInput.value.trim() === '') {
                activeInput.placeholder = activeInput.getAttribute('data-original-placeholder');
            }
        }
    });
}


    // Initialize with original placeholders
    [searchInput, searchInputAuthor, searchInputCategory].forEach(input => {
        input.setAttribute('data-original-placeholder', input.placeholder);
    });

    // Add event listeners to each search input
    searchInput.addEventListener('input', function() {
        updatePlaceholdersAndInputs(searchInput);
    });

    searchInputAuthor.addEventListener('input', function() {
        updatePlaceholdersAndInputs(searchInputAuthor);
    });

    searchInputCategory.addEventListener('input', function() {
        updatePlaceholdersAndInputs(searchInputCategory);
    });
    
});
