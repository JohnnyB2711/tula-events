import React from "react";
import MenuOrg from "../components/Menu/MenuOrg";
import MenuUser from "../components/Menu/MenuUser";

class PersonalPage extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                {
                    this.props.user === 'org' ? <MenuOrg/> : <MenuUser/>
                }

            </div>

        )
    }

}

export default PersonalPage