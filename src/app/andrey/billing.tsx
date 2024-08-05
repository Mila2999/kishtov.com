'use client';

import React from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalButtonsComponentProps,
} from '@paypal/react-paypal-js';
import axios from 'axios';

import plaintext from '../../../conf/plaintext';

export default function Billing() {
  const handleApprove = async (orderID: string) => {
    console.log('Transaction completed. Order ID:', orderID);
    // Optionally, you can call your backend to save the transaction details
    try {
      await axios.post('/api/paypal-transaction-complete', { orderID });
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  const createOrder: PayPalButtonsComponentProps['createOrder'] = (data, actions) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: { value: '10.0', currency_code: 'USD' },
        },
      ],
      application_context: {
        brand_name: 'YOUR BRAND NAME',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
      },
    });
  };

  const onApprove: PayPalButtonsComponentProps['onApprove'] = (data, actions) => {
    if (actions.order) {
      return actions.order.capture().then((details) => {
        handleApprove(data.orderID);
      });
    }

    return Promise.reject(new Error('Order approval failed'));
  };

  return (
    <div>
      <h1>Billing Page</h1>
      <PayPalScriptProvider options={{ clientId: plaintext.paypalClientId }}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          style={{ layout: 'horizontal' }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
