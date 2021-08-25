

export let lvl1 = {
    id: 0,
    title: "root",
    children: [
        {
            id: 20000,
            title: "archives",
            children: [],
        },
        {
            id: 30000,
            title: "books",
            children: [],
        },
        {
            id: 1,
            title: "empty directory",
            children: [],
        },
        {
            id: 40000,
            title: "images",
            children: [],
        },
    ],
}

export let lvl2 = {
    id: 20000,
    title: "archives",
    children: [
        {
            id: 10020,
            title: "texts.zip",
        },
        {
            id: 10021,
            title: "books.zip",
        },
        {
            id: 20001,
            title: "media",
            children: [],
        },
        {
            id: 20002,
            title: "codes",
            children: [],
        },
    ],
}
export let lvl3 = {
    id: 20001,
    title: "media",
    children: [
        {
            id: 10022,
            title: "images.zip",
        },
        {
            id: 10023,
            title: "videos.zip",
        },
        {
            id: 10026,
            title: "audios.zip",
        },
        {
            id: 10027,
            title: "records.zip",
        },
    ],
}


export const dataFull = {
    id: 0,
    title: "root",
    children: [
        {
            id: 20000,
            title: "archives",
            children: [
                {
                    id: 10020,
                    title: "texts.zip",
                },
                {
                    id: 10021,
                    title: "books.zip",
                },
                {
                    id: 20001,
                    title: "media",
                    children: [
                        {
                            id: 10022,
                            title: "images.zip",
                        },
                        {
                            id: 10023,
                            title: "videos.zip",
                        },
                        {
                            id: 10026,
                            title: "audios.zip",
                        },
                        {
                            id: 10027,
                            title: "records.zip",
                        },
                    ],
                },
                {
                    id: 20002,
                    title: "codes",
                    children: [],
                },
            ],
        },
        {
            id: 30000,
            title: "books",
            children: [],
        },
        {
            id: 1,
            title: "empty directory",
            children: [],
        },
        {
            id: 40000,
            title: "images",
            children: [],
        },
    ],
}

export function someFunc(arr, id, data) {
    arr.children.forEach(f => {
        if (f.id === id) {
            f.children.push(data)
        }
    })

}


