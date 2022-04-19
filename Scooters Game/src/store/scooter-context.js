import React, { useState, useEffect } from "react";

export const ScootersContext = React.createContext({
  scooters: [],
  choseGame: () => {},
  chargeScooter: (id) => {},
  dischargeScooter: () => {},
  addScooter: () => {},
  startGame: () => {},
  stopGame: () => {},
  changeGameType: () => {},
  stoppedGameType: "mixed",
  gameType: "mixed",
  gameIsChosen: false,
  gameIsStopped: false,
  gameIsLosed: false,
});
const randomPercentage = () => (Math.floor(Math.random() * 10) + 1) * 10;
const randomColor = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "red";
  } else if (randomNumber === 2) {
    return "green";
  } else {
    return "blue";
  }
};
export default (props) => {
  const [scootersList, setScootersList] = useState([
    {
      id: 1,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 2,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 3,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 4,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 5,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 6,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 7,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 8,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 9,
      color: randomColor(),
      percentage: randomPercentage(),
    },
    {
      id: 10,
      color: randomColor(),
      percentage: randomPercentage(),
    },
  ]);

  const [gameIsChosen, setGameIsChosen] = useState(false);

  const [gameIsStopped, setGameIsStopped] = useState(false);

  const [gameIsLosed, setGameIsLosed] = useState(false);

  const [gameType, setGameType] = useState("mixed");

  const [stoppedGameType, setStoppedGameType] = useState("mixed");

  const changeGameType = () => {
    setGameType((prevGameType) =>
      prevGameType === "mixed" ? "by color" : "mixed"
    );
  };

  const choseGame = () => {
    setGameIsChosen(true);
  };

  const stopGame = () => {
    setGameIsStopped(true);
    setStoppedGameType(gameType);
  };

  const startGame = () => {
    setScootersList([
      {
        id: 1,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 2,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 3,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 4,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 5,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 6,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 7,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 8,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 9,
        color: randomColor(),
        percentage: randomPercentage(),
      },
      {
        id: 10,
        color: randomColor(),
        percentage: randomPercentage(),
      },
    ]);
    setGameIsStopped(false);
    setGameIsLosed(false);
    setGameIsChosen(true);
  };

  const chargeScooter = (scooterId) => {
    setScootersList((currentScooterList) => {
      const scooterIndex = currentScooterList.findIndex(
        (s) => s.id === scooterId
      );
      const updatedScooters = [...currentScooterList];
      updatedScooters[scooterIndex] = {
        ...currentScooterList[scooterIndex],
        percentage: 100,
      };
      return updatedScooters;
    });
  };

  const dischargeScooter = () => {
    setScootersList((currentScooterList) => {
      const copyCurrentScooterList = [...currentScooterList];
      const percentageScooterList = copyCurrentScooterList.map((scooter) => {
        const newPercentage = scooter.percentage - 10;
        return {
          ...scooter,
          percentage: newPercentage,
        };
      });
      const updatedScooters = percentageScooterList.filter(
        (scooter) => scooter.percentage > 0
      );
      if (updatedScooters.length === 0) {
        setGameIsLosed(true);
      }
      return updatedScooters;
    });
  };

  const addScooter = () => {
    setScootersList((currentScooterList) => {
      const lastId = currentScooterList[currentScooterList.length - 1].id;
      const updatedScooterList = [
        ...currentScooterList,
        {
          id: lastId + 1,
          color: randomColor(),
          percentage: randomPercentage(),
        },
      ];
      return updatedScooterList;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dischargeScooter();
    }, 1000);

    if (gameIsStopped || gameIsLosed || !gameIsChosen) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameIsStopped, gameIsLosed, gameIsChosen]);

  return (
    <ScootersContext.Provider
      value={{
        scooters: scootersList,
        choseGame: choseGame,
        changeGameType: changeGameType,
        chargeScooter: chargeScooter,
        dischargeScooter: dischargeScooter,
        addScooter: addScooter,
        startGame: startGame,
        stopGame: stopGame,
        stoppedGameType: stoppedGameType,
        gameType: gameType,
        gameIsChosen: gameIsChosen,
        gameIsStopped: gameIsStopped,
        gameIsLosed: gameIsLosed,
      }}
    >
      {props.children}
    </ScootersContext.Provider>
  );
};
