import React from "react";
import PropTypes from "prop-types";

const ActionButton = (props)=>
{
    return (
        <a className="actionbutton" href={props.href}><img src={props.img}></img>
            {props.content}</a>
    )

}

ActionButton.PropTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default ActionButton;