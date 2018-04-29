import React from 'react';

// bypass TypeScript by using a 'require' rather than 'import'
const styles = require('./styles.scss');

import Column from './Column';

export default () => (
  <div className={ styles.grid }>
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
  </div>
);
