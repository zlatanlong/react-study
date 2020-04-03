import React from 'react';
import { connect } from 'dva';
import Frame from '../components/Frame/index';
import { Route, Switch } from 'dva/router';
import { adminRoutes } from '../routes';


function IndexPage(props) {
  return (
    <Frame>
      <h1>我是主路由</h1>
      <Switch>
        {adminRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              render={routeProps => {
                return <route.component {...routeProps} />
              }}
            />
          )
        })}
      </Switch>
    </Frame>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
