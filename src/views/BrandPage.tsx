import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { fetchNewBeer } from "../actions";
import { connect } from "react-redux";
import { ApplicationState } from '../types/ApplicationState';
import { BreweryListDetail } from '../types/BreweryListDetail';
import { BeerBox } from '../components/BeerBox';
import { BreweryRandomBeerResult } from '../types/RandomBeer';
import { BreweryApiResult } from '../types/ApiResult';

interface propsInterface {
    currentBeer: {
        loading: boolean,
        error: boolean,
        data: BreweryApiResult<BreweryRandomBeerResult> | null
    },
    fetchNewBeer: any
}

const BrandPage = (props: propsInterface) => {
    const { fetchNewBeer, currentBeer } = props;
    useEffect(() => {
        if (!currentBeer.error && !currentBeer.loading && currentBeer.data === null)
            fetchNewBeer()
    }, [fetchNewBeer, currentBeer])
    return (
        <div>
            <div className="bg-gray-400">
                <div className="container mx-auto">
                    <nav className="flex items-center justify-between flex-wrap p-3 pl-5 pr-5">
                        <div className="text-sm lg:flex-grow">
                            <button onClick={() => { props.fetchNewBeer() }} className="inline-block text-sm px-4 py-2 bg-teal-500 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
                                Show Another Beer
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto px-5 mt-5 pb-5">
                {
                    props.currentBeer.loading
                    &&
                    <div
                        className="text-center w-full text-lg mt-3"
                    >
                        <FontAwesomeIcon size={"1x"} spin={true} icon={faSpinner} />
                    </div>
                }
                {
                    (
                        (!props.currentBeer.loading && props.currentBeer.error)
                    )
                    &&
                    <div
                        className="text-center w-full text-sm mt-3 bg-red-500 text-white p-3 rounded"
                    >
                        An error has been corrupted, Please try again later.
                    </div>
                }
                {
                    (
                        (!props.currentBeer.loading && !props.currentBeer.error && props.currentBeer.data !== null)
                    )
                    &&
                    <div className="mb-4">
                        <BeerBox 
                            title={props.currentBeer.data.data.name}
                            description={props.currentBeer.data.data.style?.description}
                            breweryLinks={props.currentBeer.data.data.breweries.map((r: BreweryListDetail) => {
                                return {
                                    link: `/brewery/${r.id}`,
                                    text: r.nameShortDisplay
                                }
                            })}
                            categoryName={props.currentBeer.data.data.style?.category?.name}
                            createDate={props.currentBeer.data.data.createDate}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default connect(
    (state: ApplicationState) => {
        return {
            currentBeer: state.currentBeer
        };
    },
    {
        fetchNewBeer,
    }
)(BrandPage);  