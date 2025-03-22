function redirectToWhatsApp() {
    const phoneNumber = "923047315455"; 
    const message = "I love you..";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
