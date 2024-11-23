import "./App.css";
import ResultContainer from "./components/ResultContainer";
import ButtonsContainer from "./components/ButtonsContainer";
import Button from "./components/Button";

function App() {
  return (
    <div className="w-[35rem] mx-auto mt-3">
      <header className="mb-3">
        <h1>계산기</h1>
      </header>
      <main>
        <ResultContainer />
        <ButtonsContainer>
          <Button>
            ON
            <br />
            CCE
          </Button>
          <Button>AC</Button>
          <Button>MRC</Button>
          <Button>M-</Button>
          <Button>M+</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>▶</Button>
          <Button>%</Button>

          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>/</Button>
          <Button>X</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>

          <Button>-</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>√</Button>
          <Button styleType="row-2">+</Button>
          <Button>=</Button>
        </ButtonsContainer>
      </main>
    </div>
  );
}

export default App;
