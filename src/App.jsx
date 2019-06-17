import React from "react";
import { useDataApi } from "./customHooks/useDataApi";

import Header from "./components/container/Header";
import Main from "./components/container/Main";
import Spinner from "./components/presentational/Spinner";

const App = () => {
  const [{ data, isLoading }] = useDataApi();

  return (
    <>
      <Header />
      {!isLoading && data.length ? <Main data={data} /> : <Spinner />}
    </>
  );
};

export default App;
