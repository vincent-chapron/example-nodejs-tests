const SlugProvider = require('../../src/provider/SlugProvider')
const {expect} = require('chai')

describe('SlugProvider', function() {

    let slugProvider;

    before(function() {
        slugProvider = new SlugProvider();
    })

    describe('::slugify()', function() {
        
        it('should provide a slug from a string', function() {
            let slug = slugProvider.slugify('Mon super titre !')
            expect(slug).to.be.equal('mon-super-titre')
        })
        
        it('should return null when namem is not a string', function() {
            let slug = slugProvider.slugify(['Mon super titre dans un tableau!'])
            expect(slug).to.be.null
        })

    })

})
