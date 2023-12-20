import Container from "./Components/Container";
import Footer from "./Components/Footer";
import HashtagList from "./Components/HashtagList";
import { usefeedbackhooks } from "./lib/hooks";

function App() {
  const { feedbackItems, isloading, handleAddToList } = usefeedbackhooks();
  return (
    <div className="app">
      <Footer />

      <Container
        feedbackItems={feedbackItems}
        isLoading={isloading}
        handleAddToList={handleAddToList}
      />

      <HashtagList />
    </div>
  );
}

export default App;
