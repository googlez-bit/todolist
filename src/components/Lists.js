import '../styles/lists.css';
import { useState } from 'react';
import Modal from 'react-modal';

const popUpModalStyle = {
    bottom: '50%',
    left: 'auto',
    right: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgb(25,255,60) !important',
}

Modal.setAppElement('#root');
function Lists() {

    let subtitle;
    const [isModalOpen, setModalOpen] = useState(false);


    const modalOpen = () => {
        console.log(popUpModalStyle);
        setModalOpen(true);
    }

    const modalClose = () => {
        setModalOpen(false);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    return (
        <div className='h-100'>
            <div className='container w-50 h-50'>
                <h6 className='titleHeader text-center'>My To Do</h6>
            </div>
            <div id='list' className='container w-50'>
                <div className='container-fluid'>
                    <div className='todo_item'>
                        <div className="row p-2 align-items-center">
                            <div className="col-1">
                                <div className='d-flex p-0'>
                                    <input className='todo_checkbox' type="checkbox" id="userTodo_check" />
                                </div>
                            </div>

                            <div className="col-9">
                                <div className='d-flex p-0'>
                                    <span className='todo_description ms-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className='d-flex p-0'>
                                    <div className='ms-2 btn p-1 btn-primary d-flex align-items-center' onClick={modalOpen}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1B4242"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z" /></svg>
                                    </div>
                                    <Modal
                                        isOpen={isModalOpen}
                                        onRequestClose={modalClose}
                                        onAfterOpen={afterOpenModal}
                                        style={popUpModalStyle}
                                        contentLabel="Example Modal"
                                    >

                                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                                        <button onClick={modalClose}>close</button>
                                        <div>I am a modal</div>
                                        <form>
                                            <input />
                                            <button>tab navigation</button>
                                            <button>stays</button>
                                            <button>inside</button>
                                            <button>the modal</button>
                                        </form>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lists