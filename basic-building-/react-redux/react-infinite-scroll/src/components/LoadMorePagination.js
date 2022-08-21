import React, { useEffect, useState } from "react";
import { CardGroup, Card, Button } from "react-bootstrap";

const LoadMorePagination = () => {
  const [apiData, setApiData] = useState([]);

  // const slicedData = apiData.slice(0, apiData)

  useEffect(() => {
    myData();
  }, []);

  const myData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const response = await data.json();
    if (response) {
      setApiData(response);
      console.log(response);
    }
  };

  // const handleLoadMore = () => {
  //   setApiData(slicedData + slicedData);
  // }
  return (
    <>
      <h1>{apiData.length}</h1>
      {apiData?.map((post) => (
        <>
          <CardGroup className="container d-flex">
            <Card className="m-3">
              <Card.Img variant="top" src={post.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{post.id}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> {post.title}</small>
              </Card.Footer>
            </Card>
            <Card className="m-3">
              <Card.Img variant="top" src={post.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{post.id}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> {post.title}</small>
              </Card.Footer>
            </Card>
            <Card className="m-3">
              <Card.Img variant="top" src={post.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{post.id}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"> {post.title}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </>
      ))}
      <Button variant="primary">Load More</Button>
    </>
  );
};

export default LoadMorePagination;
