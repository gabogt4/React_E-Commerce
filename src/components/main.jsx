import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://www.elrosado.com/Images/Inicio-Pagina-CER-NEW.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 >Mi comisariato</h1>
              <h2 >
                Siempre de todo a menor precio, SIEMPRE!.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
