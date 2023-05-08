import React , {useState, useEffect }from "react";


// Use Effect - 

 const Navbar = () => {
//     // React Hooks - set state 
//      const [showModal, setShowModal] = useState (false);
//      const [name, setName] =useState("User (Default)");
//      const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    
//       const[number, setNumber ] = useState (8);
//       const [extra, setExtra] = useState ("extra");

//      useEffect (() => {
//         //  handles component mounting ad updatinf 
//         alert ("HELLO");
//         return() => {
//             // handles component unmounting

//         };
//         // dependency array []
//       [num]);

    //  react router dom - create links to different pages


        
     
     
    
    // change the name on the button
    // const [getName, setName ] = useState (false);
    // const handleNameChange = ()=> {
    //     setName(!getName);
    // };

     

    return (
        <nav className= "py-4 bg-light">
            <div className = "container" >
                <img width="50px" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"></img>
                <ul className="list-unstyled float-end menu-items ">
                    <li>
                        <a href="">Home</a>
                        {/* < link to ="/">Home</Link> */}
                        {/* creates a link to the page  */}
                    </li>
                    <li>
                        <a href="">About</a>
                        {/* Link to ="/about">About</Link>
                        Takes you to the about page */}
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                </ul>
                {/* button - when clicked it will change the name of the user clicking  */}
                {/* <button onClick={handleNameChange}>{getName ? "Hello User" : "Tunmise"}</button>  */}
                {/* <button onClick={() => setNumber (number + 1)}>+</button>
                <button onClick={() => setNumber (number + 1)}>-</button> */}
            </div>
         
        </nav>
      
    )
            };


export default Navbar; 