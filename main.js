function each (arr,fn)
{
	for(var i = 0 ; i<arr.length;i++)
	{
	  fn(arr[i],i) 
	}
}

function filter(arr , fn)
 {	
 		if (Array.isArray(arr))
 			{
 				var acc = []
 			}
 		else
 			{
 				var acc = {}
 			}


    each(arr,function(element,i)
   	     {
    				 if (fn(element,i))
    			 	{
     				 acc.push(element)
     				}

          })
    	  return acc 
        }
        function f (string)
        {
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        
        if(format.test(string)){
          return true;
        } else {
          return false;
        }
        
        }
 function strong ()
 { 
     var password=$( "#pswd" ).val()

     var format =  /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

     var arr1 = filter(arr, 
         function(element,i)
         {
          return f(element)
         })

     var arr2 = filter(arr, function(element,i){
         return element.toUpperCase()===element
     })
     
     var arr3 = filter(arr, function(element,i){
         return element.toUpperCase()!==element
     })

    return arr1.length>0 && arr2.length>0 && arr3.length>0 && string.length>8
 }
 $("#registred")
 .first()
 .on("click", function () {
  strong ();
 });