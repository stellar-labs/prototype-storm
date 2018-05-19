'use strict';

if( 'parseCsv' in Object.prototype === false ) {
    /**
     * @summary Returns an array representing the CSV of the element.
     * @param {String} options.delimitedBy=',' character separating the cells
     * @param {String} options.quotedBy='"' quote character in case a cell contains any delimitedBy character
     * @returns {Array}
     * @example "Name,Age\nJohn,25".parseCsv() // [['Name', 'Age'],['John', '25]]
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/parse-csv.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/parse-csv.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/parse-csv.js
     */ 
    Object.prototype.parseCsv = function(options = { delimitedBy: ',', quotedBy: '"' }) {
        // String
        if( this.constructor === String ) {
            return this.split(/(?<!\n)\n(?!\n)/).map(function(row) {
                // assuming delimiter is ',', and quoter is '"'
                // here is the original regexp: /,(?=(?:[^"]*"[^"]*")*(?![^"]*"))/
                return row.split(new RegExp(`${options.delimitedBy}(?=(?:[^${options.quotedBy}]*${options.quotedBy}[^${options.quotedBy}]*${options.quotedBy})*(?![^${options.quotedBy}]*${options.quotedBy}))`));
            });
        }
    };
}

export default Object.prototype.parseCsv;