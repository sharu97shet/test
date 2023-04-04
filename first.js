      let a="sharu";

      const total=100;

      var sum=0;

      for(let i=0; i<=total;i++)
      {
        sum+=i;

  console.log(i);
      }
      
      //console.log(sum);


      let greet=(user)=>
      {
       // console.log("hello  boy"+user);
        return 13;
      }

    //  console.log(greet('naveen'));


      ////new function to add two numbers using function 

      let add= (num1,num2)=>
      {
        return num1+num2;
      }


  let result =add(10,10)
      //console.log(result);


      ////////////to negative numbers
      let adds = (num3,num4) => num3+num4;

      let c=Math.abs(5);
      let b=Math.abs(-7);

      let results = adds(c,b);
      //console.log(results);


      let arr=[10, 20 ,30];
     // console.log(arr);

      arr[4]=40;
      arr[10]=100;

      console.log(arr);


      ///////// for speed distance

      let speed=40;

      let distance=150;

      let time =distance/speed;

        //console.log(time);

          let minutes=time*60;

        // console.log(" the time taken to cover the distance is  "+minutes )


        ///// properties and methods in javascript objects

        const person={
          name:'doe',

          walk()
          {
          //console.log ( "hey");
          },
        }
        
        person.name['john'];

        person.walk();
    //  console.log (person.name());


      //// factory function

      
      const circle ={
        name:'sphere',
        radius:5
      }

    //  console.log (circle);

   //// factory function will always return an object

      function createCircle(radius, name)
      {
        return{
          name:name,
          radius:radius,

          draw: function()
          {
            console.log('i will draw a circle of radius '+this.name);
          }

        }

      }

           const circle1=createCircle(5, "sphe");
      //const  circle2=createCircle(10, "globe");

     console.log(`the circle1  name and radius is ${circle1.radius}  ${circle1.name}`);

        // console.log('the circle2  name and  radius is '+circle2.radius+ " "+ circle2.name );

        

       //// functions are also objects.


       //// value VS REFERENCE TYPES

      //  VALUE TYPES=>
      //  Number
      //  String
      //  Boolean
      //  Symbol
      //  undefined 
      //  NULL

      // REFERENCE TYPES

      // Array 
      // objects
      // Functions

         let xx=10 ;

         let yy=xx;

         xx=35;

         console.log(yy);

         console.log(xx);

         // REFERENCE TYPES

         let rc= { value:10};

         let yc=rc;

         console.log(yc);
         rc.value=20;

         console.log(yc);

         console.log(rc);

   
/////// constructor function example very important to instanitate object
              
            function Car(radius, name)
            {
              this.name=name,
                this.radius=radius,
        
                  this.draw=function()
                  {
                  //   console.log('i will drive  a car of radius '+this.radius + " " +this.name+" "+this.location);
                  //
                  console.log('i will drive  a car of radius '+this.radius + " " +this.name);
                }
            }

  ///adding and removing properties

      const car=new Car(5 ,"toyata");
              
      car.draw();

      car.location={height:5};

      let carlocation=  car.location;
        // console.log(carlocation);

          let caroutput=car;

          //console.log(caroutput);

        //removing properties

        delete car.location;

  //////////////// Enumerating properties  / or/ iterate 

      for(let  key in car ) 
      {

        if(typeof car[key]!=='function')

        console.log(key ,car[key]);
      }

     const keys=Object.keys(car);
     console.log(keys);
       

     ////// ABSTRACTION  IN JAVASCRIPT OOPS

   //  HIDE THE DETAILS SHOW THE ESSENTIALS



   ////object create

        const myname={

        getFullName:function()
        {
          return `${this.firstname} ${this.lastname} `;
        },

        getChangeName: function(newlastname)
        {
          this.lastname=newlastname;
        },

        }

      const mani=Object.create(myname);

      mani.firstname='sharth',
      mani.lastname='appu';

     // console.log(mani);

      mani.getChangeName("shet");

      console.log(mani);

     // console.log(mani.getFullName());

     //// 2nd method of object create


     const appu=Object.create(myname  ,{
      
      firstname:{
         value:"kohli",
      },

      lastname:{
        value:"abd",
     },

   }
      );

      console.log(appu.getFullName());


      //////call method example

      const subjects={

          name:"maths",

          class:5,
      }

       let printdetails=function(state, city)
       {
         console.log(this.name+" "+state +" "+city);
       }    

       printdetails.call(subjects,"delhi" ,'a');

      const subjects2={

        name:"sql",

        class:13,

        }

      //  printdetails.call(subjects2,"bangalore" ,'vihahari');

        printdetails.apply(subjects2,[" chennai", newFunction() ]);
    

function newFunction() {
  return " chippak";
}
     /// bind method
     

     /////Rest and Spread operator example advance javascript

        function addnumbers(a, b ,c ,...others)
     {
       console.log(others)
          return a+b+c;

     }

      const outputresult=addnumbers(1,2,3, 4,5 ,'s',9,1   );
      console.log(outputresult)

      //Spread operator example advance javascript

      var developernames=["abc " ,"ajay" ,"sharath","manoj"];

      function getnames(developernames1, developernames2,developernames3 )
      {

        console.log(developernames1, developernames2,developernames3   )
       
      }

     // getnames(developernames[0]  , developernames[1], developernames[2]  )

    // $('#'+varc+'first').html( '<div id="first' + json['productID']+ '"  style="margin-top:-66px;"> ' + '<input type="number" name="quantity" value="' + json['producttotal'] + '" /></div>');
	 


      getnames(...developernames)


      /// rest and spread operator in object example

     /// rest is combine

      var testers={
        name:"sharath",
        age:50,
        hobby:["cricket" ,'singing' ]  
      }

      var {...rest}   =  testers;
      console.log(rest)

       /// spread eg

       var newtesters={...testers,
        name:"appusharu",
        age:24,
        hobby:["cricket" ,'dance', "coding" ]  
      }

     console.log(newtesters)



     ////// classes example in javascript

      class Person
      {
          constructor  (firstname, lastname)
          {
              this.firstname=firstname;
              this.lastname=lastname;
          }

            getfullname()
            {
              return `${this.firstname}  ${this.lastname}`;
            }
      }

      class Customer extends Person
      {
        
        constructor(firstname, lastname,  phone ,membership)
        {
          super(firstname, lastname);

          this.phone=phone;
          this.membership=membership;
            
          }
          static addNum(a,b)
          {
            return a+b;
          }

      }

      const customer = new Customer("sharath" ,"sneha", 8618, "standard");

      console.log( Customer.addNum(12, 23)  );

      console.log(customer);

     