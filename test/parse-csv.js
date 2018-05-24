/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/parse-csv.js';

describe('parse-csv', function() {
    it('should exists', function() {
        should.exist(Object.prototype.parseCsv);
    });

    it('should give the right result for a csv without quoted cells', function() {
        const input = `policyID,statecode,county,eq_site_limit,hu_site_limit,fl_site_limit,fr_site_limit,tiv_2011,tiv_2012,eq_site_deductible,hu_site_deductible,fl_site_deductible,fr_site_deductible,point_latitude,point_longitude,line,construction,point_granularity
119736,FL,CLAY COUNTY,498960,498960,498960,498960,498960,792148.9,0,9979.2,0,0,30.102261,-81.711777,Residential,Masonry,1
448094,FL,CLAY COUNTY,1322376.3,1322376.3,1322376.3,1322376.3,1322376.3,1438163.57,0,0,0,0,30.063936,-81.707664,Residential,Masonry,3`;

        const expected = [
            [ 
                'policyID',
                'statecode',
                'county',
                'eq_site_limit',
                'hu_site_limit',
                'fl_site_limit',
                'fr_site_limit',
                'tiv_2011',
                'tiv_2012',
                'eq_site_deductible',
                'hu_site_deductible',
                'fl_site_deductible',
                'fr_site_deductible',
                'point_latitude',
                'point_longitude',
                'line',
                'construction',
                'point_granularity' 
            ],
            [ 
                '119736',
                'FL',
                'CLAY COUNTY',
                '498960',
                '498960',
                '498960',
                '498960',
                '498960',
                '792148.9',
                '0',
                '9979.2',
                '0',
                '0',
                '30.102261',
                '-81.711777',
                'Residential',
                'Masonry',
                '1' 
            ],
            [ 
                '448094',
                'FL',
                'CLAY COUNTY',
                '1322376.3',
                '1322376.3',
                '1322376.3',
                '1322376.3',
                '1322376.3',
                '1438163.57',
                '0',
                '0',
                '0',
                '0',
                '30.063936',
                '-81.707664',
                'Residential',
                'Masonry',
                '3' 
            ]
        ];

        input.parseCsv().should.deep.equal(expected);
    });
});
