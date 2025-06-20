'use client';

import React, { useState, useEffect } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import axios from 'axios';
import { Alert, Box, Typography, CircularProgress, Card, CardContent } from '@mui/material';

import plaintext from '../../../conf/plaintext';
import { StoreItem } from './store';

interface PaymentDetails {
  orderID: string;
  status: string;
  email: string;
}

interface BillingProps {
  selectedItem: StoreItem;
}

export default function Billing({ selectedItem }: BillingProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<PaymentDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApprove = async (orderID: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/paypal-transaction-complete', { 
        orderID,
        itemId: selectedItem.id,
        amount: selectedItem.price
      });
      
      setSuccess({
        orderID,
        status: 'completed',
        email: response.data.payer.email_address
      });
    } catch (error) {
      console.error('Error saving transaction:', error);
      setError('Failed to process payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const createOrder: PayPalButtonsComponentProps['createOrder'] = (data, actions) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: { 
            value: selectedItem.price.toFixed(2),
            currency_code: 'USD'
          },
          description: `Payment for ${selectedItem.name} at Kishtov.com`
        },
      ],
      application_context: {
        brand_name: 'Kishtov.com',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        shipping_preference: 'NO_SHIPPING'
      },
    });
  };

  const onApprove: PayPalButtonsComponentProps['onApprove'] = async (data, actions) => {
    if (actions.order) {
      try {
        const details = await actions.order.capture();
        await handleApprove(data.orderID);
      } catch (error) {
        setError('Payment capture failed. Please try again.');
        throw error;
      }
    } else {
      throw new Error('Order approval failed');
    }
  };

  const onError: PayPalButtonsComponentProps['onError'] = (err) => {
    console.error('PayPal error:', err);
    setError('Payment failed. Please try again.');
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Complete Purchase
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {selectedItem.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {selectedItem.description}
          </Typography>
          <Typography variant="h5" color="primary">
            ${selectedItem.price.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Payment completed successfully! Order ID: {success.orderID}
        </Alert>
      )}

      {loading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}

      <PayPalScriptProvider 
        options={{ 
          clientId: plaintext.paypalClientId,
          currency: 'USD',
          intent: 'capture'
        }}
      >
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          style={{ 
            layout: 'vertical',
            shape: 'rect',
            label: 'pay'
          }}
          disabled={loading}
        />
      </PayPalScriptProvider>
    </Box>
  );
}
