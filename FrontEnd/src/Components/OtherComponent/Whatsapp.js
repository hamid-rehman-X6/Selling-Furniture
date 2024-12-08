const whatsappNumber = "+971557349696";

export function openWhatsApp() {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank");
}