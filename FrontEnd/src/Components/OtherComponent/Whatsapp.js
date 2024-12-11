const whatsappNumber = "+971556961430";

export function openWhatsApp() {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank");
}