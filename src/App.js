import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./tasks/Homepage";
import { Task1 } from "./tasks/Task1";
import { Task2 } from "./tasks/Task2";
import { Task3 } from "./tasks/Task3";
import { Task4 } from "./tasks/Task4";
import { Task5 } from "./tasks/Task5";
import { Task6 } from "./tasks/Task6";
import { Layout } from "./component/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
          <Route path="task5" element={<Task5 />} />
          <Route path="task6" element={<Task6 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
