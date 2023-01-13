const user = {
    name: "Тайвин",
    lastName: "Ланнистер",
    status: "глава дома Ланнистеров",
    castle: "Утес Кастерли",
    words: "Услышь мой рёв!",
    sword: "Светлый рёв",
    vasalls: ["Рейны", "Веларионы"],
    marriage: true
};

const { name, lastName, ...userAdditionalInfo } = user;