import { PropTypes } from 'prop-types';

function Btn_tech({text, func}){

    return (<>
        <button className='cta' onClick={() => func.setPage(2)}>
            <p>
                {text}
            </p>
            <svg id="bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 54" fill="none">
                <path id="line" className="shape_line" d="M156 2.99998L3 2.99999L3 50.9999L156 50.9999L156 2.99998Z"/>
                <path id="dot1" className="shape_dots" d="M0 48H6V54H0V48Z"/>
                <path id="dot2" className="shape_dots" d="M153 48H159V54H153V48Z"/>
                <path id="dot3" className="shape_dots" d="M153 0H159V6H153V0Z"/>
                <path id="dot4" className="shape_dots" d="M0 0H6V6H0V0Z"/>
            </svg>
        </button>
    </>
    )
}

Btn_tech.propTypes = {
    text: PropTypes.string.isRequired,
    func: PropTypes.object.isRequired
}

export default Btn_tech;