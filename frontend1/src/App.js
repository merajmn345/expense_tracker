import React, { useMemo, useState } from "react";
import bg from "./img/bg.png";
import styled from "styled-components";
import { MainLayout } from "./styles/Layout.js";
import Orb from "./Components/Orb.jsx";
import Navigation from "./Components/Navigation.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Incomes from "./Components/Incomes.jsx";
import Expenses from "./Components/Expenses.jsx";
import { useGlobalContext } from "./context/globalContext.js";
import { Outlet } from "react-router-dom";

function App() {
    const [active, setActive] = useState(1);

    const global = useGlobalContext();
    console.log(global);

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Dashboard />;
            case 3:
                return <Incomes />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    };
    const orbMemo = useMemo(() => {
        return <Orb />;
    }, []);
    return (
        <AppStyled bg={bg} className="App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>{displayData()}</main>
                <Outlet />
            </MainLayout>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.bg});
    position: relative;

    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;
