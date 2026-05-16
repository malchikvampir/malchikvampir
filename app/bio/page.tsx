export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-5 py-10 leading-relaxed">
            <h1 className="text-4xl font-bold mb-2">Обо мне</h1>

            <p className="text-gray-500 mb-8">
                Мальчик-Вампир: история личности
            </p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Биография</h2>

                <div className="space-y-4">
                    <div className="shadow-md rounded-2xl p-5 border">
                        <p>
                            <strong>I.</strong> <br />
                            Я никогда, повторяю — никогда не знал ничего о комедии, пока мне не исполнилось 33. <br />
                            Тогда я познакомился с номерами Ширвинда и Державина. <br />
                            Я влюбился в комедию и пошел выступать в ближайший бар. <br />
                            Это был февраль 2025-й год.
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border">
                        <p>
                            <strong>II.</strong> <br />
                            Прошло полгода. Комедия забрала у меня <span className="text-red-500">всё</span>. <br />
                            Любая моя мысль теперь превращалась в шутку. Я попал в заточение юмора.<br />
                            Вы наверняка знаете ребят, которые годами пребывают в надежде "вот-вот стрельнуть", и
                            они настолько поглощены этим, что не замечают больше ничего на свете. <br />
                            Я повторял одни и те же шутки пьяным людям в баре для мотоциклистов. В какой-то момент я понял, что это и есть конец…
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border">
                        <p>
                            <strong>III.</strong> <br />
                            Изможденный этим состоянием, сжимавший в руке пару приколов, я очутился на пороге клоунской академии Которого.<br />
                            Меня стали приводить в порядок: я вновь обрел рассудок, стал отличать смешное от серьёзного и даже в какой-то день научился жонглировать. <br />
                            Мне казалось, я обрёл счастье. Но вдруг выяснилось страшное. Оказалось, что я вампир.
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border">
                        <p>
                            <strong>IV.</strong> <br />
                            Теперь я живу в Ржевском лесопарке и нападаю на спортсменов и грибников.<br />
                            В моей душе нет сострадания, я безжалостный монстр, одержимый жаждой крови.<br />
                            Приходите на мои выступления!
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Контакты</h2>

                <div className="shadow-md rounded-2xl p-5 border space-y-2">
                    <p>Email: malchikvampir@gmail.com</p>
                    <p><a href="tg.me/JohnyPC" className="text-blue-600 underline hover:text-blue-800 hover:no-underline">
                        Менеджер Мальчика-Вампира
                    </a></p>
                </div>
            </section>
        </div>
    );
}