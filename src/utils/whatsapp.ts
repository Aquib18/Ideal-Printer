const PHONE_NUMBER = "917758874354";

export const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};