import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Agenda_Medica from '../Pages/medico/Agenda_medico';
import Dashboard_Medico from '../Pages/medico/Dashboard_Medico';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_Medico" exact component={Dashboard_Medico} />
                <Route path="/agenda_medico" component={Agenda_Medica} />
            </Switch>
        </BrowserRouter>
        
    );
}