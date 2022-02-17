import React from "react";
import CandidateInfoCard from "../Components/CandidateInfoCard";
import CompanyInfoCard from "../Components/CompanyInfoCard";
import CandidateRegisterForm from "../Components/CandidateRegisterForm";
import image from "../Images/landingPage.jpg";

export default function RegisterPage() {

    return(
        <>
            <div style={{backgroundImage: `url(${image})`, backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                <div className="grid grid-cols-1 gap-8 px-24 py-8 md:grid-cols-2">
                    <CandidateInfoCard/>
                    <CompanyInfoCard/>
                </div>
                <div className="grid justify-items-center p-6">
                    <CandidateRegisterForm/>
                </div>
            </div>
        </>
    )
}