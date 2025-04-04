package Formato_1.spring;
import jakarta.persistence.*;

@Entity
@Table(name = "evaluaciones")
public class Evaluacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String informacionGeneral;
    private String estadoPozo;
    private String evaluacionRiesgos;
    private String observacionesFinales;
    private boolean aprovacion;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getInformacionGeneral() { return informacionGeneral; }
    public void setInformacionGeneral(String informacionGeneral) { this.informacionGeneral = informacionGeneral; }

    public String getEstadoPozo() { return estadoPozo; }
    public void setEstadoPozo(String estadoPozo) { this.estadoPozo = estadoPozo; }

    public String getEvaluacionRiesgos() { return evaluacionRiesgos; }
    public void setEvaluacionRiesgos(String evaluacionRiesgos) { this.evaluacionRiesgos = evaluacionRiesgos; }

    public String getObservacionesFinales() { return observacionesFinales; }
    public void setObservacionesFinales(String observacionesFinales) { this.observacionesFinales = observacionesFinales; }

    public boolean isAprovacion() { return aprovacion; }
    public void setAprovacion(boolean aprovacion) { this.aprovacion = aprovacion; }
}
