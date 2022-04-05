import metalImg from '../assets/metal.png'
import cristalImg from '../assets/cristal.png'
import deuterImg from '../assets/deuter.png'
import energyImg from '../assets/energy.png'

const ResourcerBar = (props) => {

  const energyValue =
    props.user.planet[props.planet.id - 1].resources[3].energy +
    props.user.planet[props.planet.id - 1].buildings[3].function[0].value* 
    props.user.planet[props.planet.id - 1].resources[3].factor -
    props.user.planet[props.planet.id - 1].buildings[0].cost.energy -
    props.user.planet[props.planet.id - 1].buildings[1].cost.energy -
    props.user.planet[props.planet.id - 1].buildings[2].cost.energy;

const changeColor = (source, index) => {
  if(props.user.planet[props.planet.id - 1].resources[index][source] >= props.user.planet[props.planet.id - 1].buildings[8].function[0].value){
    return {color: 'red'}
  } else {
    return 
  }
}

  return (
    <div className="resources">
      <div className="resource">
        <img alt='metal-logo' src={metalImg} />
        <div className="value">
          <p>Metal:</p>
          <p style={changeColor('metal', 0)}>{Math.round(props.user.planet[props.planet.id - 1].resources[0].metal)}</p>
        </div>
      </div>
      <div className="resource">
        <img alt='cristal-logo' src={cristalImg} />
        <div className="value">
          <p>Kryształ:</p>
          <p style={changeColor('cristal', 1)}>{Math.round(props.user.planet[props.planet.id - 1].resources[1].cristal)}</p>
        </div>
      </div>
      <div className="resource">
        <img alt='deuter-logo' src={deuterImg} />
        <div className="value">
          <p>Deuter:</p>
          <p style={changeColor('deuter', 0)}>{Math.round(props.user.planet[props.planet.id - 1].resources[2].deuter)}</p>
        </div>
      </div >
      <div className="resource">
        <img alt='energy-logo' src={energyImg} />
        <div className="value">
          <p>Energia:</p>
          {energyValue > 0 ?
            <p>{Math.round(energyValue)}</p> :
            <p style={{ color: 'red' }}>{Math.round(energyValue)}</p>}
        </div>
      </div >
    </div >
  )
}

export default ResourcerBar;
