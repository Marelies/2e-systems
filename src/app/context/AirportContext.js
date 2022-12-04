import React, { createContext } from 'react'
import { db } from '../context/Config';

export const AirportContext = createContext();

export class AirportsContextProvider extends React.Component {

    state = {
        airports: []
    }

    componentDidMount() {

        const prevAirports = this.state.airports;
        db.collection('airports').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevAirports.push({
                        airportID: change.doc.id,
                        airportName: change.doc.data().airportName,
                        airportGPS: change.doc.data().airportGPS,
                       
                        airportISO:change.doc.data().airportISO,
                        airportCountry:change.doc.data().airportCountry
                    })
                }
                this.setState({
                    airports: prevAirports
                })
            })
        })

    }
    render() {
        return (
            <AirportContext.Provider value={{ airports: [...this.state.airports] }}>
                {this.props.children}
            </AirportContext.Provider>
        )
    }
}