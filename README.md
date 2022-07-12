# MARS Rover Challenge

The mars rover challenge is a algorithm that is able to decide the location of a **Rover** on a plateau of a given dimension (x and y axis) after a series of commands have been performed by the **Rover**.

## Specifications
This contains the list of parameters that can be set.

1. The **x** and **y** dimension of the plane.
2. A list of **MarsRovers**


### Info

#### MarsRovers
These are objects containing information such as the **cordinate** and the **comands**

##### cordinates
This refers to the actual positon of a rover on a plane containing the **x** and **y** axis along with the **direction** faced on the plain as a string.

##### commands
This is a string of instructions given to the rovers. List of available commands are
    1. **L**: THis tells the rover to turn 90 degrees left.
    2. **R**: This tells the rover to turn 90 degrees right.
    3. **M**: This tells the rover to move on point in the direction it faces.

##### x axis
This refers to how far left or right the rover sits on a plane.

##### y axis
This refers to how far up or down a rover sits on a plane.

#### direction
This refer to the pole at which the rover point, **N** for North, **S** for south, **E** for East and **W** for West.


### Assumptions
This rover solutions assumes that
1. The list of rovers a deployed and the instructions are been carried out in a sequence.
2. Two rovers in a list cannot be on the same point in a plane after the command are ran.
3. The list of command give are within the specified range of command and will always be within that range.

### Project Specifications
1. Reviewer must have [node](https://nodejs.org/en/) installed on his/her local machine at least version **14.19.3**
### How to run the Program
1. git clone the repository.
2. install package dependencies using **npm install** command.
3. to run test use **npm run test**

