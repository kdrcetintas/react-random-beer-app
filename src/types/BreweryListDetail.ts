import { BreweryLocation } from './BreweryLocation';
export interface BreweryListDetail {
    id: string,
    name: string,
    nameShortDisplay: string,
    status: string,
    statusDisplay: string,
    createDate: string,
    updateDate :string,
    isInBusiness: string,
    isVerified: string,
    locations: BreweryLocation[]
}