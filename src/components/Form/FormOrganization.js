import React from "react";
import {Form, Input, Checkbox, Button, Row, Col} from 'antd';
import UpLoadAvatar from "../UpLoadAvatar";
import {confirmPassword, email, name, nameOrganization, password, phone, surname} from "../../helpers/validations";
import {compareToFirstPassword} from "../../helpers/compareToFirstPassword";

class RegistrationForm extends React.Component {
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
            labelCol: {span: 6},
            wrapperCol: {span: 24},
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Row type="flex" justify="center" align="middle">
                <Col>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item>
                    <UpLoadAvatar/>
                </Form.Item>
                <Form.Item label="Название организации" hasFeedback>
                    {getFieldDecorator('nameOrganization', nameOrganization)(<Input className='Input'/>)}
                </Form.Item>
                <Form.Item label="Имя" hasFeedback>
                    {getFieldDecorator('name', name)(<Input className='Input'/>)}
                </Form.Item>
                <Form.Item label="Фамилия" hasFeedback>
                    {getFieldDecorator('surname', surname)(<Input className='Input'/>)}
                </Form.Item>
                <Form.Item label="Почта" hasFeedback>
                    {getFieldDecorator('email', email)(<Input className='Input'/>)}
                </Form.Item>
                <Form.Item label="Пароль" hasFeedback>
                    {getFieldDecorator('password', password)(<Input.Password className='Input'/>)}
                </Form.Item>
                <Form.Item label="Подтверждение пароля" hasFeedback>
                    {getFieldDecorator('confirm', {rules: [...confirmPassword.rules, {validator: compareToFirstPassword.bind(this, this.props.form)}]})(
                        <Input.Password className='Input'/>)}
                </Form.Item>
                <Form.Item label="Номер телефона" hasFeedback>
                    {getFieldDecorator('phone', phone)(<Input className='Input'/>)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            Я ознакомился с <a href="#hhh">соглашением</a>
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className='Button'>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
                </Col>
            </Row>
                    );
    }
}

const FormOrganization = Form.create({name: 'register'})(RegistrationForm);
export default FormOrganization