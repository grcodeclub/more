    // Συνάρτηση για την ανάγνωση των cookies
        function getCookie(name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Συνάρτηση για τη δημιουργία δυναμικών σειρών στον πίνακα
        function populateTable() {
            let tableBody = document.querySelector('#table tbody');
            tableBody.innerHTML = ''; // Καθαρίζει το περιεχόμενο του tbody

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

                // Προσθήκη της σειράς στο tbody
                tableBody.appendChild(row);
            });
        }

        // Φόρτωσε τα δεδομένα όταν φορτωθεί η σελίδα
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(populateTable, 9000); // Καθυστερεί την εκτέλεση κατά 1 δευτερόλεπτο
});
