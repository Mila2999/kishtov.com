import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MilaAbout from './mila';
export default function About() {
  return (
    <main className="flex bg-blue-100 min-h-screen flex-col items-center justify-between content-between p-2">
      <Container fixed>
        <MilaAbout />
      </Container>
    </main>
  );
}
