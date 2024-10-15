import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income).catch((err) => {
            setError(err.response.data.message);
        });
        getIncomes();
    };

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data);
        console.log(incomes);
    };

    const deleteIncome = async (id) => {
        const resp = await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();
    };

    const totalIncome = () => {
        const total = incomes.reduce((acc, currentValue) => acc + currentValue.amount, 0);
        return total;
    };

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense).catch((err) => {
            setError(err.response.data.message);
        });
        getExpenses();
    };

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`);
        setExpenses(response.data);
        console.log(expenses);
    };

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses();
    };

    const totalExpense = () => {
        const total = expenses.reduce((acc, currentValue) => acc + currentValue.amount, 0);
        return total;
    };
    // console.log("expense", totalExpense());
    // console.log(expenses);

    const totalBalance = () => {
        const remaining = Math.floor(totalIncome() - totalExpense());
        return remaining;
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return history.slice(0, 3);
    };

    return (
        <GlobalContext.Provider
            value={{
                addIncome,
                getIncomes,
                incomes,
                deleteIncome,
                totalIncome,
                expenses,
                addExpense,
                getExpenses,
                deleteExpense,
                totalExpense,
                totalBalance,
                transactionHistory,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
