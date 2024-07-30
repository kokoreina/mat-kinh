import { useState } from "react";
import "./glasses.css";
export function Glasses() {
  const [glasses, setGlasses] = useState({
    name: "G1",
    image: "../public/img/g1.jpg",

  });
  const geturl = (name) => {
    return `../public/img/${name}.jpg`;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleChangerGlasses = (name) => {
    setGlasses({
      name: `${capitalizeFirstLetter(name)}`,
      image: geturl(name),
    });
  };
  return (
    <>
      <div className="background">
        <img src="../public/img/background.jpg" />
        <div className="models">
          <img src="../public/img/model.jpg" />
          <div className="chooseglasses">
            <h2>{glasses.name}</h2>
            <img src={glasses.image} />
          </div>
          <div className="button">
          <button onClick={()=>{
                    handleChangerGlasses("g1")
                }}>g1</button>
                <button onClick={()=>{
                    handleChangerGlasses("g2")
                }}>g2</button>
                <button onClick={()=>{
                    handleChangerGlasses("g3")
                }}>g3</button>
                <button onClick={()=>{
                    handleChangerGlasses("g4")
                }}>g4</button>
                <button onClick={()=>{
                    handleChangerGlasses("g5")
                }}>g5</button>
                <button onClick={()=>{
                    handleChangerGlasses("g6")
                }}>g6</button>
                <button onClick={()=>{
                    handleChangerGlasses("g7")
                }}>g7</button>
                <button onClick={()=>{
                    handleChangerGlasses("g8")
                }}>g8</button>
                <button onClick={()=>{
                    handleChangerGlasses("g9")
                }}>g9</button>
          </div>
       
        </div>
      </div>
    </>
  );
}
