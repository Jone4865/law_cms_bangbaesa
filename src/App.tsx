import { ThemeProvider } from "styled-components";
import "antd/dist/antd.less";
import Root from "./router";
import theme from "./styles/theme";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apolloClient";
import { useRecoilState } from "recoil";
import { userTokenState } from "./recoil/atoms/userToken";
import "antd/dist/antd.less";

function App() {
  const [tokenInfo, setTokenInfo] = useRecoilState(userTokenState);

  return (
    <ApolloProvider client={apolloClient(tokenInfo, setTokenInfo)}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
