import './DropDown.Component.css'
function DropDown(){
    return(
        <div className="DropDownMenu">
            <ul> 
                <li>Profile</li>
                <li>DashBoard</li>
                <li>Settings</li>
                <hr/>
                <li>LogOut</li>
            </ul>
        </div>
    )
}
export default DropDown;    