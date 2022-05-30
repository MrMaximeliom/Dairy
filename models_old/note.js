const getNoteModel = (sequelize, { DataTypes }) => {
    const Note = sequelize.define('note', {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
  
    Note.associate = (models) => {
      Note.belongsTo(models.User);
    };
  
    return Note;
  };
  
  export default getNoteModel;