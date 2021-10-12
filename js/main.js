const container = document.querySelector(".container-fluid");

const row = document.createElement("div");
row.classList.add("row", "g-3", "row_h", "flex-wrap");

container.append(row);

for (let i = 1; i <= 100; i++) {
    let bgColor = "";
    let text = "";

    if (i % 3 === 0 && i % 5 !== 0) {
        bgColor = "bg_fizz";
        text = "fizz";
    } else if (i % 3 !== 0 && i % 5 === 0) {
        bgColor = "bg_buzz";
        text = "buzz";
    } else if (i % 3 === 0 && i % 5 === 0) {
        bgColor = "bg_fizz_buzz";
        text = "fizzbuzz";
    } else {
        bgColor = "bg_standard";
        text = `${i}`;
    }

    const col = document.createElement("div");
    col.classList.add("col", "col_w_and_h");

    const square = document.createElement("div");
    square.classList.add("ratio", "ratio-1x1", "text-center", "w-100", bgColor);

    const squareText = document.createElement("span");
    squareText.textContent = text;

    row.append(col);
    col.append(square);
    square.append(squareText);
}
