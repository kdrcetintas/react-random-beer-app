import React from "react";

export interface UserBoxProps {
    imageUrl: string,
    name: string,
    title: string,
    mailAddress: string,
    githubText: string,
    githubLink: string,
    linkedinText: string,
    linkedinLink: string
}

export function UserBox(props: UserBoxProps) {
    return (
        <div className="md:flex bg-gray-100 rounded-lg p-6 shadow">
            <img className="h-48 w-48 md:h-32 md:w-32 rounded-full mx-auto md:mx-0 md:mr-6" src={props.imageUrl} alt={props.name} />
            <div className="text-center md:text-left mt-2 md:mt-0">
                <h2 className="text-lg font-semibold">{props.name}</h2>
                <div className="text-gray-800">{props.title}</div>
                <div className="text-gray-600">{props.mailAddress}</div>
                <div className="text-blue-600">
                    <a href={props.githubLink} target="_blank" rel="noopener noreferrer">{props.githubText}</a>
                </div>
                <div className="text-blue-600">
                    <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">{props.linkedinText}</a>
                </div>
            </div>
        </div>
    )
}