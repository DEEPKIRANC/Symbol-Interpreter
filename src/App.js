import { useState } from "react";
import "./styles.css";

const symbolDict = {
  "🚫": "Prohibited",
  "🚳": "No bicycles",
  "🚯": "No littering",
  "☣️": "Biohazard",
  "♿": "Wheelchair",
  "🚸": "Children Crossing",
  "⛔": "No Entry",
  "🚱": "Non Potable water",
  "☢️": "Radioactive",
  "🛅": "Left Luggage",
  "🚼": "Baby",
  "🛃": "Customs",
  "🚾": "Water Closet",
  "🛄": "Baggage Claim",
  "🚷": "No Pedestrians"
};

const symbolKeyList = Object.keys(symbolDict);

export default function App() {
  const [symbolMeaning, setSymbolMeaning] = useState("");

  const handleInputChange = (event) => {
    var symbolkey = event.target.value;

    if (symbolkey in symbolDict) {
      setSymbolMeaning(symbolDict[symbolkey]);
    } else {
      setSymbolMeaning("This symbol doesn't exist in our database");
    }
  };

  const showMeaning = (item) => {
    setSymbolMeaning(symbolDict[item]);
  };

  return (
    <div>
      <div className="navbar">
        <span>
          Know Your Symbols
          <span role="img" aria-label="">
            😎
          </span>
        </span>
      </div>
      <section className="maincontent">
        <input
          placeholder="Place your symbol here"
          onChange={handleInputChange}
        ></input>
        <span>{symbolMeaning}</span>
        <p>
          <i>(Meaning will appear here)</i>
        </p>
      </section>
      <div className="list">
        <h2>Symbol Dictionary</h2>
        <p>
          (Alternatively, You can click on below given symbols to know the
          meaning)
        </p>
        <div className="symbols">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            {symbolKeyList.map((item) => (
              <li
                className="listItem"
                key={item}
                onClick={() => showMeaning(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: "center", paddingLeft: "2rem" }}>
          Made With
          <span role="img" aria-label="">
            ❤️
          </span>
          in India
        </h3>
      </div>
    </div>
  );
}
