document.getElementById("click-digital").addEventListener("click", function () {
  const digital = document.querySelectorAll(".digital");

  digital.forEach((d) => {
    d.style.display = "block";
  });

  const threeD = document.querySelectorAll(".threeD");
  threeD.forEach((three) => {
    three.style.display = "none";
  });

  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.style.display = "none";
  });
});
document
  .getElementById("click-modelado")
  .addEventListener("click", function () {
    const digital = document.querySelectorAll(".digital");
    digital.forEach((d) => {
      d.style.display = "none";
    });

    const books = document.querySelectorAll(".book");
    books.forEach((book) => {
      book.style.display = "none";
    });

    const threeD = document.querySelectorAll(".threeD");
    threeD.forEach((three) => {
      three.style.display = "block";
    });
  });
document.getElementById("click-libros").addEventListener("click", function () {
  const digital = document.querySelectorAll(".digital");
  digital.forEach((d) => {
    d.style.display = "none";
  });

  const threeD = document.querySelectorAll(".threeD");
  threeD.forEach((three) => {
    three.style.display = "none";
  });

  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.style.display = "block";
  });
});
