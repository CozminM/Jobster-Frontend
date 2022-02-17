import React from "react";
import image from "../Images/landingPage.jpg";
import Search from "../Components/Search";
import CallToArms from "../Components/CallToArms";
import JobsPage from "./JobsPage";


export default function LandingPage() {

    return(
        <>
            <div
                className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover z-0"
                style={{backgroundImage: `url(${image})`, height: 600}}>
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white">
                            <h2 className="font-bold text-4xl mb-4">Jobster</h2>
                            <h4 className="font-bold text-xl mb-6">We help people and businesses grow by matching
                                talent with jobs & recruiting agents.</h4>
                            <a className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm
                            leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0
                            transition duration-150 ease-in-out"
                                href="/jobs"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >Start browsing</a>
                            {/*<Search/>*/}
                        </div>
                    </div>
                </div>
            </div>
            <CallToArms/>
            <JobsPage/>
        </>
    )
}