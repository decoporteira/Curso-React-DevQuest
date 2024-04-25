import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Text from "./components/Text";



function App() {
  return (
    <div>
       <Text
        content='hello world'
        style={{ color: 'blue', textTransform: 'upperCase' }}
      />
      <h1>Altera case de texto</h1>
      <Card text='Hello World' />
      <Button />
     
    </div>
  );
}

export default App;