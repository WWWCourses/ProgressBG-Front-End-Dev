window.addEventListener('beforeunload', function (event) {
    // Show the subscription div
    document.getElementById('subscribe-div').classList.remove('hidden');
    event.preventDefault()
    // // Set the returnValue to display the confirmation dialog
    // const confirmationMessage = 'Are you sure you want to leave?';
    // event.returnValue = confirmationMessage;  // Gecko, Trident, Chrome 34+
    // return confirmationMessage;  // Gecko, WebKit, Chrome <34
});

document.addEventListener('mouseleave', function(e) {
    console.log(`e.clientY:${e.clientY}`);
    if (e.clientY <= 0) {
        document.getElementById('subscribe-div').classList.remove('hidden');
    }
});
