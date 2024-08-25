document.addEventListener('DOMContentLoaded', function() {
    // Εύρεση του κουμπιού διαγραφής cookies και προσθήκη event listener
    var deleteCookiesButton = document.getElementById('delete-cookies');
    if (deleteCookiesButton) {
        deleteCookiesButton.addEventListener('click', deleteAllCookies);
    }

    // Ενημέρωση των στοιχείων td με τις τιμές των cookies
    updateCookieValues();
});

function deleteAllCookies() {
    // Λήψη όλων των cookies
    var cookies = document.cookie.split(';');
    
    // Δημιουργία ενός πίνακα για καταγραφή των cookies που θα διαγραφούν
    var cookiesToDelete = [];

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        var value = eqPos > -1 ? cookie.substr(eqPos + 1).trim() : '';

        // Καταγραφή του cookie που πρόκειται να διαγραφεί
        cookiesToDelete.push({ name: name, value: value });

        // Διαγραφή κάθε cookie με ημερομηνία λήξης στο παρελθόν
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + location.hostname;
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + location.hostname + '; Secure';
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + location.hostname + '; Secure; SameSite=None';
    }

    // Επιβεβαίωση ότι τα cookies έχουν διαγραφεί με καταγραφή
    console.log('Όλα τα cookies έχουν διαγραφεί:');
    cookiesToDelete.forEach(function(cookie) {
        console.log('Cookie Name:', cookie.name, '| Value:', cookie.value);
    });

    // Ενημέρωση των στοιχείων td μετά τη διαγραφή των cookies
    updateCookieValues();
}


function updateCookieValues() {
    // Λήψη των cookies
    var cookies = document.cookie.split(';');
  
    // Δημιουργία ενός αντικειμένου για να κρατήσουμε τα cookies
    var cookieObj = {};
    cookies.forEach(function(cookie) {
      var parts = cookie.split('=');
      var name = parts[0].trim();
      var value = parts[1] ? parts[1].trim() : '';
      cookieObj[name] = value;
    });
  
    // Ενημέρωση των στοιχείων td με τις τιμές των cookies
    document.getElementById('ga').textContent = cookieObj['_ga'] || 'Δεν υπάρχει cookie';
    document.getElementById('_ga_').textContent = cookieObj['_ga_KP7YGYPW0R'] || 'Δεν υπάρχει cookie';
    document.getElementById('_cookiesAccepted').textContent = cookieObj['cookiesAccepted'] || 'Δεν υπάρχει cookie';
}
