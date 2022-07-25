import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TutorialsList from './pages/TutorialsList';
import ProjectsList from './pages/ProjectsList';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='tutorials' element={<TutorialsList/>} />
          <Route path='projects' element={<ProjectsList/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
