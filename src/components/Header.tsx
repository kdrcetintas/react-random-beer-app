import React from 'react'
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="bg-teal-500">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between flex-wrap p-5">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link to="/" className="font-semibold text-xl tracking-tight">Random Beer App</Link>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <HeaderMenu />
                        <div>
                            <Link to="/about" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-3">
                                About
                            </Link>
                            <a href="https://github.com/kdrcetintas/react-random-beer-app" target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Documentation</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}