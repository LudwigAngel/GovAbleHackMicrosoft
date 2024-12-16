import React,  { useState } from 'react';
import './HomePage.css';
import logoImage from './img/GovAble - Logo - 3.png';
import logoBienvenida from './img/LogoBienvenida.png';
import logoImageTexto from './img/GovAblecontexto.png';
import { FaSmile, FaCog, FaBolt } from 'react-icons/fa';
import { Button, TextField, Typography, Container, Grid, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const HomePage = () => {
  const [url, setUrl] = useState(''); 
  const [results, setResults] = useState(null); 
  const [showAuditSection, setShowAuditSection] = useState(true);
  const handleStartAudit = () => {
    const simulatedResults = {
      score: 65,
      details: [
        { title: 'Perceivable', description: 'Content that everyone can perceive', status: 'Pass' },
        { title: 'Operable', description: 'Interfaces that everyone can use', status: 'Warnings' },
        { title: 'Understandable', description: 'Content that is easy to understand', status: 'Failure' },
        { title: 'Robust', description: 'Built for compatibility', status: 'Pass' },
      ],
    };
    setResults(simulatedResults);
    setShowAuditSection(false);
  };
  // Nueva auditoría
  const handleNewAudit = () => {
    setResults(null);
    setShowAuditSection(true);
  };
  const handleDownloadReport = () => {
    const reportData = `
      Accessibility Audit Results
      Score: ${results?.score}/100
      Details:
      ${results?.details.map((item) => `${item.title}: ${item.status}`).join('\n')}
    `;
    const blob = new Blob([reportData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'audit_report.txt';
    link.click();
  };
  return (
    <div className="home-container">

      <header className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#000' }}>
        <div className="logo-container">
          <img src={logoImage} alt="GovAble Logo" className="logo-image" style={{ maxHeight: '60px' }} />
        </div>
        <nav className="nav-links" style={{ display: 'flex', gap: '4rem' }}>
          <Button href="#home" color="primary" variant="text">Home</Button>
          <Button href="#audit" color="primary" variant="text">Accessibility Audit</Button>
          <Button href="#resources" color="primary" variant="text">Resources</Button>
          <Button href="#team" color="primary" variant="text">Our Team</Button>
          <Button href="#contact" color="primary" variant="text">Contact</Button>
        </nav>
        <Button variant="contained" color="secondary">Log In</Button>
      </header>

      {/* Sección Principal */}
      {showAuditSection && (
      <section className="hero-section" style={{ textAlign: 'center', padding: '1rem', background: '#000', color: '#fff' }}>
        <Container maxWidth="md">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center',  alignItems: 'center', overflow: 'visible'}}>
            <Typography
              variant="h5"
              color="inherit"
              gutterBottom
              style={{ fontSize: '1.5rem', maxWidth: '300px' }}
            >
              Empowering governments to include everyone, everywhere.
            </Typography>
            <img
              src={logoBienvenida}
              alt="Empowering Logo"
              style={{
                maxWidth: 'auto',
                height: '250px',
              }}
            />
          </div>
          <div
            className="audit-bar"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >

          <TextField
            label="Enter the URL of the site"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{
              maxWidth: '400px',
              backgroundColor: '#1c1c1c', 
              '& .MuiInputBase-root': {
                color: '#fff', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#58f777',
                },
                '&:hover fieldset': {
                  borderColor: '#88ffaa',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#58f777', 
                },
              },
              '& .MuiInputLabel-root': {
                color: '#58f777', 
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#88ffaa',
              },
            }}
          />
          <FormControl
            variant="outlined"
            sx={{
              maxWidth: '150px',
              width: '100%',
              backgroundColor: '#1c1c1c',
              '& .MuiOutlinedInput-root': {
                color: '#fff', 
                '& fieldset': {
                  borderColor: '#58f777',
                },
                '&:hover fieldset': {
                  borderColor: '#88ffaa',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#58f777',
                },
              },
            }}
          >
            <InputLabel
              id="select-label"
              sx={{
                color: '#58f777',
                '&.Mui-focused': {
                  color: '#88ffaa', 
                },
              }}
            >
            </InputLabel>
            <Select
              labelId="select-label"
              defaultValue="A"
              sx={{
                color: '#fff',
                '& .MuiSelect-icon': {
                  color: '#58f777',
                },
              }}
            >
              <MenuItem value="A">Nivel A</MenuItem>
              <MenuItem value="AA">Nivel AA</MenuItem>
              <MenuItem value="AAA">Nivel AAA</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className="start-audit-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',     
          }}
        >
         <Button
          className="start-audit-button"
          variant="contained"
          color="neutro"
          style={{
            marginTop: '2.5rem',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            textAlign: 'center',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #58f777', // Borde verde claro
          }}
          onClick={handleStartAudit}
        >
          Start Audit
        </Button>

        </div>
        </Container>
      </section>)}
      {/* Nueva sección de resultados */}
      {results && (
        <section style={{ textAlign: 'center', padding: '2rem', background: '#000', color: '#fff' }}>
          <Typography variant="h4" color="yellow" gutterBottom>
            {results.score}/100
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {results.details.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    background: '#444',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ color: item.status === 'Pass' ? '#58f777' : item.status === 'Warnings' ? '#ffc107' : '#ff5252' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
                    {item.status}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDownloadReport}
            sx={{ margin: '2rem', backgroundColor: '#58f777', color: '#000' }}
          >
            Download Full Report
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleNewAudit} sx={{ margin: '2rem', backgroundColor: '#58f777', color: '#000' }}>
                Iniciar Nueva Auditoría
          </Button>
        </section>
      )}
      <section className="features-section" style={{ padding: '1rem 0', background: '#000', color: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ background: '#444', borderRadius: '10px', padding: '2rem', textAlign: 'center', color: '#fff' }}>
                <FaSmile size={40} color="#58f777" />
                <Typography variant="h6" style={{ color: '#58f777' }} gutterBottom>
                  Inclusive for All
                </Typography>
                <Typography variant="body2">
                  We design with the diverse abilities and needs of all users in mind, ensuring no one is left behind in the digital experience.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ background: '#444', borderRadius: '10px', padding: '2rem', textAlign: 'center', color: '#fff' }}>
                <FaCog size={40} color="#58f777" />
                <Typography variant="h6" style={{ color: '#58f777' }} gutterBottom>
                  Smart Automation
                </Typography>
                <Typography variant="body2">
                  We simplify processes using intelligent technology, enhancing efficiency without compromising accessibility.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ background: '#444', borderRadius: '10px', padding: '2rem', textAlign: 'center', color: '#fff' }}>
                <FaBolt size={40} color="#58f777" />
                <Typography variant="h6" style={{ color: '#58f777' }} gutterBottom>
                  Speed and Adaptability
                </Typography>
                <Typography variant="body2">
                  Fast interactions and a design that seamlessly adapts across devices, offering a smooth experience everywhere.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <footer className="footer" style={{ background: '#444', color: '#fff', padding: '2rem 0' }}>
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="footer-logo">
            <Typography variant="h6" style={{ color: '#58f777' }}>GovAble</Typography>
            <img
              src={logoImageTexto}
              alt="GovAble Logo"
              style={{ maxWidth: '200px', marginTop: '1rem' }}
            />
          </div>
          <div className="footer-contact">
            <Typography variant="body1" style={{ color: '#fff' }}>Contact Us</Typography>
            <Typography variant="body2" style={{ color: '#58f777' }}>govable@outlook.com</Typography>
          </div>
          <div className="footer-links">
            <Typography variant="body1" style={{ color: '#fff' }}>Quick Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#home" style={{ color: '#58f777', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#audit" style={{ color: '#58f777', textDecoration: 'none' }}>Accessibility Audit</a></li>
              <li><a href="#resources" style={{ color: '#58f777', textDecoration: 'none' }}>Resources</a></li>
              <li><a href="#team" style={{ color: '#58f777', textDecoration: 'none' }}>Our Team</a></li>
            </ul>
          </div>
        </Container>
      </footer>

    </div>
  );
};

export default HomePage;
