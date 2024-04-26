import { Component } from "react";
import './panel.css'

class Panel extends Component{
    constructor(){
        super() //trazer as propriedas e metodos do Component
        this.state = {
            title: 'Valor inicial'
        }
    }

    render(){
        return(
            <section className="panel" onClick={() => this.setState({title: 'Valor novo'})}>
                <h2>{ this.state.title }</h2>
            </section>
        )
    }
}

export default Panel;