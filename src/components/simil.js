import { useState } from "react";
import { imgDefence, imgFleet } from "./importImages";

const Simil = (props) => {
    const [showSimil, setShowSimil] = useState(false)

    const changeToolsSimil = (state) => {
        setShowSimil(state)
        props.reorganizeTools([false, state, false])
    }

    return (
        <div className={props.tools[1] ? "quick-simil open simil" : "quick-simil"} onClick={() => changeToolsSimil(!showSimil)}>
            {props.tools[1]
                ?
                <div className="simil-main">
                    {props.simil.map((el, index) => (
                        <div className="simil-column">
                            <img src={typeof el.speed === 'number' ? imgFleet[props.simil[index].id - 1] : imgDefence[props.simil[index].id - 1]} alt={el.name}/>
                            <h1>{el.name}</h1>
                        </div>
                    ))}
                </div>
                :
                <div>
                    <p>⚖</p>
                    <p>({props.simil.length})</p>
                </div>
            }
        </div>
    )
}

export default Simil;