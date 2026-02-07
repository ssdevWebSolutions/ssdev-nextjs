'use client';
import React from 'react';
import { Box, Typography, Card, CardActionArea, Link } from '@mui/material';
import { keyframes } from '@mui/system';

type Client = {
  id: number;
  name: string;
  logo: string;
  website?: string;
};

const clients: Client[] = [
  {
    id: 1,
    name: 'DOCTOR CHAITANYA',
    logo: '/clientLogos/doctorchaitanya.png',
    // website: 'https://doctorchaitanya.com',
  },
  {
    id: 2,
    name: 'MASTERCLASS CRICKET',
    logo: '/clientLogos/masterclasscricket.ico',
    // website: 'https://masterclasscricket.com',
  },
  {
    id: 3,
    name: 'RS Finance',
    logo: '/clientLogos/RSFinance.png',
    // website: 'https://masterclasscricket.com',
  },
];

// Infinite scroll animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

 const Clients: React.FC = () => {
  // Quadruple the clients for seamless infinite scroll
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        py: { xs: 6, md: 8 },
        overflow: 'hidden',
        // position: 'relative',
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 700,
          mb: 6,
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Our Clients
      </Typography>

      {/* Infinite Scroll Container */}
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          animation: `${scroll} 25s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
          mb: 2,
        }}
      >
        {repeatedClients.map((client, index) => (
          <Box
            key={`${client.id}-${index}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            {/* Card with Logo */}
            <Card
              sx={{
                width: { xs: 160, sm: 180, md: 200 },
                height: { xs: 160, sm: 180, md: 200 },
                backgroundColor: 'white',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <CardActionArea
                component={client.website ? Link : 'div'}
                href={client.website || '#'}
                target={client.website ? '_blank' : undefined}
                rel={client.website ? 'noopener noreferrer' : undefined}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                }}
              >
                <Box
                  component="img"
                  src={client.logo}
                  alt={client.name}
                  sx={{
                    maxWidth: '80%',
                    maxHeight: '80%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </CardActionArea>
            </Card>

            {/* Client Name Below Card */}
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                mt: 2,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              {client.name}
            </Typography>
          </Box>
        ))}
      </Box>

      
    </Box>
  );
};

export default Clients;