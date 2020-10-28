import React from 'react';
import './app.css'
import Card from './components/layout/Card'
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Number from './components/basics/Number';

export default props =>
    <div id="app">
        <First />
        <div className="cards">

            <Card title="Valor aleatório" color="#fe4a49">
                <Number minValue={0} maxValue={10} />
            </Card>

            <Card title="Com parâmetros e fragmento" color="#2ab7ca">
                <WithParams name="Amanda" note={9} />
            </Card>
        </div>
    </div>
