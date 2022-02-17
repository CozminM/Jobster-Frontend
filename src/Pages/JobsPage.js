import React from "react";
import Card from "../Components/Card";

export default function JobsPage() {

    return (
        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            <Card/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <Card/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <Card/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <Card/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <Card/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}