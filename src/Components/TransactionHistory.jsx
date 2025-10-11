import React from "react";
import {
  FaMoneyBillWave,
  FaArrowUp,
  FaUsers,
  FaUser,
  FaBitcoin,
  FaPaypal,
  FaCreditCard,
  FaEthereum,
} from "react-icons/fa";
import { SiLitecoin, SiRipple } from "react-icons/si";

function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      name: "John Smith",
      avatar: "👤",
      price: "$1,250.00",
      dailyDividend: "$25.50",
      amount: "$12,500.00",
      depositBy: "Bitcoin",
      currency: "BTC",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      avatar: "👩",
      price: "$2,800.00",
      dailyDividend: "$56.00",
      amount: "$28,000.00",
      depositBy: "PayPal",
      currency: "USD",
    },
    {
      id: 3,
      name: "Mike Chen",
      avatar: "👨",
      price: "$850.00",
      dailyDividend: "$17.00",
      amount: "$8,500.00",
      depositBy: "Ethereum",
      currency: "ETH",
    },
    {
      id: 4,
      name: "Emma Davis",
      avatar: "👩",
      price: "$3,200.00",
      dailyDividend: "$64.00",
      amount: "$32,000.00",
      depositBy: "Credit Card",
      currency: "USD",
    },
    {
      id: 5,
      name: "Alex Johnson",
      avatar: "👤",
      price: "$1,750.00",
      dailyDividend: "$35.00",
      amount: "$17,500.00",
      depositBy: "Litecoin",
      currency: "LTC",
    },
  ];

  // Function to get currency icon
  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case "BTC":
        return <FaBitcoin className="text-orange-500 text-lg" />;
      case "ETH":
        return <FaEthereum className="text-purple-500 text-lg" />;
      case "LTC":
        return <SiLitecoin className="text-gray-400 text-lg" />;
      case "XRP":
        return <SiRipple className="text-blue-400 text-lg" />;
      case "USD":
        return <FaMoneyBillWave className="text-green-500 text-lg" />;
      default:
        return <FaMoneyBillWave className="text-green-500 text-lg" />;
    }
  };

  // Function to get deposit method icon
  const getDepositIcon = (method) => {
    switch (method) {
      case "Bitcoin":
        return <FaBitcoin className="text-orange-500" />;
      case "PayPal":
        return <FaPaypal className="text-blue-500" />;
      case "Ethereum":
        return <FaEthereum className="text-purple-500" />;
      case "Credit Card":
        return <FaCreditCard className="text-blue-600" />;
      case "Litecoin":
        return <SiLitecoin className="text-gray-400" />;
      default:
        return <FaMoneyBillWave className="text-green-500" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-transparent py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-black font-medium text-2xl block">
            User Statistics
          </span>

          <h1 className="text-4xl font-bold text-orange-600">
            Latest Transaction
          </h1>

          <p className="text-gray-600 text-base leading-relaxed">
            Our goal is to simplify investing so that anyone can be an investor.
            With this in mind, we hand-pick the investments we offer on our
            platform.
          </p>

          {/* Buttons with Icons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center p-6 rounded-full border-2 border-orange-600 bg-white">
            <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg">
              <FaMoneyBillWave className="text-lg" />
              Last Deposits
            </button>
            <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg">
              <FaArrowUp className="text-lg" />
              Top Withdrawals
            </button>
            <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg">
              <FaUsers className="text-lg" />
              Last Investors
            </button>
          </div>
        </div>
      </div>

      {/* Table Section with Horizontal Scroll */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white shadow-lg overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Name</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Daily Dividend
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">Amounts</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Deposit By
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Currency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                          {transaction.avatar}
                        </div>
                        <span className="font-medium text-gray-800">
                          {transaction.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-green-600">
                        {transaction.price}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-blue-600">
                        {transaction.dailyDividend}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-gray-800">
                        {transaction.amount}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getDepositIcon(transaction.depositBy)}
                        <span className="text-gray-700">
                          {transaction.depositBy}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getCurrencyIcon(transaction.currency)}
                        <span className="font-medium text-gray-700">
                          {transaction.currency}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Table with Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {" "}
                {/* Minimum width to ensure all columns are visible */}
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <tr>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Name
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Price
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Daily Dividend
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Amounts
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Deposit By
                      </th>
                      <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">
                        Currency
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                              {transaction.avatar}
                            </div>
                            <span className="font-medium text-gray-800 text-sm">
                              {transaction.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="font-semibold text-green-600 text-sm">
                            {transaction.price}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="font-semibold text-blue-600 text-sm">
                            {transaction.dailyDividend}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="font-bold text-gray-800 text-sm">
                            {transaction.amount}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getDepositIcon(transaction.depositBy)}
                            <span className="text-gray-700 text-sm">
                              {transaction.depositBy}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getCurrencyIcon(transaction.currency)}
                            <span className="font-medium text-gray-700 text-sm">
                              {transaction.currency}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scroll Indicator for Mobile */}
            <div className="bg-gray-100 py-2 px-4 text-center">
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                <span className="animate-pulse">←</span>
                Scroll horizontally to view more
                <span className="animate-pulse">→</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-5">
        <a
          href="#"
          className="group text-white bg-gradient-to-r from-blue-900 to-orange-400 border border-orange-400 font-medium px-10 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:from-orange-500 hover:to-orange-500 hover:border-transparent"
        >
          {" "}
          BROWES MORE{" "}
        </a>
      </div>
    </div>
  );
}

export default TransactionHistory;
