import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.css';
function UserInput() {
    return (
        <div className='w-100 h-100'>
            <div className='header '>
                <h3 className='titleMain text-center'>Hi there, add something in the list!</h3>
            </div>
            <div className='container h-100'>
                <div className="row">
                    <div className='col d-flex justify-content-center'>
                        <textarea placeholder='What should you remember?' className='userTextForm rounded p-2' id="userNote" />
                    </div>

                </div>
                <div className="row">
                    <div className='col d-flex justify-content-center'>
                        <span className="btn btn-primary w-25 mt-2 text-dark">ADD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserInput