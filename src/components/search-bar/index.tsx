import { Container, InputAdornment, TextField } from "@mui/material";
import { Spinner } from "../spinner";
import { iSearch } from "../../types/search_interface";
import SearchIcon from "@mui/icons-material/Search";
import "../Search-bar/index.scss";

export const Search = ({ handleSearch, loading }: iSearch): JSX.Element => {
  return (
    <span className="d-flex align-items-center">
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
      {loading && <Spinner />}
    </span>
  );
};
