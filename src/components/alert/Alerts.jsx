import React from "react";
import "./Alert.css";

import Alert from "./Alert";

const Alerts = (props) => {
    // const [alerts, setAlerts] = useState([...props.alerts]);

    // const removeAlert = () => {
    //     let _alerts = alerts;
    //     _alerts.pop();
    //     setAlerts(_alerts);
    //   };
      
    //   useEffect(() => {
    //     const timer = setTimeout(() => {
    //     // setVisible(false);
    //     removeAlert();
    //     }, props.delay);
    //     return () => clearTimeout(timer)
    // }, [props.delay]);

    // console.log(props.alerts)
    return (
        
        props.alerts.length > 0 && <div className="alert-container">
            
            {props.alerts.map((alert, index) => {
                return (
                    <Alert alert={alert} key={index} removeAlert={props.removeAlert}/>
                );
            })}
        </div>
        
    );
}

export default Alerts;