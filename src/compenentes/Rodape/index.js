import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="redes-sociais">
        <ul>
          <li>
            <img src="/imagens/fb.png" alt="fb" />
          </li>

          <li>
            <img src="/imagens/ig.png" alt="ig" />
          </li>
          <li>
            <img src="/imagens/tw.png" alt="tw" />
          </li>
        </ul>
      </section>
      <section className="logo">
        <img src="/imagens/logo.png" alt="logo" />
      </section>
      <section className="titulo">
        <h3>Desenvolvido por Emanuel Hitallo</h3>
      </section>
    </footer>
  );
};

export default Rodape;
