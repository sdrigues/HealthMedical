import React from 'react'
// import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Switch, BrowserRouter } from 'react-router-dom'

//import Agendas_Paciente from '../pages/paciente/Agenda';
//import Rede_Credenciada from '../pages/paciente/Rede_Credenciada';
//import Agendar_Consulta from '../pages/paciente/Agendar_Consulta';
// import Dashboard_Medico from '../pages/medico/Dashboard_Medico';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/* <Route path="/dashboard_Medico" exact component={Dashboard_Medico} /> */}
            </Switch>
        </BrowserRouter>
        
    );
}