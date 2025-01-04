import './Colaboradores.css'

const Colaborador = ({nome, imagem, cargo}) =>{
    return(
        <div className='colaborador'>
           <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div> 

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}r</h5>
            </div>
        </div>
    )
}

export default Colaborador;
//https://github.com/Alicessr13.png