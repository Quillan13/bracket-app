import "../../styles/bracketDisplay.css";
import React, { useState } from "react";
import Match from "../../utilities/Match";
import SemiFinal from "../../utilities/SemiFinal";
import Championship from "../../utilities/Championship";
import Bracket from "../../data/DisneyAnimatedFilms";
import { makeStyles, Theme, createStyles, createMuiTheme, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectGrid: {
            height: "70px",
            width: "100vw"
        },
        bracket: {
            margin: "auto",
            width: "fit-content",
            minHeight: "calc(100vh - 70px)",
            padding: theme.spacing(3)
        },
        formControl: {
            margin: theme.spacing(1),
            //Keep the Drop Down From Getting Clustered
            minWidth: 150
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    })
);

const DisneyAnimatedMovies = () => {
    function handleChamp1() {
        setLeft("green");
        setRight("red");
    }

    function handleChamp2() {
        setLeft("red");
        setRight("green");
    }

    function handleWinner(winner: string, id: number) {
        if (id == 1) setWinner1({ winner });
        else if (id == 2) setWinner2({ winner });
        else if (id == 3) setWinner2({ winner });
        else if (id == 4) setWinner2({ winner });
        else if (id == 5) setWinner2({ winner });
        else if (id == 6) setWinner2({ winner });
        else if (id == 7) setWinner2({ winner });
        else if (id == 8) setWinner2({ winner });
        else if (id == 9) setWinner2({ winner });
        else if (id == 10) setWinner2({ winner });
        else if (id == 11) setWinner2({ winner });
        else if (id == 12) setWinner2({ winner });
        else if (id == 13) setWinner2({ winner });
        else if (id == 14) setWinner2({ winner });
        else if (id == 15) setWinner2({ winner });
        else if (id == 16) setWinner2({ winner });
        else if (id == 17) setWinner2({ winner });
        else if (id == 18) setWinner2({ winner });
        else if (id == 19) setWinner2({ winner });
        else if (id == 20) setWinner2({ winner });
        else if (id == 21) setWinner2({ winner });
        else if (id == 22) setWinner2({ winner });
        else if (id == 23) setWinner2({ winner });
        else if (id == 24) setWinner2({ winner });
        else if (id == 25) setWinner2({ winner });
        else if (id == 26) setWinner2({ winner });
        else if (id == 27) setWinner2({ winner });
        else if (id == 28) setWinner2({ winner });
        else if (id == 29) setWinner2({ winner });
        else if (id == 30) setWinner2({ winner });
        else if (id == 31) setWinner2({ winner });
        else if (id == 32) setWinner2({ winner });
    }

    const classes = useStyles(createMuiTheme());
    const [left, setLeft] = useState("default");
    const [right, setRight] = useState("default");
    const [winner1, setWinner1] = useState();
    const [winner2, setWinner2] = useState();
    const [winner3, setWinner3] = useState();
    const [winner4, setWinner4] = useState();
    const [winner5, setWinner5] = useState();
    const [winner6, setWinner6] = useState();
    const [winner7, setWinner7] = useState();
    const [winner8, setWinner8] = useState();
    const [winner9, setWinner9] = useState();
    const [winner10, setWinner10] = useState();
    const [winner11, setWinner11] = useState();
    const [winner12, setWinner12] = useState();
    const [winner13, setWinner13] = useState();
    const [winner14, setWinner14] = useState();
    const [winner15, setWinner15] = useState();
    const [winner16, setWinner16] = useState();
    const [winner17, setWinner17] = useState();
    const [winner18, setWinner18] = useState();
    const [winner19, setWinner19] = useState();
    const [winner20, setWinner20] = useState();
    const [winner21, setWinner21] = useState();
    const [winner22, setWinner22] = useState();
    const [winner23, setWinner23] = useState();
    const [winner24, setWinner24] = useState();
    const [winner25, setWinner25] = useState();
    const [winner26, setWinner26] = useState();
    const [winner27, setWinner27] = useState();
    const [winner28, setWinner28] = useState();
    const [winner29, setWinner29] = useState();
    const [winner30, setWinner30] = useState();
    const [winner31, setWinner31] = useState();
    const [winner32, setWinner32] = useState();

    return (
        <Grid container wrap="nowrap" className={classes.bracket}>
            <div className="bracket-left">
                <div className="round">
                    <Match direction="left" team1={Bracket.Princesses[0].title} team2={Bracket.Princesses[15].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Princesses[1].title} team2={Bracket.Princesses[14].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Princesses[2].title} team2={Bracket.Princesses[13].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Princesses[3].title} team2={Bracket.Princesses[12].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Princesses[4].title} team2={Bracket.Princesses[11].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Princesses[5].title} team2={Bracket.Princesses[10].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Princesses[6].title} team2={Bracket.Princesses[9].title} click={handleWinner} id={15}></Match>
                    <Match direction="left" team1={Bracket.Princesses[7].title} team2={Bracket.Princesses[8].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[0].title} team2={Bracket.EarlyYears[15].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[1].title} team2={Bracket.EarlyYears[14].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[2].title} team2={Bracket.EarlyYears[13].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[3].title} team2={Bracket.EarlyYears[12].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[4].title} team2={Bracket.EarlyYears[11].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[5].title} team2={Bracket.EarlyYears[10].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[6].title} team2={Bracket.EarlyYears[9].title} click={handleWinner} id={15}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[7].title} team2={Bracket.EarlyYears[8].title} click={handleWinner} id={16}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[0].title} team2={Bracket.Sequals2[15].title} click={handleWinner} id={17}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[1].title} team2={Bracket.Sequals2[14].title} click={handleWinner} id={18}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[2].title} team2={Bracket.Sequals2[13].title} click={handleWinner} id={19}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[3].title} team2={Bracket.Sequals2[12].title} click={handleWinner} id={20}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[4].title} team2={Bracket.Sequals2[11].title} click={handleWinner} id={21}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[5].title} team2={Bracket.Sequals2[10].title} click={handleWinner} id={22}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[6].title} team2={Bracket.Sequals2[9].title} click={handleWinner} id={23}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[7].title} team2={Bracket.Sequals2[8].title} click={handleWinner} id={24}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[0].title} team2={Bracket.TVMovies[15].title} click={handleWinner} id={25}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[1].title} team2={Bracket.TVMovies[14].title} click={handleWinner} id={26}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[2].title} team2={Bracket.TVMovies[13].title} click={handleWinner} id={27}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[3].title} team2={Bracket.TVMovies[12].title} click={handleWinner} id={28}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[4].title} team2={Bracket.TVMovies[11].title} click={handleWinner} id={29}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[5].title} team2={Bracket.TVMovies[10].title} click={handleWinner} id={30}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[6].title} team2={Bracket.TVMovies[9].title} click={handleWinner} id={31}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[7].title} team2={Bracket.TVMovies[8].title} click={handleWinner} id={32}></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1={winner1} team2={winner2} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner3} team2={winner4} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner5} team2={winner6} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner7} team2={winner8} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner9} team2={winner10} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner11} team2={winner12} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner13} team2={winner14} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner15} team2={winner16} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner17} team2={winner18} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner19} team2={winner20} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner21} team2={winner22} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner23} team2={winner24} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner25} team2={winner26} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner27} team2={winner28} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner29} team2={winner30} click={handleWinner} id={12}></Match>
                    <Match direction="left" team1={winner31} team2={winner32} click={handleWinner} id={12}></Match>
                </div>

                {/*<div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div> */}

                <SemiFinal direction="left" team1="" team2=""></SemiFinal>

                <Championship team1="" click={handleChamp1} color={left}></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="" click={handleChamp2} color={right}></Championship>

                <SemiFinal direction="right" team1="" team2=""></SemiFinal>

                {/* <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div> */}

                <div className="round">
                    <Match direction="right" team1={Bracket.ComingofAge[0].title} team2={Bracket.ComingofAge[15].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[1].title} team2={Bracket.ComingofAge[14].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[2].title} team2={Bracket.ComingofAge[13].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[3].title} team2={Bracket.ComingofAge[12].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[4].title} team2={Bracket.ComingofAge[11].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[5].title} team2={Bracket.ComingofAge[10].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[6].title} team2={Bracket.ComingofAge[9].title} click={handleWinner} id={15}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[7].title} team2={Bracket.ComingofAge[8].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[0].title} team2={Bracket.Sequals1[15].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[1].title} team2={Bracket.Sequals1[14].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[2].title} team2={Bracket.Sequals1[13].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[3].title} team2={Bracket.Sequals1[12].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[4].title} team2={Bracket.Sequals1[11].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[5].title} team2={Bracket.Sequals1[10].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[6].title} team2={Bracket.Sequals1[9].title} click={handleWinner} id={15}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[7].title} team2={Bracket.Sequals1[8].title} click={handleWinner} id={16}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[0].title} team2={Bracket.Pixarish[15].title} click={handleWinner} id={17}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[1].title} team2={Bracket.Pixarish[14].title} click={handleWinner} id={18}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[2].title} team2={Bracket.Pixarish[13].title} click={handleWinner} id={19}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[3].title} team2={Bracket.Pixarish[12].title} click={handleWinner} id={20}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[4].title} team2={Bracket.Pixarish[11].title} click={handleWinner} id={21}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[5].title} team2={Bracket.Pixarish[10].title} click={handleWinner} id={22}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[6].title} team2={Bracket.Pixarish[9].title} click={handleWinner} id={23}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[7].title} team2={Bracket.Pixarish[8].title} click={handleWinner} id={24}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[0].title} team2={Bracket.TFCentury[15].title} click={handleWinner} id={25}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[1].title} team2={Bracket.TFCentury[14].title} click={handleWinner} id={26}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[2].title} team2={Bracket.TFCentury[13].title} click={handleWinner} id={27}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[3].title} team2={Bracket.TFCentury[12].title} click={handleWinner} id={28}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[4].title} team2={Bracket.TFCentury[11].title} click={handleWinner} id={29}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[5].title} team2={Bracket.TFCentury[10].title} click={handleWinner} id={30}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[6].title} team2={Bracket.TFCentury[9].title} click={handleWinner} id={31}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[7].title} team2={Bracket.TFCentury[8].title} click={handleWinner} id={32}></Match>
                </div>
            </div>
        </Grid>
    );
};

export default DisneyAnimatedMovies;
