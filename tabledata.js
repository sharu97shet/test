const climb=7;

const slips =-2;

let day=0;

  for(let progress =0; progress<=31; progress+=climb)
  {
      day +=1;
    
      if(progress>=31)
      {
        console.log(day);
      //  break;
      
      }
      else
      {
          progress += slips;
        // console.log(progress+" "+day);
      }
    
  }

//console.log("the day "+day);


const students={name:"john",age:25,ispresent:true}; 
//console.log(typeof students.ispresent);


/////this
const person=
{
    name:"mosh",
    walk()
    {
        //console.log(this);
    }
};

person.walk();


const walk= person.walk.bind(person);
walk();


////arrow

const square= function(number)
{
  return number * number;
}

//console.log(square(4));

const cube= number=> number*number *number;

//console.log(cube(2));

  const jobs=[
      {id :1 , job:true},

        {id :2 , job:true},

        {id :3 , job:false}

  ];

   const output= jobs.filter(function(refe)
   {
     if(refe.job==false)
     return refe;
   }
   );
   //console.log(output);


  const jobarr =jobs.filter(jobdetails=>jobdetails.id==3);

  //console.log(jobarr);

var family = [{name:"Jack",  "age": 26},
{name:"Jill",  "age": 22},
{name:"James", "age": 5 },
{name:"Jenny", "age": 2 }];

let  adults= family.filter(function (person)
{
if(person.age>18)
{
return person;
}
} 

);    
  
  console.log(adults);

  //console.log('using arrow functions');

  let adultsarrow=family.filter(personage=>personage.age>2);

    console.log(adultsarrow);

    let colors=[2,3,4];

       let outputcolors=colors.map(function(color)
        
        {
             return '<li>'+ color+'</li>'
        }
        
        );

        console.log(outputcolors);

        var ay=[1,2,3];
        console.log('typeof ay is'+typeof ay);

        var myobj={first:'one',
        second:'twooooo',
        third:ay
      };

      console.log(typeof myobj.second);
      console.log(typeof myobj.third);
      console.log(myobj);

     console.log("the op second is"+ myobj.second.length);

      console.log("the op is"+myobj.third.length);

      ////oops

  //     const circle={
  //       radius:1,
  //       location:{
  //         x:1,
  //         y:2
  //       },
  //       draw:function()
  //       {
  //         console.log('draw the circle');
  //       }
  //     }

  //   for(const obj in circle.location)
  //   {
  //     console.log(obj, circle.location[obj]);

  //    }

  //     circle.draw();

  //         /// define objects using factories

  //  function createCircle()
  //    {
  //     const mycir={
  //     radius:5,
  //        drawing:function(){
  //       console.log('my drwaing');
  //        }
  //       };

  //     }

  //     const circle2=createCircle();
  //     circle2.drawing();
     

      /////////////Type Conversion and Cohesion in javascript

      let val;

      val=String(100);

      console.log('the val is '+val);

      console.log(  val.length);

      val=String (true);

      console.log('the type is '+ typeof val);

      console.log('the valtrue  is '+val);

      console.log( val.length);

      ////to string method 

      const a=(5).toString();
      console.log('the a  is '+ typeof a);

      console.log('the a value   is '+a);

      console.log( a.length);

      /// string to number

      const b=Number("12");
      console.log('the b  is '+ typeof b);

      console.log('the b value   is '+b);

      console.log( b.toFixed(3));

      //// for boolean true/false

      const t=Number(true);
      console.log('the t  is '+ typeof t);

      console.log('the t value   is '+t);

      console.log( t.toFixed(1));


      ////cohesion example

      const val1 ="5";
      const val2=10;
      const sum=val1+val2;

      console.log('the sum value   is '+sum);
      

/////////  fibonacci series example


    let abd =0;

    let king=1;


    for(var i=0; i<=5; i++ )
    {
      var temp=abd+king;

      abd=king;

      king=temp;

      console.log(temp);

   }


   const p=1;

   const q=2;

   const z=3;

   if(z>q>p)
   {
     console.log("yes");
   }

   else{
     console.log("no greater");
   }

    

   






