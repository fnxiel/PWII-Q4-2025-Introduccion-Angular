export interface INotificaciones{
    id: number
    titulo: string
    descripcion: string
    tipo: "info" | "advertencia" | "exito" | "error"
}