import './Modal.css';

function Modal({ handleCloseModal, pizza }) {
    console.log(pizza);
    return (
        <>
            <div className='Modal-overlay' onClick={() => handleCloseModal(false)}></div>
            <div className='Modal'>
                <h1>{pizza.title}</h1>
                <img src={pizza.img} alt={`${pizza.title}`} />
                <p>{pizza.description}</p>
                <button type='button' onClick={() => handleCloseModal(false)}>CLOSE</button>
            </div>
        </>
    );
}

export default Modal;