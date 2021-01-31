module.exports = function(sequelize, dataTypes) {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        modelo: {
            type: dataTypes.STRING,
            notNull: true
        },
        foto: {
            type: dataTypes.STRING,
            notNull: true
        },
        precio: {
            type: dataTypes.STRING,
            notNull: true
        },
        origen: {
            type: dataTypes.STRING,
            notNull: true
        },
        coleccion: {
            type: dataTypes.STRING,
            notNull: true
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true
    }

    /*Productos.associate = (function(models) {
        Productos.belongsTo(models.Productos, {
            as: 'detalleDeEsteProducto', 
            foreignKey: 'id'
        })

    }) ADDED by Juls 31-1 */

    const Productos = sequelize.define(alias, cols, config);  
    return Productos
  } 