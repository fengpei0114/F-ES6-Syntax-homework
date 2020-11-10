const parseData = ({data, column}) => {
    let keys = [];
    data.forEach(infos => {
        let key = {};
        column.forEach((msg, index) => {
            key[msg.name] = infos[index];
        })
        keys.push(key);
    })
    console.log(keys);
    return keys;
}


export { parseData };
