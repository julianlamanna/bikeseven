module.exports = function(sequelize, dataTypes) {
    let alias = "Productos";
    let cols = {
        id: { type: dataTypes.INTEGER, primaryKey: true, autoIncrement: true, notNull: true },
        modelo: { type: dataTypes.STRING, notNull: true },
        descripcion_destacada: { type: dataTypes.STRING, notNull: true },
        descripcion_larga: { type: dataTypes.STRING, notNull: true },          
        titulo_uno: { type: dataTypes.STRING, notNull: true },        
        descripcion_uno: { type: dataTypes.TEXT, notNull: true },        
        titulo_dos: { type: dataTypes.STRING, notNull: true },        
        descripcion_dos: { type: dataTypes.TEXT, notNull: true },        
        titulo_tres: { type: dataTypes.STRING, notNull: true },        
        descripcion_tres: { type: dataTypes.TEXT, notNull: true },        
        talle: { type: dataTypes.STRING(10), notNull: true },
        colores: { type: dataTypes.STRING, notNull: true },
        cuadro: { type: dataTypes.STRING, notNull: true },
        horquilla: { type: dataTypes.STRING, notNull: true },
        shock: { type: dataTypes.STRING, notNull: true },
        manubrio: { type: dataTypes.STRING, notNull: true },
        stem: { type: dataTypes.STRING, notNull: true },
        portasilla: { type: dataTypes.STRING, notNull: true },
        asiento: { type: dataTypes.STRING, notNull: true },
        pedales: { type: dataTypes.STRING, notNull: true },
        shifters: { type: dataTypes.STRING, notNull: true },
        descarrilador: { type: dataTypes.STRING, notNull: true },
        cambio_trasero: { type: dataTypes.INTEGER, notNull: true },
        frenos: { type: dataTypes.STRING, notNull: true },
        manijas_freno: { type: dataTypes.INTEGER, notNull: true },
        pinon: { type: dataTypes.STRING, notNull: true },
        cadena: { type: dataTypes.STRING, notNull: true },
        plato_palanca: { type: dataTypes.STRING, notNull: true },
        caja_pedalera: { type: dataTypes.INTEGER, notNull: true },
        llantas: { type: dataTypes.STRING, notNull: true },
        mazas: { type: dataTypes.STRING, notNull: true },
        rayos: { type: dataTypes.STRING, notNull: true },
        cubiertas: { type: dataTypes.STRING, notNull: true },
        peso: { type: dataTypes.STRING, notNull: true },
        foto: { type: dataTypes.STRING, notNull: true },
        relacionados: { type: dataTypes.STRING, notNull: true },
        facebook: { type: dataTypes.STRING, notNull: true },
        instagram: { type: dataTypes.STRING, notNull: true },
        categoria_id: { type: dataTypes.STRING, notNull: true },
        sub_categoriaid: { type: dataTypes.INTEGER, notNull: true },
        precio: { type: dataTypes.STRING, notNull: true },
        origen: { type: dataTypes.STRING, notNull: true },
        coleccion: { type: dataTypes.DATE, notNull: true },
        estado: { type: dataTypes.BOOLEAN, notNull: true } // tomarlo como TRUE o FALSE
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