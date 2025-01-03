import './Formulario.css';
import CampoTexto from '../CampoTexto/index'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = () => {
        console.log('Form foi submetido');
    }

    //.children recebe o que tiver dentro do do buttons

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o cardo do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa label="Time:" itens={times} ></ListaSuspensa>

                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario;