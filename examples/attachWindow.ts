import { SearchQuery } from "../src/Query"
import { ParallelFetch } from "../src/ParallelFetch"
import { Settings } from '../src/Settings'

class UrlSettings extends Settings {
    private apiUrl = '{{apiUrl}}'

    public static generateToken() {
        return 'i am a token that has been generated'
    }

    private listOfThings() {
        return `${this.apiUrl}/listOfThings`
    }

    private validate() {
        return `${this.apiUrl}/name/${this.query.get('name')}`
    }

    public getUrls(): string[] {
        return [
            this.listOfThings(),
            this.validate(),
        ]
    }
}


(window as any).responses = new UrlSettings(
    new SearchQuery({} as Location).getParameters(),
    new ParallelFetch(
        {
            Accept: 'application/json',
            material: UrlSettings.generateToken()
        },
        '{ "error": "empty" }',
    )
).asMap()
