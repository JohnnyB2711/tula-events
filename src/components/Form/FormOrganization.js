import React from "react";
import {Form, Input, Checkbox, Button, Row, Col} from 'antd';
import UpLoadAvatar from "../UpLoadAvatar";
import {confirmPassword, email, name, nameOrganization, password, phone, surname} from "../../helpers/validations";

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

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
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
            <Row>
                <Col xs={12} md={8}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                            <UpLoadAvatar/>
                    </Form.Item>
                    <Form.Item label="Название организации">
                        {getFieldDecorator('nameOrganization', nameOrganization)(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Имя">
                        {getFieldDecorator('name', name)(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Фамилия">
                        {getFieldDecorator('surname',surname)(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Почта">
                        {getFieldDecorator('email', email)(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Пароль" hasFeedback>
                        {getFieldDecorator('password', password)(<Input.Password className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Повторный пароль" hasFeedback>
                        {getFieldDecorator('confirm', confirmPassword)(<Input.Password className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Телефон">
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