import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
// import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { colors } from "../styles/variables";
import Navbar from "../components/Navbar";
import { Snackbar, Alert, ThemeProvider, createTheme } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";
import { AppState } from "../store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { errorMessage } = useSelector(
    (state: AppState) => state.errorState,
    shallowEqual
  );

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Snackbar open={!!errorMessage} autoHideDuration={3000}>
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
