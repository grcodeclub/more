function addNewItem() {
    const container = document.getElementById("inputContainer");
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    
    newItem.innerHTML = `
                            <h3 class="highlight">  <input type="text" class="unity" placeholder="Εισάγετε τίτλο"/></h3>

                    <label for="content">Κείμενο:</label>
                    <textarea class="content" placeholder="Εισάγετε κείμενο"></textarea><br><br>

                    <label for="image">Εικόνα (URL):</label>
                    <input type="text" class="image" placeholder="Εισάγετε URL εικόνας" />

                    <br><br>
                    <button onclick="removeItem(this)" class="mybutton">Αφαίρεση</button><br><br>
    `;

    container.appendChild(newItem);
}

function removeItem(button) {
    const item = button.parentElement;
    item.remove();
}

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
    // Η υπάρχουσα λογική για να δημιουργήσεις το HTML
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
        const title = item.querySelector(".title");
        const content = item.querySelector(".content").value;
        const image = item.querySelector(".image").value;
        const unity = item.querySelector(".unity").value;

        let itemHTML = "";
    
        if (title) {
            itemHTML += `<h1 class="title">${title.value}</h1>`;
        }
        if (unity) {
            itemHTML += `<h3 class="highlight">${unity}</h3>`;
        }
        if (content) {
            itemHTML += `<p>${content}</p>`;
        }
        if (image) {
            itemHTML += `<img src="${image}" alt="Image" style="max-width: 100%; height: auto;" />`;
        }
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

