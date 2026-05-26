export default function BiographyCards() {
    const cards = [
        {
            id: "01",
            title: "Начало пути",
            subtitle: "Первое несмелое ха-ха",
            text: "Я никогда — ну, или типа того — не знал ничего о Комедии, пока я впервые не увидел номера Ширвиндта и Державина. Я влюбился в Комедию и пошёл выступать в ближайший бар.",
            dark: true,
        },
        {
            id: "02",
            title: "Поиск себя",
            subtitle: "Стендап-лунатик",
            text: `Комедия забрала у меня всё. Любую мысль я стремился превратить в юмор. Это было заточение. Я повторял одни и те же шутки пьяным мотоциклистам в баре каждый день`,
        },
        {
            id: "03",
            title: "Главное дело",
            subtitle: "Клоунская Академия Которого",
            text: `Cжимая в руке последние приколы, я поступил в театр. 
                            Меня стали приводить в порядок: я стал отличать смешное от серьёзного и жонглировать. 
                            Но вдруг выяснилось страшное. Оказалось, что я вампир.`,
            accent: true,
        },
        {
            id: "04",
            title: "Наследие",
            subtitle: "Меня уже не остановить",
            text: `Теперь я живу в Ржевском лесопарке и нападаю на спортсменов и грибников. В моей душе нет сострадания, 
                            я безжалостный монстр, одержимый жаждой крови 💔 Приходите на мои выступления!`,
        },
    ];

    return (
        <section className="w-full py-24">
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
                {cards.map((card) => (
                    <article
                        key={card.id}
                        className={`
                            group relative overflow-hidden rounded-4xl border
                            p-10 transition-all duration-500
                            hover:-translate-y-1 hover:shadow-2xl
                            ${card.dark
                                ? "border-white/10 bg-[#121212] text-white"
                                : card.accent
                                    ? "border-emerald-400/10 bg-linear-to-br from-[#13261f] to-[#0f1715] text-white"
                                    : "border-black/5 bg-[#f4f1ea] text-black"
                            }
                        `}
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
                        </div>

                        {/* Top */}
                        <div className="mb-12 flex items-start justify-between">
                            <div>
                                <span
                                    className={`
                                        text-sm uppercase tracking-[0.25em]
                                        ${card.dark || card.accent
                                            ? "text-white/40"
                                            : "text-black/40"
                                        }
                                    `}
                                >
                                    {card.subtitle}
                                </span>

                                <h3 className="mt-4 text-4xl font-light leading-tight">
                                    {card.title}
                                </h3>
                            </div>

                            <span
                                className={`
                                    text-5xl font-extralight
                                    ${card.dark || card.accent
                                        ? "text-white/20"
                                        : "text-black/20"
                                    }
                                `}
                            >
                                {card.id}
                            </span>
                        </div>

                        {/* Divider */}
                        <div
                            className={`
                                mb-8 h-px w-24
                                ${card.dark || card.accent
                                    ? "bg-white/10"
                                    : "bg-black/10"
                                }
                            `}
                        />

                        {/* Text */}
                        <p
                            className={`
                                max-w-md text-base leading-relaxed
                                ${card.dark || card.accent
                                    ? "text-white/70"
                                    : "text-black/70"
                                }
                            `}
                        >
                            {card.text}
                        </p>

                        {/* Arrow */}
                        <button
                            className={`
                                mt-10 flex h-14 w-14 items-center justify-center
                                rounded-full border transition-all duration-300
                                group-hover:translate-x-1
                                ${card.dark || card.accent
                                    ? "border-white/10 text-white hover:bg-white hover:text-black"
                                    : "border-black/10 text-black hover:bg-black hover:text-white"
                                }
                            `}
                        >
                            →
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}