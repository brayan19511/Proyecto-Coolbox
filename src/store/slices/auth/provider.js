import axios from "axios"

export const UserApi=axios.create({
    baseURL:'http://localhost:3000/usuarios'
})

export const AdapterUser=(usuario)=>{
const {
 IdUsuario
,NombreUsuario
,Nombres
,ApellidoPaterno
,ApellidoMaterno
,Correo,AREA,ROLESUSUARIO
}=usuario
    // "IdUsuario": 2,
	// "NombreUsuario": "YCONDORI",
	// "Nombres": "YOVANA",
	// "ApellidoPaterno": "CONDORY",
	// "ApellidoMaterno": "WEBAS",
	// "Correo": "YCONDORI@RASHPERU.COM",
	
    // "AREA": {
	// 	"IdArea": 2,
	// 	"Descripcion": "OPERACIONES"
	// },
	// "ROLESUSUARIO": {
	// 	"IdRol": 3,
	// 	"Descripcion": "GERENTE DE VENTAS"
	// }

return {
    id:IdUsuario,
    user:NombreUsuario,
    email:Correo,
    name:Nombres,
    lastName:ApellidoPaterno+' '+ApellidoMaterno,
    IdArea:AREA.IdArea,
    area:AREA.Descripcion,
    idRol:ROLESUSUARIO.IdRol,
    rol:ROLESUSUARIO.Descripcion
}

}