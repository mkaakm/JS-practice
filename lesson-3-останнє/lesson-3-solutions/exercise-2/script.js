const user = {
    name: "Тайвин",
    lastName: "Ланнистер",
    status: "глава дома Ланнистеров",
    castle: "Утес Кастерли",
    words: "Услышь мой рёв!",
    sword: "Светлый рёв",
    vasalls: ["Рейны", "Веларионы"],
    children: {
        main: "Джейме",
        daughter: "Серсея",
        son: "Тирион"
    }
};

const { children: { daughter } } = user; 