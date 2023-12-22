import Container from "./Components/layout/Container";
import Footer from "./Components/layout/Footer";
import HashtagList from "./Components/hashtag/HashtagList";
import { usefeedbackhooks } from "./lib/hooks";

function App() {
  const { feedbackItems, isloading, handleAddToList, companies } =
    usefeedbackhooks();
  return (
    <div className="app">
      <Footer />

      <Container
        feedbackItems={feedbackItems}
        isLoading={isloading}
        handleAddToList={handleAddToList}
      />

      <HashtagList companies={companies} />
    </div>
  );
}

export default App;
