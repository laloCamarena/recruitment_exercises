import React, {useState} from 'react';

const App = () => {
    const [clicked, setClicked] = useState(0);
    return(
        <div style={{textAlign: "center"}}>
            <h1>The button has been clicked {clicked} times</h1>
            <button onClick={() => setClicked(clicked + 1)}>Count</button>
        </div>
    );
};

export default App;
