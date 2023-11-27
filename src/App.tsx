import { Box, Grid, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';

const App = () => {
  const theme = useTheme();
  console.log({ theme: theme.typography });

  const colors = [
    'primary',
    'secondary',
    'warning',
    'error',
    'info',
    'success'
  ];

  return (
    <Box sx={{ p: 3 }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, soluta.
        Laboriosam, doloribus. Ipsum quis unde atque ut nam distinctio?
        Praesentium porro amet alias repellat nam. Sequi cupiditate enim
        expedita dolorum!
      </p>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
      {colors.map(col => (
        <Grid container alignItems="center" spacing={3} sx={{ mb: 3 }}>
          <Grid item>
            <Button variant="text" color={col} disabled>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color={col}>
              Contained
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color={col}>
              Outlined
            </Button>
          </Grid>{' '}
          <Grid item>
            <Button variant="contained" size="large" color={col}>
              Contained
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="small" color={col}>
              Contained
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default App;
