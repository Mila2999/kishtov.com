'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  CardActions,
  Container,
} from '@mui/material';
import Billing from './billing';

export interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const storeItems: StoreItem[] = [
  {
    id: '1',
    name: 'Premium Consultation',
    description: 'One hour of professional consultation on web development and architecture',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  },
  {
    id: '2',
    name: 'Code Review',
    description: 'Comprehensive code review of your project with detailed feedback',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  },
  {
    id: '3',
    name: 'Architecture Design',
    description: 'Custom software architecture design for your project',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
  },
];

export default function Store() {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const handleSelectItem = (item: StoreItem) => {
    setSelectedItem(item);
  };

  const handleBackToStore = () => {
    setSelectedItem(null);
  };

  if (selectedItem) {
    return (
      <Container maxWidth="md">
        <Button onClick={handleBackToStore} sx={{ mb: 2 }}>
          ← Back to Store
        </Button>
        <Billing selectedItem={selectedItem} />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Andrey Kishtov Store
        </Typography>
        <Grid container spacing={4}>
          {storeItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography>{item.description}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    onClick={() => handleSelectItem(item)}
                  >
                    Purchase
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
} 