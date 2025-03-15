'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  Paper,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import { GitHub, LinkedIn, Store as StoreIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'AWS',
  'Docker',
  'GraphQL',
  'MongoDB',
  'PostgreSQL',
];

export default function About() {
  const router = useRouter();

  return (
    <Box className="min-h-screen bg-blue-100">
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 8 }}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Avatar
                src="/andrey-profile.jpg"
                alt="Andrey Kishtov"
                sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h4" gutterBottom>
                Andrey Kishtov
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Senior Software Engineer
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
                <IconButton
                  href="https://github.com/andreykishtov"
                  target="_blank"
                  aria-label="github"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/andreykishtov"
                  target="_blank"
                  aria-label="linkedin"
                >
                  <LinkedIn />
                </IconButton>
              </Stack>
              <Button
                variant="contained"
                startIcon={<StoreIcon />}
                onClick={() => router.push('/andrey/services')}
                fullWidth
              >
                View My Services
              </Button>
            </Paper>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography paragraph>
                I am a passionate Senior Software Engineer with extensive experience in full-stack development.
                My expertise lies in building scalable web applications using modern technologies and best practices.
                I specialize in React, Node.js, and cloud architecture, helping companies deliver high-quality software solutions.
              </Typography>
              
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {skills.map((skill) => (
                  <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
              </Box>

              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <Typography paragraph>
                With over 6 years of experience in software development, I&apos;ve worked with startups
                and enterprise companies, helping them build robust and scalable applications.
                I&apos;m passionate about clean code, performance optimization, and creating exceptional
                user experiences.
              </Typography>

              <Typography variant="h5" gutterBottom>
                Services
              </Typography>
              <Typography paragraph>
                I offer professional consulting services including code reviews, architecture design,
                and technical consulting. Click the &quot;View My Services&quot; button to learn more about
                how I can help with your project.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
