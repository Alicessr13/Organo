import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = {borderColor: props.corPrimaria}

    return(
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={css}>
                {props.nome}
            </h3>
            <Colaborador></Colaborador>
        </section>
    )
}

export default Time;