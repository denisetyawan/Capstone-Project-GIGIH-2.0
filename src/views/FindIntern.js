import React from "react";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";

const FindIntern = () => {
    return (
        <MainLayout>
            <div>
                <div style={container}>
                    <img src="https://logovectorseek.com/wp-content/uploads/2021/07/epiroc-logo-vector.png" alt="" style={img} />
                    <div style={container2}>
                        <h3>Internship General Affair</h3>
                        <p>PT Epiroc Southern Asia</p>
                        <p>Balikpapan</p>
                    </div>
                    <div className="box">
                        <Button text="Apply" variant="success" />
                    </div>
                </div>
                <div style={container}>
                    <img src="https://cakapinterview.com/wp-content/uploads/2021/02/PT-Tera-Data-Indonusa--696x419.jpg" alt="" style={img} />
                    <div style={container2}>
                        <h3>Bussiness Process Staff (Internship)</h3>
                        <p>PT Tera Data Indonusa</p>
                        <p>Jakarta Timur</p>
                    </div>
                    <div className="box">
                        <Button text="Apply" variant="success" />
                    </div>
                </div>
                <div style={container}>
                    <img src="https://ritraindo.com/wp-content/uploads/2020/10/logoritraindo600.png" alt="" style={img} />
                    <div style={container2}>
                        <h3>Accounting Intern</h3>
                        <p>PT Ritraindo Label International</p>
                        <p>Cikarang</p>
                    </div>
                    <div className="box">
                        <Button text="Apply" variant="success" />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default FindIntern;

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