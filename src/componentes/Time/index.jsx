import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = {borderColor: props.corPrimaria}

    //renderização condicional em react
    return(
        (props.colaboradores.length > 0) ?
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={css}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                {
                    return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}>
                </Colaborador> 
                }
                )}
            </div>
        </section>
        : ''
    )
}

export default Time;