document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    // Check if consent is already given
    if (!getCookie('cookieConsent')) {
        console.log(`consent is NOT given`);
        cookieBanner.style.display = 'flex';
    }else{
        console.log(`consent IS given`);
        cookieBanner.style.display = 'none';
    }

    acceptButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365);
        cookieBanner.style.display = 'none';
    });

    declineButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'declined', 365);
        cookieBanner.style.display = 'none';
    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        name = name + "=";

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }
});
