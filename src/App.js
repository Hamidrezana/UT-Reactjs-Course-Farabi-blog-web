import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import MainApp from './pages';
import store from './store';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
    direction: 'rtl',
});

function App() {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Provider store={store}>
                        <MainApp />
                    </Provider>
                </div>
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App;
