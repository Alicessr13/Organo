import './Botao.css';

const Botao = (props) => {
    //.children recebe o que tiver dentro do do button
    return (
        <button className="botao">
            {
                props.children
            }
        </button>
    )
}

export default Botao;