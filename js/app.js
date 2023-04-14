// CONFIG
const config = {
    $app: "app",
    $square: "square",
    squareWidth: 80,
    squareHeight: 50,
    interval: 2,
};

// FUNCTIONS
const square = (w, h) => {
    const square = document.createElement("div");

    square.classList.add(config.$square);
    square.style.width = w + "px";
    square.style.height = h + "px";

    return square;
};

const showSquares = (nb) => {
    const $app = document.getElementById(config.$app);
    for (let i = 0; i < nb; i++) {
        $app.append(square(config.squareWidth, config.squareHeight));
    }
};

const colorizeSquares = () => {
    const squares = document.getElementsByClassName(config.$square);
    for (let i = 0; i < squares.length; i++) {
        let bgColor = "grey";
        bgColor = i % config.interval === 0 ? "red" : "blue";
        squares[i].style.backgroundColor = bgColor;
    }
};

const squareToBody = () => {
    const body = document.querySelector("body");
    body.append(square(300, 200));
};

// APP
showSquares(3);
colorizeSquares();

// squareToBody();
