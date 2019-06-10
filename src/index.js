import React from 'react';
import ReactDOM from 'react-dom';
import './styles/govuk_style.css'
import App from './components/App'

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';


import appSyncConfig from './aws-exports';

const client = new AWSAppSyncClient({
    url: appSyncConfig.aws_appsync_graphqlEndpoint,
    region: appSyncConfig.aws_project_region,
    auth: {
        type: appSyncConfig.aws_appsync_authenticationType,
        apiKey: appSyncConfig.aws_appsync_apiKey,
    }
});


// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom'
// import Amplify from '@aws-amplify/core'
// import config from './aws-exports'
// Amplify.configure(config)



// const wsLink = new WebSocketLink({
//     uri: `ws://localhost:4000`,
//     options: {
//         reconnect: true,
//         connectionParams: {
//             authToken: localStorage.getItem(AUTH_TOKEN),
//         },
//     },
// })
//
// const link = split(
//     ({ query }) => {
//         const { kind, operation } = getMainDefinition(query)
//         return kind === 'OperationDefinition' && operation === 'subscription'
//     },
//     wsLink,
//     authLink.concat(httpLink),
// )
//
// const client = new ApolloClient({
//     link,
//     cache: new InMemoryCache(),
// })
//
// ReactDOM.render(
//     <BrowserRouter>
//             <App />
//     </BrowserRouter>,
//     document.getElementById('root'),
// )
//
// serviceWorker.unregister();

const WithProvider = () => (
    <ApolloProvider client={client}>
        <Rehydrated render={({ rehydrated }) => (
            rehydrated ? <App /> : <strong>Your custom UI componen here...</strong>
        )} />
    </ApolloProvider>
);

ReactDOM.render(<WithProvider />, document.getElementById('root'));