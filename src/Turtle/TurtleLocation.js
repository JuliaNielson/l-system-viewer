class TurtleLocation{
    constructor({xCoordinate, yCoordinate, facing}){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.facing = facing;
    }

    getXCoordinate(){
        return this.xCoordinate;
    }

    getYCoordinate(){
        return this.yCoordinate;
    }

    getFacing(){
        return this.facing;
    }
}

export default TurtleLocation;