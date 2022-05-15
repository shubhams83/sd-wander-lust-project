import React, {useState} from 'react'
import Imgsearch from "../../assets/img/searchicon.png"
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
    const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

    return (
    <>
    <section className="firstpage">
            <img src="../assets/img/background-img.png" alt="" />
            <div className="shade"></div>
          </section>
    <form onSubmit={submitAction}>
      <div id="form-element">
                <h1>Let's Travel the World</h1>
                <input id="navee" className="search" type="text" onChange={inputSearch} placeholder="Search your Destination" />
                <a  onclick={()=>console.log("test")}>
          <img className="searchicon"  onclick={()=>{alert("test")}} src={Imgsearch} alt="" />
          </a>
            </div>
        </form>        
     
     </>
    )
}

export default Search
