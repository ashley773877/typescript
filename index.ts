class Vehicle {
    status: string = "stopped";
    //make!: string;
   // model!: string;
   // wheels!: number;
  
    constructor(public make: string, public model: string, public wheels: number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
   
    start(): void {
    this.status = "started";
    }

    stop(): void {
        this.status = "stopped";
    }
}
  
  class Car extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 4);
    }
}
  
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 2);
    }
  }
  //part 3
  class NCycle<T> extends Vehicle {
    constructor(public make: T | T[], public model: T | T[], public wheels: number) {
        super("", "", wheels);
    }

    print(parameter?: number): void {
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`This is a ${this.make as string} ${this.model as string} NCycle.`);
        } else if (Array.isArray(this.make) && Array.isArray(this.model) && parameter !== undefined &&
            parameter >= 0 && parameter < this.make.length && parameter < this.model.length) {
            console.log(`This NCycle has a ${this.make[parameter] as string} ${this.model[parameter] as string} at ${parameter}.`);
        } else {
            console.log("This NCycle was not created properly.");
        }
    }

    printAll(): void {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
                console.log(`This NCycle has a ${this.make[i] as string} ${this.model[i] as string} at ${i}.`);
            }
        }
    }
}

    function printStatus(Vehicle: Vehicle): void {
    if (Vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);