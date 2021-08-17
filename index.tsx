import * as React from 'react';
import { render } from 'react-dom';
import { TopNavigation } from './Shared';
import { TabChangeDataProcess } from './Components';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
const { Component } = React;
interface AppProps {}
interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      name: 'Change Customer Data System'
    };
  }

  render() {
    return (
      <div>
        <TopNavigation name={this.state.name} />
        <hr />
        <section>
          <TabChangeDataProcess />
        </section>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
