import {
  borderColor,
  createTheme,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  padding,
} from '@mui/system'
import { deepmerge } from '@mui/utils'
import { theme } from '../src/theme'
import createPalette from '@mui/material/styles/createPalette'
import createTypography from '@mui/material/styles/createTypography'

const getFontFamily = (name: string): string =>
  [
    `"${name}"`,
    '-apple-system',
    '"Karbon"',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
    'serif',
  ].join(',')

enum FONT_PALETTE {
  PRIMARY = `"Karbon", Arial, Sans-serif, Serif`,
  SECONDARY = `"Karbon", Arial, Sans-serif, Serif`,
  PRIMARY_SEMI_BOLD = `"Karbon", Arial, Sans-serif, Serif`,
  PRIMARY_LIGHT = `"Karbon", Arial, Sans-serif, Serif`,
}
export enum COLOR_PALETTE {
  WHITE = '#ffffff',
  BLACK = '#000000',
  PRIMARY = '#D31184',
  PRIMARY_HOVER = '#A60F68',
  SECONDARY = '#4D4D4D',
  SECONDARY_HOVER = '#333333',
  SUCCESS = '#6BA13C',
  SUCCESS_LIGHT = '#DBEBB0',
  SUCCESS_DARK = '#406124',
  ERROR = '#B62100',
  ERROR_LIGHT = '#F0D3CC',
  ERROR_DARK = '#6D1400',

  INFO = '#0F71CB',
  INFO_LIGHT = '#EAF1FE',
  INFO_DARK = '#0D55AF',
  WARNING = '#F58220',
  WARNING_LIGHT = 'rgba(245, 130, 32, 0.15)',
  WARNING_DARK = '#B95B09',
  GRAY = '#A6A6A6',
  LIGHT_GRAY = '#F6F6F6',
  BOX_SHADOW = 'rgba(223, 223, 223,1)',
}
enum TEXT_PALETTE {
  PRIMARY = '#111111',
  SECONDARY = '#252525',
  TERTIARY = '#888888',
  QUATERNARY = '#A2A2A2',
}

enum COLOR_PALETTE_CHIP {
  PENDING_MAIN = '#FFF6E5',
  PENDING_CONTRASTTEXT = '#EA730B',
  CONFIRMED_MAIN = '#DBEBB0',
  CONFIRMED_CONTRASTTEXT = '#406124',
  DECLINED_MAIN = '#F0D3CC',
  DECLINED_CONTRASTTEXT = '#B62100',
  INFO_MAIN = '#EAF1FE ',
  INFO_CONTRASTTEXT = '#0F71CB',
  LABEL_MAIN = '#DFDFDF',
  LABEL_CONTRASTTEXT = '#000000',
}
const paletteDefinitions = {
  common: {
    white: '#ffffff',
    black: '#000000',
  },
  primary: {
    main: COLOR_PALETTE.PRIMARY,
    dark: COLOR_PALETTE.PRIMARY_HOVER,
    contrastText: COLOR_PALETTE.WHITE,
    light: COLOR_PALETTE.GRAY,
    shadow: COLOR_PALETTE.PRIMARY,
  },
  secondary: {
    main: COLOR_PALETTE.SECONDARY,
    dark: COLOR_PALETTE.BLACK,
    light: COLOR_PALETTE.GRAY,
    contrastText: COLOR_PALETTE.WHITE,
  },
  brand: {
    brand01: COLOR_PALETTE.PRIMARY,
    brand02: '#B3CB2D',
  },
  action: {
    active: COLOR_PALETTE.WHITE,
    disabled: '#ffffff',
    disabledBackground: COLOR_PALETTE.GRAY,
  },
  danger: {
    danger: COLOR_PALETTE.ERROR,
    dangerHover: '#E5231D',
    dangerBadge: '#FB6540',
  },
  support: {
    success: COLOR_PALETTE.SUCCESS,
    error: COLOR_PALETTE.ERROR,
    info: COLOR_PALETTE.INFO,
    warning: COLOR_PALETTE.WARNING,
  },
  success: {
    main: COLOR_PALETTE.SUCCESS,
    dark: COLOR_PALETTE.SUCCESS_DARK,
    light: COLOR_PALETTE.SUCCESS_LIGHT,
  },
  error: {
    main: COLOR_PALETTE.ERROR,
    dark: COLOR_PALETTE.ERROR_DARK,
    light: COLOR_PALETTE.ERROR_LIGHT,
  },
  info: {
    main: COLOR_PALETTE.INFO,
    dark: COLOR_PALETTE.INFO_DARK,
    light: COLOR_PALETTE.INFO_LIGHT,
    contrastText: COLOR_PALETTE.BLACK,
  },
  warning: {
    main: COLOR_PALETTE.WARNING,
    dark: COLOR_PALETTE.WARNING_DARK,
    light: COLOR_PALETTE.WARNING_LIGHT,
    contrastText: COLOR_PALETTE.WHITE,
  },

  icon: {
    icon01: '#939393',
    icon02: '#B6B6B6',
    icon03: '#333333',
  },
  border: {
    border01: '#DCDCDC',
    border02: '#B6B6B6',
    border03: '#989898',
    border04: '#0F71CB',
  },
  chip: {
    release: '#0D61AE',
    active: '#88982D',
    inactive: '#D91E18',
    created: '#8f8013',
    inReview: '#8f8013',
    enabled: '#007877',
    default: '#888888',
    bgRelease: '#EAF1FE',
    bgActive: '#F0F5D5',
    bgInactive: '#FFF7FF',
    bgCreated: '#f5efd5',
    bgInReview: '#f5efd5',
    bgEnabled: '#DEEEEF',
    bgDefault: '#c7c5c5',
  },
  stepper: {
    stepDone: '#B3CB2D',
    stepCurrent: '#FFA600',
    stepUpcoming: '#EAEAEA',
  },
  background: {
    background01: '#ffffff',
    background02: '#F3F3F3',
    background03: '#E9E9E9',
    background04: '#F4FBFD',
    background05: '#F5F9EE',
    background06: '#FFF7EC',
    background07: '#F5F5F5',
    background08: '#FFF6FF',
    background09: '#EDF0F4',
    background10: '#303030F2',
    background11: '#EDEFF2',
    background12: '#8E8E8E1A',
    background13: '#DFE4EA',
    background14: '#303030',
  },
  textField: {
    placeholderText: '#8D8D8D',
    helperText: '#717171',
    background: '#F7F7F7',
    backgroundHover: '#ECECEC',
  },
  text: {
    primary: '#111111',
    secondary: '#252525',
    tertiary: '#888888',
    quaternary: '#A2A2A2',
  },
  accent: {
    accent01: '#4D73D5',
    accent02: '#F2F3FB',
    accent03: '#676BC6',
    accent04: '#E1F1FF',
    accent05: '#FFEBCC',
    accent06: '#5E3416',
    accent07: '#88982D',
    accent08: '#F0F5D5',
    accent09: '#FDB943',
    accent10: '#428C5B',
    accent11: '#337B89',
    accent12: '#2B4078',
  },
  selected: {
    hover: 'rgba(15, 113, 203, 0.05)',
    focus: 'rgba(15, 113, 203, 0.15)',
    active: 'rgba(15, 113, 203, 0.2)',
  },
  pending: {
    main: '#FFF6E5',
    contrastText: '#EA730B',
  },
  confirmed: {
    main: '#DBEBB0',
    contrastText: '#406124',
  },
  declined: {
    main: '#F0D3CC',
    contrastText: '#B62100',
  },
  label: {
    main: '#DFDFDF',
    contrastText: '#000000',
  },

  buttons: {
    darkGrey: '#e1e1e1',
    lightGrey: '#f3f3f3',
    white: '#f9f9f9',
    yellow: '#f5f9ee',
  },
}
const palette = createPalette(paletteDefinitions as any)

export const typographyDefinitions = {
  fontWeight: 400,
  htmlFontSize: 16,
  allVariants: {
    color: TEXT_PALETTE.PRIMARY,
  },
  h1: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 64,
    lineHeight: '110%',
    letterSpacing: 0,
  },
  h2: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 48,
    lineHeight: '110%',
    letterSpacing: 0,
  },
  h3: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 40,
    lineHeight: '110%',
    letterSpacing: 0,
  },
  h4: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 36,
    lineHeight: '110%',
    letterSpacing: 0,
  },
  h5: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '110%',
    letterSpacing: 0,
  },
  h6: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '110%',
    letterSpacing: 0,
  },
  body1: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 300,
    fontSize: 20,
    lineHeight: '140%',
    letterSpacing: 0,
  },
  body2: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 300,
    fontSize: 18,
    lineHeight: '140%',
    letterSpacing: 0,
  },
  body3: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 300,
    fontSize: 16,
    lineHeight: '140%',
    letterSpacing: 0,
  },

  label1: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '130%',
    letterSpacing: 0,
  },
  label2: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '130%',
    letterSpacing: 0,
  },
  label3: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '130%',
    letterSpacing: 0,
  },
  label4: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '130%',
    letterSpacing: 0,
  },
  label5: {
    fontFamily: getFontFamily('Karbon'),
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '130%',
    letterSpacing: 0,
    color: TEXT_PALETTE.SECONDARY,
  },
  caption1: {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '130%',
    letterSpacing: 0,
    color: TEXT_PALETTE.TERTIARY,
  },
  caption2: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '130%',
    letterSpacing: 0,
    color: TEXT_PALETTE.TERTIARY,
  },
  caption3: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '130%',
    letterSpacing: 0,
    color: TEXT_PALETTE.TERTIARY,
  },
  helper: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '130%',
    letterSpacing: 0,
    color: TEXT_PALETTE.TERTIARY,
  },
  button: {
    fontSize: 16,
    lineHeight: 24 / 16,
  },
}
const typography = createTypography(
  palette as any,
  typographyDefinitions as any
)

const customTheme = {
  palette,
  typography,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: FONT_PALETTE.PRIMARY,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: FONT_PALETTE.PRIMARY,
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        disabled: {
          color: COLOR_PALETTE.BLACK,
          backgroundColor: COLOR_PALETTE.BLACK,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: FONT_PALETTE.PRIMARY,
          fontSize: '18px',
          fontWeight: 400,
          color: COLOR_PALETTE.PRIMARY,

          ':hover': {
            color: COLOR_PALETTE.PRIMARY_HOVER,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          // color: COLOR_PALETTE.SECONDARY,
          fontFamily: FONT_PALETTE.PRIMARY,
          fontSize: '20px',
          fontWeight: 400,
        },
        message: {
          padding: '3px 0',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: FONT_PALETTE.PRIMARY,
          fontSize: '18px',
          fontWeight: 400,
        },
        li: {
          fontSize: '18px',
          fontWeight: 400,
          '& p': {
            fontSize: '18px',
          },
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiCustomAccordion: {
      styleOverrides: {
        titleIcon: {
          background: COLOR_PALETTE.BLACK,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          fontWeight: '600',
          fontFamily: FONT_PALETTE.PRIMARY,

          ':focus': {
            boxShadow: `0px 0px 0px 3px ${COLOR_PALETTE.BOX_SHADOW}`,
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.SECONDARY,
          },
          ':active': {
            boxShadow: `0px 0px 0px 3px ${COLOR_PALETTE.BOX_SHADOW}`,
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.SECONDARY,
          },
          ':hover': {
            boxShadow: `0px 0px 0px 3px ${COLOR_PALETTE.BOX_SHADOW}`,
          },
        },
        sizeLarge: {
          padding: '14px 40px',
        },
        sizeMedium: {
          padding: '14px 24px',
        },
        sizeSmall: {
          padding: '10px 18px',
          fontSize: '16px',
        },
        outlined: {
          borderColor: COLOR_PALETTE.SECONDARY,
          color: COLOR_PALETTE.SECONDARY,
          ':hover': {
            color: COLOR_PALETTE.SECONDARY_HOVER,
            borderColor: COLOR_PALETTE.SECONDARY_HOVER,
            borderWidth: 2,
            backgroundColor: 'transparent',
          },
          ':disabled': {
            borderColor: COLOR_PALETTE.LIGHT_GRAY,
            borderWidth: 2,
          },
        },

        outlinedSizeMedium: {
          padding: '12px 22px',
        },
        outlinedSizeSmall: {
          padding: '8px 16px',
        },
        text: {
          borderColor: COLOR_PALETTE.SECONDARY,
          color: COLOR_PALETTE.SECONDARY,
          ':hover': {
            backgroundColor: COLOR_PALETTE.LIGHT_GRAY,
          },
        },

        ':hover': {},
      },
      variants: [
        {
          props: {
            color: 'secondary',
          },
          style: {
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.SECONDARY,
            ':hover': {
              color: COLOR_PALETTE.WHITE,
              backgroundColor: COLOR_PALETTE.BLACK,
            },
          },
        },
        {
          props: {
            color: 'success',
          },
          style: {
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.SUCCESS,
            ':hover': {
              color: COLOR_PALETTE.WHITE,
              backgroundColor: COLOR_PALETTE.SUCCESS_DARK,
            },
          },
        },
        {
          props: {
            color: 'info',
          },
          style: {
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.INFO,
            ':hover': {
              color: COLOR_PALETTE.WHITE,
              backgroundColor: COLOR_PALETTE.INFO_DARK,
            },
          },
        },
        {
          props: {
            color: 'warning',
          },
          style: {
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.WARNING,
            ':hover': {
              color: COLOR_PALETTE.WHITE,
              backgroundColor: COLOR_PALETTE.WARNING_DARK,
            },
          },
        },
        {
          props: {
            color: 'error',
          },
          style: {
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.ERROR,
            ':hover': {
              color: COLOR_PALETTE.WHITE,
              backgroundColor: COLOR_PALETTE.ERROR_DARK,
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR_PALETTE.PRIMARY,
          padding: 6,
          ':hover': {
            backgroundColor: COLOR_PALETTE.BLACK,
            color: COLOR_PALETTE.WHITE,
            boxShadow: `0px 0px 0px 3px ${COLOR_PALETTE.BOX_SHADOW}`,
          },
          ':focus': {
            boxShadow: `0px 0px 0px 3px ${COLOR_PALETTE.BOX_SHADOW}`,
          },
          ':active': {
            boxShadow: `0px 0px 0px 3px ${COLOR_PALETTE.BOX_SHADOW}`,
          },
        },
      },
      variants: [
        {
          props: {
            color: 'primary',
          },
          style: {
            borderColor: COLOR_PALETTE.SECONDARY,
            color: COLOR_PALETTE.WHITE,
            backgroundColor: COLOR_PALETTE.SECONDARY_HOVER,
            ':hover, :focus, :active': {
              backgroundColor: COLOR_PALETTE.BLACK,
              color: COLOR_PALETTE.WHITE,
              borderColor: COLOR_PALETTE.BLACK,
            },
          },
        },
        {
          props: {
            color: 'secondary',
          },
          style: {
            borderColor: COLOR_PALETTE.SECONDARY,
            color: COLOR_PALETTE.SECONDARY,
            backgroundColor: COLOR_PALETTE.LIGHT_GRAY,
            ':hover, :focus, :active': {
              borderColor: COLOR_PALETTE.GRAY,
              color: COLOR_PALETTE.SECONDARY,
              backgroundColor: COLOR_PALETTE.LIGHT_GRAY,
            },
          },
        },

        {
          props: {
            size: 'small',
          },
          style: {
            padding: 2,
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: FONT_PALETTE.PRIMARY,
          lineHeight: '140%',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: '37px',
        },
        label: {
          fontWeight: 500,
          fontFamily: FONT_PALETTE.PRIMARY,
          fontSize: '18px',
          padding: '6px 12px',
          lineHeight: '140%',
        },
      },
      variants: [
        {
          props: {
            color: 'pending',
          },
          style: {
            backgroundColor: COLOR_PALETTE_CHIP.PENDING_MAIN,
            color: COLOR_PALETTE_CHIP.PENDING_CONTRASTTEXT,
          },
        },
        {
          props: {
            color: 'confirmed',
          },
          style: {
            backgroundColor: COLOR_PALETTE_CHIP.CONFIRMED_MAIN,
            color: COLOR_PALETTE_CHIP.CONFIRMED_CONTRASTTEXT,
          },
        },
        {
          props: {
            color: 'declined',
          },
          style: {
            backgroundColor: COLOR_PALETTE_CHIP.DECLINED_MAIN,
            color: COLOR_PALETTE_CHIP.DECLINED_CONTRASTTEXT,
          },
        },
        {
          props: {
            color: 'info',
          },
          style: {
            backgroundColor: COLOR_PALETTE_CHIP.INFO_MAIN,
            color: COLOR_PALETTE_CHIP.INFO_CONTRASTTEXT,
          },
        },
        {
          props: {
            color: 'label',
          },
          style: {
            backgroundColor: COLOR_PALETTE_CHIP.LABEL_MAIN,
            color: COLOR_PALETTE_CHIP.LABEL_CONTRASTTEXT,
          },
        },
      ],
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeaderTitle: {
          fontSize: 16,
          fontFamily: FONT_PALETTE.PRIMARY,
        },
        cell: {
          fontSize: 16,
        },
        root: {
          '& .MuiTypography-root a': {
            fontSize: 16,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 16,
        },
        input: {
          fontSize: 16,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAFAFA',
          '&:after': {
            backgroundColor: COLOR_PALETTE.GRAY,
            borderColor: COLOR_PALETTE.GRAY,
          },
          '&.Mui-focused:after': {
            backgroundColor: COLOR_PALETTE.GRAY,
            borderColor: COLOR_PALETTE.GRAY,
          },
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&:hover .MuiSvgIcon-root': {
            color: COLOR_PALETTE.PRIMARY,
          },
          '&:hover .MuiButtonBase-root, &:active .MuiButtonBase-root,&:focus .MuiButtonBase-root':
            {
              background: 'none',
              border: 'none',
            },
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#d2d2d2',
        },
        bar: {
          backgroundColor: '#4d4d4d',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        circle: {
          color: COLOR_PALETTE.PRIMARY,
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          fontFamily: FONT_PALETTE.PRIMARY,
          '&.Mui-expanded': {
            minHeight: '40px',
          },
        },
        content: {
          margin: '12px 0 12px',
          fontSize: '20px',
          overflow: 'hidden',
          height: '24px',
          '& .MuiSvgIcon-root': {
            color: COLOR_PALETTE.SECONDARY,
          },
          '&.Mui-expanded': {
            margin: '12px 0 12px',
            padding: 0,
          },
        },
        expandIconWrapper: {
          '& .MuiSvgIcon-root': {
            color: COLOR_PALETTE.SECONDARY,
          },
        },
      },
    },
  },
}
export const finalTheme = createTheme(
  deepmerge(theme as any, customTheme as any)
)
