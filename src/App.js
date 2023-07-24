// import './App.css';
// import List from './components/managecategories/List';
// //import Test from "./components/managecategories/test";
// import  Create from "./components/managecategories/Create";


// function App() {
//   return (
//     <div className="container-fluid my-3">
//       <div className='row'>
//         <div className='col-3'>
//           {/* <Test />
//           <Test /> */}
//           <Create />
//         </div>
//         <div className='col-9' >
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import './App.css';
import AdvSpinner from './components/demos/advspinner';
//import Counter2 from './components/demos/counter2';
//import Counter from './components/demos/counter';
//import List from './components/managecategories/List';
//import Test from "./components/managecategories/test";
//import  Create from "./components/managecategories/Create";
// import AdvList from './components/manageadv/AdvList';


function App() {
  return (
    <div className="container-fluid my-3">
      <div className='row'>
        <div className='col'>
          <AdvSpinner />
          {/* <Counter/> */}
          {/* <AdvList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
