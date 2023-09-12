import { AppBar, Box, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="center" width="100%">
          <Typography variant="body2" color="inherit">
            &copy; {currentYear} Victory Weapons
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FooterComponent;
