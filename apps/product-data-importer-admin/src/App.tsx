import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BrandList } from "./brand/BrandList";
import { BrandCreate } from "./brand/BrandCreate";
import { BrandEdit } from "./brand/BrandEdit";
import { BrandShow } from "./brand/BrandShow";
import { FormatList } from "./format/FormatList";
import { FormatCreate } from "./format/FormatCreate";
import { FormatEdit } from "./format/FormatEdit";
import { FormatShow } from "./format/FormatShow";
import { SourceList } from "./source/SourceList";
import { SourceCreate } from "./source/SourceCreate";
import { SourceEdit } from "./source/SourceEdit";
import { SourceShow } from "./source/SourceShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProductDataImporter"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Brand"
          list={BrandList}
          edit={BrandEdit}
          create={BrandCreate}
          show={BrandShow}
        />
        <Resource
          name="Format"
          list={FormatList}
          edit={FormatEdit}
          create={FormatCreate}
          show={FormatShow}
        />
        <Resource
          name="Source"
          list={SourceList}
          edit={SourceEdit}
          create={SourceCreate}
          show={SourceShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
