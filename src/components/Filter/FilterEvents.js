import React from "react";
import {Form, Input, Button, Checkbox, Collapse , Select} from 'antd';
import ChoiceTimeInterval from "../ChoiceTimeInterval";
import './Filter.scss'



class Search extends React.Component {
    state = {
        expand: false,
        searchValue: [{
            genre: {},
            date: {},
            radioButton: {},
            place: {}
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
        const {Option} = Select;
        const {Panel} = Collapse;
        const {getFieldDecorator} = this.props.form;
        const items = ["apple", "King of fruits", "Orange"];
        return (
            <Collapse>
                <Panel header="Фильтры">
                    <Form className="d-flex flex-column" onSubmit={this.handleSearch}>
                        <div className="d-flex flex-column flex-md-row justify-content-md-around flex-wrap">
                            <Form.Item>
                                {getFieldDecorator(`genre`, {
                                    rules: [
                                        {
                                            required: false,
                                            message: 'Input something!',
                                        },
                                    ]
                                })(
                                    <Select
                                        showSearch
                                        placeholder="Тип"
                                        optionLabelProp="label"
                                        optionFilterProp="children"
                                    >
                                        {items.map(item => (
                                            <Option key={item} value={item} label={item}>
                                                <div>
                                                    {item}
                                                </div>
                                            </Option>
                                        ))}
                                    </Select>
                                    ,)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator(`place`, {
                                    rules: [
                                        {
                                            required: false,
                                            message: 'Заполните поля для фильтра!',
                                        },
                                    ],
                                })(<Input  placeholder="Введите место"/>)}
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
                                {getFieldDecorator(`radioButton`, {
                                    rules: [
                                        {
                                            required: false,
                                            message: 'Заполните поля для фильтра!',
                                        },
                                    ],
                                })(<Checkbox>Рядом со мной</Checkbox>)}
                            </Form.Item>
                        </div>

                        <div className="d-flex m-auto">
                            <Button type="primary" htmlType="submit">
                                Поиск
                            </Button>
                            <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                Очистить
                            </Button>
                        </div>

                    </Form>
                </Panel>
            </Collapse>
        );
    }
}

const FilterEvents = Form.create({name: 'advanced_search'})(Search);
export default FilterEvents;