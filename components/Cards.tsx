import { cards } from "../constants";
import Link from "next/link";
import CardList from "./CardList";

export default function Cards() {
  let constant_cards = cards;
  return (
    <div id="servicios" className="grid grid-cols-1 gap-10 p-10 lg:grid-cols-2">
      {constant_cards.map((card) => {
        if (card.photo !== "recetario") {
          return (
            <Link className="m-auto mt-0 w-[99%] sm:w-[85%]" href={card.photo}>
              <CardList key={card.title} card={card} />
            </Link>
          );
        } else {
          return (
            <div className="pointer-events-none m-auto mt-0 w-[99%] sm:w-[85%]">
              <CardList key={card.title} card={card} />
            </div>
          );
        }
      })}
    </div>
  );
}
