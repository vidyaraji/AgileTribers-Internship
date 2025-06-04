import './Modal.Component.css'

function Modal({close}){
    return(
        <>
        <div className='Modal'>
            <div className='Modal_Container'>
                <button class='Modal_Close' onClick={()=>close(false)}>❌</button>
                <h1 class='Modal_Head'>Show Tickets</h1>
                <hr/>
                <div class='Modal_Body'>
                    <div className='Movie'>
                        <h3 className='Movie_Name'>Eleven</h3><hr/>
                        <div className='Movie_Times'> <h4>2:30 PM</h4> <h4>10:30 PM</h4></div>
                    </div>
                    <div className='Movie'>
                        <h3 className='Movie_Name'>Thug Life</h3><hr/>
                        <div className='Movie_Times'> <h4>9:30 AM</h4> <h4>11:30 PM</h4></div>
                    </div>
                    <div className='Movie'>
                        <h3 className='Movie_Name'>Jeyam</h3><hr/>
                        <div className='Movie_Times'> <h4>1:00 PM</h4> <h4>11:00 AM</h4></div>
                    </div>
                </div>
            </div>
        </div>
        
        </>       
    )
}

export default Modal;