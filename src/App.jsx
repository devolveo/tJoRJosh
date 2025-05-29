import React from "react";

import FavouriteColorProvider from "./FavouriteColorProvider.jsx";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker.jsx";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <FavouriteColorProvider>
        <Counter count={count} setCount={setCount} />
        <ColorPicker />
      </FavouriteColorProvider>

      <p>Current count: {count}</p>
    </>
  );
}

export default App;
