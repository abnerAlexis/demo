import { createRoot } from 'react-dom';
import "./index.scss";

const Demo = () => {
    return (
        <div className='demo'>
            <div>Hey there! You student You!</div>
        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Demo/>);