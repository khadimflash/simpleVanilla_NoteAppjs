import { renderNotes, sendToLocalStorage,menu,menuPage,closePage } from "./app.js";


const title = document.querySelector(".title");
const note = document.querySelector(".note");
const addNotesButton = document.querySelector(".add-btn");
const noteDisplay = document.querySelector(".notes-display");
const showOtherNotes = document.querySelector(".notes-container");
const showPinnedNotes = document.querySelector(".pinned-notes-container");
const pinnedNotesTitle = document.querySelector(".pin-title");
const globalNotesTitle = document.querySelector(".other-title");

let notesList = JSON.parse(localStorage.getItem("notes")) || [];

const updateAndRender = () => {
  const pinnedNotes = notesList.filter(({ isPinned }) => isPinned);
  const otherNotes = notesList.filter(({ isPinned, isArchive }) => !isPinned && !isArchive);

  pinnedNotesTitle.classList.toggle("d-none", pinnedNotes.length !== 0);
  globalNotesTitle.classList.toggle("d-none", otherNotes.length !== 0);

  renderNotes(pinnedNotes, showPinnedNotes);
  renderNotes(otherNotes, showOtherNotes);
  sendToLocalStorage("notes", notesList);
};

document.addEventListener("DOMContentLoaded", updateAndRender);

addNotesButton.addEventListener("click", () => {
  if (note.value.trim().length > 0 || title.value.trim().length > 0) {
    notesList = [
      ...notesList,
      {
        id: Date.now(),
        title: title.value.trim(),
        note: note.value.trim(),
        isPinned: false,
        isArchive: false,
      },
    ];
    updateAndRender();
    note.value = title.value = "";
  }
});

noteDisplay.addEventListener("click", (e) => {
  const type = e.target.dataset.type;
  const noteId = parseInt(e.target.dataset.id);

  if (!type || !noteId) return;

  if (type === "del") {
    notesList = notesList.filter(({ id }) => id !== noteId);
  } else if (type === "pinned") {
    notesList = notesList.map((note) =>
      note.id === noteId ? { ...note, isPinned: !note.isPinned } : note
    );
  } else if (type === "archive") {
    notesList = notesList.map((note) =>
      note.id === noteId ? { ...note, isArchive: !note.isArchive } : note
    );
  }
  updateAndRender();
});
  menu.addEventListener("click",()=>{
menuPage.classList.remove("d-none")
})
closePage.addEventListener("click",()=>{
  menuPage.classList.toggle("d-none")
})


