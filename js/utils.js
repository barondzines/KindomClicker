export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export let getMonsterJsonData = async () => {
    let url = `../game_data/monsters.json`;
    try{
        let res = await fetch(url);
        return await res.json()
    }catch (error){
        console.log(error);
    }
    // }
    // fetch(url)
    // .then(response => {
    //     return response.text();
    // }).then(data => console.log('then data', data));
}

export async function fetchMonsterName (){
    let response = await fetch(`../game_data/monsters.json`);
    let data = await response.json();
    return data;
}