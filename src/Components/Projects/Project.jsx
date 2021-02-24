import React from 'react';
    
function Project({item}) {
    return (
        <div className="projects-container">
            <div className="projects-item">
                <h2 className="title">{item.name}</h2>
                <img src={item.img} alt="Jordan's project's" className="image"></img>
                <p className="descript">{item.description}</p>
                <button className="btn">Visit Repo</button>
            </div>
        </div> 
    )
}

export default Project