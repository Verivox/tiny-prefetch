
export interface UrlSettings {
    headers: any
    emptyErrorMessage: string

    getUrls(): string[]
}

export class Prefetch {
    constructor(private headers: any,
                private emptyErrorMessage: string,
                private _fetch = window.fetch.bind(window)) {
    }

    public async fetch(url: string) {
        try {
            const req = await this._fetch(url, {
                mode   : 'cors',
                headers: this.headers,
            });
            return await req.text() || this.emptyErrorMessage;
        } catch (err) {
            return this.emptyErrorMessage;
        }
    }
}
