import React from 'react'
import './Card.css'

const Card = (props) => {
    const classes = 'card' + props.className; // Importing the CSS file for styling the Card component

    // This returns a div with the combined class names, wrapping any children passed to the Card component
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card
