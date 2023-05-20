import Div100vh from 'react-div-100vh'
import FactionSelect from "./components/FactionSelect"
import ErrorPage from './pages/ErrorPage';
import Arborec from './pages/Arborec';
import Barony from './pages/Barony';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import ManualOverrideContext  from './context/ManualOverrideContext';
import Saar from './pages/Saar';
import Muaat from './pages/Muaat';
import Hacan from './pages/Hacan';
import Sol from './pages/Sol';
import Ghosts from './pages/Ghosts';
import L1Z1X from './pages/L1Z1X';
import Mentak from './pages/Mentak';
import Naalu from './pages/Naalu';
import Nekro from './pages/Nekro';
import Sardakk from './pages/Sardakk';
import Jolnar from './pages/Jolnar';
import Winnu from './pages/Winnu';
import Xxcha from './pages/Xxcha';
import Yin from './pages/Yin';
import Yssaril from './pages/Yssaril';
import Argent from './pages/Argent';
import Empyrean from './pages/Empyrean';
import Mahact from './pages/Mahact';
import Naaz from './pages/Naaz';
import Nomad from './pages/Nomad';
import Titans from './pages/Titans';
import Cabal from './pages/Cabal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FactionSelect />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/arborec",
    element: <Arborec />
  },
  {
    path: "/barony",
    element: <Barony />
  },
  {
    path: "/saar",
    element: <Saar />
  },
  {
    path: "/muaat",
    element: <Muaat />
  },
  {
    path: "/hacan",
    element: <Hacan />
  },
  {
    path: "/sol",
    element: <Sol />
  },
  {
    path: "/ghosts",
    element: <Ghosts />
  },
  {
    path: "/L1Z1X",
    element: <L1Z1X />
  },
  {
    path: "/mentak",
    element: <Mentak />
  },
  {
    path: "/naalu",
    element: <Naalu />
  },
  {
    path: "/nekro",
    element: <Nekro />
  },
  {
    path: "/sardakk",
    element: <Sardakk />
  },
  {
    path: "/jolnar",
    element: <Jolnar />
  },
  {
    path: "/winnu",
    element: <Winnu />
  },
  {
    path: "/xxcha",
    element: <Xxcha />
  },
  {
    path: "/yin",
    element: <Yin />
  },
  {
    path: "/yssaril",
    element: <Yssaril />
  },
  {
    path: "/argent",
    element: <Argent />
  },
  {
    path: "/empyrean",
    element: <Empyrean />
  },
  {
    path: "/mahact",
    element: <Mahact />
  },
  {
    path: "/naaz",
    element: <Naaz />
  },
  {
    path: "/nomad",
    element: <Nomad />
  },
  {
    path: "/titans",
    element: <Titans />
  },
  {
    path: "/cabal",
    element: <Cabal />
  },
], {basename: "/ti4-roller"});


function App() {
  return (
    <Div100vh>
      <div className='App'>
        <ManualOverrideContext>
          <RouterProvider  router={router} />
        </ManualOverrideContext>
      </div>
    </Div100vh>
  );
}

export default App;
