import React from "react";
import '../Styles/FailPage.css';


export default function FailPage() {

    return(
        <div className="w-screen h-screen failbg">
            <h1 className="failheader">404</h1>
            <p className="failtext">Oops! Something is wrong.</p>
            <a className="failbutton" href="/"><i className="icon-home"/> Go back in initial page, is better.</a>
        </div>
    )
}