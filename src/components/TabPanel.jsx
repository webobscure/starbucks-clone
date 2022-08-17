import * as React from 'react'
import propTypes from 'prop-types';



function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
        role = 'tabpanel'
        hidden = { value !== index}
        id = {`full-width-tabpanel-${index}`}
        aria-labelledby = {`full-width-tap-${index}`}
        {...other}
        >

        </div>
    )
}

TabPanel.propTypes = {
    children: propTypes.node,
    index: propTypes.number.isRequired,
    value: propTypes.number.isRequired
}