import React from "react";

export default class Herobox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            prodsInCart:2
        };

        
    }

    specficNum =() => {
        this.setState({prodsinCart: 34 });

    }

    increaseByOne = () => {
        this.setState({prodsInCart: this.state.prodsInCarts + 1});

    };

    decreaseByOne = () => {
        this.setState({prodsInCart: this.state.prodsInCarts - 1});

    };
    
    increaseByFour = () => {
        this.setState({prodsInCart: this.state.prodsInCarts + 4});

    };
    

    render () {
        return (
        <div class="container"> 
        <button onClick={this.decreaseByOne}>-</button>  

        {this.state.prodsInCart}
        <button onClick={this.increaseByOne}>+</button>

        <div>
        <button onClick={this.increaseByFour}>+4</button>
        </div>
        </div>
        ); 
    }
}

