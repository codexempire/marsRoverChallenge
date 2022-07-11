import MarsRover from './index.js';

test("Rover should turn 90 degrees left", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "L"
    }]);

    expect(cordinates[0]).toBe("0 0 W")
});

test("Rover should turn 90 degrees right", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "R"
    }]);

    expect(cordinates[0]).toBe("0 0 E")
});

test("Rover should turn 180 degrees left", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "LL"
    }]);

    expect(cordinates[0]).toBe("0 0 S")
});

test("Rover should turn 270 degrees left", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "LLL"
    }]);

    expect(cordinates[0]).toBe("0 0 E")
});

test("Rover should turn 180 degrees right", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "RR"
    }]);

    expect(cordinates[0]).toBe("0 0 S")
});

test("Rover should turn 270 degrees right", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "RRR"
    }]);

    expect(cordinates[0]).toBe("0 0 W")
});

test("Rover should turn 360 degress right and face north", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "RRRR"
    }]);

    expect(cordinates[0]).toBe("0 0 N")
});

test("Rover should turn 360 degress left and face north", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "LLLL"
    }]);

    expect(cordinates[0]).toBe("0 0 N")
});

test("Rover should not move and remain at the starting coordinates", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: ""
    }]);

    expect(cordinates[0]).toBe("0 0 N")
});

test("Rover should turn 90 degrees left and not move", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "LM"
    }]);

    expect(cordinates[0]).toBe("0 0 W")
});

test("Rover should turn 90 degrees right and move", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "RM"
    }]);

    expect(cordinates[0]).toBe("1 0 E")
});

test("Rover should move 2 points north", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "MM"
    }]);

    expect(cordinates[0]).toBe("0 2 N")
});

test("Rover should move 1 points north", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "MMRRM"
    }]);

    expect(cordinates[0]).toBe("0 1 S")
});

test("Rover should move to be 2 2 S", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "0 0 N",
        commands: "MMRRMLMMMLMMLMLM"
    }]);

    expect(cordinates[0]).toBe("2 2 S")
});

test("Rover should move to be 2 2 S", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "1 2 N",
        commands: "LMLMLMLMM"
    }, {
        cordinates: "3 3 E",
        commands: "MMRMMRMRRM"
    }]);


    expect(cordinates[0]).toBe("1 3 N");
    expect(cordinates[1]).toBe("5 1 E")
});

test("Rover should move to be 2 2 S", () => {
    const cordinates = MarsRover("5 5", [{
        cordinates: "1 2 N",
        commands: "LMLMLMLMM"
    }, {
        cordinates: "3 3 E",
        commands: "MMRMMRMRRM"
    }, {
        cordinates: "1 2 N",
        commands: "LMLMLMLMM"
    }]);


    expect(cordinates[0]).toBe("1 3 N");
    expect(cordinates[1]).toBe("5 1 E");
    expect(cordinates[2]).toBe("1 2 N");
});