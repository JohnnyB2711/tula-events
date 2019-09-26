import React from "react";
import {Tabs} from 'antd';
import FormUser from '../components/FormUser'
import FormOrganization from "../components/FormOrganization";

const {TabPane} = Tabs;
export default function Registration() {
    return (
        <Tabs defaultActiveKey="1" className='Registration container'>
            <TabPane tab="Пользователь" key="1">
                <h3>Регистрация пользователя</h3>
                <FormUser/>
            </TabPane>
            <TabPane className='' tab="Организатор" key="2">
                <h3>Регистрация организатора</h3>
                <FormOrganization/>
            </TabPane>
        </Tabs>

    )
}