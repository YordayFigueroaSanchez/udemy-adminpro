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
222 busqueda de hospitales
    tarea 222
    222 profesor
223 componente de medico, medicos y servicio de medicos
    model de medicos
    service medico 
        ng g s services/medico --skipTests
    componente para medico
        ng g c pages/mantenimientos/medicos/medico --skipTests -is  -flat  
224 servicio de medicos CRUD
    224 tarea
225 buscar medicos y redireccion al componente de medico
    225 redireccion
    225 buscar
226 borrar medico
227 componente medico - estructura html
228 preparar formulario de creacion de medicos
229 mostrar informacion del hospital seleccionado
230 crear medico en base de datos
    guardar medico fijo
    trabajo en la imagen del medico
231 cargar un medico seleccionado
232 actualizar medico
    desectructuracion
233 cargar imagen del hospital al editar
234 guardar cambios de la seccion
236 section 18
    menu dinamico desde el backend
    buscador global
237 Componente de búsqueda global
    Menú del lado del servidor
    AdminGuard - Un guard para verificar si es administrador
    Recuperar información del TOKEN desde el front-end sin comunicación intermedia
    Página 404
    Manejo de errores
238 continuacion de proyecto - busqueda global
239 componente para busquedas globales
    ng g c pages/busqueda --skipTests -is
240 mostrar informacion de la busqueda
241 menu del lado del servidor
242 cargar menu
243 admin guard
    ng g guard guards/admin --skipTests
244 validar el ADMIN_ROLE en nuestro backend
245 validar si es el mismo usuario o un admin
248 section 19 optimizadores, lazy load y despliegues
249 temas puntuales
    Lazyload
    Función para renovar el token
    Guard de renovación de token
    Leer el token localmente sin comunicación con el servidor
    Optimizar el tiempo de renovación de token
    Resolver problema con las imágenes mal ubicadas en la versión de distribución
    Crear la versión de distribución
250 lazyload
    ng g m pages/childRoutes --flat
    canLoad
251 desplegar frontend
252 angular - generar el build de destibucion
    https://yfsanchez-backend-node.herokuapp.com/
    ng build --prod












