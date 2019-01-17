import * as assert from 'assert';
import { expect } from 'chai';
import { HashQuery, Query, SearchQuery } from '../src/GetParameters';

describe('Query', () => {
    it('can be created from a string', () => {
        // System under Test
        const qs = new Query('a=1&b=2&c=3');

        // Act
        const map = qs.getParameters();

        // Assert
        expect(map.size).to.equal(3);
    });

    it('can be created from a location query string', () => {

        // Arrange
        const location = { search: '?a=1&b=2&c=3' } as Location;
        const expected = new Query('a=1&b=2&c=3');

        // System under Test
        const qs = new SearchQuery(location);

        // Assert
        expect(qs.equals(expected)).to.equal(true);
    });

    it('can be created from a location hash', () => {

        // Arrange
        const location = { hash: '#somehash?a=1&b=2&c=3' } as Location;
        const expected = new Query('a=1&b=2&c=3');

        // System under Test
        const qs = new HashQuery(location);

        // Assert
        expect(qs.equals(expected)).to.equal(true);
    });

});
