export interface BreweryApiResult<T> {
    message: string,
    data: T,
    status: string
}