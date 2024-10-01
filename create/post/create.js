function downloadHTML() {
    const htmlContent = generateFinalHTML(); // Καλεί τη συνάρτηση που παράγει το HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'page.html'; // Όνομα αρχείου που θα κατέβει
    document.body.appendChild(link);
    link.click(); // Ξεκινά την λήψη
    document.body.removeChild(link); // Αφαιρεί το link από το DOM
}

function generateFinalHTML() {
    let htmlContent = 
`<html>
<head>
    <meta property="og:image" content="https://grcodeclub.github.io/files-page/preview/basic.png"/>
    <meta property="og:title" content="GrCode Club">
    <script src="https://grcodeclub.github.io/js/add/data.js"></script>
</head>
<body>
    <div class="container">
        <div id="add_headder_and_menu"></div>
        <div class="Text"> 
             <div class="text_bg"></div>
        </div> 
    </div> <!--Τέλος container-->
    <footer id="addFooter"></footer> <!-- Footer -->
</body>
</html>`;

    // Δημιουργία περιεχομένου για το myhtmlContent
    const htmlContentArray = [];
    const items = document.querySelectorAll(".item");
    
    items.forEach(item => {
        const title = item.querySelector(".input_title");
        const content = item.querySelector(".content");
        const image = item.querySelector(".image");
        const unity = item.querySelector(".unity");
        const mycode = item.querySelector(".mycode");
        const mytable = item.querySelector(".mytable");
        const programming = item.querySelector(".programming");
        const selectedValue = document.getElementById("itemSelectLanguage");


        let itemHTML = "";

        // Έλεγχος για τίτλο
        if (title) {
            itemHTML += `<h1 class="title">${title.value}</h1>`;
        }

        // Έλεγχος για μονάδα (unity)
        if (unity) {
            itemHTML += `<h3 class="highlight">${unity.value}</h3>`;
        }
        
        if (selectedValue && programming) {
            // Αν υπάρχει το στοιχείο και έχει τιμή
            itemHTML += `
            <div class="bg_preview"><div class="line-numbers">
            <pre class="code_editor"><code class="language-${selectedValue.value}">${programming.value}</code></pre></div></div>`;
        } else {
            console.error("Το στοιχείο itemSelectLanguage δεν υπάρχει ή δεν έχει επιλεχθεί τιμή.");
        }

        // Έλεγχος για κείμενο
        if (content && content.value.trim() !== "") {
            itemHTML += `<p>${content.value}</p>`;
        }

          // Έλεγχος για κείμενο
          if (mycode && mycode.value.trim() !== "") {
            itemHTML += `<div>${mycode.value}</div>`;
        }
        
        
        // Έλεγχος για εικόνα
        if (image && image.value.trim() !== "") {
            itemHTML += `<a href="${image.value}" target="_blank"><img src="${image.value}" alt="Image" style="max-width: 50%; height: auto;"/></a>`;
        }

         // Έλεγχος για εικόνα
         if (mytable && mytable.value.trim() !== "") {
            itemHTML += `<div>
            <div class="search" id="search"><input style="width: 100%;" type="input" class="form__field" placeholder="Αναζήτηση" id='searchInput'/></div>
<br>
<table id="search_table_page">
${mytable.value}
</table>    
<div class="pagination" id="pagination"></div>
</div>`;
        }

        // Αν υπάρχει περιεχόμενο για το item, το προσθέτει στον πίνακα
        if (itemHTML) {
            htmlContentArray.push(itemHTML);
        }
    });

    // Αντικατάσταση του placeholder με το παραγόμενο περιεχόμενο
    const finalHTML = htmlContent.replace(
        ' <div class="text_bg"></div>', 
        ` <div class="text_bg">${htmlContentArray.join('')}</div>`
    );

    return finalHTML; // Επιστρέφει το παραγόμενο HTML
}
