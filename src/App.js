import React, { useState, useEffect } from 'react';
import update from "react-addons-update";
import User from './components/user'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import ResourcesBar from './components/resourcesBar';
import Preview from './components/preview';
import Empire from './components/empire';
import Buildings from './components/buildings';
import Tests from './components/tests';
import PlanetChanger from './components/planetChanger';
import Tech from './components/tech';
import QuickComponent from './components/quickComponent';
import Resources from './components/resources';
import Dock from './components/dock';
import { checkRequirements } from './components/requirements'

function App() {

  const [user, setUser] = useState(User);
  const [planet, setPlanet] = useState(user.planet[0])
  const [simil, setSimil] = useState([])

  // Odpala się gdy zmienia się cokolwiek w konkretnej planecie
  const refreshChosenPlanet = (updatePlanet) => {
    setUser(update(user, { planet: { [planet.id - 1]: { $set: updatePlanet } } }))
  }

  // Zmiana planety (wliczając zasoby, budynki, badania itp.)
  const handleChange = (value) => {
    setPlanet(user.planet[value])
  }

  //Zmiana procentowa wydobycia wybranej kopalni lub elektrowni
  const handleChangeExtract = (val, building) => {
    const newValue = update(user.planet[planet.id - 1], { resources: { [building]: { factor: { $set: val } } } });
    refreshChosenPlanet(newValue)
  }

  //Dodaje do porównywarki
  const addSimil = (object) => {
    const oldSimil = simil;
    const checkOldSimil = oldSimil.indexOf(object)
    if (checkOldSimil === -1) {
      setSimil(oldSimil.concat(object))
    }
  }

  const zero = 0;
  const one = 1;
  const two = 2;
  const three = 3;

  //Funkcja odpowiedzialna za zwiększanie poziomu, puki co nie skończona
  const handleUp = (index, section) => {
    let updateLevel = update(user.planet[planet.id - 1], { [section]: { [index]: { level: { $apply: function (x) { return x + 1; } } } } });
    let updateMetal = update(updateLevel, { resources: { [zero]: { metal: { $apply: function (x) { return x - planet[section][index].cost.metal; } } } } });
    let updateCristal = update(updateMetal, { resources: { [one]: { cristal: { $apply: function (x) { return x - planet[section][index].cost.cristal; } } } } });
    let updateDeuter = update(updateCristal, { resources: { [two]: { deuter: { $apply: function (x) { return x - planet[section][index].cost.deuter; } } } } });
    let updateEnergy = update(updateDeuter, { resources: { [three]: { energy: { $apply: function (x) { return x - planet[section][index].cost.energy; } } } } });
    let updateMetalCost = update(updateEnergy, { [section]: { [index]: { cost: { metal: { $apply: function (x) { return x * planet[section][index].factor; } } } } } });
    let updateCristalCost = update(updateMetalCost, { [section]: { [index]: { cost: { cristal: { $apply: function (x) { return x * planet[section][index].factor; } } } } } });
    let updateDeuterCost = update(updateCristalCost, { [section]: { [index]: { cost: { deuter: { $apply: function (x) { return x * planet[section][index].factor; } } } } } });
    let updateEnergyCost = update(updateDeuterCost, { [section]: { [index]: { cost: { energy: { $apply: function (x) { return x * planet[section][index].factor; } } } } } });
    let updatePoints = update(updateEnergyCost, { [section]: { [index]: { points: { $apply: function (x) { return x * planet[section][index].factor; } } } } });
    let updateTime = update(updatePoints, { [section]: { [index]: { time: { $apply: function (x) { return x * planet[section][index].factor; } } } } });
    let updateFunction = () => {
      let updateValue = updateTime
      for (let i = 0; i < updateTime[section][index].function.length; i++) {
        updateValue = update(updateValue, { [section]: { [index]: { function: { [i]: { value: { $apply: function (x) { return x * planet[section][index].factor; } } } } } } });
      } return updateValue
    }
    const checkReuireBuildings = checkRequirements(updateFunction(), 'buildings')
    const checkReuireTests = checkRequirements(checkReuireBuildings, 'tests')
    setPlanet(checkReuireTests)
    refreshChosenPlanet(checkReuireTests)
  }

  //Funkcja odpowiedzialna za zmniejszanie poziomu, puki co nie skończona
  const handleDown = (index, section) => {
    if (planet[section][index].level !== 0) {
      const newLevel = update(user.planet[planet.id - 1], { [section]: { [index]: { level: { $apply: function (x) { return x - 1; } } } } })
      let updateMetalCost = update(newLevel, { [section]: { [index]: { cost: { metal: { $apply: function (x) { return x / planet[section][index].factor; } } } } } });
      let updateCristalCost = update(updateMetalCost, { [section]: { [index]: { cost: { cristal: { $apply: function (x) { return x / planet[section][index].factor; } } } } } });
      let updateDeuterCost = update(updateCristalCost, { [section]: { [index]: { cost: { deuter: { $apply: function (x) { return x / planet[section][index].factor; } } } } } });
      let updateEnergyCost = update(updateDeuterCost, { [section]: { [index]: { cost: { energy: { $apply: function (x) { return x / planet[section][index].factor; } } } } } });
      let updatePoints = update(updateEnergyCost, { [section]: { [index]: { points: { $apply: function (x) { return x / planet[section][index].factor; } } } } });
      let updateTime = update(updatePoints, { [section]: { [index]: { time: { $apply: function (x) { return x / planet[section][index].factor; } } } } });
      let updateFunction = () => {
        let updateValue = updateTime
        for (let i = 0; i < updateTime[section][index].function.length; i++) {
          updateValue = update(updateValue, { [section]: { [index]: { function: { [i]: { value: { $apply: function (x) { return x / planet[section][index].factor; } } } } } } });
        } return updateValue
      }
      const checkReuireBuildings = checkRequirements(updateFunction(), 'buildings')
      const checkReuireTests = checkRequirements(checkReuireBuildings, 'tests')
      setPlanet(checkReuireTests)
      refreshChosenPlanet(checkReuireTests)
    }
  }

  //Hook odpowiedzialny za zwiększanie zasobów
  useEffect(() => {
    let id = setInterval(() => {
      let newUserResources = user
      for (let i = 0; i < user.planet.length; i++) {
        if (user.planet[i].resources[0].metal < user.planet[i].buildings[8].function[0].value) {
          newUserResources = update(newUserResources, { planet: { [i]: { resources: { [zero]: { metal: { $apply: function (x) { return x + user.planet[i].buildings[0].function[0].value * user.planet[i].resources[0].factor + 10; } } } } } } })
        }
        if (user.planet[i].resources[1].cristal < user.planet[i].buildings[8].function[0].value) {
          newUserResources = update(newUserResources, { planet: { [i]: { resources: { [one]: { cristal: { $apply: function (x) { return x + user.planet[i].buildings[1].function[0].value * user.planet[i].resources[1].factor + 10; } } } } } } })
        }
        if (user.planet[i].resources[2].deuter < user.planet[i].buildings[8].function[0].value) {
          newUserResources = update(newUserResources, { planet: { [i]: { resources: { [two]: { deuter: { $apply: function (x) { return x + user.planet[i].buildings[2].function[0].value * user.planet[i].resources[2].factor + 10; } } } } } } })
        }
        setUser(newUserResources);
      } return newUserResources
    }, 1000);
    return () => clearInterval(id);
  }, [user]);

  return (
    <div className='main'>
      <PlanetChanger user={user} planet={planet} handleChange={handleChange.bind(this)} />
      <NavBar />
      <ResourcesBar planet={planet} user={user} />
      <QuickComponent planet={planet} user={user} simil={simil} />
      <Routes>
        <Route path='/' element={<Preview planet={planet} user={user} handleChange={handleChange.bind(this)} />} />
        <Route path='resources' element={<Resources planet={planet} user={user} handleChangeExtract={handleChangeExtract} />} />
        <Route path='empire' element={<Empire user={user} planet={planet} />} />
        <Route path='buildings' element={<Buildings planet={planet} user={user} handleUp={handleUp.bind(this)} handleDown={handleDown.bind(this)} />} />
        <Route path='tests' element={<Tests planet={planet} user={user} handleUp={handleUp.bind(this)} handleDown={handleDown.bind(this)} />} />
        <Route path='dock' element={<Dock planet={planet} user={user} addSimil={addSimil.bind(this)} />} />
        <Route path='tech' element={<Tech planet={planet} />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>Upss... chyba zabłądziłeś!</h1>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
