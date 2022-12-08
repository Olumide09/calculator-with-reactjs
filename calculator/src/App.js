import Wrapper from "./Components/Wrapper/Wrapper";
import Screen from "./Components/Screen/Screen";
import Button from "./Components/Button/Button";
import ButtonBox from "./Components/ButtonBox/ButtonBox";

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;