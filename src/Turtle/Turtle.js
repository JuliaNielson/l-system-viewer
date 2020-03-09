class Turtle{
    constructor(props)
    {   
        this.facing = this.getAsRadians(-90);
    }

    getAsRadians(degrees){
        return(degrees * Math.PI/180);
    }

    getPath(){
        let p = new Path2D();
        p.moveTo(30, 30);
        p.lineTo(200,200);
        p.arc(200,200, 50, 0, Math.PI);
        return p;
    }

    workSpace(){
        

        let result
    }

}

export default Turtle;