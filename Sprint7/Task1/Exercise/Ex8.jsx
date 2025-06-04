import {useState} from 'react';

function Ex8(){
    const [showNav,setshowNav]=useState(1);
    function chanagebar(index){
        setshowNav(index);
    }
    return(
        <>
        <div className='Ex8'>
        <div className="buttons">
        <button className={showNav==1? "activeNavBar":"Navbar"} onClick={()=>chanagebar(1)}>Home</button>
        <button className={showNav==2? "activeNavBar":"Navbar"} onClick={()=>chanagebar(2)}>Photos</button>
        <button className={showNav==3? "activeNavBar":"Navbar"} onClick={()=>chanagebar(3)} >About</button>
        </div>
        <div>
            <div className={showNav==1? "activeLinkpages":"LinkPages"}><h1> Home Page</h1><p>This is Home Page</p></div>
            <div className={showNav==2? "activeLinkpages":"LinkPages"}><h1> Photos Page</h1><p>This is Photos Page</p></div>
            <div className={showNav==3? "activeLinkpages":"LinkPages"}><h1> About Page</h1><p>This is About Page</p></div>
        </div>
        </div>
        </>
        
    )
}

export default Ex8;