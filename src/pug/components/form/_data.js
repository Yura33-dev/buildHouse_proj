const postData = async (url, data,) => {
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await result.text();
};

const getData = async url => {
    let result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Could not request to ${url}, status: ${result.status}`);
    }

    return await result.json();
};

export {postData, getData};