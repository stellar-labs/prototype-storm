document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-url]');

    for( let button of buttons ) {
        button.addEventListener('click', function() {
            const url = this.dataset.url;
            let text = '<script type="text/javascript" src="' + url + '"><\/script>';

            copyToClipboard(text);     
            displayToast('#toast', 'icon-docs', 'CDN link copied');            
        });
    }
});