import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/courses" component={AllTasksContainer} />
        <Route exact path="/course/:id" component={TaskContainer} />
        <Route exact path="/editcourse/:id" component={EditTaskContainer} />

      </Switch>        
    </div>
  );
}

export default App;
