import QuickEmpire from './quickEmpire'
import Simil from './simil';
import { useState } from 'react';

const QuickComponent = (props) => {
    const [tools, setTools] = useState([false, false, false])
    
    const reorganizeTools = (state) => {
        setTools(state)
    }

    return (
        <div className='quick-component'>
            <QuickEmpire planet={props.planet} user={props.user} tools={tools} reorganizeTools={reorganizeTools.bind(this)}/>
            <Simil simil={props.simil} tools={tools} reorganizeTools={reorganizeTools.bind(this)}/>
        </div>
    )
}

export default QuickComponent;