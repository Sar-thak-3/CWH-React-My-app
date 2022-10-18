import React from 'react'

function Alert(props) {
    return (
        <div style={{height: '40px '}}>
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {props.alert.type} : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert