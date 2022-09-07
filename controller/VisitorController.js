// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");
/*위 == 아래 */
// const { Visitor } = {
//                     "Visitor" : Visitor
//                   }



// const model = require("../model");
// model = {
//     "sequelize" : sequelize,
//     "Sequelize" : Sequelize,
//     "Visitor" : Visitor
// }
// model.Visitor;


exports.get_visitors = (req,res) => {
    Visitor.findAll()
    .then((result)=>{
        // console.log( "result : ", result );
        // console.log( "index" );
        res.render("index", { data: result });
    });

    // select * from visitor
    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    var data = {
        name/*(컬럼 명)*/: req.body.name,
        comment/*(컬럼 명)*/: req.body.comment
    }
    Visitor.create(data)
    .then((result)=>{
        // console.log(result);
        res.send({ id: result.id });
    });

    // insert into visitor (name, comment) values (req.body.name, req.body.comment)
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}

exports.get_visitor = (req,res) => {
    Visitor.findOne({
        attributes : [ 'id', 'name', 'comment'],
        where : { id: req.query.id }
    }).then((result)=>{
        // console.log( "result : ", result );
        res.send( { result : result } );
    });
    
    // select name, comment from visitor where id = req.query.id limit 1
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    var data = {
        name : req.body.name,
        comment : req.body.comment
    }
    Visitor.update(data, {
        where: {id: req.body.id}
    }).then((result)=>{
        console.log(result);
        res.send("수정 성공");
    });


    // Visitor.update(
    //     {name: req.body.name},{where: {id:req.body.id}});
    // Visitor.update(
    //     {comment: req.body.comment},{where: {id:req.body.id}})
    // .then((result)=>{
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });

    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    Visitor.destroy({
        where: {id: req.body.id}
    }).then((result)=>{
        console.log( result );
        res.send( "삭제 성공" );
    });

    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}