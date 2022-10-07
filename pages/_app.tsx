import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
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
      <Navbar />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
