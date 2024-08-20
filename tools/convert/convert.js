function UpdateData(str, src)
{
    var txt=hex=dec=bin=octal='';
    var c,h,d,b,o;
    for(var i=0; i<str.length; i++)
    {
        //μετατρέπει τον αριθμό x[i] σε δεκαεξαδική αναπαράσταση 
        h = str[i].toString(16);
        //μετατρέπει τον αριθμό x[i] σε δεκαδική αναπαράσταση
        d = str[i].toString(10);
        // μετατρέπει τον αριθμό x[i] σε δυαδική αναπαράσταση
        b = str[i].toString(2);
        o = str[i].toString(8);

        if( h.length==1 ) h='0'+h;
        if( b.length<8 ) b='0'.repeat(8-b.length)+b;
        txt += String.fromCharCode(str[i]);
        hex += h.toUpperCase();
        dec += d;
        bin += b;
        octal += o;
        // Προσθετουμε κενο αναμεσα στα στοιχεια
        // Τσεκαρουμε ωστε να προσθεσουμε κενο μεχρι και το προτελευταιο κενο
        if( i<str.length-1) {
            hex+=" ";
            dec+=" ";
            bin+=" ";
            octal += " ";
        }
    }

    var base64=encodeBase64(txt);
    // Αν η πηγη δεν ειναι το txt τοτε ενημερωνουμε το πeδιο txt με την τιμη txt
    if( src!="txt" ) document.export.txt.value = txt;
    // Αν η πηγη δεν ειναι το hex τοτε ενημερωνουμε το πeδιο hex με την τιμη hex
    if( src!="hex" ) document.export.hex.value = hex;
    if( src!="bin" ) document.export.bin.value = bin;
    if( src!="dec" ) document.export.dec.value = dec;
    if( src!="base64" ) document.export.base64.value = base64;
    if( src!="octal" ) document.export.oct.value = octal;
    document.export.len.value = str.length;
}

function ConvertOctal(){
    var octal = document.export.oct.value;
    const octalArray = octal.split(" "); // Διαχωρίζουμε τις τιμές με βάση τα κενά
    let asciiString=[];
    for (let i = 0; i < octalArray.length; i++) {
        decimalValue = parseInt(octalArray[i], 8); // Μετατροπή οκταδικής σε δεκαδική
        asciiString [i]=decimalValue;
    }
    UpdateData(asciiString,"octal");
}


function ASCII()
{
    var text=[];
    var txt = document.export.txt.value;
    for(i=0; i<txt.length; i++)
    {text[i] = txt.charCodeAt(i);}
    UpdateData(text,"txt");
}

function Hex()
{
    var text=[];
    var hex = document.export.hex.value;
    hex = hex.toUpperCase();
    hex = hex.match(/[0-9A-Fa-f]{1,2}/g);
    for(i=0; i<hex.length; i++)
    {
        text[i] = parseInt(hex[i],16);
    }
    UpdateData(text,"hex");
}
function Binary()
{
    var text=[];
    var bin = document.export.bin.value;
    bin = bin.match(/[0-1]{1,8}/g);
    if( !bin ) return;
    for(i=0; i<bin.length; i++)
    {text[i] = parseInt(bin[i],2);}
    UpdateData(text,"bin");
}

function Decimal()
{
    var text=[];
    var dec = document.export.dec.value;
    if( dec.length==0 ) return;
    dec = dec.match(/[0-9]{1,3}/g);
    if( !dec ) return;
    for(i=0; i<dec.length; i++)
    {text[i] = parseInt(dec[i],10);}
    UpdateData(text,"dec");
}

function Base64()
{
    var text=[];
    var base64 = document.export.base64.value;
    var txt=decodeBase64(base64);
    document.export.txt.value = txt;
    for(i=0; i<txt.length; i++)
    {text[i] = txt.charCodeAt(i);}
    UpdateData(text,"base64");
}

function encodeBase64(str) {
 return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    function toSolidBytes(p1) {
          return String.fromCharCode('0x' + p1);
 }));
}

function decodeBase64(str) {
 return decodeURIComponent(atob(str).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
 }).join(''));
}


function clearText(){
document.export.hex.value = "";
document.export.bin.value = "";
document.export.oct.value = "";
document.export.dec.value = "";
document.export.base64.value = "";
}
