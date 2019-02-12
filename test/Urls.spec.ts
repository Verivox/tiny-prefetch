import { expect } from 'chai'

import { Urls } from '../src/Urls'
import { Url } from '../src'

class TestableUrl extends Url {
    constructor(url: string) {
        const fetchSpy: any = async () => ({ text: () => "works" })
        super(url, { auth: 'iamaverylongtokenofsomekind' }, '', fetchSpy);
    }

    public async fetch() {
        return super.fetch();
    }
}

class TestableUrls extends Urls {
    public get results() {
        return this._results;
    }
}

describe('Urls', () => {

    it('creates a map from an array of Url', async  () => {
        // Prepare
        const plainUrls = ['example.com', 'api.example.com', 'api.example.com/averylongrequest']
        const urlArray = plainUrls.map(u => new TestableUrl(u))

        // Sut
        const urls = new TestableUrls(urlArray)

        // Act
        const validate = Array.from(urls.results)
        const keys = Array.from(urls.keys())
        expect(validate).to.instanceOf(Array)
        expect(keys.toString()).to.equal(plainUrls.toString())
    })
})
