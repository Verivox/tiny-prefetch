import { expect } from 'chai';
import { HashQuery, Query, SearchQuery } from '../src/Query';

describe('Query', () => {
    it('can be created from a string', () => {
        // System under Test
        const qs = new Query('a=1&b=2&c=3');

        // Act
        const map = qs.getParameters();

        // Assert
        expect(map.size).to.equal(3);
    });

    it('can be created from a broken string', () => {
        // Arrange
        const brokenQueryString = 'a=1&b=2&c=';

        // System under Test
        const qs = new Query(brokenQueryString);

        // Act
        const map = qs.getParameters();

        // Assert
        expect(map.get('c')).to.not.equal('3');
        expect(map.size).to.equal(3);
    });

    describe('SearchQuery', () => {
        it('can be created from a location query string', () => {
            // Arrange
            const location = { search: '?a=1&b=2&c=3' } as Location;
            const expected = new Query('a=1&b=2&c=3');

            // System under Test, Act
            const qs = new SearchQuery(location);

            // Assert
            expect(qs.equals(expected)).to.equal(true);
        });
    });

    describe('HashQuery', () => {
        it('can be created from the hash location', () => {
            // Arrange
            const location = { hash: '#somehash?a=1&b=2&c=3' } as Location;
            const expected = new Query('a=1&b=2&c=3');

            // System under Test, Act
            const qs = new HashQuery(location);

            // Assert
            expect(qs.equals(expected)).to.equal(true);
        });
    });
});
