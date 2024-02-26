import React,{useState,useEffect} from "react";
import "./Header.scss";

import {CiSearch} from 'react-icons/ci'
import { useMealContext } from "../../context/mealContext";
import {useNavigate} from 'react-router-dom';
import {FaSlidersH} from 'react-icons/fa'
import { startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
   const navigate = useNavigate();
   const [searchTerm,setSearchTerm] = useState("");
   const [errorMsg,setErrorMsg] = useState("");
   const {dispatch,meals} = useMealContext();

   
  const handleSearchTerm = (e) => {
    
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
    console.log(meals)
  }
  return (
    <form className="search-form flex align-center" onSubmit={(e) => handleSearchResult(e)}>
      <input type ='text' className="form-control-input text-dark-gray fs-15" placeholder="Search recipes here ..."  onChange={(e) => handleSearchTerm(e)}/>
      <button type='submit' className="form-submit-btn text-white text-uppercase fs-14">
      <CiSearch className="btn-icon" size={20}/>
      </button>
      <button type='button ' className="form-submit-btn2 text-white text-uppercase fs-14">
      <FaSlidersH className="btn-icon" size={20}/>
      </button>
    
    </form>
  )
}

export default SearchForm