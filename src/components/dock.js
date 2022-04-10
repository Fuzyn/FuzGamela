import { useState } from "react"
import { imgFleet } from "./importImages"

const Dock = (props) => {

    // const DockElement = (el, index) => {
    //     const [details, setDetails] = useState(false)
    //     return (
    //         <div className='equip-main'>
    //             {details ?
    //                 <div className="equip-true">
    //                     <div onClick={() => setDetails(!details)} className='equip-true_description'>
    //                         <div className='equip-true_title'>
    //                             <img src={imgFleet[index]} alt={el.name} />
    //                             <div>
    //                                 <p>{el.name} (Ilość: {el.quantity})</p>
    //                                 <p>{el.description}</p>
    //                                 <div>
    //                                     <p>Metal: {el.cost.metal}</p>
    //                                     <p>Kryształ: {el.cost.cristal}</p>
    //                                     <p>Deuter: {el.cost.deuter}</p>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                     </div>
    //                     <input />
    //                     <button>Buduj</button>

    //                 </div> :
    //                 <div className="equip-false">
    //                     <div className="equip-false_description" onClick={() => setDetails(!details)}>
    //                         <img src={imgFleet[index]} alt={el.name} />
    //                         <div className="equip-false_description-paragraf">
    //                             <p>{el.name} (Ilość: {el.quantity})</p>
    //                             <div>
    //                                 <p>Metal: {el.cost.metal}</p>
    //                                 <p>Kryształ: {el.cost.cristal}</p>
    //                                 <p>Deuter: {el.cost.deuter}</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <input />
    //                         <button>Buduj</button>
    //                     </div>
    //                 </div>}
    //         </div>
    //     )
    // }


    const DockElement = (el, index) => {
        const [details, setDetails] = useState(false)
        const [quickGuns, setQuickGuns] = useState(false)
        return (
            <div className='equip-main'>
                <div className={details ? 'equip-true' : 'equip-false'}>
                    <img src={imgFleet[index]} alt={el.name} />
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
                <div className={details ? 'equip_input-true' : 'equip_input-false'}>
                    <input />
                    <button>Buduj</button>
                </div>
            </div>
        )
    }



    return (
        <div className="content">
            <h1>Stocznia</h1>
            {props.planet.fleet.map((ship, index) => (
                <div key={index} className='equip'>{DockElement(ship, index)}</div>
            ))}
        </div>
    )
}

export default Dock;