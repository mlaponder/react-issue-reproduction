import React, {useState} from 'react';

function App({cleanup}) {
    const [, setClicked] = useState(false);
    return (
        <button onClick={() => {
            setClicked(true);
            cleanup();
        }}>Click me</button>
    );
}

export default App;
