import Global from "@/Global";

class ServiceMedicalAppointments {
  async insertarCita(date, reason, hour, queryType, IdEspecialista, IdMedico, stage, IdPaciente) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarCita");
    const raw = JSON.stringify({
      "Fecha": date,
      "Motivo": reason,
      "Hora": hour,
      "Tipodeconsulta": queryType,
      "IdEspecialista": IdEspecialista,
      "IdMedico": IdMedico,
      "Estados": stage,
      "IdPaciente": IdPaciente
    });

    console.log("raw", raw)
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    let request = "agendar/apiagendar/Agendar/";
    let url = Global.API_URL + request;

    try {
      const response = await fetch(url, requestOptions);
      console.log("Esta es la respuesta - Cita", response);
      return response

    } catch (error) {
      console.log('Error:', error);
    }
  }
}

export default new ServiceMedicalAppointments();