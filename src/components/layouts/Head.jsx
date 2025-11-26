import { Bars3Icon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cacheResults } from "../../store/searchSlice";
import { useNavigate } from "react-router";
import { YOUTUBE_SUGGESTION_API } from "../../utils/constants";

const Head = () => {
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
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
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

    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);

    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSuggestionsVisible(true);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".suggest-box")) {
        setSuggestionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="grid grid-cols-12 px-4 py-2 shadow-lg">
      <div className="col-span-2 flex items-center gap-3">
        <Bars3Icon
          className="h-8 w-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-8 flex items-center justify-center">
        <div className=" flex relative w-1/2">
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
      </div>
      <div className="col-span-2 flex justify-end">
        <img
          className="h-8 rounded-full"
          src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
          alt="user_logo"
        />
      </div>
    </div>
  );
};

export default Head;
