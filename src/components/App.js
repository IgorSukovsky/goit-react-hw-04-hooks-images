// import React, { Component } from "react";
import { useState, useEffect } from "react";
import Api from "./services/Api";
import Searchbar from "./searchbar/Searchbar";
import LoaderAnimation from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import Modal from "./modal/Modal";
import Button from "./button/Button";
import style from "./App.module.css";

// ====hooks=================
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModalStatus, setShowModalStatus] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const addData = (searchQuery, currentPage) => {
    setIsLoading(true);
    Api.getImage(searchQuery, currentPage)
      .then((images) => {
        if (images.length) {
          setImageData((prevImageData) => [...prevImageData, ...images]);
        }
      })
      .then(() => {
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })

      .catch((error) => console.log(error))
      .finally(() => setIsLoading({ isLoading: false }));
  };

  const searchText = (inputText) => {
    setSearchQuery(inputText);
    setCurrentPage(1);
    setImageData([]);
  };

  const showModalWindow = (urlLarge) => {
    setLargeImage(urlLarge);
    setShowModalStatus(true);
    closeModalWindow();
  };

  const closeModalWindow = (e) => {
    setShowModalStatus(!showModalStatus);
  };

  const loadMore = () => {
    setIsLoading(true);
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      addData(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage]);

  return (
    <div className={style.App}>
      <Searchbar searchText={searchText} />
      {isLoading ? <LoaderAnimation /> : null}
      <ImageGallery imageData={imageData} showModalWindow={showModalWindow} />
      {showModalStatus && (
        <Modal urlLarge={largeImage} closeModalWindow={closeModalWindow} />
      )}
      {imageData.length ? <Button loadMore={loadMore} /> : ""}
    </div>
  );
}

export default App;
// ====hooks the end=========

// class App extends Component {
//   state = {
//     searchQuery: "",
//     imageData: [],
//     isLoading: false,
//     showModalStatus: false,
//     largeImage: "",
//     currentPage: 1,
//     loadMoreStatus: false,
//   };

// componentDidUpdate(prevProps, prevState) {
//   const { searchQuery, currentPage } = this.state;
//   if (
//     prevState.searchQuery !== this.state.searchQuery ||
//     prevState.currentPage !== this.state.currentPage
//   ) {
//     this.addData(searchQuery, currentPage);
//   }
// }

// addData = (searchQuery, currentPage) => {
//   this.setState({ isLoading: true });
//   Api.getImage(searchQuery, currentPage)
//     .then((imageData) =>
//       this.setState((prevState) => {
//         if (imageData.length) {
//           return {
//             imageData: prevState.imageData.concat(imageData),
//             loadMoreStatus: true,
//           };
//         } else {
//           return { loadMoreStatus: false };
//         }
//       })
//     )
//     .then(() =>
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth",
//       })
//     )
//     .catch((error) => console.log(error))
//     .finally(() => this.setState({ isLoading: false }));
// };

// searchText = (inputText) => {
//   this.setState({
//     searchQuery: inputText,
//     currentPage: 1,
//     imageData: [],
//     loadMore: true,
//   });
// };

// showModalWindow = (urlLarge) => {
//   this.setState({ showModalStatus: true, largeImage: urlLarge });
// };

// closeModalWindow = (e) => {
//   if (e.keyCode === 27 || e.target.tagName === "DIV") {
//     this.setState({ showModalStatus: false, largeImage: "" });
//   }
// };

//   loadMore = () => {
//     this.setState((prevState) => {
//       if (this.state.imageData.length % 12 !== 0) {
//         return { loadMoreStatus: false };
//       } else return { currentPage: prevState.currentPage + 1 };
//     });
//   };

//   render() {
//     const {
//       isLoading,
//       imageData,
//       largeImage,
//       showModalStatus,
//       loadMoreStatus,
//     } = this.state;
//     return (
//       <div className={style.App}>
//         <Searchbar searchText={this.searchText} />
//         {isLoading ? <LoaderAnimation /> : null}
//         <ImageGallery
//           imageData={imageData}
//           showModalWindow={this.showModalWindow}
//         />
//         {showModalStatus && (
//           <Modal
//             urlLarge={largeImage}
//             closeModalWindow={this.closeModalWindow}
//           />
//         )}
//         {loadMoreStatus && <Button loadMore={this.loadMore} />}
//       </div>
//     );
//   }
// }

// export default App;
