import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({ setLanguage }) => {
  return ( 
    <div className="customize-input">
      <select
        className="i18n-selector"
        onChange={(e) => {
          console.log("b: ", e.target.value);
          setLanguage(e.target.value)}
        }
      >
        <option value={`${LOCALES.SPANISH}`}>{("Español")}</option>
        <option value={`${LOCALES.ENGLISH}`}>{("English")}</option>
      </select>
    </div>
  );
};

export default I18nSelect;
