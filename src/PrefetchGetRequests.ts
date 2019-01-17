
export interface UrlSettings {
    headers: any
    emptyErrorMessage: string

    getUrls(): string[]
}

export class PrefetchGetRequests {
    constructor(private settings: UrlSettings,
                private _fetch = window.fetch.bind(window)) {
        return this.asMap() as any;
    }

    protected asMap() {
        const map = new Map();
        for (const url of this.settings.getUrls()) {
            map.set(url, this.fetch(url));
        }
        return map;
    }

    private async fetch(url: string) {
        try {
            const req = await this._fetch(url, {
                mode   : 'cors',
                headers: this.settings.headers,
            });
            return await req.text() || this.settings.emptyErrorMessage;
        } catch (err) {
            return this.settings.emptyErrorMessage;
        }
    }
}
