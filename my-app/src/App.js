import React from 'react';
import './app.css'
import Card from './components/layout/Card'
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Number from './components/basics/Number';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentsList from './components/repetition/StudentsList';
import ProductsTable from './components/repetition/ProductsTable';
import OddOrEven from './components/conditional/OddOrEven';

export default props =>
    <div id="app">
        <First />
        <div className="cards">

            <Card title="#06 Condicional" color="#fe4a49">
                <OddOrEven number={40} />
            </Card>

            <Card title="#05 Repetição" color="#fe4a49">
                <ProductsTable />
            </Card>

            <Card title="#04 Repetição" color="#fe4a49">
                <StudentsList />
            </Card>

            <Card title="#03 Componente com filhos" color="#fed766">
                <Family lastName="Souza">
                    <FamilyMember name="Amanda" />
                    <FamilyMember name="João" />
                    <FamilyMember name="Pedro" />
                </Family>
            </Card>

            <Card title="#02 Valor aleatório" color="#fe4a49">
                <Number minValue={0} maxValue={10} />
            </Card>


            <Card title="#01 Com parâmetros e fragmento" color="#2ab7ca">
                <WithParams name="Amanda" note={9} />
            </Card>
        </div>
    </div>
