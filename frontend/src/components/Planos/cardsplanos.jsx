import React from "react";
import "./cardsplanos.css";

const planos = [
  {
    titulo: "PLANO FIDELIDADE 12 MESES",
    duracao: "12 MESES",
    preco: 700, 
  },
  {
    titulo: "PLANO FIDELIDADE 6 MESES",
    duracao: "6 MESES",
    preco: 400,
  },
  {
    titulo: "PLANO TRIMESTRAL",
    duracao: "3 MESES",
    preco: 200,
  },
  {
    titulo: "PLANO MENSAL",
    duracao: "1 MÊS",
    preco: 80,
  },
  {
    titulo: "Diaria",
    duracao: "1 DIA",
    preco: 120,
  },
];

export default function Planos() {
  return (
    <div className="planos-container py-5">
      <div className="container">
        <h1 className="text-center mb-5 text-black fw-bold">Nossos Planos</h1>
        <div className="row g-4">
          {planos.map((plano, index) => (
            <div className="col-12" key={index}>
              <div className="card plano-card d-flex flex-row justify-content-between align-items-center p-3">
                {/* Parte esquerda */}
                <div className="d-flex align-items-center">
                  <div className="plano-icone text-center me-3">
                    <p className="plano-duracao-num mb-0">
                      {plano.duracao.split(" ")[0]}
                    </p>
                    <p className="plano-duracao-text mb-0">
                      {plano.duracao.split(" ")[1]}
                    </p>
                  </div>
                  <div className="planos-text-container">
                    <h5 className="fw-bold">{plano.titulo}</h5>
                    <p className="mb-0" id="mensalidade-text">Mensalidade R$ {plano.preco},00</p>
                  </div>
                </div>

                {/* Botão que redireciona */}
                <a href="/matricula" className="btn btn-matricula">
                  MATRICULE-SE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
