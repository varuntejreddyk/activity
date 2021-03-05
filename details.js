import React from 'react';
import './details.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}


export class Detail extends React.Component {

    render() {
        return (

            <div className="card shadow mb-5 bg-white rounded height">
                <nav className="navbar bg-grey">
                    <h5>Equipment Details</h5>
                </nav>
                <div className="row no-gutters">
                    <div className="col-auto px-4">
                        <img src="//placehold.it/300" className="img-fluid" alt="equipment" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-block">
                            <form className="form-group">
                                <div >
                                    Equipment Name
                                                <input className="form-control" defaultValue={this.props.data.eName}></input>
                                </div>
                                <div >
                                    Vendor
                                                <input className="form-control" defaultValue={this.props.data.vendor}></input>
                                </div>
                                <div >
                                    Location
                                                <input className="form-control" defaultValue={this.props.data.location}></input>
                                </div>
                                <div >
                                    Model
                                                <input className="form-control" defaultValue={this.props.data.model}></input>
                                </div>
                                <div >
                                    Serial #
                                                <input className="form-control" defaultValue={this.props.data.serial}></input>
                                </div>
                                <div >
                                    Description
                                                <input className="form-control" defaultValue={this.props.data.description}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Detail);