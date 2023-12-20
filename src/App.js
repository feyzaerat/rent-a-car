import { useState } from "react";
import { Button, Flex } from "antd";

import "./App.css";

export default function App() {
  const [total, setTotal] = useState(0);
  const increase = () => {
    setTotal(total + 1);
  };
  const decrease = () => {
    setTotal(total - 1);
  };
  return (
    <>
      <div className="App">
        <Flex gap="small" wrap="wrap">
          <p>{total}</p>
        </Flex>
        <Flex gap="small" wrap="wrap">
          <Button type="primary" onClick={increase}>
            Increase
          </Button>
          <Button type="primary" onClick={decrease}>
            Decrease
          </Button>
        </Flex>
      </div>
    </>
  );
}
