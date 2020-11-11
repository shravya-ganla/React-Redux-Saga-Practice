import './App.css';
import Child from './components/child';
import Parent from './components/parent'
import Destruct from './components/destructuringProps'
import UserGreetings from './components/userGreetings';
import Index from './components/Index'
import Lifecycle from './components/lifecycle'
import Fragment from './components/fragment'
import Purecomponent from './components/purecomponent'
import Refs from './components/refsDemo';
import Counter from './ReactComponents/counters';
import ReduxDemo from './components/ReduxDemo'

import {Provider} from 'react-redux';
import Header from './ReduxSaga/components/Header/Header';
import ImageGrid from './ReduxSaga/components/ImageGrid/ImageGrid';
import configureStore from './ReduxSaga/store';
import Display from './ReduxSaga1/components/display';
const store = configureStore();


function App() {
  return (
    <div className="App">
      {/* <Child name="Shravya"/> */}
      {/* <Parent firstName="Shravya"/>
      <Destruct firstName="Shravya" lastName="Ganla"/> */}
      {/* <UserGreetings/>
      <Index/> */}
      {/* <Lifecycle/> */}
      {/* <Fragment/> */}
      {/* <Purecomponent/> */}
      {/* <Refs/> */}
      {/* <Counter/> */}
      {/* <ReduxDemo/> */}
      <Provider store={store}>
        <>
          {/* <Header/>
          <ImageGrid/> */}
          <Display/>
        </>
      </Provider>
    </div>
  );
}

export default App;
