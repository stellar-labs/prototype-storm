function copyToClipboard( text ) {
    let input = document.createElement('input');

    input.id = 'copy-to-clipboard';
    
    document.body.appendChild(input);
    
    input = document.getElementById('copy-to-clipboard');
    
    input.value = text;
    
    input.select();
    document.execCommand('Copy');

    document.body.removeChild(input);
}