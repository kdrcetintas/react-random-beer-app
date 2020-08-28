import { BreweryApiResult } from './ApiResult';
import { BreweryRandomBeerResult } from './RandomBeer';
import { BreweryDetail } from './BreweryDetail';
export interface ApplicationState {
    currentBeer: {
        loading: boolean,
        error: boolean,
        data: BreweryApiResult<BreweryRandomBeerResult> | null
    },
    loadedBreweries: BreweryDetail[]
}