export default function BiographyCards() {
    const cards = [
        {
            id: "01",
            title: "Начало пути",
            subtitle: "Первое несмелое ха-ха",
            text: `Я ничего не знал о Комедии, пока не увидел номера Ширвиндта и Державина. Я влюбился в Комедию и пошёл выступать в ближайший бар`,
            dark: true,
        },
        {
            id: "02",
            title: "Поиск себя",
            subtitle: "Стендап-лунатик",
            text: `Комедия забрала у меня всё. Любую мысль я превращал в юмор. Это было заточение: я повторял шутки пьяным мотоциклистам каждый день`,
        },
        {
            id: "03",
            title: "Главное дело",
            subtitle: "Клоунская Академия",
            text: `Изможденный я упал на порог театра имени Которого. 
                            Здесь я стал отличать смешное от серьёзного и жонглировать. 
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
        <section className="w-full pb-24">
            <div className="mx-auto grid max-w-7xl gap-6">
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
                            <div className="absolute -right-20 -top-20 h-40 w-80 rounded-full bg-white/5 blur-3xl" />
                        </div>

                        {/* Top */}
                        <div className="mb-4 flex items-start justify-between">
                            <div>
                                <span
                                    className={`
                                        text-sm uppercase tracking-[0.25em]
                                        ${card.dark || card.accent
                                        ? "text-neutral-400"
                                            : "text-black/40"
                                        }
                                    `}
                                >
                                    {card.subtitle}
                                </span>

                                <h3 className="mt-2 text-2xl md:text-4xl font-light leading-tight">
                                    {card.title}
                                </h3>
                            </div>

                            <span
                                className={`
                                    hidden md:block text-5xl font-extralight
                                    ${card.dark || card.accent
                                        ? "text-neutral-400"
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
                                mb-4 h-px w-24
                                ${card.dark || card.accent
                                    ? "bg-white/10"
                                    : "bg-black/10"
                                }
                            `}
                        />

                        {/* Text */}
                        <div
                            className={`
                                max-w-xl text-base leading-relaxed
                                ${card.dark || card.accent
                                ? "text-neutral-400"
                                    : "text-black/70"
                                }
                            `}
                        >
                            {card.text}
                        </div>

                        {/* Arrow */}
                        <button
                            className={`
                                hidden mt-10 h-14 w-14 items-center justify-center
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