import React from 'react';
import './about.css';
class about extends React.Component{
    componentDidMount(){
        let home = document.getElementById('ni-home');
        let contact = document.getElementById('ni-contact');
        let plan = document.getElementById('ni-plan');
        let about = document.getElementById('ni-about');

        home.classList.remove("active");
        contact.classList.remove("active");
        plan.classList.remove("active");
        about.classList.add("active");

    }
    render(){
        return(
            <div className="about-content">
                <div class="gears-container">
                    <div class="gear-rotate"></div>                                                                           
                </div>                
                Under Construction...
            </div>
        );
    }
}

export default about;