async function getJSON() {
    let response = fetch('https://api.myjson.com/bins/nla64');

    const text = await response.json();

    return text;
}

export default getJSON;