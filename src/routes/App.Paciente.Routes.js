import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Dashboard_Paciente from '../Pages/paciente/Dashboard_Paciente';
import Agendas_Paciente from '../Pages/paciente/Agenda';
import Rede_Credenciada from '../Pages/paciente/Rede_Credenciada';
import Agendar_Consulta from '../Pages/paciente/Agendar_Consulta';
// import Agendamento_Consulta from '../Pages/paciente/Agendamento_Consulta';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard_Paciente" exact component={Dashboard_Paciente} />
                <Route path="/agendas_Paciente" exact component={Agendas_Paciente} />
                <Route path="/rede_Credenciada" exact component={Rede_Credenciada} />
                <Route path="/agendar_Consulta/:id" exact component={Agendar_Consulta} />
                {/*<Route path="/agendamento_Consulta" exact component={Agendamento_Consulta} /> */}
            </Switch>
        </BrowserRouter>
    );
}