document.getElementById('whatsappButton').addEventListener('click', function() {
    var phoneNumber = '529999999999'; // Reemplaza con tu número de WhatsApp
    var message = '¡Hola! Me gustaría hacer un pedido.';
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.location.href = whatsappUrl;
});

document.getElementById('whatsappButtonBottom').addEventListener('click', function() {
    var phoneNumber = '529999999999'; // Reemplaza con tu número de WhatsApp
    var message = '¡Hola! Me gustaría hacer un pedido.';
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.location.href = whatsappUrl;
});
