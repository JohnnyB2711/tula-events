import React from "react";
import {Form, Input, Button} from 'antd';
import UpLoadAvatar from "../components/UpLoadAvatar";
import MenuOrg from "../components/Menu/MenuOrg";

class UserInfo extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        return (
            <div className='container col-12 WrapForm'>
                <MenuOrg mode='horizontal'/>
                <div className='Avatar'>
                    <UpLoadAvatar/>
                </div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Имя">
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Фамилия">
                        {getFieldDecorator('surname', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Почта">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Телефон">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Пароль" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password className='Input'/>)}
                    </Form.Item>

                    <Button type="primary" className='Button'>
                        Изменить пароль
                    </Button>
                    <Button type="primary" htmlType="submit" className='Button'>
                        Сохранить изменения
                    </Button>
                </Form>
            </div>
        );
    }
}

const SettingsUserInfo = Form.create({name: 'register'})(UserInfo);
export default SettingsUserInfo