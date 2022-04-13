import { useState, useEffect } from "react"
import { imgFleet } from "./importImages"

const Dock = (props) => {

    const maxBuild = (el) => {
        const maxMetal = Math.floor(props.user.planet[props.planet.id - 1].resources[0].metal / el.cost.metal)
        const maxCristal = Math.floor(props.user.planet[props.planet.id - 1].resources[1].cristal / el.cost.cristal)
        const maxDeuter = Math.floor(props.user.planet[props.planet.id - 1].resources[2].deuter / el.cost.deuter)
        const maxTable = [maxMetal, maxCristal, maxDeuter]
        return Math.min.apply(null, maxTable)
    }

    const DockElement = (el, index) => {
        const [details, setDetails] = useState(false)
        const [quickGuns, setQuickGuns] = useState(false)
        const [maxElement, setMaxElement] = useState()

        useEffect(() => (
            setMaxElement()
        ), [maxElement])

        const addSimil = (object) => {
            props.addSimil(object)
          };

        const equipBuild = (e, element) => {
            if (maxBuild(element) === 0) {
               alert('Brak środków!')
            } else if (e[0].value >= maxBuild(element)) {
                props.buildEquip(maxBuild(element), element.id - 1, 'fleet')
            } else if (e[0].value <= maxBuild(element)) {
                props.buildEquip(e[0].value, element.id - 1, 'fleet')
            }
            e[0].value = ''
        }


        return (
            <div className='equip-main'>
                <div className={details ? 'equip-true' : 'equip-false'}>
                    <div className="equip-simil" onClick={() => addSimil(el)}>⚖</div>
                    <div className={details ? "equip-img_true-div" : "equip-img_false-div"}><img src={imgFleet[index]} alt={el.name} /></div>
                    <div className={details ? 'equip_description-true' : 'equip_description-false'}>
                        {details ?
                            <div className='equip_title-true'>
                                <h1 onClick={() => setDetails(!details)}>{el.name} (Ilość: {el.quantity})</h1>
                                <p>{el.description}</p>
                            </div> :
                            <div className='equip_title-false'>
                                <h1 onClick={() => {setDetails(!details); setQuickGuns(false)}}>{el.name} (Ilość: {el.quantity})</h1>
                            </div>
                        }
                        {details ?
                            <div className='equip_details-true'>
                                <div className='equip_gun-true'>
                                    <p onClick={() => setQuickGuns(!quickGuns)} className='quick-gun_relase' style={quickGuns ? {fontWeight: 500} : {}}>Szybkie działa ➾</p>
                                    {quickGuns ?
                                        <div className="quick-gun_main">
                                            {el.quickGunPlus.length === 0 ? 
                                            <p style={{color: 'red', fontWeight: 400}}>Brak szybkich dział przeciwko innym statkom!</p> : 
                                            el.quickGunPlus.map((gun, index) => (
                                                <div className="quick-gun"><p key={index}>{gun.description}</p><p style={{color: 'green', fontWeight: 700}}>{gun.value}</p></div>
                                            ))}
                                            <hr/>
                                            {el.quickGunMinus.length === 0 ? 
                                            <p style={{color: 'green', fontWeight: 400}}>Brak szybkich dział przeciwko {el.name}!</p>:
                                            el.quickGunMinus.map((gun, index) => (
                                                <div className="quick-gun"><p key={index}>{gun.description}</p><p style={{color: 'red', fontWeight: 500}}>{gun.value}</p></div>
                                            ))}
                                        </div> :
                                        <></>}
                                </div>
                                <div className={details ? 'equip_cost-true' : 'equip_cost-false'}>
                                    <p>Metal: {el.cost.metal}</p>
                                    <p>Kryształ: {el.cost.cristal}</p>
                                    <p>Deuter: {el.cost.deuter}</p>
                                </div>
                            </div> :
                            <></>}
                    </div>
                </div>
                <form className='equip_input'>
                    <p onClick={() => setMaxElement(maxBuild(el))}>max</p>
                    <input
                        name={el.name}
                        type='number'
                        value={maxElement}
                    />
                    <input
                        type="button"
                        value='Buduj'
                        onClick={() => equipBuild(document.getElementsByName(el.name), el)}
                    />
                </form>
            </div>
        )
    }



    return (
        <div className="content">
            <h1 className="equip-title">Stocznia</h1>
            {props.planet.fleet.map((ship, index) => (
                <div key={index} className='equip'>{DockElement(ship, index)}</div>
            ))}
        </div>
    )
}

export default Dock;