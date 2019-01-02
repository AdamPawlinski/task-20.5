import React from 'react';
import style from '../country.css';

const CountryDetails = (props) => (
    <div className={style.countryWrapper}>
        <header>
            <img className={style.countryPhoto} src={props.country.imageUrl} alt="country flag" />
        </header>
        <div className={style.countryInfo}>
            <h1>{props.country.name}</h1>
            <h2>Continent: {props.country.continent}</h2>

            <div className={style.info}>
                <div>
                    <span>{props.country.populace}</span>
                    <span>Citizens[mln]</span>
                </div>

                <div>
                    <span>{props.country.capital}</span>
                    <span>Capital</span>
                </div>

                <div>
                    <span>{props.country.currency}</span>
                    <span>Currency</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;
