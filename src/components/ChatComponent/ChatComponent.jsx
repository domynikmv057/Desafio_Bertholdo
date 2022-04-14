import "./ChatComponent.css";
import * as IoIcons from "react-icons/io";
import { useEffect, useState } from "react";

export const ChatComponent = () => {
  const [showChat, setShowChat] = useState(false);
  const [userMensage, setUserMensage] = useState();
  const [mensageHistoric, setMensageHistoric] = useState([
    {
      name: "funcionario",
      mensage: "ola tudo bem, como podemos te ajudar",
    },
  ]);

  const handleShowChat = () => {
    setShowChat(!showChat);
  };

  const handleSendMensage = (e) => {
    e.preventDefault();
    setUserMensage("");
    if (userMensage !== "") {
      const NewMensage = { name: "user", mensage: userMensage };
      setMensageHistoric([...mensageHistoric, NewMensage]);
      localStorage.setItem(
        "localMensage",
        JSON.stringify([...mensageHistoric, NewMensage])
      );
    } else {
      setUserMensage("");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("localMensage")) {
      const storedMensage = JSON.parse(localStorage.getItem("localMensage"));
      setMensageHistoric(storedMensage);
    }
  }, []);

  return (
    <div className="chat-main-component">
      <button onClick={handleShowChat} className="on-line-button">
        ON-LINE! SÓ CHAMAR! <IoIcons.IoIosArrowUp />
      </button>

      {showChat ? (
        <div className="chat-box">
          <div className="chat-mensage">
            {mensageHistoric.map((item, index) => {
              if (item.name !== "funcionario") {
                return (
                  <div className="user-mensage" key={index}>
                    <p>{item.name}:</p>
                    <div className="mensage-balom">
                      <p>{item.mensage}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="funcionario-mensage" key={index}>
                    <p>{item.name}:</p>
                    <div className="mensage-balom">
                      <p>{item.mensage}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="chat-input">
            <input
              onChange={(e) => {
                setUserMensage(e.target.value);
              }}
              value={userMensage}
              type="text"
            />
            <button onClick={handleSendMensage}>
              <IoIcons.IoMdSend />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
