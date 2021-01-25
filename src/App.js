import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditComp from './Component/Class/EditComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import AboutComp from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import HomePage from './Component/Fungsional/HomePage';
import NavbarComp from './Component/Fungsional/NavbarComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Fungsional/HooksComp';

// import BootstrapCom from './Component/Class/BootstrapCom';
// import './App.css';
// import Home from './Component/Fungsional/Home';
// import Beranda from './Component/Class/Beranda';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutComp}/>
        <Route exact path="/mahasiswa" component={ListComp} />
        <Route exact path="/mahasiswa/tambah" component={TambahComp} />
        <Route exact path="/mahasiswa/edit" component={EditComp} />
        <Route exact path="/kelas" component={KelasComp} />
        <Route exact path="/hooks" component={HooksComp} />
        {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
      </Switch>

    </BrowserRouter>
  );
}

export default App;
