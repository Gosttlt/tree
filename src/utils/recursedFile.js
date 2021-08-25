export function recursedFile(arr, data) {
    arr.children.forEach(f => {
        if (f.id === data.id) {
            return f.children.push(...data.children)
        }
        if (f.children && f.children.length) {
            recursedFile(f, data)
        }
    })
}


