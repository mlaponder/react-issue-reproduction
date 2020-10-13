import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// The 'container' is in this case the special comment node which can be used by
// ReactDOM as container to render to
const commentNode = document.createComment(" react-mount-point-unstable ");
document.body.appendChild(commentNode);

// This is cleanup function for the comment node. It is triggered by and setTimeout
// to mimic the behavior I my app, where the comment node is cleaned up by
// and external event. However the same error occurs without the timeout but at
// a different point in time. (see also description in public/index.html)
function cleanUp() {
    setTimeout(() => {
        console.warn("Cleaning up");
        ReactDOM.unmountComponentAtNode(commentNode);
        document.body.removeChild(commentNode);
    }, 0);
}

ReactDOM.render(
  <React.StrictMode>
    <App cleanup={cleanUp}/>
  </React.StrictMode>,
    commentNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
