const containerFluid = document.querySelector(".container-fluid");

const container = document.createElement("div");
container.classList.add("container");

const row = document.createElement("div");
row.classList.add("row", "g-5", "flex-wrap");

containerFluid.append(container);
container.append(row);

for (let i = 1; i <= 100; i++) {
    let bgColor = "";
    let text = "";

    if (i % 3 === 0 && i % 5 !== 0) {
        bgColor = "bg_color_fizz";
        text = "fizz";
    } else if (i % 3 !== 0 && i % 5 === 0) {
        bgColor = "bg_color_buzz";
        text = "buzz";
    } else if (i % 3 === 0 && i % 5 === 0) {
        bgColor = "bg_color_fizz_buzz";
        text = "fizzbuzz";
    } else {
        bgColor = "bg_color_standard";
        text = `${i}`;
    }

    const col = document.createElement("div");
    col.classList.add("col", "col_w");

    const square = document.createElement("div");
    square.classList.add("ratio", "ratio-1x1", bgColor);

    const squareTextContainer = document.createElement("div");

    const squareText = document.createElement("span");
    squareText.classList.add("span_center_and_font")
    squareText.textContent = text;

    row.append(col);
    col.append(square);
    square.append(squareTextContainer)
    squareTextContainer.append(squareText);
}
