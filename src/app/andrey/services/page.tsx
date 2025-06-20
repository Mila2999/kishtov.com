'use client';

import React from 'react';
import { Container, Box, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Store from '../store';

export default function ServicesPage() {
  const router = useRouter();

  return (
    <Box className="min-h-screen bg-blue-100">
      <Container maxWidth="lg">
        <Box sx={{ py: 2 }}>
          <IconButton 
            onClick={() => router.back()}
            sx={{ mb: 2 }}
            aria-label="go back"
          >
            <ArrowBack />
          </IconButton>
          <Store />
        </Box>
      </Container>
    </Box>
  );
} 