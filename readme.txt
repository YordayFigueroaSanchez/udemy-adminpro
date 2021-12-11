168 sweet alert 2
    https://sweetalert2.github.io/
    npm install sweetalert2

169 login usuario - normal
    se agrega interface

170 guardar informacion en el LocalStorage
    importar tap de rxjs/operators

171 funcion del recuerdame

172 documentacion de google singin api
    https://developers.google.com/identity/sign-in/web/sign-in

173 obtener el token de una autenticacion google singin
    agregar boton de google y hacer uso de la api
    boton centrado

174 usar el token de google para autenticarnos
    refactorizar guia de google para typescript 

175 proteger rutas de mi aplicacion
    crear guard para proteger rutas
    ng g guard guards/auth --skipTests

176 logout
    borrar el LocalStorage
    login con google
    ngZone para procesos externos

177 optimizacion del init de google

178-179 tag

181 Introduccion a la seccion
    section 15 perfil del usuario, pipes y subida de fotografia
        Módulo de pipes
        Pipe para controlar la imagen a desplegar
        Subida de imagen desde el Front-end hasta el Back-end
        Crear el componente del perfil del usuario
        Notificar actualización de imagen
        Vista previa de la imagen seleccionada en tiempo real (sin subirla al backend)

183 centralizar la informacion del usuario conectado
    recuperar informacion del usuario y mantenerla en el servicio de usuario

184 mostrar imagen del perfil del usuario

185 optimizaciones dek email

186 crear componente del perfil del usuario
    generar  componente dentro de pages
        ng g c pages/perfil --skipTests -is

187 actualizar el perfil del usuario    
    iniciamos con un usuario local, no de google
    el rol se esta enviando...se debe modificar el backend...para trabajar el tema rol

188 actualizar el perfil del usuario - continuacion
    se actualiza la referencia del servicio y se actualiza de forma general    

189 servicio de carga de imagenes
    uid
    imagen
    token
    servicio para utilizarlo en varios lugares
    crear servicio para imagen
        ng g s services/fileUpload --skipTests
    usar el fetch api de javascript
    metodo async actualizarFoto
        archivo: File
        tipo: 'usuario' | 'medico' | 'hospital'
        id: string

190 vista previs de la imagen seleccionada
    actualiza los avatar simultaneamente al cambio
    agregar vista del avatar