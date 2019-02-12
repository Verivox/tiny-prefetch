import { expect } from 'chai'
import * as sinon from 'sinon'

import { Url } from '../src/Url'

class TestableUrl extends Url {
    public spy: sinon.SinonSpy

    constructor() {
        const spy = sinon.spy();
        const fetchSpy: any = async () => ({ text: spy })
        super("http://example.com", { auth: 'iamaverylongtokenofsomekind' }, '', fetchSpy)
        this.spy = spy
    }

    public async fetch() {
        return super.fetch();
    }
}

describe('Url', () => {
    it('to use fetch for data retrieval', async () => {
        // System under Test
        const url = new TestableUrl()

        // ACT
        await url.fetch()

        // Assert
        expect(url.spy.called).to.be.true
    })
})
