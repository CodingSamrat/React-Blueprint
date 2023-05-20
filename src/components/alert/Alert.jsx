import React, {} from 'react'
import "./Alert.css";

const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const Alert = (props) => {
    // const [visible, setVisible] = useState(true);


    return (
        props.alert &&  <div className={`alert alert-${props.alert.type}`} >
            <p className="alert-text">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.alertMsg}
            </p>
        </div> 
    )
}

export default Alert;
