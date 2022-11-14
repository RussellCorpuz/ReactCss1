import { AppContainer, List, Button } from "./App.styled";

export default function App() {
  return (
    <AppContainer>
      <h1>A title</h1>
      <p>Text under title</p>
      <List>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </List>
      <Button>Click me</Button>
    </AppContainer>
  );
}
