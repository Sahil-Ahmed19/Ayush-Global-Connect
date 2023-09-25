import { React, useState } from "react";
import { FloatButton, ConfigProvider } from "antd";
import { FaRobot } from "react-icons/fa6";

// const bot = () =>
// {return(
//     <iframe className="absolute" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/d00b1956-f80b-4ab5-ae05-455649612baa"></iframe>
// )
// }
const Chatbot = () => {
  const [childVisible, setChildVisible] = useState(false);
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#f43f5e" } }}>
      <FloatButton
        className="h-16 w-16 hover:scale-110 transition-all"
        type="primary"
        icon={<FaRobot size={20} fa-align-left />}
        onClick={() => setChildVisible(!childVisible)}
      />
      {childVisible && (
        <div className="fixed top-0 h-screen w-screen">
          <div className="relative h-screen">
            <iframe
              className="absolute top-0 bottom-0 right-0 mr-10 my-auto rounded-xl shadow-xl"
              width="350"
              height="420"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/d00b1956-f80b-4ab5-ae05-455649612baa"
            ></iframe>
          </div>
        </div>
      )}
    </ConfigProvider>
  );
};

export default Chatbot;
