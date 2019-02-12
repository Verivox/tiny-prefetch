export class Url {
    protected _results: Promise<string>
    // protected _fetch = window.fetch.bind(window)

    constructor(public readonly url: string,
                public readonly headers?: any,
                public readonly errorMessage: string = '',
                protected _fetch = window.fetch.bind(window)) {
        this._results = this.fetch()
    }

    protected async fetch() {
        try {
            const req = await this._fetch(this.url, {
                mode: 'cors',
                headers: this.headers,
            })
            return req.text()
        } catch {
            return this.errorMessage;
        }
    }

    public toPromise(): Promise<string> {
        return this._results
    }
}
