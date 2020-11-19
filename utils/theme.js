import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette : {
    primary   : green,
    secondary : indigo
  }
});

export default theme;
