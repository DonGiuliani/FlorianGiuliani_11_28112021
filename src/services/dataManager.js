let data = null;

async function getAllData(){
    const answer = await fetch("/data.json");
    data = await answer.json();
    return data;
}


async function getAppartement(id){
    if (data === null) await getAllData();
    for (let i=0; i< data.length; i++){
        if (data[i].id === id) return data[i];
    }
    return null;
}


export {
    getAllData,
    getAppartement
}