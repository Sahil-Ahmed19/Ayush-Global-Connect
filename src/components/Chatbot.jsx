import { React, useState } from "react";
import { FloatButton } from 'antd';
import { FaRobot } from "react-icons/fa6";

// const bot = () => 
// {return(
//     <iframe className="absolute" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/d00b1956-f80b-4ab5-ae05-455649612baa"></iframe>
// )
// }
const Chatbot = () => {
    const [childVisible, setChildVisible] = useState(false);
    return (
        <div >
            <FloatButton className=" bg-stone-400" style={{  width :"60px", height : "60px", borderColor:"black"}} icon={<FaRobot size={21} fa-align-left/> }  onClick={()=> setChildVisible(!childVisible)}/>      
            {childVisible && (
                <iframe  width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/d00b1956-f80b-4ab5-ae05-455649612baa"></iframe>
            )}
        </div>    
    );
}

export default Chatbot;