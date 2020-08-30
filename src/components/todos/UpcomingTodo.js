import React, { Component } from 'react';

class UpcomingTodo extends Component {

    state = {
        data: ''
      }

    componentDidMount() {
        fetch('http://demo2948679.mockable.io/')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res.project
            })
          )
    }

    render() {
        const {data} = this.state;
        
        // console.log("data ini isi state todosss: " + JSON.stringify(data));
        return (
            <div className="upcoming-section">
                <div className="row">
                    <div className="col">
                        <div className="h3-title-section">
                            <h3 className="title-bold ">Upcoming</h3>
                        </div>
                            
                    </div>
                    <div className="col">
                        <div className="option-title column-reverse">
                            <button className="btn btn-link option-style">...</button>
                        </div>
                    </div>
                </div>
                  {data ?
                    data.slice(5,8).map(datas => {
                        const {id,desc, status, check} = datas
                        return (
                            <div className="container">
                                <div key={id} className="row" style={{marginBottom:"10px", padding:"5px"}}>
                                    <div className="col-1" style={{paddingLeft:"0"}}>
                                    <div className="col-1" style={{paddingLeft:"0"}}>
                                        {(function() {
                                            if ( check === 1) {
                                                return <div className="circle-true"></div>;
                                            } else {
                                                return <div className="circle-false"></div>;
                                            }
                                        })()}
                                    </div>
                                        
                                    </div>
                                    <div className="col-8">
                                        <p className="text2" style={{marginTop: "5px"}}>{desc}</p>
                                    </div>
                                    <div className="pos col-3">
                                    {(function() {
                                        if ( status === 'Approved') {
                                            return (
                                            <button className="column-reverse button-approved">
                                                <p >{status}</p>
                                            </button>);
                                        } else if (status === 'In Progress') {
                                            return (
                                            <button className="column-reverse button-progress">
                                                <p >{status}</p>
                                            </button>);
                                        } else if (status === 'In Review') {
                                            return (
                                            <button className="column-reverse button-review">
                                                    <p >{status}</p>
                                                </button>);
                                            }  
                                        else {
                                            return (
                                            <button className="column-reverse button-waiting">
                                                <p >{status}</p>
                                            </button>);
                                        }
                                    })()}

                                    </div>
                                </div>
                            </div>
                        
                            );
                        })
                    :<p>...loading</p>
                    }
            </div>
        );
    }
}

export default UpcomingTodo;