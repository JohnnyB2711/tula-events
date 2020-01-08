import React from "react";
import ChoiceTimeInterval from '../ChoiceTimeInterval'
import {Form, Input, Button, Checkbox, Select, Row , Col} from 'antd';
import UpLoadAvatar from "../UpLoadAvatar";

class NewEvent extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        genres: [
            {
                value: 'zhejiang',
                label: 'Zhejiang'
            },
        ]

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
        const {TextArea} = Input;
        const {Options} = Select;
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 24},
        };
        return (
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            <UpLoadAvatar/>
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator(`title`, {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Введите название мероприятия',
                                    },
                                ],
                            })(<Input className='Input' placeholder="Название"/>)}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator(`place`, {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Введите место проведения мероприятия',
                                    },
                                ],
                            })(<Input className='Input' placeholder="Место"/>)}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator('select-multiple', {
                                rules: [
                                    {required: true, message: 'Выберите жанр(ы) мероприятия', type: 'array'},
                                ],
                            })(
                                <Select mode="multiple" placeholder="Жанр мероприятия">
                                    {/*   {
                                this.state.genres.map((genre) => {
                                    return <Options key={genre.value}>{genre.label}</Options>
                                })
                            }*/}
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator(`date`, {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Выберите время проведения мероприятия',
                                    },
                                ],
                            })(<ChoiceTimeInterval className='Input'/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`about`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Заполните поля для фильтра!',
                                    },
                                ],
                            })(<TextArea className='Input' rows={4}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`radioButton`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Заполните поля для фильтра!',
                                    },
                                ],
                            })(<Checkbox>Доступно только для авторизованных пользователей</Checkbox>)}
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className='Button'>
                            Создать
                        </Button>
                    </Form>
                </Col>
            </Row>


        );
    }
}

const EventCreate = Form.create({name: 'register'})(NewEvent);
export default EventCreate