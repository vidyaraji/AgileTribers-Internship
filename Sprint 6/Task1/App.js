
import {Route,Routes, BrowserRouter } from "react-router-dom";
import DrawerNav from './DrawerNav';
import DashBoard from './Components/DashBoard';
import CompletedTask from './Components/CompletedTask';
import PendingTask from './Components/PendingTask';
import InProgressTask from './Components/InProgressTask';
import DeployedTask from './Components/DeployedTask';
import DeferredTask from './Components/DeferredTask';
import AddNewTask from './Components/AddNewTask';
import TaskStats from './Components/TaskStats';
function App() {
  return (
    <>
    {/* <DrawerNav /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={ <DrawerNav />}></Route>
      <Route path="/dashboard" exact element={<DashBoard/>}></Route>
      <Route path="/completedtask" exact element={<CompletedTask/>}></Route>
      <Route path="/pendingtask" exact element={<PendingTask/>}></Route>
      <Route path="/inprogresstask" exact element={<InProgressTask/>}></Route>
      <Route path="/deployedtask" exact element={<DeployedTask/>}></Route>
      <Route path="/deferredtask" exact element={<DeferredTask/>}></Route>
      <Route path="/addnewtask" exact element={<AddNewTask/>}></Route>
      <Route path="/taskstats" exact element={<TaskStats/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
