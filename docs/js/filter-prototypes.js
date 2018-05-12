const hide_element_class = 'd-hide';

/**
 * @summary Filters the panels relative to a text.
 * @param {String} text
 * @return {undefined}
 * @example filterSearch('json');
 */
function filterPrototypes( text ) {
    let panels = document.querySelectorAll('.panel');

    for( let panel of panels ) {
        let name = panel.querySelector('[itemprop="name"]').innerHTML;
        let description = panel.querySelector('[itemprop="description"]').innerHTML;

        if( name.includes(text) === false && description.includes(text) === false ) {
            panel.classList.add(hide_element_class);
        }
        else {
            panel.classList.remove(hide_element_class);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('input', function() {
        filterPrototypes(this.value);
    });
});