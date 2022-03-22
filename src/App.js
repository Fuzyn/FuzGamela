import React, { useState, useEffect } from 'react';
import update from "react-addons-update";
import User from './components/user'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import ResourcesBar from './components/resourcesBar';
import Preview from './components/preview';
import Buildings from './components/buildings';
import Tests from './components/tests';
import PlanetChanger from './components/planetChanger';

function App() {

  const [user, setUser] = useState(User);
  const [planet, setPlanet] = useState(user.planet[0])

  // Odpala się gdy zmienia się cokolwiek w konkretnej planecie
  useEffect(() => {
    setUser(update(user, {planet: { [planet.id-1]: {$set: planet}}}) )
  }, [planet])

  // Zmiana planety (wliczając zasoby, budynki, badania itp.)
  const handleChange = (value) => {
    setPlanet(user.planet[value])
  }

  //Funkcja odpowiedzialna za zwiększanie poziomu, puki co nie skończona
  const handleUp = (index, section) => {
    if(planet[section][index].cost[0].metal < planet.metal) {
    const newLevel = update(planet, { [section]: { [index]: { level: { $apply: function (x) { return x + 1; } } } } })
    const newMetal = update(newLevel, {metal: {$apply: function (x) { return x - planet[section][index].cost[0].metal; } }})
    const newCristal = update(newMetal, {cristal: {$apply: function (x) { return x - planet[section][index].cost[0].cristal; } }})
    const newDeuter = update(newCristal, {deuter: {$apply: function (x) { return x - planet[section][index].cost[0].deuter; } }})
    const newEnergy = update(newDeuter, {energy: {$apply: function (x) { return x - planet[section][index].cost[0].energy; } }})
    setPlanet(newEnergy)
  }}

  //Funkcja odpowiedzialna za zmniejszanie poziomu, puki co nie skończona
  const handleDown = (index, section) => {
    const newLevel = update(planet, { [section]: { [index]: { level: { $apply: function (x) { return x - 1; } } } } })
    setPlanet(newLevel)
  }

  //   const myInterval = setInterval(myTimer, 1000);

  // function myTimer() {
  //   const date = new Date();
  //   console.log(date.toLocaleTimeString())
  // }

    // const UpdateResourcer = () => {
    //   // for (let i=0; i < user.planet.length; i++) {
    //     const newUserMetal = update(user, {planet: {0: { metal: { $set: 1 }} }})
    //     setUser(newUserMetal)
    //     update(user.planet[0], { metal: { $set: 1 } })
    //     update(user.planet[0], { cristal: { $set: 1 } })
    //     update(user.planet[0], { deuter: { $set: 1 } })
    //   // }
    // }

    // useEffect(() => {
    //   {UpdateResourcer()}
    // }, [myInterval])


  return (
    <div className='main'>
      <PlanetChanger user={user} planet={planet} handleChange={handleChange.bind(this)} />
      <NavBar />
      <ResourcesBar planet={planet} />
      <Routes>
        <Route path='/' element={<Preview planet={planet} user={user} handleChange={handleChange.bind(this)}/>} />
        <Route path='buildings' element={<Buildings planet={planet} handleUp={handleUp.bind(this)} handleDown={handleDown.bind(this)}/>} />
        <Route path='tests' element={<Tests planet={planet} user={user} handleUp={handleUp.bind(this)} handleDown={handleDown.bind(this)}/>} />
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
