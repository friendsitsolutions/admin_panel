import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
// import Logo from 'components/logo';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
      {/* <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} /> */}

      <Typography variant="h4">Admin Panel</Typography>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
