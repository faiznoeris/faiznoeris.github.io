import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import ResponsiveContainer from './ResponsiveContainer'
import Content from './Content'
import Footer from './Footer'
// import WorkInProgress from './WorkInProgress'
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  ReactDOM.render(
    <ResponsiveContainer>
      <Content />
      <Footer />
    </ResponsiveContainer>,
    document.getElementById('root')
  );
}

// const render = () => {
//   ReactDOM.render(
//     <WorkInProgress /> ,
//     document.getElementById('root')
//   )
// }

render()
registerServiceWorker();
