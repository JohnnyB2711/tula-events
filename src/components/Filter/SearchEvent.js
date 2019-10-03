import React from "react";
import {Form, Row, Col, Input, Button, DatePicker, Cascader, Checkbox, Collapse} from 'antd';
import ChoiceTimeInterval from "../ChoiceTimeInterval";
import ChoiceDate from "./ChoiceDate";

class Search extends React.Component {
    state = {
        expand: false,
        searchValue: [{
            genre: {},
            date: {},
            radioButton: {},
            place: {},
        }]
    };
    handleSearch = async (e) => {
        e.preventDefault();
        console.log(this.props.form);
    }
    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {Panel} = Collapse;
        const {getFieldDecorator} = this.props.form;
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang'
            },
        ];
        return (
            <Collapse>
                <Panel header="Фильтры">
                    <Form className="SearchField ant-advanced-search-form" onSubmit={this.handleSearch}>
                        <Form.Item>
                            {getFieldDecorator(`genre`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Input something!',
                                    },
                                ]
                            })(<Cascader
                                fieldNames={{label: 'label', value: 'value'}}
                                className='InputSearch Cascader'
                                options={options}
                                placeholder="Жанр мероприятия"/>,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`date`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Input something!',
                                    },
                                ],
                            })(<ChoiceTimeInterval/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`place`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Заполните поля для фильтра!',
                                    },
                                ],
                            })(<Input className='InputSearch' placeholder="Введите место"/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`radioButton`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Заполните поля для фильтра!',
                                    },
                                ],
                            })(<Checkbox>Рядом со мной</Checkbox>)}
                        </Form.Item>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit">
                                    Поиск
                                </Button>
                                <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                    Очистить
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Panel>
            </Collapse>
        );
    }
}

const SearchEvent = Form.create({name: 'advanced_search'})(Search);
export default SearchEvent;