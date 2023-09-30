import FormSearchResults from "./FormSearchResults.jsx";
import SearchIcon from "./SearchIcon.jsx";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/api.js";
import { Form } from "react-router-dom";

const FormSearch = () => {
  const [formSearchState, setFormSearchState] = useState({
    searchedSneakers: [],
    isLoading: false,
    hasError: null,
    formSearchIsVisible: false,
  });

  const searchSneakerHandler = useCallback(async (event) => {
    const value = event.target.value;

    if (!value) {
      setFormSearchState((prevFormSearchState) => {
        return {
          ...prevFormSearchState,
          searchedSneakers: [],
        };
      });

      return;
    }

    setFormSearchState((prevFormSearchState) => {
      return {
        ...prevFormSearchState,
        isLoading: true,
      };
    });

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .like("title", `%${value}%`);

    setFormSearchState({
      searchedSneakers: data,
      isLoading: false,
      hasError: error ? "We're having trouble when we try to search" : null,
    });

    // Manage Error
  }, []);

  useEffect(() => {
    searchSneakerHandler();
  }, [searchSneakerHandler]);

  const showFormSearchHandler = (event) => {
    // if (event.target.value === "") return;

    console.log(`Form Search On Focus ${event.target.value}`);

    // setFormSearchState((prevFormSearchState) => {
    //   return {
    //     ...prevFormSearchState,
    //     formSearchIsVisible: true,
    //   };
    // });
  };

  const hideFormSearchHandler = () => {
    console.log("Form Search On Blur");
    // setFormSearchState((prevFormSearchState) => {
    //   return {
    //     ...prevFormSearchState,
    //     formSearchIsVisible: false,
    //   };
    // });
  };

  return (
    <Form className="form-search">
      <label htmlFor="form-control" className="form-search__label sr-only">
        Search
      </label>
      <input
        className="form-search__control"
        id="form-control"
        type="text"
        placeholder="Search sneakers"
        aria-label="Type to search"
        onChange={searchSneakerHandler}
        onFocus={showFormSearchHandler}
        onBlur={hideFormSearchHandler}
      />
      <button
        className="form-search__action"
        type="submit"
        aria-label="Click here to search"
      >
        <SearchIcon className="form-search__icon" />
      </button>
      {formSearchState.formSearchIsVisible && (
        <FormSearchResults searchedSneakers={formSearchState} />
      )}
    </Form>
  );
};

export default FormSearch;

// Every keystroke: Results

// Focus: Search anything (Show)
// Blur: (Hide)
// Transition: (Hide)
