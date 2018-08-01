import React from 'react';

import ElementComponent from 'components/ComponentPalette/ElementComponent';

// bypass TypeScript by using a 'require' rather than 'import'
const styles = require('./styles.scss')

export default () => (
  <div className={ styles.componentPalette }>
    <ElementComponent name='div' />
    <ElementComponent name='span' />
    <ElementComponent name='h1' />
    <ElementComponent name='h2' />
    <ElementComponent name='h3' />
    <ElementComponent name='a' />
  </div>
);
