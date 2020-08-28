import { BreweryListDetail } from "./BreweryListDetail";

export interface BreweryRandomBeerResult {
    id: string,
    name: string,
    nameDisplay: string,
    abv: string,
    styleId: number,
    isRetired: string,
    status: string,
    statusDisplay: string,
    createDate: string,
    updateDate: string,
    style: {
        id: number,
        categoryId: number,
        category: {
            id: number,
            name: string,
            createDate: string
        },
        name: string,
        shortName: string,
        description: string
    },
    breweries: BreweryListDetail[]
}