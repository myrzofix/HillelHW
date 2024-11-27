class Note {
    constructor(title, description) {
        if (!title || !description) {
            throw new Error("Назва та опис не можуть бути порожніми");
        }
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
        this.updatedAt = new Date();
    }

    markAsPending() {
        this.completed = false;
        this.updatedAt = new Date();
    }

    edit(title, description) {
        if (title && description) {
            this.title = title;
            this.description = description;
            this.updatedAt = new Date();
        } else {
            throw new Error("Назва та опис не можуть бути порожніми");
        }
    }

    getInfo() {
        return {
            title: this.title,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            completed: this.completed
        };
    }
}

class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(title, description) {
        const newNote = new Note(title, description);
        this.notes.push(newNote);
    }

    removeNoteByTitle(title) {
        const index = this.notes.findIndex(note => note.title === title);
        if (index !== -1) {
            this.notes.splice(index, 1);
        } else {
            throw new Error("Нотатку не знайдено");
        }
    }

    editNote(title, newTitle, newDescription) {
        const note = this.notes.find(note => note.title === title);
        if (note) {
            note.edit(newTitle, newDescription);
        } else {
            throw new Error("Нотатку не знайдено");
        }
    }

    getNoteInfo(title) {
        const note = this.notes.find(note => note.title === title);
        if (note) {
            return note.getInfo();
        } else {
            throw new Error("Нотатку не знайдено");
        }
    }

    getAllNotes() {
        return this.notes.map(note => note.getInfo());
    }

    getPendingNotesCount() {
        return this.notes.filter(note => !note.completed).length;
    }

    getTotalNotesCount() {
        return this.notes.length;
    }

    searchByTitle(title) {
        return this.notes.filter(note => note.title.toLowerCase().includes(title.toLowerCase()));
    }

    sortByCompletionStatus() {
        return this.notes.sort((a, b) => a.completed - b.completed);
    }

    sortByDate() {
        return this.notes.sort((a, b) => a.createdAt - b.createdAt);
    }

    sortByLastUpdated() {
        return this.notes.sort((a, b) => a.updatedAt - b.updatedAt);
    }
}

const todoList = new TodoList();
todoList.addNote("Купити продукти", "Молоко, яйця, хліб");
todoList.addNote("Зробити прання", "Прати одяг");
console.log("Всі нотатки:", todoList.getAllNotes());
todoList.getNoteInfo("Купити продукти").markAsCompleted();
todoList.editNote("Зробити прання", "Зробити прання", "Прати одяг та рушники");
console.log(`Загальна кількість нотаток: ${todoList.getTotalNotesCount()}`);
console.log(`Невиконаних нотаток: ${todoList.getPendingNotesCount()}`);
console.log("Результати пошуку за назвою 'прання':", todoList.searchByTitle("прання"));
console.log("Сортування за статусом виконання:", todoList.sortByCompletionStatus());
console.log("Сортування за датою створення:", todoList.sortByDate());
console.log("Сортування за датою останнього редагування:", todoList.sortByLastUpdated());