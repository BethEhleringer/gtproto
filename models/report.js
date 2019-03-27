
// Creating our Report model
module.exports = function(sequelize, DataTypes) {
  var Report = sequelize.define("Report", {

    pers_spir: {
      type: DataTypes.INTEGER
    },
    pers_emot: {
      type: DataTypes.INTEGER
    },
    pers_health: {
      type: DataTypes.INTEGER
    },
    pers_pr_req: {
        type: DataTypes.STRING
    }
    
  });
  
  return Report;
};
