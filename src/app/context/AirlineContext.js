import React, { createContext } from 'react'
import { db } from '../context/Config';

export const AirlineContext = createContext();

export class AirlineContextProvider extends React.Component {

    state = {
        airlines: []
    }

    componentDidMount() {

        const prevAirlines = this.state.airlines;
        db.collection('airlines').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevAirlines.push({
                        AirlineID: change.doc.id,
                        AirlineCountry: change.doc.data().AirlineCountry,
                        AirlineInfo: change.doc.data().AirlineInfo,
                        AirlineLogo: change.doc.data().AirlineLogo,       
                        AirlineName:change.doc.data().AirlineName
                    })
                }
                this.setState({
                    airlines: prevAirlines
                })
            })
        })

    }
    render() {
        return (
            <AirlineContext.Provider value={{ airlines: [...this.state.airlines] }}>
                {this.props.children}
            </AirlineContext.Provider>
        )
    }
}