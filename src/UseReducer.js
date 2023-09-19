import { useReducer } from "react";

const reducer = (state, action) => {

  if(action.type === "setName") {
    return { 
      ...state,
      name: action.data,
    }
  } else if(action.type === "setImage") {
    return {
      ...state,
      image: action.data,
    }
  }else if(action.type === "setCity") {
    return {
      ...state,
      city: action.data,
    }
  } else if(action.type === "setPosition") {
    return {
      ...state,
      position: action.data,
    }
  }  else if(action.type === "setArray") {
    return {
      ...state,
      dataArray: [...state.dataArray, action.data],
    }
  }
  else {
    return state;
  }
}

const App = () =>  {

  const [state, setState] = useReducer(reducer, {
    name: "",
    image: "",
    city: "",
    position: "",
    dataArray: [],
  });

  return (
    <div>
      <input type="text" value={state.image} onChange={(e) => setState({
        type: "setImage",
        data: e.target.value,
      })} placeholder="Enter image url" />
      <input type="text" value={state.name} onChange={(e) => setState({
        type: "setName",
        data: e.target.value,
      })} placeholder="Enter image name" />
      <input type="text" value={state.city} onChange={(e) => setState({
        type: "setCity",
        data: e.target.value,
      })} placeholder="Enter image city" />
      <input type="text" value={state.position} onChange={(e) => setState({
        type: "setPosition",
        data: e.target.value,
      })} placeholder="Enter image postion" />
      <button onClick={() => setState({
        type: 'setArray',
        data: {
          image: state.image,
          name: state.name,
          city: state.city,
          position: state.position,
        }
      })} >Set Data</button>

      <div>
        
      </div>
    </div>
  );
}

export default App;