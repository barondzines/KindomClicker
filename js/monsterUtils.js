import * as utils from "./utils.js";

let getMonsterName = async () => {
  let monsterNameData = await utils.getMonsterJsonData();
  let monsterId =   utils.getRandomNumber(0 , 2);
  let monsterNameObject = Object.values(monsterNameData).map((monster) => {
      let monsterName = monster[monsterId].name
    return monsterName;
  });
  return monsterNameObject;
}

export{getMonsterName}