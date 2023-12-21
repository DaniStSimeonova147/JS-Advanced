function solve() {
    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("date");

    const openDiv = document.getElementsByTagName("section")[1].children[1];
    const progressDiv = document.getElementsByTagName("section")[2].children[1];
    const completeDiv = document.getElementsByTagName("section")[3].children[1];

    const addBtn = document.getElementById("add");

    addBtn.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        if (task.value !== ''
            && description.value !== ''
            && dueDate.value !== '') {

            let article = document.createElement('article');

            let openTask = document.createElement('h3');
            openTask.innerText = task.value;

            let openDescription = document.createElement('p');
            openDescription.innerText = `Description: ${description.value}`;

            let openDueDate = document.createElement('p');
            openDueDate.innerText = `Due Date: ${dueDate.value}`;

            let divBtn = document.createElement('div');
            divBtn.classList.add('flex');

            let startBtn = document.createElement('button');
            startBtn.classList.add('green');
            startBtn.innerText = 'Start'

            startBtn.addEventListener('click', moveInProgress)

            let openDelBtn = document.createElement('button');
            openDelBtn.classList.add('red');
            openDelBtn.innerText = 'Delete';

            openDelBtn.addEventListener('click', deleteArticle)

            divBtn.appendChild(startBtn);
            divBtn.appendChild(openDelBtn);

            article.appendChild(openTask);
            article.appendChild(openDescription);
            article.appendChild(openDueDate);
            article.appendChild(divBtn);

            openDiv.appendChild(article);
        }

        function moveInProgress() {

            let article = document.createElement('article');

            let openTask = document.createElement('h3');
            openTask.innerText = task.value;

            let openDescription = document.createElement('p');
            openDescription.innerText = `Description: ${description.value}`;

            let openDueDate = document.createElement('p');
            openDueDate.innerText = `Due Date: ${dueDate.value}`;

            let divBtn = document.createElement('div');
            divBtn.classList.add('flex');

            let progressDelBtn = document.createElement('button');
            progressDelBtn.classList.add('red');
            progressDelBtn.innerText = 'Delete'

            progressDelBtn.addEventListener('click', deleteArticle)

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.innerText = 'Finish';

            finishBtn.addEventListener('click', completeArticle)

            divBtn.appendChild(progressDelBtn);
            divBtn.appendChild(finishBtn);

            article.appendChild(openTask);
            article.appendChild(openDescription);
            article.appendChild(openDueDate);
            article.appendChild(divBtn);

            progressDiv.appendChild(article);
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }

        function completeArticle(e) {
            let article = document.createElement('article');

            let openTask = document.createElement('h3');
            openTask.innerText = task.value;

            let openDescription = document.createElement('p');
            openDescription.innerText = `Description: ${description.value}`;

            let openDueDate = document.createElement('p');
            openDueDate.innerText = `Due Date: ${dueDate.value}`;

            article.appendChild(openTask);
            article.appendChild(openDescription);
            article.appendChild(openDueDate);

            completeDiv.appendChild(article);
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }

        function deleteArticle(e) {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }
    }
}