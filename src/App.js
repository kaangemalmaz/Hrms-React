import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
import HomepageLayout from "./layouts/HomepageLayout";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        {/* <HomepageLayout /> */}
        {/* <HighlightedContent/> */}
        <Dashboard/>
        {/* <HomepageLayout/> */}
      </Container>
    </div>
  );
}

export default App;
