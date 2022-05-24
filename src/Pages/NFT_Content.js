import { useState } from "react";
import { Link } from "react-router-dom";

function NFT_Content() {
  const [buttonChange, setButtonChange] = useState("Learn");
  const [show, setShow] = useState(true);

  const showNft = () => {
    setShow((text) => !text);
  };

  const changeBtnText = () => {
    setButtonChange("Learn");
  };

  return (
    <div className="nft-content">
      <br />
      <br />
      <h1>NFT Content</h1>
      <br />
      <br />
      <p>What does fungibility mean?</p>
      <br />
      <br />
      <p>
        Fungibility is the ability of a good or asset to be interchanged with
        other individual goods or assets of the same type.
      </p>
      <br />
      <br />
      <button
        className="nft-learn-btn"
        onClick={() => {
          showNft();
          changeBtnText();
        }}
      >
        {buttonChange}
      </button>
      <br />
      <br />
      <Link to="/">
        <button className="nft-learn-btn">Next</button>
      </Link>
    </div>
  );
}

export default NFT_Content;
