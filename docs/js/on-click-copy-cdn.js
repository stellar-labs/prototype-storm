document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-url]');

    for( let button of buttons ) {
        button.addEventListener('click', function() {
            const url = this.dataset.url;
            const checksum = this.dataset.checksum;
            let text = '<script type="text/javascript" src="' + url + '" integrity="' + checksum + '" crossorigin="anonymous"><\/script>';

            copyToClipboard(text);     
            displayToast('#toast', 'icon-docs', 'CDN link copied');            
        });
    }
});