import React from 'react';
import Nav from './components/nav/Nav';
import Home from './Home';
import Class from './components/classes/Class';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exercise from './components/exercise/Exercise';
import MealMastery from './components/meal-plan/MealMastery';
import Mix from './components/mix/Mix';
import Yoga from './components/pages/browse-classes/yoga';
import Footer from './components/footer/footer';


const App = () => {
    return (
        <>
           <Router>
                <Nav/>
                <Home />
                <Routes>
                    <Route path='/class' element= {<Class/>}/>
                    <Route path='/exercise' element= {<Exercise/>}/>
                    <Route path='/mealmastery' element= {<MealMastery/>}/>
                    <Route path='/mix' element= {<Mix/>}/>
                    <Route path='/yoga' element= {<Yoga/>}/>
                </Routes>
                <Footer/>
           </Router>
        </>
    );
};

export default App;
