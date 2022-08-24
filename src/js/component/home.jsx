import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const CardItems = [
  {
    img: "https://picsum.photos/id/1042/367/267",
    title: "Card title",
    description:
      "Lorem ipsum dolor sit amet. Sit maiores quas nam dolor animi et quos quis a incidunt vero eos molestiae itaque. Aut animi libero qui officiis illo hic ullam repudiandae qui assumenda alias in labore itaque sit internos necessitatibus qui odit aspernatur.",
    button: "Find Out More!",
  },
  {
    img: "https://picsum.photos/id/1015/367/267",
    title: "Card title",
    description:
      "Lorem ipsum dolor sit amet. Sit maiores quas nam dolor animi et quos quis a incidunt vero eos molestiae itaque. Aut animi libero qui officiis illo hic ullam repudiandae qui assumenda alias in labore itaque sit internos necessitatibus qui odit aspernatur.",
    button: "Find Out More!",
  },
  {
    img: "https://picsum.photos/id/1020/367/267",
    title: "Card title",
    description:
      "Lorem ipsum dolor sit amet. Sit maiores quas nam dolor animi et quos quis a incidunt vero eos molestiae itaque. Aut animi libero qui officiis illo hic ullam repudiandae qui assumenda alias in labore itaque sit internos necessitatibus qui odit aspernatur.",
    button: "Find Out More!",
  },
  {
    img: "https://picsum.photos/id/1021/367/267",
    title: "Card title",
    description:
      "Lorem ipsum dolor sit amet. Sit maiores quas nam dolor animi et quos quis a incidunt vero eos molestiae itaque. Aut animi libero qui officiis illo hic ullam repudiandae qui assumenda alias in labore itaque sit internos necessitatibus qui odit aspernatur.",
    button: "Find Out More!",
  },
];
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-md p-2">
        <Jumbotron />

        <div className="row">
          {CardItems.map((card, i) => {
            return (
              <Cards
                key={i}
                img={card.img}
                title={card.title}
                description={card.description}
                button={card.button}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
