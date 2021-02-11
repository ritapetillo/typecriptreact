import React from "react";
import { Col, Card } from "react-bootstrap";
import { convertToObject } from "typescript";
import { SearchResult } from "../actions/types";

interface Props {
  result: SearchResult;
}

const AlbumCard = ({ result }: Props) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={result.cover} />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <Card.Text>{result.artist}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AlbumCard;
