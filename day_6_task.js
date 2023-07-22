// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
// a String representing the studio,and a String representing the rating as its arguments,
// and sets the respective class properties to these values.


// class movies {
//     constructor (title,studio,rating) {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//     }
//    }
   
//    let name = new movies('varisu','Sri Venkateswara Creations',' PG­13');
//    console.log(name)

// b) The constructor for the class Movie will set 
// the class property rating to "PG" as default when no rating is provided.\

// class movies {
//     constructor (title,studio,rating) {
//     this.title = title;
//     this.studio = studio ;
//     this.rating = rating || "PG14" ;
//     }
//    }
   
//    let name = new movies('varisu','Sri Venkateswara Creations','');
//    console.log(name)

//c) Write a method getPG, which takes an array of base type Movie as its argument,
// and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.

// class Movie {
//     constructor(title, studio, rating) {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }

//     static getPG(input) {
//         let out = input.filter(find => find.rating === "PG");
//         return out;
//     }
// }

// let first = new Movie("Bigil", "AGS studios", "PG");
// let Second = new Movie("Petta", "Sun picture", "V");
// let Third = new  Movie("puli", "Chimbu Deven", "PG");
// let Four = new  Movie("singam 2", "Reliancepicture", "PG-13");
// let Five = new  Movie("24", "Suriya", "PG");

// let FinalResult = [first, Second, Third, Four, Five];
// let Result = Movie.getPG(FinalResult);
// console.log(Result); 

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
// the studio “Eon Productions”, and the rating “PG­13”
// class movies {
//     constructor (title,studio,rating) {
//     this.title = title;
//     this.studio = studio ;
//     this.rating = rating || "PG14" ;
//     }
//    }
   
//    let name = new movies('Casino Royale','Eon  Productions','PG­13');
//    console.log(name)

 //3.Write a “person” class to hold all the details.

//  class person { 
//     constructor (Name,age,fathername,mothername,phone,Email) {
//         this.Name = Name;
//         this.age = age;
//         this.fathername = fathername;
//         this.mothername = mothername;
//         this.Email = Email;
//         this.phone = phone;
//     }
    
//  }

// const FinalResult = new person ("gunasheelan",23,'ArullChelvan',"Sivaa Lakshmi",'92723927838','gunasheelan1624@gmail.com')
// console.log(FinalResult);


//4.write a class to calculate the uber price



// class UberPrice { 
//     constructor (DistanceTraveled,Price,time,timeprice) { 
//        this.DistanceTraveled = DistanceTraveled;
//        this.Price = Price;
//        this.time = time;
//        this.timeprice = timeprice;
//     }
//       Amount () { 
//       return (this.DistanceTraveled * this.Price) + (this.time * this.timeprice )
//     }
// }

// let Uber = new UberPrice (57,13,7,100);
// console.log(Uber.Amount());
