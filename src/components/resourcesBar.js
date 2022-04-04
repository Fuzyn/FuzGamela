import metalImg from '../assets/metal.png'
import cristalImg from '../assets/cristal.png'
import deuterImg from '../assets/deuter.png'
import energyImg from '../assets/energy.png'

const ResourcerBar = (props) => {

  return (
    <div className="resources">
      <div className="resource">
        <img alt='metal-logo' src={metalImg} />
        <div className="value">
          <p>Metal:</p>
          {/* {metal} */}
          <p>{Math.round(props.user.planet[props.planet.id-1].resources.metal)}</p>
        </div>
      </div>
      <div className="resource">
        <img alt='cristal-logo' src={cristalImg} />
        <div className="value">
          <p>Kryształ:</p>
          {/* {cristal} */}
          <p>{Math.round(props.user.planet[props.planet.id-1].resources.cristal)}</p>
        </div>
      </div>
      <div className="resource">
        <img alt='deuter-logo' src={deuterImg} />
        <div className="value">
          <p>Deuter:</p>
          {/* {deuter} */}
          <p>{Math.round(props.user.planet[props.planet.id-1].resources.deuter)}</p>
        </div>
      </div >
      <div className="resource">
        <img alt='energy-logo' src={energyImg} />
        <div className="value">
          <p>Energia:</p>
          <p>{Math.round(props.user.planet[props.planet.id-1].resources.energy)}</p>
        </div>
      </div >
    </div >
  )
}

export default ResourcerBar;
