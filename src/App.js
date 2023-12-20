import { useEffect, useState } from "react";
import { Card, Space, Button, Flex, Input } from "antd";

import "./App.css";

export default function App() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(total);
  }, [total]);

  const increase = () => {
    setTotal(total + 1);
  };
  const decrease = () => {
    setTotal(total - 1);
  };

  const [activity, setActivity] = useState("");
  const [activityList, setActivityList] = useState([]);
  const clearActivity = () => {
    setActivity("");
  };
  const addActivity = () => {
    setActivityList([...activityList, activity]);
    clearActivity();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addActivity();
    }
  };
  const removeActivity = (activity) => {
    setActivityList(activityList.filter((i) => i !== activity));
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

          <Card title="TO DO" style={{ width: 300 }}>
            <Flex gap="small" wrap="wrap">
              <div gap="small" wrap="wrap" className="flexRow">
                <Input
                  type="text"
                  value={activity}
                  onChange={(event) => {
                    setActivity(event.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter an activity..."
                />
                <Button
                  className="success"
                  onKeyDown={handleKeyDown}
                  onClick={() => {
                    addActivity();
                  }}
                >
                  +
                </Button>
              </div>
              <Flex gap="small" wrap="wrap">
                <ul>
                  {activityList.map((element) => (
                    <li key={element}>
                      {element}{" "}
                      <Button
                        className="danger"
                        onClick={() => {
                          removeActivity(element);
                        }}
                      >
                        X
                      </Button>
                    </li>
                  ))}
                </ul>
              </Flex>
            </Flex>
          </Card>
        </Space>
      </div>
    </>
  );
}
