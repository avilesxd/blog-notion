import youtube from "../config/youtube.json";

function VideosYoutube() {
  return (
    <section>
      <h3 className="mt-3 text-lg md:text-2xl font-semibold leading-6 text-zinc-900 dark:text-white group-hover:text-zinc-600 mb-4">
        Latest videos on YouTube:
      </h3>
      <ul className="mx-auto py-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-white">
        {youtube?.slice(0, 2).map((item) => (
          <li key={item.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${item.videoId}`}
              target="_blank"
              className="relative top-0 block overflow-hidden rounded-2xl"
            >
              <figure>
                <img
                  alt={item.title}
                  src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
                  className="h-44 w-full object-cover transition duration-500 ease-in-out hover:scale-105"
                  width={309}
                  height={176}
                  decoding="async"
                  loading="lazy"
                />
              </figure>
              <div className="bg-zinc-900 p-4 dark:bg-zinc-800 dark:text-white">
                <span className="text-sm">{item.channelTitle}</span>
                <p className="mt-1 text-xs text-zinc-400 h-8">{item.title}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideosYoutube;
