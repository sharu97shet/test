
 /*
        function  getUser()
        {
            setTimeout(function()
            {
            console.log(" feteching data from server ") ; 

            return {id :1 , name:"sharu"};

            } ,2000 );

             }

             */

             /*
        console.log("before");

         
        const  a=getUser(1 ,function(user)
        {
            console.log(user);
        });

       

      getUser(1 ,function(user)
        {
            console.log(user);
            getRepos(user.name ,function (repos) 
            {
               console.log(repos); 
            })
        });


        //console.log(a);

        console.log("afere ");

        
        

    function  getUser(id ,callback)
    {
        setTimeout(function()
        {
        console.log("feteching data from server") ; 

        callback ({id:id ,name:"sharusharath"});

        } ,2000 );

        } 

        function  getRepos(username ,callback)
        {
            setTimeout(function()
            {
            console.log("repos the name of user is ") ; 
    
            callback ( ["pos","css bugs" ,"homepage" ] );
    
            } ,2000 );
    
            } 
 */

            ///// promise example 

                    
//        import { reject } from "async";
//    import { resolve } from "path/posix";


            // const p=new Promise (funtion(resolve, reject),{
            
            //     resolve();
            // });

            // p.then(function(result)
            // {
            //  console.log(result);
            // });
            
            var promise = new Promise(function(resolve, reject) {
                const x = "geeksforgeeks";
                const y = "geeksforgeeks"
                if(x === y) {
                    resolve();
                } else {
                    reject();
                }
                });
                
                promise.
                    then(function () {
                        console.log('Success, You are a GEEK');
                    }).
                    catch(function () {
                        console.log('Some error has occurred');
                    });
                
           
    
