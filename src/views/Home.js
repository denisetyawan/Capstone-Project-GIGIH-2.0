import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


class Home extends React.Component {
    state = {
        compani: [
            {
                id: 1,
                name: "gojek",
                description: "gojek description",
                image: require("../images/Gojek.png")
            },
            {
                id: 2,
                name: "grab",
                description: "grab description",
                image: require("../images/grab.png")
            },
            {
                id: 3,
                name: "mandiri",
                description: "mandiri description",
                image: require("../images/Mandiri.png")
            },
            {
                id: 4,
                name: "tokopedia",
                description: "mandiri description",
                image: require("../images/tokopedia.png")
            }
        ]
    }
    render() {
        const { compani } = this.state
        return (
            <MainLayout>
                <h1 style={{ paddingLeft: "6rem" }}>Companies</h1>
                <div style={container}>
                    {compani.map(item =>
                        <div key={item.id} style={card}>
                            <Link to={`./detail/${item.id}`}>
                                <img src={item.image} alt={item.name} style={img} />
                            </Link>
                        </div>)}
                </div>
            </MainLayout>
        )
    }
}

export default Home;

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
}