import React from "react";
import {Form, Input, Button, Row, Col} from 'antd';
import UpLoadAvatar from "../components/UpLoadAvatar";

class UserInfo extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        form:{
            name:{},
            surName:{},
            email:{},
            phoneNum:{},
            password:{},
            avatar:{},
            rePassword:{}
        }
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
        const validateMessages = {
            required: 'Заполните поле',
            types: {
                email: 'Неверный email',
                number: 'Неверный номер',
            },
            number: {
                range: 'Must be between ${min} and ${max}',
            },
        };
        const formItemLayout = {
            labelCol: {
                xs: {span: 12},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        return (
            <Row type="flex" justify="center" align="middle">
                <Col xs={12} md={8}>
                    <Form onSubmit={this.handleSubmit} name="nest-messages" validateMessages={validateMessages}>
                        <Form.Item>
                            <UpLoadAvatar/>
                        </Form.Item>
                        <Form.Item
                            name={['form', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Имя" hasFeedback>
                            {getFieldDecorator('name', {
                                rules: [{required: true, whitespace: true}],
                            })(<Input className='Input'/>)}
                        </Form.Item>
                        <Form.Item label="Фамилия" hasFeedback>
                            {getFieldDecorator('surname', {
                                rules: [{required: true, whitespace: true}],
                            })(<Input className='Input'/>)}
                        </Form.Item>
                        <Form.Item label="Почта" hasFeedback>
                            {getFieldDecorator('email', {
                                rules: [
                                    {type: 'email'}, {required: true},
                                ],
                            })(<Input className='Input'/>)}
                        </Form.Item>
                        <Form.Item label="Телефон" hasFeedback>
                            {getFieldDecorator('phone', {
                                rules: [{required: true, message: 'Please input your phone number!'}],
                            })(<Input className='Input'/>)}
                        </Form.Item>
                        <Form.Item label="Пароль" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {required: true,},
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password className='Input'/>)}
                        </Form.Item>

                        <Button type="primary" className='Button'>
                            Подтверждение пароля
                        </Button>
                        <Button type="primary" htmlType="submit" className='Button'>
                            Сохранить изменения
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const SettingsUserInfo = Form.create({name: 'register'})(UserInfo);
export default SettingsUserInfo