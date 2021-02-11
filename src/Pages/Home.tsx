import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { searchResults } from "../actions/searchActions";
import { SearchResult } from "../actions/types";
import AlbumCard from "../Components/AlbumCard";
import { ISearchState } from "../reducers/searchReducer";
import { RootStore } from "../store";

interface IHomeProps extends RouteComponentProps {}

const Home = () => {
  const dispatch = useDispatch();
  const search: ISearchState = useSelector((state: RootStore) => state.search);
  const results: Array<SearchResult> = useSelector(
    (state: RootStore) => state.search.results
  );
  useEffect(() => {
    console.log(search);
  }, [search]);

   
  return (
    <Container>
      <h1>RESULTS</h1>
      <Row>
        {results != [] &&
          results ? 
                  results?.map((result, i) => <AlbumCard result={result} key={i} />) : <h4>{search.error_msg}</h4>}
      </Row>
    </Container>
  );
};

export default Home;
