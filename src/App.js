import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <>
  {/*[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]*/}
  {/*[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]*/}
  {/*[if IE 8]>         <html class="no-js lt-ie9"> <![endif]*/}
  {/*[if gt IE 8]>      <html class="no-js"> <!--<![endif]*/}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Mapleton Springs B&amp;B</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="style.css" />
  <Header/>
  <main className="text-center font-serif text-green1 text-xl italic leading-10 bg-off-white">
    <h1 className="py-3 text-2xl">~ Rest, Rejuvenate &amp; Reconnect ~</h1>
    <img className="w-full" src={require ("./assets/drone_view.webp")} />
    <p className="m-auto max-w-4xl py-3">
      Awaken in your luxury accommodation with breathtaking and spectacular
      views of the Sunshine Coast Hinterland. Ideal for a romantic getaway in a
      quiet location.
    </p>
    <p className="m-auto max-w-4xl py-3">
      Enjoy a relaxing swim in the infinity edge pool, or soak away in a hot tub
      with a view. If the weather turns poor, you can still retreat to the
      cinema room and immerse yourself in a movie of your choice. Alternatively
      enjoy a game of table tennis or chess in the lounge room. There is also a
      range of games, jigsaw puzzles and books to enjoy.
    </p>
    <p className="m-auto max-w-4xl py-3">
      During the cooler months the open wood fire in the lounge room is a treat
      with complimentary marshmallows to melt and enjoy.
    </p>
    <p className="m-auto max-w-4xl py-3">
      Catering for a maximum of eight adults giving you time to Rest, Rejuvenate
      and Reconnect.
    </p>
  </main>
  <footer className="bg-lime text-center text-white">
    <div>
      <a>Contact Us </a>
    </div>
    <div>
      <h1>Mapleton Springs</h1>
      <a />
      Copyright © 2023 Mapleton Springs. All rights reserved.
    </div>
  </footer>
</>

  );
}

function Header() {
  
  return (
    <header className="bg-lime py-4 font-sans text-white text-2xl font-bold">
      <div className="flex justify-evenly">
        <a
          className="rounded-xl bg-green1 p-1"
          href="https://book-directonline.com/properties/mapletonspringsdirect"
        >
          Book Now
        </a>
        <a
          className="rounded-xl bg-green1 p-1"
          href="https://book-directonline.com/properties/mapletonspringsdirect"
        >
          Check Availability
        </a>
      </div>
      <nav>
        <ol className="flex flex-wrap justify-center">
          <li>
            <a href="index.html">
              <div className="p-3">
                <h1>Home</h1>
              </div>
            </a>
          </li>
          <li>
            <div>
              <h1 className="p-3">Rooms</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">Facilities</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">Eats</h1>
              <div className="hidden">
                <h1>Breakfast Options Locally</h1>
                <h1>Restaurants</h1>
                <h1>Snacks</h1>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">Reviews</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">FAQs</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">Things to Do</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">Gift Vouchers</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">About</h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="p-3">More</h1>
            </div>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default App;
