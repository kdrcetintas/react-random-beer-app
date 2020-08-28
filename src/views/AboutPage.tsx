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
        </div>
    )
}