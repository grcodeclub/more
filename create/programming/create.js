// Προεπιλεγμένος HTML κώδικας 
const defaultHtml = `<html>
    <head>
        <meta property="og:image" content="https://grcodeclub.gr/file/background/3.png"/>
        <meta property="og:title" content="GrCode Club | Προγραμματισμός">
        <script src="https://grcodeclub.gr/js/jquery.js"></script>
        <script src="https://grcodeclub.gr/programming/js/menu.js"></script>
        <script src="https://grcodeclub.github.io/javascript/add-elements/head.js"></script>
    </head>
    <body class="programing"> 
        <div class="container">
            <div id="add_headder_and_menu"></div><script src="https://grcodeclub.gr/javascript/add-elements/headder_and_menu.js"></script>
            <div class="Text"> <!--ΑΡΧΗ Text-->
                <div class="Text_bg" id="mycontent">    
            </div> <!--ΤΕΛΟΣ Text-->
        </div> <!--ΤΕΛΟΣ container-->
        <!-- Footer -->
        <footer id="add_footer"></footer><script src="https://grcodeclub.github.io/javascript/add-elements/footer.js"></script>
    </body>
</html>`;

// Λειτουργία για ενημέρωση της προεπισκόπησης
function updatePreview() {
    // Πάρτε το περιεχόμενο από το textarea
    const htmlInput = document.getElementById("htmlInput").value;
    // Βρείτε το έγγραφο του iframe
    const htmlOutputDocument = document.getElementById("htmlOutput").contentWindow.document;

    // Βρείτε το στοιχείο με το ID 'mycontent' μέσα στο iframe
    const mycontentElement = htmlOutputDocument.getElementById('mycontent');

    // Εάν το στοιχείο με το ID 'mycontent' υπάρχει, ενημερώστε το με το περιεχόμενο του textarea
    if (mycontentElement) {
        mycontentElement.innerHTML = htmlInput;
    }
}

updatePreview();
// Προσθέστε ακροατή για το γεγονός input στο textarea για να ενημερώνεται η προεπισκόπηση
document.getElementById("htmlInput").addEventListener("input", updatePreview);

// Αρχική ενημέρωση της προεπισκόπησης με τον προεπιλεγμένο HTML κώδικα
const htmlOutputDocument = document.getElementById("htmlOutput").contentWindow.document;
htmlOutputDocument.open();
htmlOutputDocument.write(defaultHtml);
htmlOutputDocument.close();


// Λειτουργία για φόρτωση HTML από ένα αρχείο κειμένου
function loadText(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Δεν είναι δυνατή η ανάγνωση του αρχείου.');
            }
            return response.text();
        });
}

// Λειτουργία για την εφαρμογή HTML από αρχείο κειμένου
function applyTextFile(url) {
    // Φορτώστε το HTML από το αρχείο
    loadText(url)
        .then(text => {
            // Τοποθετήστε το HTML στο htmlInput
            document.getElementById('htmlInput').value = text;
            // Ενημερώστε την προεπισκόπηση
            updatePreview();
        })
        .catch(error => {
            console.error('Σφάλμα κατά την ανάγνωση του αρχείου:', error);
        });
}

// Προσθέστε ακροατή για το κουμπί download
document.getElementById('downloadButton').addEventListener('click', (event) => {
    // Αποκτήστε το HTML περιεχόμενο της προεπισκόπησης
    const iframeDocument = document.getElementById('htmlOutput').contentWindow.document;
    const previewContent = iframeDocument.documentElement.outerHTML;

    // Δημιουργήστε ένα Blob από το περιεχόμενο της προεπισκόπησης
    const blob = new Blob([previewContent], { type: 'text/html' });

    // Δημιουργήστε μια διεύθυνση URL για το Blob
    const url = URL.createObjectURL(blob);

    // Ενημερώστε το href του downloadButton με τη διεύθυνση URL
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.href = url;
});
