import React, { Component } from 'react';

class Project extends Component {

    state = {
        data: ''
      }

    componentDidMount() {
        fetch('http://demo7617443.mockable.io/getProjects')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res.projects
            })
          );
    }

    pointOver = (event) => {
        event.target.style.boxShadow = '0 0 0 2px white';
    }

    pointLeave = (event) => {
        event.target.style.boxShadow = 'none';
        event.target.style.backgroundColor = 'none'
    }

    clickPoint = (event) => {
        event.target.style.boxShadow = '0 0 0 2px #17a2b8'
    }


    render() {
        const {data} = this.state;
        console.log("data ini isi state pro: " + JSON.stringify(data));
        return (
            <div className="project">
                <div className="project-title">
                    <div style={{marginBottom: "35px"}}>
                        <h1 icon="refresh" style={{marginBottom: "12px"}}>Hi Samantha</h1>
                        <p className="text1">Welcome back to the workspace, we missed You!</p>
                    </div>
                    
                    
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search Task or Project..." />
                    </div>
                </div>
                
                <div className="project-list">
                    <div className="row">
                        <div className='col-2'>
                            <p>Projects</p>
                        </div>
                        <div className='col-1'>
                            <p className="text1">(13)</p>
                        </div>
                    </div>
                    
                    
                    {data ?
                    data.slice(0,5).map(datas => {
                        const {project_id,name, has_notification} = datas
                        return (
                            <ul key={name} className="row row-project">
                                <div>
                                    {(function() {
                                        if ( has_notification === true) {
                                            return (
                                            <div className="notif">
                                                <span></span>
                                            </div>
                                        );
                                        } 
                                    })()}
                                </div>
                                <div className="list-style" onMouseOver={this.pointOver} onMouseLeave={this.pointLeave} onClick={this.clickPoint}>
                                    {(function() {
                                        if ( project_id === 1) {
                                            return (
                                                <li className="list1" >
                                                    {name[0]}{name[6]}
                                                </li>);
                                            } else if (project_id === 2) {
                                                return (
                                                    <li className="list2" >
                                                        {name[0]}{name[7]}
                                                    </li>);
                                            } else if (project_id === 3) {
                                                return (
                                                    <li className="list3" >
                                                        {name[0]}{name[5]}
                                                    </li>);
                                            } else if (project_id === 4) {
                                                return (
                                                    <li className="list4" >
                                                        {name[0]}{name[7]}
                                                    </li>);
                                            } else if (project_id === 5) {
                                                return (
                                                    <li className="list5" >
                                                        {name[0]}{name[8]}
                                                    </li>);
                                            } 
                                                else if (project_id === 5) {
                                                    return (
                                                    <li className="list-add" >
                                                        
                                                    </li>);
                                                }
                                            }
                                        )
                                    ()
                                    }  
                                </div>
                                <span className="text3" style={{marginTop:"15px"}}>{name} </span>
                                <h1>{has_notification}</h1>
                            </ul>
                        )
                    })
                :<p>...loading</p>
                }
            </div>
        </div>
        );
    }
}

export default Project;