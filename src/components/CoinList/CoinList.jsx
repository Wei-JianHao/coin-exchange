import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {this.props.showBalance ? <th>Balance</th> : null}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                // key values is needed for optimally rendering in react. 
                this.props.coinData.map( ({name, ticker, price, balance}) =>
                  <Coin key={ticker} 
                        handleRefresh={this.props.handleRefresh}
                        name={name} 
                        ticker={ticker}
                        balance={balance}
                        price={price}
                        showBalance={this.props.showBalance} />
                )
              }
            </tbody>
          </Table>
        )
    }
}