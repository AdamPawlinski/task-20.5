import React from 'react';
import style from '../country.css';

const CountryFlag = (props) => (
    <div className={style.countryLogoWrapper}>
        <img className={style.countryLogo} src={props.country.imageUrl} alt="country flag" />
    </div>
);

export default CountryFlag;
