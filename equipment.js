import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import './equipment.css';
import Detail from './details'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AiOutlineDatabase } from 'react-icons/ai';
import { send, change } from './redux';
import { connect } from 'react-redux';

const mapStateToProps = state => {

    return {
        data: state.data,
        dev: state.dev
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toSend: (eqp) => { dispatch(send(eqp)) },
        toChange: () => { dispatch(change()) }
    }
}

export class Equipment extends React.Component {

    constructor() {
        super();
        this.empA = {
            "eName": "Equipment A",
            "vendor": "a vendor",
            "location": "location A",
            "model": "A1",
            "serial": "A123",
            "description": "Equipment name is A"
        }
        this.empB = {
            "eName": "Equipment B",
            "vendor": "b vendor",
            "location": "location B",
            "model": "B1",
            "serial": "B123",
            "description": "Equipment name is B"
        }
        this.empC = {
            "eName": "Equipment C",
            "vendor": "C vendor",
            "location": "location C",
            "model": "C1",
            "serial": "C123",
            "description": "Equipment name is C"
        }
        this.empD = {
            "eName": "Equipment D",
            "vendor": "D vendor",
            "location": "location D",
            "model": "D1",
            "serial": "D123",
            "description": "Equipment name is D"
        }
        this.empE = {
            "eName": "Equipment E",
            "vendor": "E vendor",
            "location": "location E",
            "model": "E1",
            "serial": "E123",
            "description": "Equipment name is E"
        }
        this.empF = {
            "eName": "Equipment F",
            "vendor": "F vendor",
            "location": "location F",
            "model": "F1",
            "serial": "F123",
            "description": "Equipment name is F"
        }
        this.empG = {
            "eName": "Equipment G",
            "vendor": "G vendor",
            "location": "location G",
            "model": "G1",
            "serial": "G123",
            "description": "Equipment name is G"
        }
        this.empH = {
            "eName": "Equipment H",
            "vendor": "H vendor",
            "location": "location H",
            "model": "H1",
            "serial": "H123",
            "description": "Equipment name is H"
        }
    }

    Eqp = () => {
        return (
            <div>
                <button className="first all" onClick={() => { this.props.toSend(this.empA) }}>Equipment A</button>
                <button className="second all" onClick={() => { this.props.toSend(this.empB) }}>Equipment B</button>
                <button className="first all" onClick={() => { this.props.toSend(this.empC) }}>Equipment C</button>
                <button className="second all" onClick={() => { this.props.toSend(this.empD) }}>Equipment D</button>
                <button className="first all" onClick={() => { this.props.toSend(this.empE) }}>Equipment E</button>
                <button className="second all" onClick={() => { this.props.toSend(this.empF) }}>Equipment F</button>
                <button className="first all" onClick={() => { this.props.toSend(this.empG) }}>Equipment G</button>
                <button className="second all" onClick={() => { this.props.toSend(this.empH) }}>Equipment H</button>
            </div>
        )
    }

    render() {

        var detail = null;
        if (this.props.dev) {
            detail = this.Eqp()
        }
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="#"><AiOutlineDatabase /></Breadcrumb.Item>
                    <Breadcrumb.Item >Device Name</Breadcrumb.Item>
                    <Breadcrumb.Item active>{this.props.data.eName}</Breadcrumb.Item>
                </Breadcrumb>
                <CardColumns style={{ display: 'flex', flexDirection: 'row' }} >

                    <Card style={{ flex: 2.5 }}>
                        <Detail />
                    </Card>
                    <Card style={{ flex: 1 }}>
                        <Button variant="primary" size="lg" block disabled>
                            SYSTEM
                        </Button>
                        <button className="device btn-lg btn-block" onClick={() => { this.props.toChange() }}>Device Name</button>

                        <div>{detail}</div>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);