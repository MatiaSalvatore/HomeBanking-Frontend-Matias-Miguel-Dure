import React from "react";
import PropTypes from "prop-types";

const Anchor = (props)=>
{
    return (
        <a className="anchor" href={props.href}>{props.content}</a>
    )

}

Anchor.PropTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Anchor