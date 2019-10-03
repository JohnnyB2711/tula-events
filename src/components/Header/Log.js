import React from "react";
import MenuAvatar from "./MenuAvatar";
import {Button} from "antd";
class Log extends React.Component{
    render() {
        return(
            this.props.user !== 'un' ? (
                    <div>
                        <MenuAvatar/>
                    </div>
                ) :
                (<div className='ButtonHeader'>
                    <Button onClick={() => {
                        this.props.history.push(`/enter`)
                    }} key="5">Вход</Button>
                    <Button onClick={() => {
                        this.props.history.push(`/registration`)
                    }} key="6">Регистрация</Button>
                </div>)
        )
    }

}
export default Log