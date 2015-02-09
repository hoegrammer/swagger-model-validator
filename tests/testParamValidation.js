/**
 * Created by nrosenberg on 2015-02-09.
 */
var Validator = require('../lib/modelValidator');
var swagger = {};
var validator = new Validator(swagger);

module.exports.validationTests = {
    testRequired: function(test) {
        var data = {
            travis: 'test',
        };
        var spec = {
            parameters: [{
                name: 'req',
                required: true,

            }]
        };

        var errors = swagger.validateParams(spec, data);
        test.expect(2);
        test.ok(!errors.valid);
        test.ok(errors.GetErrorMessages()[0].indexOf('equired') !== -1);
        test.done();
    },
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
