import { theme } from '../src/theme'
import { Theme, ThemeOptions, createTheme } from '@mui/system'
import { deepmerge } from '@mui/utils'

const customTheme = {
  palette: {
    primary: {
      main: '#0f71cb',
      dark: '#0d55af',
      contrastText: '#fff',
      shadow: 'rgba(15, 113, 203, 0.4)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '16px 28px',
        },
      },
    },
  },
}
export const finalTheme = createTheme(
  deepmerge(theme as any, customTheme as any)
)
