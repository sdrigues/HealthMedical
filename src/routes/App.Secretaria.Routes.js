import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Dashboard_Secretaria from '../Pages/secretaria/Dashboard_Secretaria'
import Agenda_Medica from '../Pages/secretaria/Agenda';
import Rede_Credenciada from '../Pages/secretaria/Rede_Credenciada';
import Agenda_medico from '../Pages/secretaria/Agenda_medico'
// import Agendar_Consulta from '../Pages/secretaria/Agendar_Consulta';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_secretaria" exact component={Dashboard_Secretaria} />
                <Route path="/agenda_medica" exact component={Agenda_Medica} />
                <Route path="/rede_Credenciada" exact component={Rede_Credenciada} />
                <Route path="/agenda_medico/:id" exact component={Agenda_medico} /> 
                {/* <Route path="/agendar_Consulta" exact component={Agendar_Consulta} /> */}
            </Switch>
        </BrowserRouter>
    );
}