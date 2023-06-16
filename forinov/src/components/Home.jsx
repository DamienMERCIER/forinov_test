import React from "react";
import Grid from "@mui/material/Grid";
import "../style/Header.css";
import Divider from "@mui/material/Divider";
import CloudDownloadSharpIcon from "@mui/icons-material/CloudDownloadSharp";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Header = () => {
  const data = {
    title: "Station F",
    logo: "https://dev.forinov.fr/pictures/incubateur/3/logo.jpg",
    website: "https://stationf.co/",
    localisation: "Paris, FR",
    description:
      "Jubiwee est une application web qui mesure automatiquement le ressenti des collaborateurs, détecte les signaux faibles et populations à risque. Elle génère également des plans d’actions pour donner aux managers les meilleures actions pour réduire le turnover, l’absentéisme et améliorer l’engagement dans leur équipe.",
  };
  
  const printPdf = () => {
    window.print();
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          className="top-img"
          src="https://dev.forinov.fr/pictures/incubateur/3/crop_image.jpg"
          alt="background"
        />
      </Grid>
      <Grid container>
        <Grid item xs={3} container justifyContent="center">
          <Grid item justifyContent="center" height="" mt="-75px">
            <img className="logo" src={data?.logo} alt="logo" />
          </Grid>
          <Grid  mt="20px" justifyContent="center" container>
            <button className="save" onClick={printPdf}>
              PDF
              <CloudDownloadSharpIcon
                className="cloud-icon"
                sx={{ fontSize: 20 }}
              />
            </button>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid item container justifyContent="center">
            <Grid xs={9} pr={10}>
              <h1 className="title">{data?.title}</h1>
              <Grid container row alignItems="center">
                <FmdGoodIcon sx={{ fontSize: 20 }} />
                <div className="spacer">{data?.localisation}</div>
                <AdsClickIcon sx={{ fontSize: 20 }} />
                <a href={data?.website} className="spacer">
                  {data?.website}
                </a>
                <a href="https://www.facebook.com/STATIONF/" className="social">
                  <FacebookIcon sx={{ fontSize: 20, marginRight: "10px" }} />
                </a>

                <a href="https://twitter.com/joinstationf" className="social">
                  <TwitterIcon sx={{ fontSize: 20 }} />
                </a>
              </Grid>
              <p>{data?.description}</p>
              <Grid container row>
                <Grid item xs={6} container gap={2} alignItems="center">
                  <button className="tag">Ressources humaines</button>
                  <button className="tag">Software</button>
                  <button className="tag">RH</button>
                </Grid>
                <Grid item xs={6} container gap={2} justifyContent="center">
                  <button className="save">SUIVRE</button>
                  <button className="public">PROFIL PUBLIC</button>
                </Grid>
              </Grid>
              <Divider className="divider" />
              <HorizontalLinearStepper />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
