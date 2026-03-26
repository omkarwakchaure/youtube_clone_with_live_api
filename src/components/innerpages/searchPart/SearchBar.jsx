import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { YOUTUBE_SUGGESTION_API } from '../../../utils/constants';
import { cacheResults } from '../../../store/slices/searchSlice';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after over key press but
    // if the difference between two key press is less than 200ms then decline api call.
    const timer = setTimeout(() => {
      const cached = searchCache[searchQuery];

      if (cached && Array.isArray(cached)) {
        setSuggestions(cached);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery) return;

    const data = await fetch(`${YOUTUBE_SUGGESTION_API}?q=${searchQuery}`);

    const json = await data.json();

    const suggestionsArray = Array.isArray(json) ? json : [];
    setSuggestions(suggestionsArray);
    setSuggestionsVisible(true);
    console.log("Fetched Suggestions: ", suggestionsArray);

    dispatch(cacheResults({ [searchQuery]: suggestionsArray }));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    setSuggestionsVisible(true);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.target.closest(".suggest-box") &&
        !e.target.closest(".search-input")
      ) {
        setSuggestionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div className='flex relative w-full max-w-xl'>
          {/* Left Icon (only when focused) */}
          {isFocused && (
            <MagnifyingGlassIcon className="h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          )}
          <input
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => {
              setIsFocused(true);
              if (searchQuery.trim().length > 0) {
                setSuggestionsVisible(true);
              }
            }}
            onBlur={() => {
              setIsFocused(false);
              // setSuggestionsVisible(false);
            }}
            className={`w-full border border-gray-400 p-2 rounded-l-full outline-none ${
              isFocused ? "pl-10" : "pl-4"
            }  `}
            type="text"
            placeholder="Search"
          />

          {/* Right Search Button (fixed, always visible) */}
          <button
            className="border border-gray-400 border-l-0 p-3 w-14 rounded-r-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/search?q=" + searchQuery)}
          >
            <MagnifyingGlassIcon className="h-5" />
          </button>

          {/* Suggestion Box */}
          {suggestionsVisible && (
            <div className="suggest-box absolute top-full left-0 bg-white py-2 w-[516px] shadow-lg rounded-xl border border-gray-200 z-50">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="flex items-center gap-3 px-3 py-2 text-sm cursor-pointer 
                     hover:bg-gray-100 rounded-xl transition-colors mx-2"
                  >
                    <MagnifyingGlassIcon className="h-4 text-gray-500" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        
    </div>
  )
}

export default SearchBar