import React from "react";
import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";
import "../styles/Button.css"

const Explore = () => {
    return (
        <MainLayout>
            <div>
                <div style={container}>
                    <img src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/berita-tokopedia-info-berita-terbaru-tokopedia-6.png" alt="" style={img} />
                    <div style={container2}>
                        <h3>FrontEnd Engineer</h3>
                        <p>PT Tokopedia</p>
                        <p>Kebon Jeruk, Kota Jakarta Barat</p>
                    </div>
                    <div className="box">
                        <Button text="Apply" variant="success" />
                    </div>
                </div>
                <div style={container}>
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/bcbc16657d1fa105bded" alt="" style={img} />
                    <div style={container2}>
                        <h3>Network Engineer</h3>
                        <p>Garena Indonesia</p>
                        <p>South Jakarta, Indonesia</p>
                    </div>
                    <div className="box">
                        <Button text="Apply" variant="success" />
                    </div>
                </div>
                <div style={container}>
                    <img src="https://1.bp.blogspot.com/-DCZPTZhbuOw/YIJtfI43UlI/AAAAAAAACj0/Ky5ZU0Kb7woucb0cgHMkn6MVpXZmgogeACNcBGAsYHQ/s320/Gojek.png" alt="" style={img} />
                    <div style={container2}>
                        <h3>Account Executive</h3>
                        <p>Gojek</p>
                        <p>South Tangerang, Indonesia</p>
                    </div>
                    <div className="box">
                        <Button text="Apply" variant="success" />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Explore;

const container = {
    padding: "0 6rem",
    display: "flex"
}
const container2 = {
    padding: "0 6rem"
}

const img = {
    marginTop: "20px",
    width: "10%",
    height: "10%"
}

