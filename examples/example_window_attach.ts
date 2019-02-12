import { SearchQuery, Url, Urls } from "../src"

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
