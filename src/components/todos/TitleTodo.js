import React, { Component } from 'react';

class TitleTodo extends Component {
    render() {
        return (
            <div className="title-section row">
                <div className="col-7">
                    <h1 className="title-bold" style={{marginBottom: "12px"}}>
                        Cyber Punk
                    </h1>
                    <p className="text1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="col-5">
                    <ul className="column-reverse">
                        <li className="follower-item">
                            <span>A</span>
                        </li>
                        <li className="follower-item">
                            <span>B</span>
                        </li>
                        <li className="follower-item">
                            <span>C</span>
                        </li>
                        <li className="follower-add">
                            <span>+</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TitleTodo;