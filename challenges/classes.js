// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker2 {
    constructor(attributes){
        this.length = attributes.length,
        this.width = attributes.width,
        this.height = attributes.height
  }
    volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    

}

class Cube extends CuboidMaker2 {
    constructor(attributes) {
        super(attributes);
        this.area = attributes.area

    }
    face() {
        return this.width * this.height;
    }

    cubeSurface () {
        return 6 * (Math.pow(this.face, 3));
    }
}
  
const Cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5, 
    height: 5,

  });

  const Cube2 = new Cube({
      length: 4,
      width: 5, 
      height: 5,
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(Cuboid2.volume()); // 100
  console.log(Cuboid2.surfaceArea()); // 130
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
console.log(Cube2.cubeSurface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume (v = a^3) and surface area (A=6a^3) for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.