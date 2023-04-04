      
      
      let laptop={
          cpu:'i7',
          ram: '4gb' 
      }

        function Alien( name,tech)
        {
        this.name=name;
        this.tech=tech;

        this.work=function()
        {
            //console.log("solving ")
        }

        }

    let alien= new Alien('sharath', 'php' );

    let alien2= new Alien('sharath', 'salesforce');

    alien.tech='opencart';

    console.log(alien)

    // console.log(alien.work)

    // console.log(alien2)
    /////////////// arrow function

        let arr=[];

        let person={
          name:'appu',
          city:'bglr',
          clg:'DB',
          parents:{
            fathername:'demo',
            mothername:'memo'
          }
            }

            let val;

            val=person;

        arr.push(person);
        //  console.log(person.name);

        console.log('the valof per is '+val);

      //console.log(typeof arr);
    //////for in loop in javascript 

        for (let  key in person) 
        { 
        console.log(key ,person[key]);
        }

        for (let  key in person.parents) 
        { 
        console.log(person.parents[key]);
        }




    /////////////// arrow function example


    const students=[];

    const addstudent=(studentname, studentage)=>
      {
        const student={
          name:studentname,
          age:studentage
        }

        students.push(student);

      //  console.log(students);
        }
    
    addstudent('apppusharu ', 22);
      //console.log(students);
    // console.log(JSON.stringify(students))
    ///

    const add= (a,b)=>
    {
      return a+b;
    }

    console.log(add(20,20));

    ///// add up array values

    let input=10

    var prices=[15,25,35,45];

        var output=[];
        for (let i=0;i<prices.length; i++)
        {
          output[i]=prices[i]+input;
        }
      //console.log(output);

      // console.log(output[2]);

        const a=[10, 20 ,30];

        a.pop();
        //console.log(a);

        a.push(40,50);

      // console.log(a);
        a.shift();
        //console.log(a);
        a.unshift(1);
        //console.log(a);


        let x=1;
        let y=1;

    // console.log(x==y);

    //// measure the length of string 

    let name="sharathboy";

      function getStringLength(name)
      {
      let count=0;

      for ( var {} in  name )
        {
          count++;
        }
        return count;

        }

    console.log(getStringLength(name));


    ///// to count the vowels in an string


    const vowels = ["a", "e", "i", "o", "u"];

    function countVowel(str) {
      // initialize count
      let count = 0;

      // loop through string to test if each character is a vowel
      for (let letter of str.toLowerCase()) {
          if (vowels.includes(letter)) {
              count++;
          }
      }

      // return number of vowels
      return count;
    }

    // take input

    const string = 'bharusharu';

    const result = countVowel(string);

    console.log(result);

    //////// to print the vowels in given string
    function findVowels(str) {
      return str.match(/[aeiou]/ig);
    }

    var op=findVowels('sharathbigboy');
      console.log(op);


      ///// array destructing example


      let myarray=[1,2,3,4];

      let[vani,apurva]=myarray;

      console.log('apurva is ' + apurva);

      let destructing="my name is sharath vani avazee".split(' ');

      let destructing2="my name is sharath vani sneha";

      let[redvani,avazee,,...apurvablue]=destructing;

     let[greyvani,blueavazee,...apurvaskyblue]=destructing2;

      console.log(typeof  apurvablue, apurvablue);

      console.log(typeof  apurvaskyblue, apurvaskyblue);

      const num = {x: 100, y: 200};  

      const {x: new1, y: new2} = num;  
      
    console.log(new1);


    ////  function 

    function greet(name,callback)
    {
      console.log(" hi "+' '+name);
      callback();
    }

    //callback  function

    function callme()
    {
      console.log(" i am callback function ");
    }

    greet("sharath" , callme);


    //set timeout example
    

       function msg()
       {
        console.log(" hello world");
       }

       function name1(boy)
    {
      console.log( "hi "+boy);

    }

        setTimeout(msg ,3000);
       name1("appu puneeth sharu ");
      

       /// 2nd example of callback function

       function greet1(name,callback )

       {
        console.log("programming");
        callback(name);
      }

      function girl(name)
      {
        console.log("hi"+name);
      }

      setTimeout(greet1 ,2000 ,"vidya" ,girl);

      const jsondata={

        name:"bike",
        age:23,
        hobby:{
          reading:true,
          programming:"yes",
          sport:"cricket"

         },
         skills:["php" ,"html", "salesforce"]



      };

      console.log(jsondata.name);

      console.log(jsondata.skills[2]);


      ///json stringfy example
    const obj=  JSON.stringify(jsondata);

    console.log(obj);

    const o="sharu";


    


    


    




      





