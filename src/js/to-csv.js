'use strict';

if( 'toCsv' in Object.prototype === false ) {
    /**
     * @summary Returns the CSV string representation of the element.
     * @param {String} options.delimitedBy=',' string delimiter between cells
     * @param {String} options.quotedBy='"' character to add in case the delimitedBy is present in the cell
     * @returns {String}
     * @example [['John', '25']].toCsv() // "John,25"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-csv.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-csv.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-csv.js
     */ 
    Object.prototype.toCsv = function(options = { delimitedBy: ',', quotedBy: '"' }) {
        // Array
        if( this.constructor === Array ) {
            let csv_rows = [];
            
            for( const row of this ) {
                let csv_row = [];
              
                for( const item of row ) {
                    let cell = item.replace(options.quotedBy, options.quotedBy.repeat(2));
              
                    if( cell.includes(options.delimitedBy) === true ) {
                        cell = `"${cell}"`;
                    }
              
                    csv_row.push(cell);
                }
              
                csv_rows.push(csv_row.join(options.delimitedBy));
            }
              
            return csv_rows.join('\n');
        }
    };
}

export default Object.prototype.toCsv;