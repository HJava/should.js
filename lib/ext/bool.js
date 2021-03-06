/*
 * Should
 * Copyright(c) 2010-2014 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

module.exports = function(should, Assertion) {
    /**
     * Assert given object is exactly `true`.
     * 判断是否为true
     * @name true
     * @memberOf Assertion
     * @category assertion bool
     * @alias Assertion#True
     * @example
     *
     * (true).should.be.true();
     * false.should.not.be.true();
     *
     * ({ a: 10}).should.not.be.true();
     */
    Assertion.add('true', function() {
        this.is.exactly(true);
    });
    /**
     * 别名为True
     */
    Assertion.alias('true', 'True');

    /**
     * Assert given object is exactly `false`.
     * 判断是否为false
     * @name false
     * @memberOf Assertion
     * @category assertion bool
     * @alias Assertion#False
     * @example
     *
     * (true).should.not.be.false();
     * false.should.be.false();
     */
    Assertion.add('false', function() {
        this.is.exactly(false);
    });
    /**
     * 别名False
     */
    Assertion.alias('false', 'False');

    /**
     * Assert given object is thuthy according javascript type conversions.
     * 通过对象检查来判断对象是否为空
     * @name ok
     * @memberOf Assertion
     * @category assertion bool
     * @example
     *
     * (true).should.be.ok();
     * ''.should.not.be.ok();
     * should(null).not.be.ok();
     * should(void 0).not.be.ok();
     *
     * (10).should.be.ok();
     * (0).should.not.be.ok();
     */
    Assertion.add('ok', function() {
        this.params = {operator: 'to be truthy'};

        this.assert(this.obj);
    });
};
