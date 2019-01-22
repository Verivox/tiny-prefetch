export declare class ParallelFetch {
    private headers;
    private emptyErrorMessage;
    private _fetch;
    constructor(headers: any, emptyErrorMessage: string, _fetch?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>);
    fetch(url: string): Promise<string>;
}
