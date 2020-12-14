export const GetTasks = () => ([
    {
        projectId: 1,
        projectName: "Software",
        tasks: [
            {
                id: 0,
                name: 'Git',
                description: 'Read git-book',
                completed: 0
            },
            {
                id: 1,
                name: 'React',
                description: 'Develop ToDoList',
                completed: 1
            },
            {
                id: 2,
                name: 'C++',
                description: 'Prepare for exam',
                completed: 1
            }
        ]
    },
    {
        projectId: 2,
        projectName: "Math",
        tasks: [
            {
                id: 3,
                name: 'Calculus',
                description: 'Prepare for exam',
                completed: 0
            },
            {
                id: 4,
                name: 'Algebra',
                description: 'Develop ToDoList',
                completed: 0
            },
            {
                id: 5,
                name: 'Practice',
                description: 'Last two labs',
                completed: 0
            }
        ]
    },
    {
        projectId: 3,
        projectName: "Life",
        tasks: [
            {
                id: 6,
                name: 'Household',
                description: 'Make flat clean',
                completed: 1
            },
            {
                id: 7,
                name: 'Sport',
                description: 'Go to the gym',
                completed: 0
            }
        ]
    }
])
