import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export interface strAndLink {
    link: string,
    text: string
}

export interface BeerBoxProps {
    title: string,
    description: string,
    createDate: string,
    categoryName: string,
    breweryLinks: strAndLink[]
}

export function BeerBox(props: BeerBoxProps) {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
            <div className="px-4 pt-0 pb-2">
                {
                    props.breweryLinks.map((r, index) => {
                        return (
                            <Link key={index} to={r.link} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                {r.text} (Brewery)
                            </Link>
                        )
                    })
                }
                {
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {props.categoryName} (Category)
                    </span>
                }
            </div>
            <div className="px-4 pt-2 pb-2 bg-gray-500 text-white">
                <FontAwesomeIcon size={"1x"} icon={faCalendar} />
                <span className="ml-3">{props.createDate}</span>
            </div>
        </div>
    )
}