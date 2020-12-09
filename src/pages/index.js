import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Donations from "../components/Donations";
import Masthead from "../components/Masthead";
import Stocks from "../components/Stocks";

/**
 *  @description
 *  This is the root (or index) page of our application.
 *
 *  @summary
 *  From the folder structure (being the index page), you can access this page via ---> http://localhost:3000/
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function Home() {
  return (
    <div>
      <Masthead />
      <Navbar />
      <section>
        <div className="container">
          <h1>Welcome to Supplies</h1>
          <p>
            Help contribute to the community by donating any supplies that you
            can spare to those who need them the most! (especially with what's
            going on in the world today)
          </p>
        </div>
      </section>
      <h1>&nbsp;&nbsp;Donations</h1>
      <Donations />
      <h1>&nbsp;&nbsp;Stocks</h1>
      <Stocks />
      <Footer />
    </div>
  );
}

export default Home;
