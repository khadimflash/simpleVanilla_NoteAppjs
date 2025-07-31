import { renderNotes, sendToLocalStorage,menu,menuPage,closePage } from "./app.js";

let localNoteArray = JSON.parse(localStorage.getItem("notes")) || [];
const showArchiveNotes = document.querySelector(".archive-notes-container");
const localStorageKeyName = "notes";

document.addEventListener("DOMContentLoaded", () => {
    renderNotes(localNoteArray.filter(({ isArchive }) => isArchive), showArchiveNotes);
});

showArchiveNotes.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    const type = e.target.dataset.type;
    const noteID = parseInt(e.target.dataset.id); 

    if (type === "del") {
        localNoteArray = localNoteArray.filter(({ id }) => id !== noteID);
        renderNotes(localNoteArray.filter(({ isArchive }) => isArchive), showArchiveNotes);
        sendToLocalStorage(localStorageKeyName, localNoteArray);
    } else if (type === "archive") {
        localNoteArray = localNoteArray.map((note) =>
            note.id === noteID ? { ...note, isArchive: !note.isArchive } : note
        );
        renderNotes(localNoteArray.filter(({ isArchive }) => isArchive), showArchiveNotes);
        sendToLocalStorage(localStorageKeyName, localNoteArray);
    }
}); menu.addEventListener("click",()=>{
menuPage.classList.remove("d-none")
})
closePage.addEventListener("click",()=>{
  menuPage.classList.toggle("d-none")
})