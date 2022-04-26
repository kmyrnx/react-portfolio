import React from 'react';
import './Footer.scss';
import pkg from '../../package.json';

function Footer() {
  return (
    <div className="footer">
      <a href={pkg.repository}>{pkg.displayName}</a>
      {' '}
      is licensed under the
      {' '}
      {pkg.license}
      {' '}
      license.
    </div>
  );
}

export default Footer;
