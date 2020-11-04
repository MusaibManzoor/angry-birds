class SlingShot{
    constructor(bodyA,bodyB){
        var options={
        bodyA:bird.body,
        bodyB:log6.body,
        stiffness:0.04,
        lenght:10
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
display(){
    var pointA =this.sling.bodyA.position
    var pointB=this.sling.bodyB.position
    strokeWeight(9)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}