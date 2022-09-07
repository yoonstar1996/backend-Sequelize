const Visitor = ( Sequelize, DataTypes ) => {
    // Sequelize : model/index.js 의 sequelize 객체
    // DataTypes : model/index.js 의 Sequelize 객체
    const model = Sequelize.define(
        "visitor",
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            }, name : {
                type : DataTypes.STRING(10),
                allowNull : false
            }, comment : {
                type : DataTypes.TEXT("medium")
            }
        },
        {
            tableName : "visitor",
            freezeTableNmate : true,
            timestamps : false
        }
    );
    return model;
}
module.exports = Visitor;