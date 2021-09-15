export  const getData = (word) => {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((data) => data.json())
    .catch((err) => console.error({message: err}));
}