export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-5 py-10 leading-relaxed">
            <h1 className="font-[--font-cormorant-garamond] text-4xl font-semibold  mb-12">Биография Мальчика-Вампира</h1>

            <section className="mb-10 w-5/6">
                <div className="space-y-4">
                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Первое несмелое хахаха</h3>
                        <p>
                            Я никогда — уверяю — никогда не знал ничего о Комедии, пока мне не исполнилось 33. Тогда я познакомился с шоу Эльвиры Повелительницы Тьмы, а также с номерами Ширвиндта и Державина. <br />
                            Я влюбился в Комедию и прям сразу рванул выступать в ближайший бар. <br />
                            Это был февраль 2025-й год...
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Стендап-лунатик</h3>
                        <p>
                            Спустя полгода Комедия забрала у меня <span className="text-red-500">всё</span>. <br />
                            Любая мысль стремилась превращаться в шуточку или разгон. Я попал в заточение юмора.<br />
                            Вы наверняка знаете ребят, которые годами пребывают в надежде "вот-вот стрельнуть", и
                            они настолько поглощены этим, что не замечают больше ничего на свете. <br />
                            Я повторял одни и те же шутки пьяным людям в баре для мотоциклистов. <br />
                            В какой-то момент я понял, что это, типа, я не знаю…
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Клоунская Академия Которого</h3>
                        <p>
                            Cжимая в руке последние приколы, я встал на порог <a href="https://kotorogo.ru/show/" className="text-blue-300 underline hover:text-blue-800 hover:no-underline">театра</a>.<br />
                            Меня стали приводить в порядок: я вновь мучительно родился, стал отличать смешное от серьёзного и даже в какой-то день научился жонглировать. <br />
                            Мне казалось, я обрёл счастье. Но вдруг выяснилось страшное. Оказалось, что я вампир.
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Мой любимый супергерой — <span className="text-[#0BE037]">ХАЛК</span></h3>
                        <p>
                            Теперь я живу в Ржевском лесопарке и нападаю на спортсменов и грибников. В моей душе нет сострадания, 
                            я безжалостный монстр, одержимый жаждой крови. Моя любимая группа — <span className="text-red-500">Placebo</span>💔
                            <br /><br />
                            С большой охотой жду Вас на выступления!
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Контакты</h2>

                <div className="shadow-md rounded-2xl p-5 border space-y-2">
                    <p>Email: malchikvampir@gmail.com</p>
                    <p><span className="text-red-500">По всем вопросам</span>: <a href="https://t.me/JohnyPC" className="text-blue-300 underline hover:text-blue-800 hover:no-underline">
                        Менеджер Мальчика-Вампира
                    </a></p>
                    <p>Крёстный отец в стендапе: Руслан Исмаилов</p>
                    <p>Крёстная мать: не скажу</p>
                </div>
            </section>
        </div>
    );
}