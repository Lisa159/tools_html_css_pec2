let openedSidenav = false;

const chaptersBook1 = [3, 11, 23, 36, 46, 54, 61, 64, 68, 72];
const chaptersBook2 = [12, 27, 40, 48, 63];
const chaptersBook3 = [8, 23, 27, 42, 57, 71];
const chaptersBook5 = [2, 11, 16, 23, 30, 36, 43, 50, 52, 71];

function openSidenav() {
  const display = openedSidenav ? "none" : "inline";
  const transforValue = openedSidenav ? "translateX(100vw)" : "translateX(0px)";
  document
    .getElementById("responsive")
    .getElementsByClassName("sidenav")[0].style.transform = transforValue;
  document
    .getElementById("responsive")
    .getElementsByClassName("overlay")[0].style.display = display;
  openedSidenav = !openedSidenav;
}

function setChapters() {
  try {
    let list = document
      .getElementById("about")
      .getElementsByClassName("chapters")[0];
    if (list !== null && list !== undefined) {
      if (window.location.href.includes("details-libro1")) {
        _setChaptersList(chaptersBook1, list);
      } else if (window.location.href.includes("details-libro2")) {
        _setChaptersList(chaptersBook2, list);
      } else if (window.location.href.includes("details-libro3")) {
        _setChaptersList(chaptersBook3, list);
      } else if (window.location.href.includes("details-libro5")) {
        _setChaptersList(chaptersBook5, list);
      }
    }
  } catch (err) {}
}

function _setChaptersList(chaptersList, list) {
  chaptersList.map((el) => {
    const item = document.createElement("li");
    item.innerHTML = `Capítulo ${el}`;
    list.appendChild(item);
  });
}

setChapters();
