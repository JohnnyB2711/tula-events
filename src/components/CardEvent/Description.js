import React from "react";

class Description extends React.Component {
    state={
        unFold: false,
    };
    moreDetails = (e) => {
        e.preventDefault();
        this.setState({
                unFold: !this.state.unFold
            }
        )
    };
    render() {
        return (
            <div className='CardText'>
                <h3>Название</h3>
                <h5>Октава 10:00</h5>
                <a className='Href' onClick={(e) => {
                    this.moreDetails(e)
                }}>{
                    this.state.unFold === false ? 'Описание' : 'Скрыть'}</a>
                {
                    this.state.unFold === true ?
                        (<span className='InfoAboutEvent'>
                                We supply a series of design principles, practical patterns and
                                high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.
                                We supply a series of design principles, practical patterns and
                                high quality design resources (Sketch and Axure),
                                to help people create their product prototypes beautifully and efficiently.
                                We supply a series of design principles, practical patterns and
                                high quality design resources (Sketch and Axure),
                                to help people create their product prototypes beautifully and efficiently.
                                We supply a series of design principles, practical patterns and
                                high quality design resources (Sketch and Axure),
                                to help people create their product prototypes beautifully and efficiently.
                            </span>) : null
                }
            </div>
        )
    }

}
export default Description