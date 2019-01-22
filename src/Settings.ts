import { ParallelFetch } from "./ParallelFetch";

export abstract class Settings {
    constructor(protected query: Map<string, string>,
                protected prefetch: ParallelFetch) {
    }

    protected getUrls(): string[] {
        throw new Error('no url implemented!')
    }

    public asMap(): Map<string, Promise<string>> {
        const data = this.getUrls()
            .map((url) => [url, this.prefetch.fetch(url)])
        return new Map(data as any)
    }
}
