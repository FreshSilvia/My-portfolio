import React, { Component } from 'react';
import '../css/main.css';
import Projectlist from '../Components/Projects/Projectlist';
import Projectitems from '../Components/Projects/Projectsitems.json';
import Aux from '../Components/Auxiliary/Auxiliary';


class Projects extends Component {
    render (){
        return (
            <Aux>
                <h1 className="projects-header">My Projects</h1>
                <Projectlist data={Projectitems.data}/>
            </Aux>
        )
    }
}
export default Projects;