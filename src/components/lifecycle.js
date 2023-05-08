import React from 'react'

export default class Lifecycle extends React.Component {
constructor(props){
    super(props);
    this.state ={
        showModal: false,
        name: "User(Default)",
        adminLoggedIn : false,
    };
}

    componentDidMount(){
        
    // ACTIONS OCCURS WHEN THE COMPONENT IS MOUNTED 
    // alert ("component is being mounted");

    this.setState({showModal: true});

   

}

componentDidUpdate() {
    alert("Component being updated");

}

componentWillUnmount(){

}

updateName = () => {
    this.setState({name: "Michael"});
    

};





render (){
    return (
        <div>
            Lifecycle 
            <div className={`custom-modal shadow-lg${!this.state.showModal && "d-none" }`}>
                Show when the page is mounted
                {this.state.name}
                
                <button onClick={this.updateName}>Change Name</button>
                </div>
                {
                    this.state.adminLoggedIn?
                    <Admin/>: <User/>
                }
                <button onClick>{()=>this.setState({adminLoggedIn: true})}</button>
        </div>
    
    );
}
}

class User  extends React.Component {
    componentWillUnmount(){
        alert ("I am being removed");
    }

    render (){
        return <div>I have admin rights</div>;
    }
}


