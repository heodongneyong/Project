const entries = [
    { name: "익1", content: "첫 번째 방문입니다!" },
    { name: "익2", content: "두 번째 방문입니다!" }
];

function displayEntries() {
    const entriesList = document.querySelector("#entries ul");
    entriesList.innerHTML = "";

    entries.forEach(entry => {
        const entryItem = document.createElement("li");
        entryItem.innerHTML = `<span class="name">${entry.name}</span>: ${entry.content}`;
        entriesList.appendChild(entryItem);
    });
}

function createEntry(name, content) {
    entries.push({ name, content });
    displayEntries();
}

displayEntries();

function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    displayEntries();
}

function displayEntries() {
    const entriesList = document.querySelector("#entries ul");
    entriesList.innerHTML = "";

    entries.forEach(entry => {
        const entryItem = document.createElement("li");
        entryItem.innerHTML = `
            <span class="name">${entry.name}</span>: ${entry.content}
            <button data-id="${entry.id}" class="delete-btn">삭제</button>
        `;
        entriesList.appendChild(entryItem);

        const deleteButton = entryItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function() {
            const entryId = parseInt(this.dataset.id);
            if (confirm(`방명록 "${entry.name}"을 삭제하시겠습니까?`)) {
                deleteEntry(entryId);
            }
        });
    });
}

const writeForm = document.querySelector("#write-form form");
writeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const contentInput = document.querySelector("#content");
    const name = nameInput.value;
    const content = contentInput.value;

    if (name && content) {
        createEntry(name, content);
        nameInput.value = "";
        contentInput.value = "";
    }
});