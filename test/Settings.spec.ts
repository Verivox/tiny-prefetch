import { Settings } from '../src/Settings'
import { ParallelFetch } from "../src/ParallelFetch"
import { expect } from 'chai'

class MockSettingsBase extends Settings {
    public getUrls(): string[] {
        return super.getUrls();
    }
}

class MockSettingsNoUrls extends MockSettingsBase {
}

class MockSettings extends MockSettingsBase {
    public someUrlBuilder() {
        return `http://example.com/${this.query.get('hello')}/some/things`
    }

    public getUrls(): string[] {
        return [ this.someUrlBuilder() ]
    }

}

describe('Settings', () => {
    const queryFixture = new Map([ [ 'hello', 'world' ] ])
    const headersFixture = {
        accept: 'application/json'
    }
    const errorMessageFixture = 'Nothing to see here'
    const fetchFn: unknown = async () => {
        return {
            text: async () => 'results from webservice'
        }
    }

    let parallelFetch: ParallelFetch

    beforeEach(() => {
        parallelFetch = new ParallelFetch(headersFixture,
            errorMessageFixture,
            fetchFn as (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)
    })

    it('throws an error if no getUrls is implemented', () => {
        // System under test
        const mockSettings = new MockSettingsNoUrls(queryFixture, parallelFetch)

        // Act & Assert
        expect(mockSettings.getUrls.bind((mockSettings))).to.throw
        expect(mockSettings.resultAsMap.bind(mockSettings)).to.throw
    })

    it('crates a map in the proper format', () => {
        // System under test
        const mockSettings = new MockSettings(queryFixture, parallelFetch)

        // Act
        const result = mockSettings.resultAsMap()

        // Assert
        expect(result.size).to.equal(1)
        expect(result.keys().next().value).to.equal(mockSettings.someUrlBuilder())
        expect(result.values().next().value).to.be.instanceOf(Promise)
    })
})
