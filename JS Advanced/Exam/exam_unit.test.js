const expect = require('chai').expect;
const { assert } = require('chai');
const stringOperations = require('./03. String Operations_Ресурси');

describe ('test', () => {
    describe('slicer', () => {
        it('name', () => {
            expect(stringOperations.stringSlicer('str')).to.equal('str...');
        })
        it('name', () => {
            expect(stringOperations.stringSlicer('strrrr')).to.equal('str...');
        })
        it('name', () => {
            expect(stringOperations.stringSlicer('st')).to.equal('st...');
        })
        it('name', () => {
            expect(stringOperations.stringSlicer('s')).to.equal('s...');
        })
        it('name', () => {
            expect(stringOperations.stringSlicer('')).to.equal('...');
        })
    })
    describe('checker', () => {
        it('name', () => {
            expect(stringOperations.wordChecker('word', 'fsvwordngbjo')).to.equal('word');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('word', 'fsvword')).to.equal('word');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('WoRd', 'fsvWoRdngbjo')).to.equal('word');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('WORD', 'fsvwordngbjo')).to.equal('word');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('word', 'fsgbjo')).to.equal('word not found!');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('word', '')).to.equal('word not found!');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('WORD', '')).to.equal('word not found!');
        })
        it('name', () => {
            expect(stringOperations.wordChecker('WORD', 'fgsha')).to.equal('word not found!');
        })
    })
    describe('print', () => {
        it('1', () => {
            assert.throw(() => { stringOperations.printEveryNthElement('w', 'fsvword') }, 'The input is not valid!');
        })
        it('2', () => {
            assert.throw(() => { stringOperations.printEveryNthElement('1', 'fsvword') }, 'The input is not valid!');
        })
        it('3', () => {
            assert.throw(() => { stringOperations.printEveryNthElement('1', 52) }, 'The input is not valid!');
        })
        it('4', () => {
            assert.throw(() => { stringOperations.printEveryNthElement([1], 'gdbdf') }, 'The input is not valid!');
        })
        it('4.1', () => {
            assert.throw(() => { stringOperations.printEveryNthElement([1], { 'vrfv': 'wdcwr' }) }, 'The input is not valid!');
        })
        it('4.1', () => {
            assert.throw(() => { stringOperations.printEveryNthElement('d', ['f', 'd']) }, 'The input is not valid!');
        })
        it('5', () => {
            expect(stringOperations.printEveryNthElement('1', ['f', 'd', 'f'])).to.deep.equal(['f', 'd', 'f']);
        })
        it('6', () => {
            expect(stringOperations.printEveryNthElement('2', ['f', 'd', 'f'])).to.deep.equal(['f', 'f']);
        })
        it('7', () => {
            expect(stringOperations.printEveryNthElement('2', [])).to.deep.equal([]);
        })
        it('8', () => {
            expect(stringOperations.printEveryNthElement('5', ['f', 'd', 'f'])).to.deep.equal(['f']);
        })
    })
})