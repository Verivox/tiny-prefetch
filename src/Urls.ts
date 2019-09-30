import { IUrl, RequestResponse, Url, UrlRequest } from './Url'

type UrlResponse = Promise<string | RequestResponse>

export class Urls {
    protected _results = new Map()

    constructor(urlArray: IUrl[] = []) {
        urlArray.map(u => [u.url, u.toPromise()])
        this._results = new Map<string, UrlResponse>(urlArray.map(u => [u.url, u.toPromise()]) as Array<[string, UrlResponse]>)
    }

    public get(key: string) {
        return this._results.get(key)
    }

    public has(key: string) {
        return this._results.has(key)
    }

    get [Symbol.toStringTag](): string {
       return this._results[Symbol.toStringTag]
    }

    get size() {
        return this._results.size;
    }

    public [Symbol.iterator](): IterableIterator<[string, UrlResponse]> {
        return this._results[Symbol.iterator]()
    }

    public clear(): void {
        this._results.clear()
    }

    public delete(key: string): boolean {
        return this._results.delete(key)
    }

    public entries(): IterableIterator<[string, UrlResponse]> {
        return this._results.entries()
    }

    public forEach(callbackfn: (value: UrlResponse, key: string, map: Map<string, UrlResponse>) => void, thisArg?: any): void {
        this._results.forEach(callbackfn)
    }

    public keys(): IterableIterator<string> {
        return this._results.keys()
    }

    public set(key: string, value: Url): this {
        this._results.set(key, value.toPromise())
        return this
    }

    public values(): IterableIterator<UrlResponse> {
        return this._results.values()
    }
}
