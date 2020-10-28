import React from 'react';
import FamilyMember from './FamilyMember';

export default props => {
    return(
        <div>
            <FamilyMember name="Amanda" lastName={props.lastName}/>
            <FamilyMember name="João" {...props}/>
            <FamilyMember name="Pedro" lastName="Silva" />
        </div>
    )
}