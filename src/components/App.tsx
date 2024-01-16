import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

const BASE_URL = "https://bytegrad.com/course-assets/projects/rmtdev/api/data";

function App() {
  const [searchText, setSearchText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [jobItems, setJobItems] = useState([]);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);
  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItems} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
