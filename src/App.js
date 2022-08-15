import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import NotFoundPage from './pages/NotFoundPage';
import Tutorial from "./pages/Tutorial";
import Project from "./pages/Project";

import { projectList } from './config/dataProjects.js';
import { tutorialList } from './config/dataTutorials.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='tutorials' element={<List list={tutorialList} page={"Tutorials"} />} />
          <Route path='tutorials/:id' element={<Tutorial />} />
          <Route path='projects' element={<List list={projectList} page={"Projects"} />} />
          <Route path='projects/:id' element={<Project />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
