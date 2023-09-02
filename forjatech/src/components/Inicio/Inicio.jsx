import Btn_tech from '../common/Btb_tech';
import Logo from './components/Logo';
import PropTypes from 'prop-types';
import './scss/style.scss';


function Inicio({setPage}){
    
    return(
        <div id="inicio">
            <header>
                <Logo />
            </header>
            <main>
                <div className="holder">
                    <div className="content">
                        <h1 className="msg">Quais sao os meios online que voce utiliza atualmente para atrair clientes para o seu estabelecimento?</h1>
                        <div className="btnOrganizer">
                            <Btn_tech func={{setPage}} text="Quero saber mais" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

Inicio.propTypes = {
    setPage: PropTypes.func.isRequired
}

export default Inicio;