import * as dice from "./diceBag.js";

const str = 0;
const strModifier = 0;
const int = 0;
const intModifier = 0;
const wis = 0;
const wisModifier = 0;
const dex = 0;
const dexModifier = 0;
const con = 0;
const conModifier = 0;
const cha = 0;
const chaModifier = 0;
const currentXp = 0;
const nextXpLevel = 0;
const basicAttackBonus = 0;
const sizeModifier = 0;
const equipmentBonus = 0;

const basicMeleeAttackToHit = () => {
    return basicAttackBonus + strModifier + sizeModifier + equipmentBonus;
}

const basicRangedAttackToHit = () => {
    return basicAttackBonus + dexModifier + sizeModifier + equipmentBonus;
}

const damageRoll = (strBonus, dieRoll) => {
    return strBonus + dieRoll;
}