import React from "react";

export default function CallToArms() {

    return(
        <section className="bg-gray-800">
            <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
                <div>
                    <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    100
                </span>
                        <span className="text-indigo-200">
                    +
                </span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                        Job Offers
                    </p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    30
                </span>
                        <span className="text-indigo-200">
                    +
                </span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                        Companies
                    </p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    50
                </span>
                        <span className="text-indigo-200">
                    +
                </span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                        Hired candidates
                    </p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    3
                </span>
                        <span className="text-indigo-200">
                    +
                </span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
                        Years in business
                    </p>
                </div>
            </div>
            <div className="w-52 mx-auto mt-4 p-4 flex">
                <a type="button" href="/register"
                        className="py-2 px-4  bg-white hover:bg-gray-100
                        text-black w-full text-center text-base font-semibold
                        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-gray rounded-lg ">
                    Create account
                </a>
            </div>
        </section>

    )
}