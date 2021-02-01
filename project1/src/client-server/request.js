import { baseURL } from '../data/urlList';

import { errorLoadProj } from '../data/errorTypes';
import { errorLoadTask } from '../data/errorTypes';
import { errorPushTask } from '../data/errorTypes';
import { errorChngTask } from '../data/errorTypes';
import { errorPushProj } from '../data/errorTypes'; 
import { errorRegister } from '../data/errorTypes';
import { errorLogin } from '../data/errorTypes'; 

const resultObject = {
    ok : false,
    result : undefined
};

const newRO = () => ({
    ok : resultObject.ok,
    result : resultObject.result
})

const convertProjectToMyFormat = (project) => ({
    projectId: project.id,
    projectName: project.name,
    tasks: []
})

const convertTaskToMyFormat = (task) => ({
    id : task.id,
    name: task.name,
    description: task.description,
    completed: task.completed ? 1 : 0
})

const Request = (url, method='GET', body=undefined, spec='sess') => {
    const myStorage = window.localStorage;
    // console.log(url);
    // console.log(method);
    // console.log(JSON.stringify(body));
    return ((spec === 'auth')
        ? fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        : fetch(url, {
            method: method,
            headers: {
                //Token: 'JUSSIAR',
                Token: myStorage.getItem("token"),
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    )
}

function errorPrinter(what, error=undefined) {
    console.log(what);
    //console.error(error);
}

export function loadProjects() {
    const url = `${baseURL}/projects/`;
    return Request(url, 'GET', undefined).then((response) => {
        if (!response.ok) {
            errorPrinter(errorLoadProj);
            //throw new Error(response.statusText);
        }
        return response;
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.map(element => {
            return convertProjectToMyFormat(element);
        });
    });
}

export function loadTasks(projectId) {
    const id = String(projectId);
    const url = `${baseURL}/projects/${id}/tasks/`;
    return Request(url, 'GET', undefined).then((response) => {
        if (!response.ok) {
            errorPrinter(errorLoadTask);
            //throw new Error(response.statusText);
        }
        return response;
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.map(element => {
            return convertTaskToMyFormat(element);
        });
    })
}

export function changeTaskStatus(projectId, taskId, task) {
    const idProj = String(projectId);
    const idTask = String(taskId);
    const url = `${baseURL}/projects/${idProj}/tasks/${idTask}/`;
    const requestBody = {
        name: task.name,
        description: task.description,
        priority: 1,
        completed : (task.completed === 0) ? true : false,
        projectId : projectId
    };
    return Request(url, 'PUT', requestBody).then((response) => {
        //console.log(response);
        if (!response.ok) {
            errorPrinter(errorChngTask);
            //throw new Error(response.statusText);
        }
        return response;
    }) 
}

export function pushProject(newProject) {
    const url = `${baseURL}/projects/`;
    const requestBody = {
        name: newProject.projectName,
    };
    return Request(url, 'POST', requestBody).then((response) => {
        //console.log(response);
        if (!response.ok) {
            errorPrinter(errorPushProj);
            //throw new Error(response.statusText);
        }
        return response;
    }).then((response) => {
        return response.json();
    })    
}

export function pushTask(projectId, newTask) {
    const id = String(projectId);
    const url = `${baseURL}/projects/${id}/tasks/`;
    const requestBody = {
        name: newTask.name,
        description: newTask.description,
        priority: 1//Math.round(Math.random())
    };
    return Request(url, 'POST', requestBody).then((response) => {
        console.log(response);
        if (!response.ok) {
            errorPrinter(errorPushTask);
            //throw new Error(response.statusText);
        }
        return response;
    }).then((response) => {
        return response.json();
    }) 
}

export function signIn(login, password) {
    const url = `${baseURL}/login/`;
    const requestBody = {
        login: String(login),
        password: String(password)
    };
    return Request(url, 'POST', requestBody, 'auth').then((response) => {
        console.log(response);
        if (!response.ok) {
            errorPrinter(errorLogin);
        }
        return response;
    }).then((response) => {
        return response.json();
    }) 
}

export function signUp(login, password) {
    const url = `${baseURL}/register/`;
    const requestBody = {
        login: login,
        password: password
    };
    return Request(url, 'POST', requestBody, 'auth').then((response) => {
        console.log(response);
        if (!response.ok) {
            errorPrinter(errorRegister);
        }
        return response;
    }).then((response) => {
        return response.json();
    }) 
}
