export interface IUrl {
    readonly url: string
    readonly headers?: any
    readonly errorMessage: string
    toPromise(): Promise<string | RequestResponse>
}

export class RequestResponse {

    constructor(
        public response?: Response,
        public error?: string
    ) {}
}

export class Url implements IUrl {
    protected _results: Promise<string>

    constructor(public readonly url: string,
                public readonly headers?: any,
                public readonly errorMessage: string = '',
                protected _fetch = window.fetch.bind(window)) {
        this._results = this.fetch()
    }

    protected async fetch() {
        try {
            const res = await this._fetch(this.url, {
                mode: 'cors',
                headers: this.headers,
            })
            return res.text()
        } catch {
            return this.errorMessage;
        }
    }

    public toPromise(): Promise<string> {
        return this._results
    }
}

export class UrlRequest implements IUrl {
    protected _results: Promise<RequestResponse>

    constructor(public readonly url: string,
                public readonly headers?: any,
                public readonly errorMessage: string = '',
                protected _fetch = window.fetch.bind(window)) {
        this._results = this.fetch()
    }

    protected async fetch() {
        try {
            const res = await this._fetch(this.url, {
                mode: 'cors',
                headers: this.headers,
            })
            return new RequestResponse(res)
        } catch {
            return new RequestResponse(undefined, this.errorMessage)
        }
    }

    public toPromise(): Promise<RequestResponse> {
        return this._results
    }
}
