import React from "react";
import { UserBox } from '../components/UserBox';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-5 mt-5">
            <UserBox
                imageUrl="https://avatars1.githubusercontent.com/u/11595633?s=460&u=f793d9bd867f84b90fe0d8d31f3d353bfb7bef55&v=4"
                name="Kadir Çetintaş"
                title="Software Developer"
                mailAddress="mail@kadircetintas.com"
                githubLink="https://github.com/kdrcetintas/"
                githubText="github@kdrcetintas"
                linkedinLink="github@kdrcetintas"
                linkedinText="linkedin@kdrcetintas"
            />
            <hr />
            <div className="mt-3 bg-gray-100 rounded-lg p-6 shadow">
                <span className="font-bold">Description</span>
                <ul className="list-disc ml-5">
                    <li>cors-anwhere demo link used at the api requests due to cors error</li>
                    <li>tailwindcss used for the ui</li>
                    <li>redux for state management</li>
                    <li>redux-thunk for async action creators, no custom middleware</li>
                    <li>axios for http requests</li>
                    <li>all api results mapped under /types folder</li>
                    <li>big components is seperated at /components folder</li>
                    <li>state/prop types mapped as inline in the component/view files</li>
                    <li>brewery detail page has two way data read structure, from the global state or from the api. If there is no data at the global state for specific brewery, it's will read from the api and save the global state</li>
                </ul>
            </div>
        </div>
    )
}