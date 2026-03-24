const API = "/api/todos"; // ✅ no localhost needed

async function loadTodos() {
    const res = await fetch(API);
    const todos = await res.json();

    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${todo.title}
            <button class="delete" onclick="deleteTodo('${todo.id}')">X</button>
        `;

        list.appendChild(li);
    });
}

async function addTodo() {
    const input = document.getElementById("todoInput");

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: input.value })
    });

    input.value = "";
    loadTodos();
}

async function deleteTodo(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadTodos();
}

loadTodos();