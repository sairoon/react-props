import { Component } from "react";

class ClsComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let a = "first"
        return (
            <h2>It is my {a} class component. {this.props.title}</h2>
        )
    }
}

export default ClsComp
