import React from 'react'
import "./App.css"
import Contact from './components/Contact/Contact';
import ExpContainer from './components/ExpContainer/ExpContainer';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';
const App = () => {
    return (
        <div>
        <Header/>
        <TopContainer/>
        <SkillContainer/>
        <ProjectContainer/>
        <ExpContainer/>
        <Contact/>
        </div>
    );
}

export default App
