function displayToast( selector, icon, message, duration = 3300 ) {
    const toast = document.querySelector(selector);

    if( 'constructor' in toast === false || toast.constructor !== HTMLDivElement ) {
        return;
    }
    
    toast.querySelector('i').className = icon;
    toast.querySelector('span').innerHTML = message;

    toast.classList.add('toast-appeared');

    setTimeout(function() {
        toast.classList.remove('toast-appeared');
    }, duration);
}