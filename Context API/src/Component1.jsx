import Component2 from "./Component2";
import { AppProvider } from "../context/AppContext";

const Component1 = () => {
  return (
    <AppProvider>
      <h2>Component 1</h2>
      <Component2 />
    </AppProvider>
  );
};

export default Component1;
