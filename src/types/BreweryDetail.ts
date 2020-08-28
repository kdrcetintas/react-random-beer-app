export interface BreweryDetail {
    id: string,
    name: string,
    nameShortDisplay: string,
    description: string,
    website: string,
    established: string,
    isOrganic: string,
    images: {
        icon: string,
        large: string,
        medium: string,
        squareLarge: string,
        squareMedium: string
    },
    status: string,
    statusDisplay: string,
    createDate: string,
    updateDate: string,
    isMassOwned: string,
    isInBusiness: string,
    isVerified: string
}