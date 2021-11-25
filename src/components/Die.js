import React from 'react'
import '../App.css';

const Die = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#777776"
    }
    return (
        <div 
            className="die"
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
       
        </div>
    )
}
 
export default Die;