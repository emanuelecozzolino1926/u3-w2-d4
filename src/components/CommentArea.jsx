import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  const getComments = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NjM2NTU0MTIsImV4cCI6MTc2NDg2NTAxMn0.87R7M9Hnw6l3Qbx0Zx0BpXPMIi1srqu-mPOLsgnn0m0",
          },
        }
      );

      if (response.ok) {
        let commentsData = await response.json();
        setComments(commentsData);
        setLoading(false);
        setIsError(false);
      } else {
        console.log("Error while fetching comments");
        setLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    setLoading(false);
    if (props.asin) {
      getComments();
    }
  }, [props.asin]);

  return (
    <div className="text-center">
      {isError && <Error />}
      {isLoading && <Loading />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
