import React from 'react';
import Project from './Project';

const Projectslist = (data) => {
    let inventory = data.data;

    return (
        <div className="projectslist-container">
            {inventory.map(item => <Project item ={item}/>)}
        </div>
    )
}

export default Projectslist