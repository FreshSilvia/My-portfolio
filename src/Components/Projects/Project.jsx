import React from 'react';
    
function Project({item}) {
    return (
        <div className="projects-container">
            <div className="projects-item">
                <h2 className="title">{item.name}</h2>
                <img src={item.img} alt="Jordan's project's" className="image"></img>
                <p className="descript">{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer"><button className="btn">Visit Repo</button></a>
            </div>
        </div> 
    )
}

export default Project