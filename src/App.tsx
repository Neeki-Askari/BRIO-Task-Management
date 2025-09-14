import { ActiveTabProvider } from "./ context/navContext";
import "./App.css";
import BrioAuto from "./components/BrioAuto/BrioAuto";
import Sidebar from "./components/Sidebar/Sidebar";
import { TaskProvider } from "./ context/taskContext";

function App() {
  return (
    <ActiveTabProvider>
      <TaskProvider>
        <div className="app-wrapper">
          <Sidebar />
          <BrioAuto />
        </div>
      </TaskProvider>
    </ActiveTabProvider>
  );
}

export default App;
