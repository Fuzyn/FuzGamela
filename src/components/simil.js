import { imgDefence, imgFleet } from "./importImages";

const Simil = (props) => {

    const changeToolsSimil = (state) => {
        props.reorganizeTools([false, state, false])
    }

    const deleteSimil = (object) => {
        props.deleteSimil(object)
    }
    
    return (
        <div className={props.tools[1] ? "quick-simil simil" : "quick-simil"}>
            <p className={props.tools[1] ? "quick-simil_close" : 'quick-simil_close-false'} onClick={() => changeToolsSimil(false)}>⇥</p>
            {props.tools[1]
                ?
                <div className="simil-main">
                    {props.simil.map((el, index) => (
                        <div key={index} className="simil-column">
                            <img className="simil-column_img" src={typeof el.speed === 'number' ? imgFleet[props.simil[index].id - 1] : imgDefence[props.simil[index].id - 1]} alt={el.name} />
                            <h1>{el.name}</h1>
                            <hr />
                            <p>{el.cost.metal}</p>
                            <hr />
                            <p>{el.cost.cristal}</p>
                            <hr />
                            <p>{el.cost.deuter}</p>
                            <hr />
                            <p>{el.weaponType}</p>
                            <hr />
                            {typeof el.fuelType === 'undefined' ? <p style={{color: 'grey'}}>Nie dotyczy</p> : <p>{el.fuelType}</p>}
                            <hr />
                            <p>{el.atack}</p>
                            <hr />
                            <p>{el.defence}</p>
                            <hr />
                            {typeof el.capasity === 'undefined' ? <p style={{color: 'grey'}}>Nie dotyczy</p> : <p>{el.capasity}</p>}
                            <hr />
                            {typeof el.speed === 'undefined' ? <p style={{color: 'grey'}}>Nie dotyczy</p> : <p>{el.speed}</p>}
                            <hr />
                            {typeof el.fuel === 'undefined' ? <p style={{color: 'grey'}}>Nie dotyczy</p> : <p>{el.fuel}</p>}
                            <div className="simil-column_close" onClick={() => deleteSimil(el)}>✗</div>
                        </div>
                    ))}
                    <div className="legend">
                        <div className="simil-column_img" />
                        <h1>Legenda</h1>
                        <hr />
                        <p>Metal:</p>
                        <hr />
                        <p>Kryształ:</p>
                        <hr />
                        <p>Deuter:</p>
                        <hr />
                        <p>Typ broni:</p>
                        <hr />
                        <p>Typ napędu:</p>
                        <hr />
                        <p>Wartość ataku:</p>
                        <hr />
                        <p>Wartość obrony:</p>
                        <hr />
                        <p>Ładowność:</p>
                        <hr />
                        <p>Szybkość:</p>
                        <hr />
                        <p>Spalanie:</p>
                        <div className="simil-column_close">ℱ</div>
                    </div>
                </div>
                :
                <div onClick={() => changeToolsSimil(true)}>
                    <p className="simil-closed">⚖</p>
                    <p className="simil-closed">({props.simil.length})</p>
                </div>
            }
        </div>
    )
}

export default Simil;