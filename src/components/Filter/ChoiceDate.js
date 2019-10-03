import React from "react";
import {DatePicker} from "antd";

const { RangePicker } = DatePicker;

class ChoiceDate extends React.Component{
    render() {
        return(
            <div>
                <DatePicker showTime placeholder="Select Time" />
            </div>
        )
    }


}
export default ChoiceDate