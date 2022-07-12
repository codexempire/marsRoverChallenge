import { commandsFunctions } from "./commandFunctions.js";

const marsRover = (plateauSize, roversAndCommands) => {
    const result = [];
    const board = {
        x: Number(plateauSize.charAt(0)),
        y: Number(plateauSize.charAt(2)),
    }

    for (let roverIndex in roversAndCommands) {
        const { cordinates: roverCordinates, commands} = roversAndCommands[roverIndex];
        const unSpacedCordinates = roverCordinates.replace(/\s/g, '');
        let cordinates = {
            x: Number(unSpacedCordinates.charAt(0) || 0),
            y: Number(unSpacedCordinates.charAt(1) || 0),
            currentRoverDirection: unSpacedCordinates.charAt(2).toUpperCase(),
        }

        for (let character of commands) {
            const upperCaseCharacter = character.toUpperCase();
            cordinates = commandsFunctions[upperCaseCharacter]({ ...cordinates, boardSize: board }, result);
        }


        result[roverIndex] = `${cordinates.x} ${cordinates.y} ${cordinates.currentRoverDirection}`;
    }

    return result;
}

export default marsRover;