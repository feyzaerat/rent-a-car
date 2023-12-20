import { useEffect, useState } from "react";
import { Card, Space, Button, Flex } from "antd";

import "./App.css";

export default function App() {
  const [total, setTotal] = useState(0);

  useEffect(
    () => {console.log(total)},
    [total]
  );

  const increase = () => {
    setTotal(total + 1);
  };
  const decrease = () => {
    setTotal(total - 1);
  };
  return (
    <>
      <div className="App">
        <Space size={16}>
          <Card title="Counter" style={{ width: 300 }}>
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
          </Card>
        </Space>
      </div>
    </>
  );
}
