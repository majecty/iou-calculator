import '../styles/styles.sass';

import React from 'react';

import BillInput from '../components/BillInput';

export default class Index extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Hello Next.js</h1>
          <BillInput />
        </div>
      </div>
    )
  }
}