const form = document.querySelector('.sub');


form.addEventListener('submit' , e =>{
    e.preventDefault();
    generateQRCode()
});

var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: 'Welcome to online qr code genarator write any text link and make your own QR'
    });
})();
function generateQRCode() {
    var qrtext = document.getElementById("username").value;
    document.getElementById("qr-result").innerHTML = "QR code is ready ";
   
    qr.set({
        foreground: 'black',
        size: 200,
        value: qrtext
    });
}

function print()
{
    var canvas = document.getElementById("qr-code");
      var image = canvas.toDataURL();  
      var tmpLink = document.createElement( 'a' );  
      tmpLink.download = 'MyQR.png';
      tmpLink.href = image;  
      document.body.appendChild( tmpLink );  
      tmpLink.click();  
      document.body.removeChild( tmpLink ); 
}