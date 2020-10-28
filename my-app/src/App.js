import React from 'react';
import './app.css'
import Card from './components/layout/Card'
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Number from './components/basics/Number';
import Family from './components/basics/Family';

export default props =>
    <div id="app">
        <First />
        <div className="cards">

            <Card title="#03 Componente com filhos" color="#fed766">
                <Family lastName="Ferreira" />
            </Card>

            <Card title="#02 Valor aleatório" color="#fe4a49">
                <Number minValue={0} maxValue={10} />
            </Card>


            <Card title="#01 Com parâmetros e fragmento" color="#2ab7ca">
                <WithParams name="Amanda" note={9} />
            </Card>
        </div>
    </div>
