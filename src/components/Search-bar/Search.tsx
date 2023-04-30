import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../Search-bar/search.scss";

interface SearchProps {
  handleSearch: (searchTerm: string) => void;
}

const Search = ({ handleSearch }: SearchProps) => {
  return (
    <Container maxWidth="md">
      <TextField
        color="warning"
        id="search"
        type="search"
        label="Search For Task..."
        defaultValue={""}
        onChange={(event) => handleSearch(event.target.value)}
        sx={{ width: 200 }}
        size="small"
        //Search icon of the search box:
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Search;
