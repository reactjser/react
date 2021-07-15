import React, { useState } from 'react';
import { Button, Input } from 'antd';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Input value={count} style={{ width: 200 }} />
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default App;
