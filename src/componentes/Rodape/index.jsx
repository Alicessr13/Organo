import './Rodape.css';

const Rodape = () => {
    return(
        <section className='rodape'>
            <div className='redesSociais'>
                <img src="/imagens/fb.png" alt="Logo facebook em branco" />
                <img src="/imagens/tw.png" alt="Logo twiter em branco" />
                <img src='/imagens/ig.png' alt='Logo instagram em branco'/>
            </div>

            <div>
                <img src="/imagens/logo.png" alt="Logo organo" />
            </div>

            <div className='autor'>
                <h2>Desenvolvido por Alura</h2>
            </div>
        </section>
    )
}

export default Rodape;