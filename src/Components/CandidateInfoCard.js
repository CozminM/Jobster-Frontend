import React from "react";

export default function CandidateInfoCard() {

    const scroll = () => {
        const section = document.getElementById("candidateForm")
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } )
    };

    const toggleForm = () => {
        if(!document.getElementById("companyForm").classList.contains("hidden")){
            document.getElementById("companyForm").classList.toggle("hidden")
        }
        document.getElementById("candidateForm").classList.toggle("hidden")
    }

    return(
        <div className="rounded-lg shadow-lg overflow-hidden mb-4 divide-y-2 divide-white">
            <div className="px-6 py-8 bg-gray-800 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                    <span className="inline-flex px-4 py-1 text-white rounded-full text-2xl leading-5 font-semibold tracking-wide
                    uppercase">
                        Candidate
                    </span>
                </div>
                {/*<div className="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">*/}
                {/*    <span className="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">*/}
                {/*        from*/}
                {/*    </span>*/}
                {/*    $10*/}
                {/*    <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">*/}
                {/*        /month*/}
                {/*    </span>*/}
                {/*</div>*/}
            </div>
            <div className="px-6 pt-6 pb-8 bg-gray-800 sm:p-10 sm:pt-6">
                <ul>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-white">
                            Hundreds of available jobs
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-white">
                            Verified companies and posts
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-white">
                            Personalised job posts
                        </p>
                    </li>
                </ul>
                <div className="mt-6 rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6
                    font-medium rounded-md text-white bg-purple-800 focus:outline-none focus:shadow-outline transition duration-150
                    ease-in-out" id="candidateButton" onClick={() => {
                        toggleForm()
                        scroll()}}>
                        Register as candidate
                    </button>
                </div>
            </div>
        </div>
    )
}