import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import MaterialTable from "material-table";
import pquimioService from "../services/pquimio.service";

class PquimioDispList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pquimios: [],
      ocultar: true
    };
    this.borrarPquimio = this.borrarPquimio.bind(this);
  }

  borrarPquimio(data) {
    pquimioService.borrar(data).then(response => {
      this.setState({
        pquimios: response.status === 200 ? response.data : []
      });
    });
  }

  getModalStyle() {
    const top = 50 
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  componentDidMount() {
    pquimioService.getByState({ estado: "Disponible" }).then(response => {
      this.setState({
        pquimios: response.status === 200 ? response.data : []
      });
    });
  }

  render() {
    const useStyles = makeStyles(theme => ({
      paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
      }
    }));

    const { pquimios } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4"></Row>
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            actions={[
              {
                icon: "edit",
                tooltip: "Editar",
                onClick: (event, rowData) => {
                  this.setState({ ocultar: false });
                }
              },
              {
                icon: "delete",
                tooltip: "Borrar",
                onClick: (event, rowData) => {
                  this.borrarPquimio(rowData);
                }
              }
            ]}
            columns={[
              { title: "Nombre", field: "nombre" },
              { title: "Mail", field: "mail" },
              { title: "Telefono", field: "telefono" },
              { title: "Estado", field: "estado" }
            ]}
            data={pquimios}
            title="Personal disponible"
          />
        </div>
      </Container>
    );
  }
}

export default PquimioDispList;
