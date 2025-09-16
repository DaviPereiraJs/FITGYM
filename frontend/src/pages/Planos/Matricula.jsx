import React from "react";

export default function Matricula() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Site temporariamente fora do ar. Por favor, tente novamente mais tarde.");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Matrícula</h2>

        <form id="matriculaForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="nome" className="form-control" placeholder="Nome" required />
          </div>

          <div className="mb-3">
            <input type="email" name="email" className="form-control" placeholder="Email" required />
          </div>

          <div className="mb-3">
            <input type="password" name="senha" className="form-control" placeholder="Senha" required />
          </div>

          <div className="mb-3">
            <input type="password" name="confirmarSenha" className="form-control" placeholder="Confirmar Senha" required />
          </div>

          <div className="row g-2 mb-3">
            <div className="col-4">
              <input type="text" name="ddd" className="form-control" placeholder="DDD" required />
            </div>
            <div className="col-8">
              <input type="text" name="telefone" className="form-control" placeholder="Telefone" required />
            </div>
          </div>

          <div className="mb-3">
            <input type="file" name="foto" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Em caso de dúvidas, entre em contato pelo email{" "}
            <strong>contato@fitgym.com</strong>
          </p>
          <p>
            ou pelo telefone <strong>4002-8922</strong>
          </p>
        </div>

        <div className="text-center mt-3">
          <p>
            Já possui conta?{" "}
            <a href="/login" className="text-decoration-none">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
} 