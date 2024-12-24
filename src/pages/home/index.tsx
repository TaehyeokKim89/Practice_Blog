import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";
import Carousel from "components/Carousel";
import firebaseApp from "firebaseApp";
console.log(firebaseApp)

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel/>
      <PostList/>
      <Footer />
    </div>
  );
};

export default Home;
