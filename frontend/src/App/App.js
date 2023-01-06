import React from 'react';
import DocumentTitle from 'react-document-title';
import AppRoutes from './AppRoutes';

function App({store, history}) {
  return (
    <DocumentTitle title="Boozie Bot">
      <AppRoutes app={App} />
    </DocumentTitle>
  );
}

export default App;
