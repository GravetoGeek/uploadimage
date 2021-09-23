module.exports = (sequelize,DataTypes) =>{
  const postagem = sequelize.define('postagem',{
      idpostagem:{
          type:DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'idpostagem'
      },
      treatment:{
          type:DataTypes.STRING(),
          allowNull: false,
          primaryKey: false,
          autoIncrement: false,
          field: 'treatment'
      },
      code:{
          type:DataTypes.STRING(),
          allowNull: false,
          primaryKey: false,
          autoIncrement: false,
          field: 'code'
      },
      rate:{
          type:DataTypes.STRING(),
          allowNull: false,
          primaryKey: false,
          autoIncrement: false,
          field: 'rate'
      },
      photo_originalname:{
        type:DataTypes.STRING(),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        field: 'photo_originalname'
      },
      photo_url:{
        type:DataTypes.STRING(),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        field: 'photo_url'
      }


  })
  return postagem
}