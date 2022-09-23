import type { NextPage } from "next";


const Project: NextPage = () => {
    return (
        <div className="shadow-lg border border-black p-6 rounded-md">
            <div className="space-y-4">
                <div>Links</div>
                <div className="space-y-2">
                    <p className="text-xl">FoodMart Web App</p>
                    <p>A single page web app where anyone can find his/her desired food. It is an ecommerce app. Anyone can buy or sell any food products here.</p>
                </div>
                    <ul className="list-none flex gap-4 text-sm">
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Stipe</li>
                    </ul>
            </div>
        </div>
    )
}

export default Project;