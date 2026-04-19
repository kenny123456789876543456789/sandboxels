runAfterLoad(function() {
    elements.red_stone = {
        color: "#ff0000",
        behavior: behaviors.WALL,
        category: "land",
        state: "solid",
        reactions: {
            "water": { "elem1": "lava", "elem2": "water", "chance": 0.5 }
        }
    };
});
