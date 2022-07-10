import React from "react";
import MainLayout from "../layouts/MainLayout";

const About = () => {
    return (
        <MainLayout>
            <div style={container}>
                <h1>KM FE_EM10</h1>
                <p>Afrian Piesca Firmanda</p>
                <p>Azmi Irfala</p>
                <p>Denis Setiawan</p>
                <p>Muhammad Rauf</p>
                <p>Syahrul Rizal</p>
            </div>
        </MainLayout>
    )
}

export default About;

const container = {
    padding: "0 6rem"
}