import React from 'react';

// bypass TypeScript by using a 'require' rather than 'import'
const styles = require('./styles.scss');

export default () => (
  <div className={ styles.grid }>This is a grid</div>
);
