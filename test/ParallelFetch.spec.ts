import { ParallelFetch } from '../src/ParallelFetch'
import { expect } from 'chai'
import * as sinon from 'sinon'

describe('ParallelFetch', () => {
    const headersFixture = {
        'hello': 'world'
    }
    const errorMessageFixture = 'i am an error'

    it('calls the function', async () => {
        // Arrange
        const spy = sinon.spy()
        const fetchFn: unknown = async () => {
            spy()
            return {
                text: async () => 'working'
            }
        }

        // System under test
        const parallelFetch = new ParallelFetch(headersFixture, errorMessageFixture, fetchFn as (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)

        // Act
        await parallelFetch.fetch('http://some_url')

        // Assert
        expect(spy.called).to.be.true
        expect(spy.callCount).to.equal(1)
    })

    it('returns custom error if response empty', async () => {
        // Arrange
        const fetchFn: unknown = async () => {
            return {
                text: async () => ''
            }
        }

        // System under test
        const parallelFetch = new ParallelFetch(headersFixture, errorMessageFixture, fetchFn as (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)

        // Act
        const res = await parallelFetch.fetch('http://some_url')

        // Assert
        expect(res).to.equal(errorMessageFixture)
    })

    it('returns results', async () => {
        // Arrange
        const serviceResponse = 'working'
        const fetchFn: unknown = async () => {
            return {
                text: async () => serviceResponse
            }
        }

        // System under test
        const parallelFetch = new ParallelFetch(headersFixture, errorMessageFixture, fetchFn  as (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>)

        // Act
        const res = await parallelFetch.fetch('http://some_url')

        // Assert
        expect(res).to.equal(serviceResponse)
    })
})
