type EventCardProps = {
    title: string
    imageSrc: string
    dateInfo: string
    placeInfo: string
    eventDate: string
    link: string
}

export default function EventCard({
    title,
    dateInfo,
    placeInfo,
    imageSrc,
    eventDate,
    link,
}: EventCardProps) {

    const formattedCurrentDate = new Date();
    const formattedEventDate = new Date(eventDate);

    const isExpired = formattedCurrentDate > formattedEventDate;

    return (
        <div className="w-full h-105 relative rounded-2xl overflow-hidden">

            {/* Картинка */}
            <img
                src={imageSrc}
                alt={title}
                className={`
                    absolute inset-0 w-full h-full object-cover
                    transition
                    ${isExpired ? "grayscale" : ""}
                `}
            />

            {/* Затемнение */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Контент */}
            <div className="relative z-10 h-full flex items-center px-10">
                <div className="max-w-xl text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h3>

                    <p className="text-neutral-200 mb-6 text-2xl">
                        {dateInfo}
                    </p>
                    <p className="text-neutral-200 mb-6 text-2xl">
                        {placeInfo}
                    </p>

                    {isExpired ? (
                        <button
                            disabled
                            className="bg-neutral-500 text-neutral-300 px-6 py-3 rounded-lg cursor-not-allowed"
                        >
                            Мероприятие прошло
                        </button>
                    ) : (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                        inline-block
                                        bg-white
                                        text-black
                                        px-6
                                        py-3
                                        rounded-lg
                                        font-semibold
                                        transition-colors
                                        duration-300
                                        hover:bg-red-500
                                        hover:text-black
                                    "
                        >
                            Купить билет
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}