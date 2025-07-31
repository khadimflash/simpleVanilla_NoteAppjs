//function to render html dynamicly
export const menu=document.querySelector(".menu-bar")
export const closePage=document.querySelector(".fa-xmark")
export const menuPage=document.querySelector(".menu-page")
export const renderNotes = (notesListes, element) => {
  element.innerHTML = notesListes.map(
      ({ id, title, note, isPinned, isArchive }) =>
        `
          <div class="single-note shadow">
            <div class="d-flex align-center title-container">
            <span class="title">${title}</span>
            <button class="button del-btn v-hidden" data-type="del" data-id="${id}">
            <span class="material-symbols-outlined" data-type="del" data-id="${id}" >delete</span>
            </button>
            </div>
            <p>${note}</p>
            <div class="options d-flex gap-md">
                <button class="button btn pinned-btn v-hidden ${isArchive?"d-none":""} " date-type="pinned" data-id="${id}">
                <span class=${isPinned? "material-symbols-filled" : "material-symbols-outlined"} data-type="pinned" data-id="${id}">keep</span>
                </button>
                <button class="button btn pinned-btn v-hidden ${isPinned?"d-none":""}" date-type="archive" data-id="${id}">
                <span class=${isArchive?"material-symbols-filled":"material-symbols-outlined"} data-type="archive" data-id="${id}">archive</span>
                </button>
            </div>
          </div>
`
    )
    .join("");
};
export function sendToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

