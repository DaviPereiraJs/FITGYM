import React from "react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login temporariamente indisponível. Por favor, tente novamente mais tarde.");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="senha"
              className="form-control"
              placeholder="Senha"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
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
            Não tem conta?{" "}
            <a href="/matricula" className="text-decoration-none">
              Faça sua matrícula
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}