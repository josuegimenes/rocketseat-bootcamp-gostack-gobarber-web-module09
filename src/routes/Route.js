import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Layouts
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // true = logado ou false = deslogado
  const signed = false;

  // Se não estiver logado e rota for privada
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se estiver logado e rota não for privada
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  /**
   * Verifica se está logado e atribui o layout a variável. Dessa forma,
   * Layout passa agora a ser um componente nesse formato <Layout />
   */
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route // component do 'react-router-dom'
      {...rest} // Recupera todas as propriedades já existentes
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      // <Layout> Aplica o Layout recuperado
      // <Component {...props} /> Retorna as propriedades desse layout.
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
