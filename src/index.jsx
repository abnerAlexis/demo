import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import { Container } from 'react-bootstrap';



const App = () => {
 return (
    <Container style={{border: "1px solid red"}}>
        <MainView />
    </Container>
 );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);