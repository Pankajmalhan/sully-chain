import Welcome from "./Welcome";
import Tree from "./Tree";
import Desc from "./Desc";
import { useState } from "react";
import { useEth } from "../../contexts/EthContext";

function Intro() {
  const {
    state: { contract, accounts },
  } = useEth();
  const [cost, setCost] = useState(0);
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      let result = await contract.methods.createItem(name, cost).send({ from: accounts[0] });
      console.log(result);
      alert(
        "Send " +
          cost +
          " Wei to " +
          result.events.SupplyChainStep.returnValues._address
      );
    } catch (exp) {
      console.log(exp);
    }
  };
  console.log({ accounts });
  return (
    <>
      <div className="App">
        <h1>Simply Payment/Supply Chain Example!</h1>
        <h2>Items</h2>
        <h2>Add Element</h2>
        Cost: <input type="text" name="cost" value={cost} onChange={(e)=>setCost(e.target.value)} />
        Item Name:{" "}
        <input type="text" name="itemName" value={name} onChange={(e)=>setName(e.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Create new Item
        </button>
      </div>
    </>
  );
}

export default Intro;
