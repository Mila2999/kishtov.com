import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <main className="flex bg-blue-100 min-h-screen flex-col items-center justify-between content-between p-2">
      <Container fixed>
        <div className="flex flex-col justify-center content-center">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/avatar.jpeg"
            sx={{ width: 500, height: 500 }}
          />
          <h2 className="text-[84px] text-teal-400">Mila Savonik</h2>
        </div>
      </Container>
    </main>
  );
}
