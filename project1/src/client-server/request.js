import { baseURL } from '../data/urlList';

import { errorLoadProj } from '../data/errorTypes';
import { errorLoadTask } from '../data/errorTypes';
import { errorPushTask } from '../data/errorTypes';
import { errorChngTask } from '../data/errorTypes';

const resultObject = {
    ok : false,
    result : undefined
};

const newRO = () => ({
    ok : resultObject.ok,
    result : resultObject.result
})

const convertTaskToMyFormat = (task) => ({
    id : task.id,
    name: task.name,
    description: task.description,
    completed: task.completed ? 1 : 0
})

const Request = (url, method='GET', body=undefined) => {
    return fetch(url, {
        method: method,
        headers: {
            Token: "JUSSIAR",
            'Content-type': "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json());
}

function errorPrinter(what, error) {
    console.log(what);
    console.error(error);
}

export function loadProjects() {
    const url = `${baseURL}/projects/`;
    let projects = newRO();
    Request(url, 'GET', undefined).then((res) => {
        projects.result = res;
        projects.ok = true;
    }).catch((error) => {
        projects.result = [];
        errorPrinter(error, errorLoadProj);
    });
    return projects;
}

export function loadTasks(projectId) {
    id = String(projectId);
    const url = `${baseURL}/projects/${id}/tasks/`;
    let tasks = newRO();
    Request(url, 'GET', undefined).then((res) => {
        tasks.result = res.map(element => {
            return convertTaskToMyFormat(element);
        });
        tasks.ok = true;
    }).catch((error) => {
        tasks.result = [];
        errorPrinter(error, errorLoadTask);
    });
    return tasks;
}

export function changeTaskStatus(projectId, taskId, task) {
    idProj = String(projectId);
    idTask = String(taskId);
    const url = `${baseURL}/projects/${idProj}/tasks/${idTask}/`;
    let answer = newRO();
    const requestBody = {
        name: task.name,
        description: task.description,
        priority: task.priority,
        completed : (task.completed === 1) ? true : false,
        projectId : projectId
    };
    Request(url, 'PUT', requestBody).then((res) => {
        answer.ok = true;
    }).catch((error) => {
        errorPrinter(error, errorChngTask);
    })
    return answer;
}

export function pushTask(projectId, newTask) {
    id = String(projectId);
    const url = `${baseURL}/projects/${id}/tasks/`;
    let answer = newRO();
    const requestBody = {
        name: task.name,
        description: task.description,
        priority: Math.random()
    };
    Request(url, 'POST', requestBody).then((res) => {
        answer.ok = true;
    }).catch((error) => {
        errorPrinter(error, errorPushTask);
    })
    return answer;
}
