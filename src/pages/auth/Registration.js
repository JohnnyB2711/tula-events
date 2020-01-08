import React from "react";
import {Tabs} from 'antd';
import FormUser from '../../components/Form/FormUser'
import FormOrganization from "../../components/Form/FormOrganization";

const {TabPane} = Tabs;
export default function Registration() {
    return (
        <Tabs defaultActiveKey="1" className=''>
            <TabPane tab="Пользователь" key="1">
                <div>
                    <h3>Регистрация пользователя</h3>
                    <FormUser/>
                </div>
            </TabPane>
            <TabPane tab="Организатор" key="2">
                <div>
                    <h3>Регистрация организатора</h3>
                    <FormOrganization/>
                </div>
            </TabPane>
        </Tabs>

    )
}