const expect = require('expect.js');

const {doseNumberExist, retireCalcDynamic, isPalindrome} = require('./easy_4.js');

const {lightsOn} = require('./interpretive_problem_solving.js');
console.log(lightsOn); 
console.log(doseNumberExist(1, [1,2,3]));


// make a test for retireCalcDynamic to check year


describe('Test for JS101', function() {
    it('should get correct current year', function() {
        expect(retireCalcDynamic(22, 80)).to.equal('Its 2022, you will retire in 2080');
    });
    describe('Palindrome', function() {
        it.skip('Takes a Palindrome in with same first and last letters, returns true or false', function() {
            expect(isPalindrome('madam')).to.equal(true);
        }); 
        it('Takes a Palindrome checking every letter, returning true or false', function () {
            expect(isPalindrome("madam i'm adam")).to.equal(false);
        });
    }); 
    
    describe('1000 Lights', function() {
        it.skip('should have all lights on', function() {
            expect(lightsOn(10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
        }); 

        it('should take in a number and returns the correct array', function() {
            expect(lightsOn(1)).to.eql([1]);
        });

        it('should produce round two results', function() {
            expect(lightsOn(2)).to.eql([1]);
        });

        it('should produce third round output', function() {
            expect(lightsOn(3)).to.eql([1]);
        });

        it('should produce round four output', function() {
           expect(lightsOn(4)).to.eql([1,4]);
        });

    }); 
});


//isPalindrome('Madam');               // false (case matters)
//isPalindrome("madam i'm adam");      // false (all characters matter)
//isPalindrome('356653');              // true

