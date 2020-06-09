import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    bg: {
      main: '#23232e',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          fontSize: '20px',
        },
      },
    },
  },
});
/*export const theme = {
  theme_colors: {
    primary: '#400135',
    secondary: '#F2D57E',
    success: '#04D9B2',
    info: '#076DF2',
    warning: '#F27405',
    danger: '#F21505',
    light: '#B0B0B0',
    dark: '#4F4F4F',
    link: '#F9EDC3',
  },

  mq: {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1140px',
  },
};*/

/*
 Color Theme Swatches in Hex
$Fisksoppa-1-hex: #400135;
$Fisksoppa-2-hex: #F2D57E;
$Fisksoppa-3-hex: #F2D5A0;
$Fisksoppa-4-hex: #F2856D;
$Fisksoppa-5-hex: #BF7973;

/* Color Theme Swatches in RGBA
$Fisksoppa-1-rgba: rgba(63,1,53, 1);
$Fisksoppa-2-rgba: rgba(242,213,125, 1);
$Fisksoppa-3-rgba: rgba(242,213,159, 1);
$Fisksoppa-4-rgba: rgba(242,133,109, 1);
$Fisksoppa-5-rgba: rgba(191,121,114, 1);

/* Color Theme Swatches in HSLA
$Fisksoppa-1-hsla: hsla(309, 96, 12, 1);
$Fisksoppa-2-hsla: hsla(45, 82, 72, 1);
$Fisksoppa-3-hsla: hsla(39, 76, 78, 1);
$Fisksoppa-4-hsla: hsla(11, 83, 68, 1);
$Fisksoppa-5-hsla: hsla(5, 37, 60, 1);
 */
