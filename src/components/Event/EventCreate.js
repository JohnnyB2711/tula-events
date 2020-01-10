import React from "react";
import ChoiceTimeInterval from '../ChoiceTimeInterval'
import {Form, Input, Button, Checkbox, Select, Row, Col ,DatePicker} from 'antd';
import UpLoadAvatar from "../UpLoadAvatar";
import {date, eventName, gerne, place} from "../../helpers/validations";
const { RangePicker } = DatePicker;
class NewEvent extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        genres: [
            {
                value: 0,
                label: 'Семейное'
            },
            {
                value: 1,
                label: 'Детское'
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
        const {Option} = Select;
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
                            {getFieldDecorator(`eventName`, eventName)(<Input className='Input'
                                                                              placeholder="Название"/>)}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator(`place`, place)(<Input className='Input' placeholder="Место"/>)}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator('genre', gerne)(
                                <Select mode="multiple" placeholder="Жанр мероприятия">
                                    {
                                        this.state.genres.map((genre) => {
                                            return <Option key={genre.value}>{genre.label}</Option>
                                        })
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator(`date`)(<RangePicker/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`about`)(<TextArea className='Input' rows={4}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`private`)(<Checkbox>Доступно только для авторизованных
                                пользователей</Checkbox>)}
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