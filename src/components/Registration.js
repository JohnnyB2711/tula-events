import React from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
export default function Registration(){
    return(
        <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
                Регистрация пользователя
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Регистрация организатора
            </TabPane>
        </Tabs>
    )
}