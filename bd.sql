use tareas;

CREATE TABLE Carpeta(
	id int AUTO_INCREMENT,
    asignatura varchar(100),
    docente varchar(200),
    duracion int,
    horario varchar(15),
    fecha date,
    
    CONSTRAINT pk_id PRIMARY KEY(id)
);

CREATE TABLE imagen(
	id int AUTO_INCREMENT,
    id_c int,
    nombre text,
    tipo int,
    fecha date,
    
    CONSTRAINT pk_id PRIMARY KEY(id)
);