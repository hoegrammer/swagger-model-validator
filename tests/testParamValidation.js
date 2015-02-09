/**
 * Created by bdunn on 18/09/2014.
 */
var Validator = require('../lib/modelValidator');
var swagger = {};
var validator = new Validator(swagger);

//TODO required, muliple

module.exports.validationTests = {
    testValidNumber: function(test) {
        var data = {
            travis: 'test',
            anum: 3
        };
        var spec = {
            parameters: [{
                name: 'anum',
                type: 'number',
            }]
        };

        var errors = swagger.validateParams(spec, data);

        test.expect(1);
        test.ok(errors.valid);

        test.done();
    },
    testInvalidNumber: function(test) {
        var data = {
            travis: 'test',
            anum: 'weewew'
        };
        var spec = {
            parameters: [{
                name: 'anum',
                type: 'number',
            }]
        };

        var errors = swagger.validateParams(spec, data);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    },
    testValidDate: function(test) {
        var data = {
            travis: 'test',
            adate: '2014-05-05'
        };
        var spec = {
            parameters: [{
                name: 'adate',
                type: 'string',
                format: 'date-time'
            }]
        };

        var errors = swagger.validateParams(spec, data);

        test.expect(1);
        test.ok(errors.valid);

        test.done();
    },
    testinvaliddate: function(test) {
        var data = {
            travis: 'test',
            adate: 'ewrewrew'
        };
        var spec = {
            parameters: [{
                name: 'adate',
                type: 'string',
                format: 'date-time'
            }]
        };

        var errors = swagger.validateParams(spec, data);

        test.expect(1);
        test.ok(!errors.valid);

        test.done();
    }
};
