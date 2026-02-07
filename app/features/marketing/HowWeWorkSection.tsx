import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Paper
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Minimal Black & White Theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 2,
  },
});

// Type Definitions
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Service {
  icon: string;
  label: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your business goals, audience, competitors, and challenges to create a solid foundation.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We create strategy, sitemap, wireframes, and tech stack aligned perfectly with your goals.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Clean, modern, user-focused UI/UX design that converts visitors into loyal customers.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'High-performance website/app development using scalable and secure technologies.',
  },
  {
    number: '05',
    title: 'Test & Launch',
    description: 'Rigorous testing, speed optimization, and a smooth production launch that exceeds expectations.',
  },
  {
    number: '06',
    title: 'Grow & Optimize',
    description: 'Analytics, improvements, SEO, updates — and the cycle restarts for continuous growth.',
  },
];

const services: Service[] = [
  { icon: '🌐', label: 'Website Development' },
  { icon: '📱', label: 'Web & Mobile Apps' },
  { icon: '🎨', label: 'UI/UX Design' },
  { icon: '🚀', label: 'Performance & SEO' },
  { icon: '🔄', label: 'Maintenance & Scaling' },
];

const HowWeWorkSection: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="HOW WE WORK" 
              sx={{ 
                mb: 2,
                bgcolor: 'black',
                color: 'white',
                fontWeight: 600,
                letterSpacing: '0.1em',
                fontSize: '0.75rem',
                px: 1,
              }} 
            />
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2,
                fontWeight: 300,
              }}
            >
              From Idea to Impact
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              We don't just build websites — we build <strong>long-term digital systems</strong>. 
              Our process is a continuous cycle that evolves as your business grows.
            </Typography>
          </Box>

          {/* Process Steps */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {processSteps.map((step: ProcessStep, index: number) => (
              <Grid >
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'black',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontSize: '3rem',
                        fontWeight: 200,
                        mb: 2,
                        color: 'text.secondary',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 500,
                        fontSize: '1.5rem',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Visual Section */}
          <Box sx={{ mt: 10 }}>
            <Typography 
              variant="h2" 
              align="center" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 5,
                fontWeight: 300,
              }}
            >
              Our Cyclic Approach
            </Typography>

            {/* Image Grid */}
            <Grid container spacing={3} sx={{ mb: 6 }}>
              <Grid >
                <Paper
                  elevation={0}
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'black',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                      '& img': {
                        transform: 'scale(1.05)',
                      },
                      '& .image-label': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.openai.com/static-rsc-3/kQDWDUppEqoTyNI0cj9BEqHfFopckeTESFZVN27kcifjngY0OyUbs_b0RcS_h9YWssVAjgeaDet35m45aDXp7TRzw9ZVXkgsgQ9DQKyVY_E?purpose=fullsize&v=1"
                    alt="Process Cycle Diagram"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16/11',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  <Box
                    className="image-label"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                      color: 'white',
                      p: 3,
                      fontWeight: 500,
                      opacity: { xs: 1, md: 0 },
                      transform: { xs: 'translateY(0)', md: 'translateY(100%)' },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    🔄 Continuous Process Cycle
                  </Box>
                </Paper>
              </Grid>

              <Grid >
                <Paper
                  elevation={0}
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'black',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                      '& img': {
                        transform: 'scale(1.05)',
                      },
                      '& .image-label': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.wondershare.com/edrawmax/article2023/circular-process-chart/circular-process-charts-intro.jpg"
                    alt="Collaborative Workflow"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16/11',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  <Box
                    className="image-label"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                      color: 'white',
                      p: 3,
                      fontWeight: 500,
                      opacity: { xs: 1, md: 0 },
                      transform: { xs: 'translateY(0)', md: 'translateY(100%)' },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    🤝 Collaborative Team Workflow
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {/* Services */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
              {services.map((service: Service, index: number) => (
                <Chip
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span>{service.icon}</span>
                      <span>{service.label}</span>
                    </Box>
                  }
                  variant="outlined"
                  sx={{
                    py: 2.5,
                    px: 1,
                    borderColor: 'divider',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white',
                      borderColor: 'black',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HowWeWorkSection;