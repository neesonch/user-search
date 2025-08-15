import { useUserStore } from "../../store/userStore";
import { useEffect, useState } from "react";
import { sortValues } from "../../consts";

export const SearchControls = () => {
  const { searchTerm, setSearchTerm, users, setCountryFilter } = useUserStore();
  const [countryOptions, setCountryOptions] = useState<string[]>([]);

  useEffect(() => {
    const countryArray = users.map((user) => user.location.country);
    const dedupedCountryArray = [...new Set(countryArray)];
    setCountryOptions(dedupedCountryArray.sort((a, b) => (a > b ? 1 : -1)));
  }, [users]);

  return (
    <div>
      <div>
        <input
          placeholder="Search users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country-select">Select country</label>
        <select
          id="country-select"
          onChange={(e) => setCountryFilter(e.target.value)}
        >
          <option value={""}>Any</option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sort-value-select">Sort by:</label>
        <select id="sort-value-select">
          {Object.values(sortValues).map((sortValue) => (
            <option key={sortValue} value={sortValue}>
              {sortValue}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
