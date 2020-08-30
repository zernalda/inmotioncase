import React from 'react';
import TitleTodo from './components/todos/TitleTodo';
import TodayTodo from './components/todos/TodayTodo';
import UpcomingTodo from './components/todos/UpcomingTodo';
import Project from './components/projects/Project';
import ProjectsAdd from './components/projects/ProjectsAdd';
import Hamburger from './components/iconComponent/Hamburger';
import AddTodo from './components/iconComponent/AddTodo';

function App() {
  return (
    <div className="background-primary">
      <div className="main">
        <div className="row">
          <div className="col-6">
            <Hamburger />
            <div className="container">
              <Project />
              <ProjectsAdd />
            </div>
          </div>
         
          <div className="todoMain col-6">
            <div className="container" style={{padding: "50px"}}>
              <TitleTodo />
              <TodayTodo />
              <UpcomingTodo />
            </div>
            <div className="column-reverse">
              <AddTodo />              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
