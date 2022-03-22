import {planetImg} from './importImages'

const PlanetChanger = (props) => {

  const handleChange = (e) => {
    props.handleChange(e.target.value)
  }

  return (
    <div className="planet-changer">
      <img src={planetImg[props.planet.id - 1]}/>
      <select id="planet"
        onChange={handleChange.bind(this)}>
        <option value='0'>{props.user.planet[0].name}</option>
        <option value='1'>{props.user.planet[1].name}</option>
      </select>
    </div>
  )
}

export default PlanetChanger;
