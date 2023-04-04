
     const companies=[

    {name :"amazon " , category: "productbased " ,start:"1998"},

     {name :"paytm " , category: "productbased " ,start:"1992"},
     
    {name :"google " , category: "productbased " ,start:"1996"},
    
    {name :"warpdrive " , category: "servicebased " ,start:"2018"}

     ];

     /// for loop 
     for(let i=0; i<companies.length; i++)
     {
         //console.log(companies[i]);
        // console.log(companies[3]);
         
     }

      companies.forEach(function (element,index) 
     {
         console.log(element.category,index);

     });
        

         // arrow functions

    companies.forEach((element, index) => {
        
    //console.log(element,index);

    });

      /// filter method

    const ages=[12, 10 ,5 ,8, 14 ,25, 28 ,32,16 ,18];

        for(let i=0;i<ages.length; i++)
        {
            // console.log(ages[1]);  
                if(ages[i]>15)
                {
                // console.log(ages[i]);  
                 }
       }

       ages.filter(function (age)
      
      {
         if(age==10)
         {
            console.log(age);  
          } 
      }
      
      )

     const servicebasedcompany= companies.filter(function(servicecompany)

         {
          if(servicecompany.category==="servicebased ")
          {
            console.log(servicecompany.name);  
            return true;
            
            }
        } );
        console.log(servicebasedcompany);

         
         
     /// arrow functions in filter example

     const finalage=ages.filter( ( age)=>  age>30)

     console.log(finalage);

     const productcompany=companies.filter( (productscompany)=> 
        
        {
            if(productscompany.category==="productbased ")
            {

                console.log(productscompany.name);  
                return true;

                }
        }

     )  ;

   //  console.log(productcompany);


     /// map important function

     ages.map(function(value ,index)
     {
         // console.log(value , index);
     })
   

     let results=companies.map(function(name,value)
     {
         //if(name.category=="servicebased ")

        //console.log(name.category, value);
        
     });

    companies.map( (name ,values)=>
    {

        //if(name.start== "2018")

        //console.log(name.start ,name.name);

    }

    );

  

    let op=companies.map( (name ,values)=>
    {
         if(name.start== "1996")

      return ` ${name.start}  ${name.name} `;

    }
    
    );

    console.log(op);


    /// sort

   const sortedages= ages.sort(  (a,b) => (b-a) );

   console.log(sortedages);


    //// reduce method 

    let total=0;

    const sumage=ages.reduce(function(total, age)
        {
            return total+age;

        }
    
        );

    console.log('the sum of age is '+sumage);


    ////////  reverse array without using array method

    const array1 = ['one', 'two', 'three'];
            
      //  console. log('array1:', array1);
        const reversed = array1. sort();
       // console. log('reversed:', reversed);

        const array2 = [1,2,3];

       // console. log('array1:', array2);
        const reversed2 = array2. sort();
        
        //console. log('reversed:', reversed2);

        var array3 = [1, 2, 3, 4, 5];

        //console.log(array3.length - 1  );
        
        for (var i = array3.length - 1; i >= 0; i--) {
          
            // console.log(array3[i]);
        
        
        }

    //// magic number example 
    
    const ismagic =(num)=>{

        if(num===1)
        {
            return true;
        }

        else if (num.toString().length===1)
        {
            return false;
        }

        const numarr=num.toString().split('');

        console.log(numarr);

        let digitsum=0;

        for(let i=0; i<numarr.length ; i++)
        {
          digitsum+= parseInt(numarr[i]);

        }

        return ismagic(digitsum);

        

    }
  
     console.log(ismagic(1234));


     
     function multiply(a, b) {
        'use strict'; // enable the strict mode
        console.log(this === undefined); // => true
        return a * b;
      }

      const resl=  multiply(2,2);

      //console.log(resl);


      ////sphere 

    const radius= Math.pow(6,2);

    //console.log(radius);

      const area=4 *Math.PI * radius;

       function surfacearea(R)
       {

         //const power=Math.pow(R);

         const area=4*Math.PI*Math.pow(R,R);

         console.log(area);

         return area;

       }

  (surfacearea(3).toFixed(2));

  
    const shr="sharath";

    console.log(typeof shr.split());

    console.log( shr.split(' '));


        ////
        
        function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }

        console.log(newString);
        return newString;
    }
    reverseString('hello');
    

     
    

    function newstr(input)
    {
        var outputstring="";

          for(let h=input.length-1; h>=0; h--)
          {
            outputstring+=input[h];

          }

          console.log(outputstring);

          return outputstring;

    }

    newstr("appu is jaavscript");

/// while loop mcq questions

        var a=1;

        while(a<=3)
        {
            console.log("value is"+a);
            a++;

        }

        var flag=true;

        var reflag=new Boolean(true);

        console.log(reflag);

        console.log(flag);
     console.log(flag==reflag);
    
     const fruits = ["Banana", "Orange", "Apple", "Mango"];

     console.log(fruits.push("kiwi"));

     
     console.log(fruits.shift());

     console.log(fruits.unshift("Lemon"));

     console.log(fruits);
     console.log(fruits.pop());

 ////// closure example 

 
      /*

    function add()
    {
      let counter=0;

        counter+=1;

        console.log(counter);

        return counter;

    }

 add();
 add();
 add();
 add();

    
   
   function add()
   {
    let counter=0;

    function plus()
    {
      counter+=1;
    
     }
     
     plus();
   

    console.log(counter); 
    
  return counter;

   }

   add();
   add();

   

   const add= (function()
   {
    let counter=0;

     return function()
     {
      counter+=1;

      console.log(counter);

      return counter;

     }
    
   })  
   add();

       */

   let message=function(sum)
   {

      let msg=sum;

      console.log("the obtained msg is "+sum);

      return msg;


   }

   message("sharu is  javascript sql salesforce technolgy lover java developer");

   const t="shary";

   const o="5";

   const  z=t+o;

   console.log(z);
  


      const summ= function (a)
      {

        console.log("the live "+a);

        //return a;

        let c=100;

      return function(b)
      {
        return a+b +c;
      }


      }


      const outputsum=summ(2);

      console.log( outputsum(10) );



         let names="snehamanoj";

      let userdetails={
        names:"akkil",
        age:24,
        job:function()
        {
          console.log(this.names);
        }
      }

      userdetails.job();

      ////

      const car = {
          name: 'car',
          start: function(state){
            console.log('Start the ' + this.name+ ' '+state);
          },
        };
    
        const aircraft = {
          name: 'aircraft',
          fly:function() {
            console.log('Fly');
          },
          
        };
    
    car.start.call(car ,"bglr");

  

  /////    

          var vidya="sharath";

          var vinya=vidya.toString().split('');

          console.log(vinya);


          var arrayreversed=vinya.reverse();

          console.log(arrayreversed);

          var joinedarray=arrayreversed.join('');

          console.log(joinedarray);

       




