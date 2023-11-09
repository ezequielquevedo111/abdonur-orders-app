import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import OrderHomeContainer from "./components/orderHome/OrderHomeContainer";

function App() {
  return (
    <>
      <NextUIProvider>
        <OrderHomeContainer />
      </NextUIProvider>
    </>
  );
}

export default App;
