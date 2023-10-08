import './DestinationSelection.css';
import React from 'react';
import logo from './logo-horiz_darkbg.png';

function DestinationSelection() {
    return (
        <div id='DestinationSelection'>
            <div class="centered-rectangle">
                <h1 className="mb-1 ps-5 pb-1" style={{ letterSpacing: '1px', color: '#00ffe7', fontWeight: 'bold', fontSize: '50px' }}>Find your new starlit adventure with</h1>
                <img className="ps-3 pb-1" src={logo} width="811" height="129" />
                <p className="fw-normal mb-1 ps-5" style={{ letterSpacing: '1px', color: 'white' }}>Browse through our catalog of cosmic quality vacation offers and select your perfect gateway.</p>
                <br/>
                <p className="mb-1 ps-5" style={{ color: 'white' }}>Departure</p>
                <select style={{marginLeft: 47}}>
                        <option value="earth">Earth</option>
                        <option value="meat">Moon</option>
                        <option value="mercury">Mercury</option>
                        <option value="venus">Venus</option>
                        <option value="meat">Mars</option>
                        <option value="meat">Jupiter</option>
                        <option value="meat">Saturn</option>
                        <option value="meat">Uranus</option>
                        <option value="meat">Neptune</option>
                </select>
            </div>
        </div>
    );
}

export default DestinationSelection;