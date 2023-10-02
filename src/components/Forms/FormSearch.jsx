import FormSearchResults from "./FormSearchResults.jsx";
import SearchIcon from "./SearchIcon.jsx";
import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../../lib/api.js";
import { Form, json, useNavigation } from "react-router-dom";
import CloseIcon from "./CloseIcon.jsx";

const FormSearch = () => {
  const [formSearchState, setFormSearchState] = useState({
    searchedSneakers: [],
    isLoading: false,
    fallbackMessage: null,
    formSearchIsVisible: false,
  });

  const inputRef = useRef();

  const { state } = useNavigation();

  useEffect(() => {
    if (state === "loading") {
      setFormSearchState((prevFormSearchState) => {
        return {
          ...prevFormSearchState,
          formSearchIsVisible: false,
        };
      });
    }
  }, [state]);

  const searchSneakerHandler = useCallback(async (event) => {
    const value = event?.target?.value;

    if (!value) {
      setFormSearchState((prevFormSearchState) => {
        return {
          ...prevFormSearchState,
          fallbackMessage: null,
          searchedSneakers: [],
          formSearchIsVisible: false,
        };
      });

      return;
    }

    setFormSearchState((prevFormSearchState) => {
      return {
        ...prevFormSearchState,
        formSearchIsVisible: true,
        isLoading: true,
      };
    });

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .like("title", `%${value}%`)
      .limit(10);

    if (error)
      throw json(
        { message: "We're having trouble when we try to search" },
        { status: 500 }
      );

    setFormSearchState({
      searchedSneakers: data,
      isLoading: false,
      fallbackMessage: data.length === 0 ? "No results" : null,
      formSearchIsVisible: true,
    });
  }, []);

  useEffect(() => {
    searchSneakerHandler();
  }, [searchSneakerHandler]);

  const showSearchSneakersHandler = () => {
    setFormSearchState((prevFormSearchState) => {
      return {
        ...prevFormSearchState,
        formSearchIsVisible:
          prevFormSearchState.searchedSneakers.length > 0 ||
          prevFormSearchState.isLoading ||
          prevFormSearchState.fallbackMessage,
      };
    });
  };

  const hideSearchSneakersHandler = (event) => {
    console.log(event);
    event.stopPropagation();
    setFormSearchState((prevFormSearchState) => {
      return {
        ...prevFormSearchState,
        formSearchIsVisible: false,
      };
    });
  };

  const clearFormSearchHandler = () => {
    inputRef.current.value = "";
    setFormSearchState((prevFormSearchState) => {
      return {
        ...prevFormSearchState,
        searchedSneakers: [],
        formSearchIsVisible: false,
      };
    });
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
        onFocus={showSearchSneakersHandler}
        ref={inputRef}
        // onBlur={hideSearchSneakersHandler}
        autoComplete="off"
      />
      <button
        className="form-search__action"
        type="submit"
        aria-label="Click here to search"
      >
        <SearchIcon className="form-search__icon" />
      </button>
      {formSearchState.formSearchIsVisible && (
        <button
          className="form-search__close"
          onClick={clearFormSearchHandler}
          type="button"
        >
          <p className="sr-only">Clear form search</p>
          <CloseIcon className="form-search__close-icon" />
        </button>
      )}

      {formSearchState.formSearchIsVisible && (
        <FormSearchResults
          formSearchState={formSearchState}
          // onClick={() => {
          //   inputRef.current.focus();
          // }}
        />
      )}
    </Form>
  );
};

export default FormSearch;
