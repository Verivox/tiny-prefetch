import { ParallelFetch } from "./ParallelFetch";
export declare abstract class Settings {
    protected query: Map<string, string>;
    protected prefetch: ParallelFetch;
    constructor(query: Map<string, string>, prefetch: ParallelFetch);
    protected getUrls(): string[];
    asMap(): Map<string, Promise<string>>;
}
