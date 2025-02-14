import { Route, Switch } from "wouter";
import { Layout } from "@/layouts/Layout";
import { SearchEngine } from "@/pages/SearchEngine";

export const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" component={SearchEngine} />
      </Layout>
    </Switch>
  );
};
