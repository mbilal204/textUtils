import React from 'react'

function Alert(props) {

    const Capitalize = (word)=>{
        const txtLower = word.toLowerCase();
        return txtLower.charAt(0).toUpperCase() + txtLower.slice(1);
    };

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
   </div>
    )
}

export default Alert
