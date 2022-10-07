import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { colors } from "../styles/variables";
import Navbar from "../components/Navbar";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.primary,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </MuiThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
