export const isPhone = () => {
    return /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
};

export const remAndFontSize = () => {
    document.getElementsByTagName("html")[0].style.fontSize = `${document.body.clientWidth / 7.5}px`;
    document.body.style.fontSize = "16px";
};
