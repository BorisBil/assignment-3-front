import "./App.css";

//Router
import { Routes, Route } from "react-router-dom";

//Components
import {
  HomePageContainer,
  TaskContainer,
  AllTasksContainer,
  EditTaskContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element = {<HomePageContainer/>} />
        <Route exact path="/tasks" element = {<AllTasksContainer/>} />
        <Route exact path="/task/:id" element = {<TaskContainer/>} />
        <Route exact path="/edittask/:id" element = {<EditTaskContainer/>} />

      </Routes>        
    </div>
  );
}

export default App;
