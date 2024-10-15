import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import { useGlobalContext } from "../context/globalContext";
import IncomeForm from "./InomeForm";
import IncomeItem from "./IncomeItem";
import { dollar } from "../utils/Icons";

function Incomes() {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
    console.log(incomes);

    useEffect(() => {
        getIncomes();
    }, []);

    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className="total-income">
                    Total Income:{" "}
                    <span>
                        {dollar}
                        {totalIncome()}
                    </span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <IncomeForm />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description } = income;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    );
}

const IncomesStyled = styled.div`
    display: flex;
    overflow: hidden;
    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content {
        display: flex;
        gap: 2rem;
        .incomes {
            flex: 1;
        }
    }
`;

export default Incomes;
