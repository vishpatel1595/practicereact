import React from 'react'
function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUppercase() + lower.slice(1);
    }
    return(
      props.alert && <div className={`border my-3 alert-content alert-${props.alert.type} alert-dismissible fade show shadow alert-${props.mode} bg-${props.mode} animate__animated animate__backInUp`} role="alert">
            <strong>{props.alert.type }</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-aria-label="Close "></button> */}
        </div>
    )
}
export default Alert;