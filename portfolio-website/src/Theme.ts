import { PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export function getThemeOptions(mode: PaletteMode) : ThemeOptions {
    return {
        palette: {
            mode: mode,
          primary: {
            main: '#5c6bc0',
          },
          secondary: {
            main: '#fbfbfd',
          },
          error: {
            main: '#e53935',
          },
        },
        typography: {
          fontFamily: 'JetBrains Mono',
        },
      }
}