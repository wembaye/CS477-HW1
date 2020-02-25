//@Name: Weldensie Embaye (109391)


function slow(callback){
        if(Math.random()>0.5){
            return callback("Error", null)
        }
        return callback(null, {id:12345})
    }


function exec(fn){
    let obj={};
   
    let output=fn(function(err, data){
        return {err, data};
    });

    obj.done=function(fn1){
        fn1(output.data);
        return obj;
    };
    obj.fail=function(fn1){
        fn1(output.err);
    };
return obj;
}

exec(slow).done(function(data){
    console.log(data);
}).fail(function(err){
    console.log(err);
})