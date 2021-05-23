import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Select from "./pages/select";
import UserMain from "./pages/usermain"
import UserCrossWalk from "./pages/usercrosswalk"
import AlertTemplate from "./components/alertTemplate"
import DriverMain from "./pages/drivermain"
import CarModel from "./components/carmodel_red"
import UserAlertFail from "./pages/useralertfail"


function App() {
  return (
    <Router>
      {/*<Header />*/}
      <div>
        <Route exact path='/' component={ Select } />
        <Route exact path='/user' component={ UserMain } />
        <Route exact path='/sidewalk' component={ UserCrossWalk } />
        <Route exact path='/alert' component={ AlertTemplate } />
        <Route exact path='/driver' component={ DriverMain } />
        <Route exact path='/car' component={ CarModel}/>
        <Route exact path='/alertfail' component={ UserAlertFail }/>
      </div>
      {/*<Footer />*/}
    </Router>
  )
}

export default App;




