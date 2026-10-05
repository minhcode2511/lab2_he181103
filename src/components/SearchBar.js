import { useRef } from 'react';

function SearchBar({ onSearch }) {
  const searchRef = useRef(null);
  const handleChange = () => onSearch(searchRef.current.value);
  return (
    <div className="control-group">
      <label>Search Movie:</label>
      <input ref={searchRef} type="text" placeholder="Enter movie title..." onChange={handleChange} />
    </div>
  );
}
export default SearchBar;
