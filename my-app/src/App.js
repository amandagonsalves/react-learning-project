import React from 'react';
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Number from './components/basics/Number';

export default props =>
    <div id="app">
        <First />
        <WithParams
            name="Amanda"
            note={9} />
        <Number
            minValue={0}
            maxValue={10} />
    </div>
