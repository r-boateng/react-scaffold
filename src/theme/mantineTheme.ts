import {
  DEFAULT_THEME,
  MantineColorsTuple,
  MantineThemeOverride,
} from '@mantine/core';

const primary: MantineColorsTuple = [
  '#eefcfc',
  '#def6f6',
  '#b7eeee',
  '#8fe5e4',
  '#70dddd',
  '#5fd8d8',
  '#53d7d6',
  '#44bebe',
  '#36a9a9',
  '#1b9292',
];

const dark: MantineColorsTuple = [
  '#818a92',
  '#68737c',
  '#4f5b66',
  '#354451',
  '#2b92ee',
  '#1c2c3b',
  '#031525', // 7 = Default
  '#031321',
  '#02111e',
  '#020f1a',
];

const customTheme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    // fallback to system fonts
    fontFamily: `Inter, ${DEFAULT_THEME.fontFamily}`,
  },
  primaryColor: 'primary',
  primaryShade: { light: 6, dark: 7 },
  colors: {
    primary: primary,
    dark: dark,
  },
};

export default customTheme;
