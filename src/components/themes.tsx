import { createMuiTheme } from '@material-ui/core/styles';

const themes = createMuiTheme({
    palette: {
        primary: {
            light: '#f9785d',
            main: '#c14832',
            dark: '#8a140a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#6383f6',
            main: '#1f57c2',
            dark: '#002f91',
            contrastText: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#fff',
        },
    },
});

export default themes;
