const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const books = require('./ejemplo.json');

//Obtener los libros

router.get('/', (req, res) =>{
    res.json(books);
})

//Agregar un nuevo libro

router.post('/', (req, res) =>{
    const {title, description, Author} = req.body;
    
    if(title && description && Author){
        const id = books.length + 1;
        const nuevolibro = {...req.body, id};
        console.log(nuevolibro)
        books.push(nuevolibro);
        res.json(books);
        
    }else{
        res.status(500).json({error: 'Pedicion erronea'});
    }
})


//Actualizar los datos

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const { title, description, Author } = req.body;
  if(title && description && Author){
      _.each(books, (libro, i) =>{
          if(libro.id == id){
              libro.title = title;
              libro.description = description;
              libro.Author = Author;
          }
      });
      res.json(books);
  }else{
      res.status(500).json({error: 'Datos incompletos'});
  }
});

//Borrar datos

router.delete('/:id', (req, res) =>{
     const { id} = req.params;
    _.each(books, (libro, i) =>{ //Recorro mi arreglo de peliculas, si la id es igual al borra
        if(libro.id == id){
            books.splice(i, 1);
        }
    });
    res.send(books);
});




module.exports = router;