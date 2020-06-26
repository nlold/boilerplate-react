import React from 'react';
import {render} from 'react-dom';

const App = () => {
    return React.createElement('h1', {}, 'Hello!');
};

render(<App />, document.getElementById('root'));
