window.onload = () => {
    //copyright year output
    let copyrightYr = document.querySelector(".footer__copyright-yr");
    let newDate = new Date();
    let currentYr = newDate.getFullYear();
    if (currentYr > 2023) {
        copyrightYr.innerHTML = `2023 &ndash; ${currentYr} `;
    } else {
        copyrightYr.innerHTML = currentYr;
    }
}