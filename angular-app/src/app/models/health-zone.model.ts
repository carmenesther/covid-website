export class HealthZoneModel {
    id: string;
    zona_basica_salud: string;
    tasa_incidencia_acumulada_ultimos_14dias: number;
    tasa_incidencia_acumulada_activos_ultimos_14dias: number
    tasa_incidencia_acumulada_total: number;
    fecha_informe: Date;
    casos_confirmados_ultimos_14dias: number;
    casos_confirmados_activos_ultimos_14dias: Number;
    casos_confirmados_totales: number;  
}