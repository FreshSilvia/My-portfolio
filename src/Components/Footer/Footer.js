import React from  'react';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <a href='https://www.facebook.com/' target="_blank" rel="noreferrer" className="fab fa-facebook"></a>
                {/* Check this out gotta style */}
                <a href='https://www.linkedin.com/in/jordan-j-howard/' target="_blank" rel="noreferrer" className="fab fa-linkedin-in"></a>
                <a href='https://github.com/FreshSilvia' target="_blank" rel="noreferrer" className="fab fa-github"></a>
                <br></br>
                &copy; Copyright 2020 JordanHoward
            </div>
        </div>
    )
}

export default Footer