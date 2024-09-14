// Συνάρτηση για την ανάγνωση των cookies
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Συνάρτηση για τη δημιουργία δυναμικών σειρών στον πίνακα
function populateTable() {
    let table = document.querySelector('#table');
    // Αφαιρεί τις προηγούμενες σειρές εκτός της πρώτης
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Εδώ υποθέτουμε ότι τα cookies έχουν μορφή "key=value" και είναι διαχωρισμένα με κόμματα
    let cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        let [name, value] = cookie.split('=').map(item => item.trim());

        // Δημιουργία νέας σειράς <tr>
        let row = document.createElement('tr');

        // Δημιουργία κελιών <td> για το όνομα και την τιμή
        let nameCell = document.createElement('td');
        nameCell.textContent = name;

        let valueCell = document.createElement('td');
        valueCell.textContent = value;

        // Προσθήκη των κελιών στη σειρά
        row.appendChild(nameCell);
        row.appendChild(valueCell);

        // Προσθήκη της σειράς στο table
        table.appendChild(row);
    });
}

// Φόρτωσε τα δεδομένα όταν φορτωθεί η σελίδα
document.addEventListener('DOMContentLoaded', function() {
    if (!window.tablePopulated) {
        setTimeout(populateTable, 2000); // 10000 χιλιοστά του δευτερολέπτου = 10 δευτερόλεπτα
        window.tablePopulated = true;
    }
});


// Διαγραφή όλων των cookies
document.getElementById('delete-cookies').addEventListener('click', function() {
    document.cookie.split(";").forEach(function(cookie) {
        var name = cookie.split("=")[0];
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
    alert("Όλα τα cookies διαγράφηκαν!");
});

