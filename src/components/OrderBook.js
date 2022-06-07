import React from 'react';
import { abbreviateNumber } from "js-abbreviation-number";

export default function OrderBook({buyOrders, sellOrders, pair, autoFillOrder}) {
  return (
    <>
      <div className="order-book" style={{flex: 1}}>
        <h2 className="heading">Order Book</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Price ({pair.split('-')[1]})</th>
              <th>Size ({pair.split('-')[0]})</th>
            </tr>
          </thead>
          <tbody>
          {sellOrders.map(order => {
              return (
                <tr className="red-bg" onClick={(e) => autoFillOrder(order.price, order.amountA, order.buySell)}>
                  <div className='sell-fill' style={{width: `${order.filledAmount/order.amountA * 100}%`}}></div>
                  <td className="red">{order.price}</td>
                  <td>{abbreviateNumber(order.amountA, 1)}</td>
                </tr>
              )
            })}
          </tbody>

          <tbody className="ob-heading">
            <tr>
              <td>
                <span><strong>Price</strong> </span>
                0.020367
              </td>
              <td>
                <span><strong>USD</strong></span>
                00.00
              </td>
              <td className="green">
                <span><strong>Change (24H)</strong></span>
                +100.51%
              </td>
            </tr>
          </tbody>
          
          
          <tbody>
            {buyOrders.map(order => {
              return (
                <tr className="green-bg" onClick={(e) => autoFillOrder(order.price, order.volume, order.buySell)}>
                  <div className='buy-fill' style={{width: `${order.filledAmount/order.amountA * 100}%`}}></div>
                  <td className="green">{order.price}</td>
                  <td>{abbreviateNumber(order.amountA, 1) }</td>
                </tr>
              )
            })}
            
            
          </tbody>
        </table>
      </div>
    </>
  );
}
