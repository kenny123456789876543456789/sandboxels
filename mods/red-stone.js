// Example: Creating a new "Red Stone" element
elements.red_stone = {
    color: "#ff0000",
    behavior: behaviors.WALL,
    category: "land",
    state: "solid",
};
elements.red_stone.reactions = {
    "water": { "elem1": "lava", "elem2": "water", "chance": 0.5 }
};
