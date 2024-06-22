const listaDeTarefas = [];
function adicionarTarefa(tarefa, lista) {
    lista.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada à lista.`);
}
function removerUltimaTarefa(lista) {
    if (lista.length > 0) {
        const tarefaRemovida = lista.pop();
        console.log(`Tarefa "${tarefaRemovida}" removida da lista.`);
    } else {
        console.log('A lista está vazia. Nenhuma tarefa para remover.');
    }
}
function removerPrimeiraTarefa(lista) {
    if (lista.length > 0) {
        const tarefaRemovida = lista.shift();
        console.log(`Tarefa "${tarefaRemovida}" removida da lista.`);
    } else {
        console.log('A lista está vazia. Nenhuma tarefa para remover.');
    }
}
function imprimirTarefas(lista) {
    if (lista.length > 0) {
        console.log('Lista de Tarefas:');
        lista.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    } else {
        console.log('A lista está vazia.');
    }
}