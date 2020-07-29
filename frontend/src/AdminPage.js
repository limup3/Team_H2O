import React from 'react';
import { Switch, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import { RouteWithLayout } from './admin/components';
import { Main as MainLayout, Minimal as MinimalLayout } from './admin/layouts';
import { chartjs } from './admin/helpers';
import theme from './admin/theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './admin/assets/css/index.css';
import validators from './admin/common/validators';
import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './admin/views';
import OverViewSales from './admin/views/Dashboard/components/LatestSales/OverViewSales';
import { OverViewProducts } from './admin/views/Dashboard/components/LatestProducts';
import { RecentVisitingHospital } from './admin/views/Dashboard/components/LatestOrders';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

const AdminPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router history={browserHistory}>
    <Switch>
      <Redirect
        exact
        from="/admin"
        to="/admin/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/admin/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/admin/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/admin/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/admin/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/admin/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/admin/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/admin/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/admin/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/admin/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/admin/not-found"
      />
      <RouteWithLayout
        component={OverViewSales}
        exact
        layout={MainLayout}
        path="/admin/OverViewSales"
      />
      <RouteWithLayout
        component={OverViewProducts}
        exact
        layout={MainLayout}
        path="/admin/OverViewProducts"
      />
      <RouteWithLayout
        component={RecentVisitingHospital}
        exact
        layout={MainLayout}
        path="/admin/RecentVisitingHospital"
      />

    </Switch>
    </Router>
      </ThemeProvider>
  );
};

export default AdminPage;
