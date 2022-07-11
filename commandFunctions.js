const cardinalDirections = {
    north: "N",
    south: "S",
    east: "E",
    west: "W",
};

export const commandsFunctions = {
    L(cordinates, roversLocations) {
        if (cordinates.currentRoverDirection === cardinalDirections.north) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.west
            };
        }

        if (cordinates.currentRoverDirection === cardinalDirections.south) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.east
            };
        }

        if (cordinates.currentRoverDirection === cardinalDirections.east) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.north
            };
        }

        if (cordinates.currentRoverDirection === cardinalDirections.west) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.south
            };
        }
    },
    R(cordinates, roversLocations) {
        if (cordinates.currentRoverDirection === cardinalDirections.north) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.east
            };
        }

        if (cordinates.currentRoverDirection === cardinalDirections.south) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.west
            };
        }

        if (cordinates.currentRoverDirection === cardinalDirections.east) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.south
            };
        }

        if (cordinates.currentRoverDirection === cardinalDirections.west) {
            return {
                ...cordinates,
                currentRoverDirection: cardinalDirections.north
            };
        }
    },
    M(cordinates, roversLocations) {
        let {
            x: xAxis,
            y: yAxis,
            currentRoverDirection,
            boardSize: {
                x,
                y
            }
        } = cordinates

        if (currentRoverDirection === cardinalDirections.west) {
            if (xAxis === 0) {
                return {
                    ...cordinates,
                }
            }

            const roverInPosition = roversLocations.find(position => position.charAt(0) == xAxis-1 && position.charAt(2) == yAxis);

            return {
                ...cordinates,
                x: roverInPosition ? xAxis : xAxis - 1,
            }
        }

        if (currentRoverDirection === cardinalDirections.east) {
            if (xAxis === x) {
                return {
                    ...cordinates,
                }
            }

            const roverInPosition = roversLocations.find(position => position.charAt(0) == xAxis+1 && position.charAt(2) == yAxis);

            return {
                ...cordinates,
                x: roverInPosition ? xAxis : xAxis + 1,
            }
        }

        if (currentRoverDirection === cardinalDirections.south) {
            if (yAxis === 0) {
                return {
                    ...cordinates,
                }
            }

            const roverInPosition = roversLocations.find(position => position.charAt(0) == xAxis && position.charAt(2) == yAxis - 1);

            return {
                ...cordinates,
                y: roverInPosition ? yAxis : yAxis - 1,
            }
        }

        if (yAxis === y) {
            return {
                ...cordinates,
            }
        }

        const roverInPosition = roversLocations.find(position => position.charAt(0) == xAxis && position.charAt(2) == yAxis + 1);

        return {
            ...cordinates,
            y: roverInPosition ? yAxis : yAxis + 1,
        }
    }
}