# TinyPrefetch

A tiny prefetcher to early fetch API requests and reduce the critical call chain and increase app performance.

# Usage
Install the package as a dependency: `npm install @verivox/tiny-prefetch`

```ts
import { SearchQuery, Url, Urls } from "@verivox/tiny-prefetch"

declare global {
    interface Window {
        responses: Urls
    }
}

class UrlSettings {
    private apiUrl = 'api.example.com'

    constructor(private query: Map<string, string>) {
    }

    public generateToken() {
        return 'i am a token that has been generated'
    }

    private listOfThings() {
        return new Url(
            `${this.apiUrl}/listOfThings`,
            { auth: this.generateToken }
        )
    }

    private validate() {
        return new Url(
            `${this.apiUrl}/name/${this.query.get('name')}`,
            { auth: 'long auth token' }
        )
    }

    public getUrls(): Url[] {
        return [
            this.listOfThings(),
            this.validate(),
        ]
    }
}

const urlList = new Urls(new UrlSettings(new SearchQuery(location).asMap()).getUrls())

window.responses = urlList
```

The results are saved as promise to `window.responses` - await those from your application to get the results when ready.

### Why not use web workers instead?

Because web workers do a lot more, which adds unnecessary size to your application. If you only want to pre-cache some resources or calls, this library is all you need - if you need the other functionality that web workers provide, use them instead.


## Development

We use typescript, which is transpiled to javascript.

Make sure that you create tests if necessary, which can be run via `npm test`.

What you should check before creating a merge request:

* [ ] `npm test` is green
* [ ] `npm run lint` is green
* [ ] `npm run build` has been run and the dist/-folder has been checked into the branch to be merged
* [ ] the documentation has been updated for feature changes



## Authors

Written by [Kim Almasan](https://kumbier.it), [Lars Kumbier](https://kumbier.it) helped a tiny bit.


## Licence

[Licensed](./LICENSE.md) under MIT by the Verivox GmbH
