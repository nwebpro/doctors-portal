import React from 'react';

const PrimaryButton = ({ btnText, classes }) => {
    return (
        <button className={`p-4 rounded-lg bg-gradient-to-r from-theme-2nd to-theme-1st text-white text-sm leading-5 font-bold ${ classes }`}>{ btnText }</button>
    );
};

export default PrimaryButton;