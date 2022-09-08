const Payment = ( Sequelize, DataTypes ) => {
    // Sequelize : model/index.js 의 sequelize 객체
    // DataTypes : model/index.js 의 Sequelize 객체
    const model = Sequelize.define(
        "payment",
        {
            user_Id : {
                type : DataTypes.INTEGER,
                allowNull : false
            }, pay : {
                type : DataTypes.INTEGER,
                allowNull : false
            }
        },
        {
            tableName : "payment",
            freezeTableNmate : true,
            timestamps : false
        }
    );
    return model;
}
module.exports = Payment;