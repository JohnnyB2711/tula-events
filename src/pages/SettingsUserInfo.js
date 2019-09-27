import React from "react";
import {Form, Input, Select, Checkbox, Button, DatePicker, Radio} from 'antd';
import moment from "moment";
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

const {Option} = Select;

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

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
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
            <div className='container'>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Имя">
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='InputRegistration'/>)}
                    </Form.Item>
                    <Form.Item label="Фамилия">
                        {getFieldDecorator('surname', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='InputRegistration'/>)}
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
                        })(<Input className='InputRegistration'/>)}
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
                        })(<Input.Password className='InputRegistration'/>)}
                    </Form.Item>
                    <Form.Item label="Телефон">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input className='InputRegistration'/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className='ButtonRegistration'>
                            Сохранить изменения
                        </Button>
                        <Button type="primary" className='ButtonRegistration'>
                            Изменить пароль
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        );
    }
}

const SettingsUserInfo = Form.create({name: 'register'})(UserInfo);
export default SettingsUserInfo