import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = {borderColor: props.corPrimaria}

    //renderização condicional em react
    return(
        (props.colaboradores.length > 0) &&
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={css}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}>
                </Colaborador> 
                )}
            </div>
        </section>
    )
}

export default Time;