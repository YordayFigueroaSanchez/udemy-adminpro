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
    centrando la imagen
    agregando reader

191 mensaje al usuario
    mensajes para el email
    mensaje para la imagen

192 bloquear usuario de google  
    frontend
        reaOnly
    backend
        no permite modificar correo de google

Section 16 mantenimiento de usuarios y modal de carga de imagenes
195 Introduccion
196 temas puntuales que cubriremos
    Crear componente de usuarios
    Búsqueda de usuarios
    Borrar usuario
    Actualizar Rol del usuario
    Crear un modal para la subida de la imagen
    Emitir notificaciones de cambio en imagenes
197 continuacion del proyecto
198 crear el componente de usuarios
    crear mantenimientos (directorio dentro de pages)
        ng g c pages/mantenimientos/usuarios --skipTests -is
199 cargar los usuarios de forma paginada
    tipado directo
    agregando interfaz para el tipado
200 paginar los usuarios
201 detalles esteticos de nuestra pagina
202 mensaje de carga de informacion
203 busqueda de usuarios
    ng g s services/busquedas --skipTests
    busqueda primeros pasos
204 pulir busqueda de usuarios
    eliminar error de termino vacio en la busqueda
    sacar botones con busqueda
    colocar imagen
205 borrando usuarios
206 frontend - no borrar el propio usuario
    validar en el frontend
207 actualizar el rol del usuario
208 modal para carga de imagenes
    Modal ()
    crear componente ng g c components/modalImagen --skipTests -is
209 control del modal y carga de imagenes
    ng g s services/modalImagen --skipTests
210 cargar imagenes usando el modal
    seleccionar imagen y mostrar en el modal
211 actualizar la imagen del usuario desde el modal
212 guardar cambios en github
216 section 17 diseño de la panatalla de hospitales
    ng g c pages/mantenimientos/hospitales --skipTests -is
217 modelo y servicio de hospitales
    ng g s services/hospital --skipTests
218 mostrar los hospitales en el html
219 pipes para mostrar imagenes
    ng g pipe pipes/imagen --skipTests
    ng g m pipes/pipes --flat
220 crud de hospitales
221 funcionamiento del mantenimiento de hospitales
    https://sweetalert2.github.io/#input-types




