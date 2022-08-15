import { useEffect, useState } from "react";
import "./App.css";

//Redux

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/apiSlice";
import User from "./components/User";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    //Dispatch ile api actions içerisindeki asynThunk'ı çalıştırdık
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <User  key={1}/>
      </header>
    </div>
  );
}

export default App;
