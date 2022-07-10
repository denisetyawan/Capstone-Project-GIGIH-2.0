import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


class Detail extends React.Component {
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
        ],
        data: ""
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const data = this.state.compani.find(item => item.id === parseInt(id))
        this.setState({ data })
    }
    render() {
        const { data } = this.state
        return (
            <MainLayout>
                <div style={container}>
                    <h1>{data.name}</h1>
                    <div style={box}>
                        <img style={img} src={data.image} alt={data.image} />
                        <div>
                            <p>{data.description}</p>
                            <Link to="/">bach home</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default Detail;

const container = {
    padding: "0 rem"
}

const img = {
    width: "15rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}