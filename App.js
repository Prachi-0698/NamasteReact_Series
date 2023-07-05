import React from "react";
import ReactDOM  from "react-dom/client";


//JSX transpiled before it raeches to JS engine -- Parcel -- Babel

//JSX -> Babel transpiles it to React.createElement -> ReactElement - JS Object -> HTML Element (rendered)

// const heading =    (<h1 className="heading">Namaste React from JSX!</h1>); 

const Title = () =>(
        <h1>This is the title!</h1>
);


// Component Composition
const HeadingComponent = () => (
    <div className="conatiner">
        <Title />
        <h2>Hello from Component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);