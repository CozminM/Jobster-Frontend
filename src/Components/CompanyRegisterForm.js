import React from "react";

export default function CompanyRegisterForm() {

    return(
        <div className="hidden block p-6 rounded-lg shadow-lg bg-gray-800 max-w-md" id="companyForm">
            <div className="flex justify-center">
                    <span className="inline-flex px-4 py-4 text-white rounded-full text-2xl leading-5 font-semibold tracking-wide
                    uppercase">
                        Company Registration
                    </span>
            </div>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
                        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="exampleInput123" aria-describedby="emailHelp123" placeholder="First name"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                               aria-describedby="emailHelp124" placeholder="Last name"/>
                    </div>
                </div>
                <div className="form-group mb-6">
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                           placeholder="Email address"/>
                </div>
                <div className="form-group mb-6">
                    <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                           placeholder="Password"/>
                </div>
                {/*<div className="form-group form-check text-center mb-6">*/}
                {/*    <input type="checkbox"*/}
                {/*           className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"*/}
                {/*           id="exampleCheck25" checked/>*/}
                {/*        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck25">Subscribe*/}
                {/*            to our newsletter</label>*/}
                {/*</div>*/}
                <button type="submit" className="w-full px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight
                uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">
                    Sign up
                </button>
            </form>
        </div>
    )
}