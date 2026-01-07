import { useState } from 'react';
import './FormularioAgendamento.css';

export const FormularioAgendamento = () => {

  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [dataReserva, setDataReserva] = useState("")
  const [acomodacao, setAcomodacao] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()


    if (cpf === "" || dataReserva === "" || acomodacao === "") {
      alert("Preencha os campos!")
    }
    else {
      alert("Preenchido")
    }

  }

  return (
    <>
      <div className="container">
        <h1>
          Agendamento virtual
        </h1>
        <form className="form" onSubmit={handleAdd}>

          <div className="fields-tree">
            <input type="text"
              placeholder="CPF"
              className="field field-cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <select className="field"
              onChange={(e) => setNome(e.target.value)}>
              <option value="">Selecione usuário</option>
              <option value="Carlos Nascimento">Carlos Nascimento</option>
              <option value="Clara Oliveira">Clara Oliveira</option>
              <option value="João Silva">João Silva</option>
              <option value="Juca Lima">Juca Lima</option>
            </select>

            <input type="date"
              className="field"
              value={dataReserva}
              onChange={(e) => setDataReserva(e.target.value)} />
          </div>
          <div className="container-hotels">
            <div className="card-hotel">
              <input type="radio"
                onChange={(e) => setAcomodacao(e.target.value)}
                name="acomodacao" className="hidden" id='acomodacaoOne' value="Hotel simples" />
              <label htmlFor="acomodacaoOne">
                <img src="https://www.hotelflow.com.br/wp-content/uploads/2017/12/image1-5.jpg" alt="" />
                <p>Hotel simples</p>
              </label>
            </div>

            <div className="card-hotel">
              <input type="radio"
                onChange={(e) => setAcomodacao(e.target.value)}
                name="acomodacao"
                id="acomodacaoTwo"
                className="hidden"
                value="Hotel Duplo" />
              <label htmlFor="acomodacaoTwo">
                <img src="https://images.unsplash.com/photo-1608198399988-341f712c3711?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <p>Hotel Duplo</p>
              </label>
            </div>

            <div className="card-hotel">
              <input type="radio"
                onChange={(e) => setAcomodacao(e.target.value)}

                name="acomodacao"
                className='hidden'
                id='acomodacaoTree'
                value="Hotel premium" />
              <label htmlFor="acomodacaoTree">
                <img src="https://media.istockphoto.com/id/119926339/pt/foto/lido.jpg?s=612x612&w=0&k=20&c=0N7MY9UOg6DMds5gQPOVlksPiRSu5D1oTqmK8CtpBvI=" alt="" />
                <p>Hotel premium</p>
              </label>
            </div>
          </div>

          <button className="btn-agendar">Confirmar agendamento</button>
        </form>
      </div>
      <div className="resume">
        <div className="container">
          <div className="resume-content">
            <div className="resume-item">
              <span>Hospéde</span>
              <p>{nome}</p>
            </div>
            <div className="resume-item">
              <span>Data</span>
              <p>{dataReserva}</p>
            </div>
            <div className="resume-item">
              <span>Acomodação</span>
              <p>{acomodacao}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}