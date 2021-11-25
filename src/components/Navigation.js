
import React from 'react'
const Navigation = (props) => {
    return (
        <div>
            <nav className={props.darkMode ? "dark" : ""}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
                <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </nav>
        </div>
     );
}
 
export default Navigation;