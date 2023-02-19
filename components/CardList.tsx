type Props = {
  card: Cards;
};

export default function CardList({ card }: Props) {
  let cardInfo = card;
  return (
    <article className="flex flex-col items-center justify-center rounded-lg bg-green-200/20 shadow-xl ring ring-green-200 ring-opacity-50 transition-all duration-200 ease-out hover:scale-105 hover:bg-green-200/50 hover:shadow-lg dark:bg-zinc-800 dark:shadow-white/50 dark:ring-opacity-10 dark:hover:bg-gradient-to-r dark:hover:from-zinc-900 dark:hover:via-green-200/40 dark:hover:to-zinc-900">
      {cardInfo.photo && (
        <img
          className="h-56 w-full rounded-t-lg object-cover shadow-md"
          src={`/images/${cardInfo.photo}.jpg`}
          alt="card_img"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="text-center font-bold text-gray-700 dark:text-white">
            {cardInfo.title}
          </h2>
          <section className="m2-2 flex-1">
            <p className="p-3 text-center text-sm text-gray-700 dark:text-white ">
              {cardInfo.description}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
