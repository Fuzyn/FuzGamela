// import { useEffect, useState } from "react"
// import update from "react-addons-update";
import metalImg from '../assets/metal.png'
import cristalImg from '../assets/cristal.png'
import deuterImg from '../assets/deuter.png'
import energyImg from '../assets/energy.png'

const ResourcerBar = (props) => {



  // const [metal, setMetal] = useState(props.planet.metal)
  // const [cristal, setCristal] = useState(props.planet.cristal)
  // const [deuter, setDeuter] = useState(props.planet.deuter)

  // const bonus = 10

  // const metalB = () => {
  //   const metalBonus = setInterval(() => setMetal(metal + bonus), 2000)

  //   return () => clearInterval(metalBonus)
  // }

  // const cristalB = () => {
  //   const cristalBonus = setInterval(() => setCristal(cristal + bonus), 2000)

  //   return () => clearInterval(cristalBonus)
  // }

  // const deuterB = () => {
  //   const deuterBonus = setInterval(() => setDeuter(deuter + bonus), 2000)

  //   return () => clearInterval(deuterBonus)
  // }

  // useEffect(() => {
  //   {metalB()};
  //   {cristalB()};
  //   {deuterB()}
  // },[])

  // useEffect(() => {
  //   const metalBonus = setInterval(() => setMetal(metal + bonus), 2000)

  //   return () => clearInterval(metalBonus)
  // });

  // useEffect(() => {
  //   const cristalBonus = setInterval(() => setCristal(cristal + bonus), 2000)

  //   return () => clearInterval(cristalBonus)
  // });

  // useEffect(() => {
  //   const deuterBonus = setInterval(() => setDeuter(deuter + bonus), 2000)

  //   return () => clearInterval(deuterBonus)
  // });

  // console.log(metal)
  // console.log(cristal)
  // console.log(deuter)

  // const bonus = 10;

  // const metalB = props.planet.metal + bonus

  // const metalInterval = () => {
  //   const metalBonus = update(props.planet, {metal: {$set: metalB}})
  //   console.log(metalBonus)
  //   const bonus = setInterval(() => metalBonus, 2000)
  //   console.log(bonus)
  //   return () => clearInterval(bonus)
  // }

  // useEffect(() => {
  //   metalInterval()
  //   console.log(metalInterval)
  // })


  return (
    <div className="resources">
      <div className="resource">
        <img alt='metal-logo' src={metalImg} />
        <div className="value">
          <p>Metal:</p>
          {/* {metal} */}
          <p>{props.planet.resources[0][1]}</p>
        </div>
      </div>
      <div className="resource">
        <img alt='cristal-logo' src={cristalImg} />
        <div className="value">
          <p>Kryształ:</p>
          {/* {cristal} */}
          <p>{props.planet.resources[1][1]}</p>
        </div>
      </div>
      <div className="resource">
        <img alt='deuter-logo' src={deuterImg} />
        <div className="value">
          <p>Deuter:</p>
          {/* {deuter} */}
          <p>{props.planet.resources[2][1]}</p>
        </div>
      </div >
      <div className="resource">
        <img alt='energy-logo' src={energyImg} />
        <div className="value">
          <p>Energia:</p>
          <p>{props.planet.resources[3][1]}</p>
        </div>
      </div >
    </div >
  )
}

export default ResourcerBar;
