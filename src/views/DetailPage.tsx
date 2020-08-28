import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { ApplicationState } from '../types/ApplicationState';
import { connect } from 'react-redux';
import { addLoadedBreweryDetail, fetchNewBeer } from '../actions/index';
import { BreweryDetail } from '../types/BreweryDetail';
import axios from 'axios';
import { BreweryBox } from '../components/BreweryBox';

interface propsInterface {
    loadedBreweries: BreweryDetail[],
    addLoadedBreweryDetail: any,
    fetchNewBeer: any
}

interface localStateInterface {
    loading: boolean,
    error: boolean,
    data: BreweryDetail | null | undefined
}

const DetailPage = (props: propsInterface) => {
    const history = useHistory();
    const { id } = useParams();
    const [detailState, setDetailState] = useState<localStateInterface>({
        loading: true,
        error: false,
        data: null
    })
    // Wrong links, go back to home
    if (!id || id === null || id === "") {
        history.push("/");
    }
    useEffect(() => {
        let preFindedBreweryDetail = props.loadedBreweries.find(r => r.id === id);
        if (preFindedBreweryDetail !== null && preFindedBreweryDetail !== undefined) {
            /// If this brewery catched already in the global state, no need to send another request for it.
            setDetailState({
                loading: false,
                error: false,
                data: preFindedBreweryDetail
            })
        }
        else {
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/brewery/${id}/?key=a5c1b917e7ba62dcd79f434ed73bc72d`)
                .then(response => {
                    props.addLoadedBreweryDetail(response.data.data)
                    setDetailState({
                        loading: false,
                        error: false,
                        data: response.data.data
                    })
                })
                .catch(err => {
                    setDetailState({
                        data: null,
                        error: true,
                        loading: false
                    })
                })
        }
    }, [id, props]);

    const handleBtnClick = () => {
        props.fetchNewBeer();
        history.push("/");
    }

    return (
        <div>
            <div className="bg-gray-400">
                <div className="container mx-auto">
                    <nav className="flex items-center justify-between flex-wrap p-3 pl-5 pr-5">
                        <div className="text-sm lg:flex-grow">
                            <Link to="/" className="inline-block text-sm px-4 py-2 bg-teal-500 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mr-3">
                                Go to Home to same Beer
                            </Link>
                            <button onClick={() => handleBtnClick()} className="inline-block text-sm px-4 py-2 bg-teal-300 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
                                Go to Home to different Beer
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto px-5 mt-5">
                {
                    detailState.loading
                    &&
                    <div
                        className="text-center w-full text-lg mt-3"
                    >
                        <FontAwesomeIcon size={"1x"} spin={true} icon={faSpinner} />
                    </div>
                }
                {
                    (
                        (!detailState.loading && detailState.error)
                        ||
                        (!detailState.loading && !detailState.error && detailState.data == null)
                    )
                    &&
                    <div
                        className="text-center w-full text-sm mt-3 bg-red-500 text-white p-3 rounded"
                    >
                        An error has been corrupted, Please try again later.
                    </div>
                }
                {
                    !detailState.loading
                    &&
                    !detailState.error
                    &&
                    detailState.data != null
                    &&
                    <div className="mb-4">
                        <BreweryBox
                            title={detailState.data.name}
                            description={detailState.data.description}
                            squareImage={detailState.data.images?.squareLarge}
                            createDate={detailState.data.createDate}
                            establishedYear={detailState.data.established}
                            statusText={detailState.data.statusDisplay}
                            websiteText={detailState.data.website}
                            isOrganic={detailState.data.isOrganic === "Y"}
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
            loadedBreweries: state.loadedBreweries
        };
    },
    {
        fetchNewBeer,
        addLoadedBreweryDetail
    }
)(DetailPage);  