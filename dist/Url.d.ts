export declare class Url {
    readonly url: string;
    readonly headers?: any;
    readonly errorMessage: string;
    protected _fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
    protected _results: Promise<string>;
    constructor(url: string, headers?: any, errorMessage?: string, _fetch?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>);
    protected fetch(): Promise<string>;
    toPromise(): Promise<string>;
}
