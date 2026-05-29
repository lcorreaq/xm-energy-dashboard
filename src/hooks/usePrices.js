import { useEffect, useState } from "react";

import { fetchHourlyData } from "../services/xmApi";

export const usePrices = () => {

  const [selectedDate, setSelectedDate] =
    useState("2026-05-01");

  const [prices, setPrices] = useState([]);

  const [averagePrice, setAveragePrice] =
    useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    loadPrices();
  }, [selectedDate]);

  const loadPrices = async () => {
    try {
      setLoading(true);

      setError("");

      const body = {
        MetricId: "PrecBolsNaci",
        StartDate: selectedDate,
        EndDate: selectedDate,
        Entity: "Sistema",
      };

      const response =
        await fetchHourlyData(body);

      const values =
        response.Items[0]
          .HourlyEntities[0]
          .Values;

      const formattedData = Object.entries(values)

        .filter(([key]) =>
          key.startsWith("Hour")
        )

        .map(([key, value]) => ({
          hour: key.replace("Hour", ""),
          value: Number(value),
        }));

      setPrices(formattedData);

      const average =
        formattedData.reduce(
          (acc, item) => acc + item.value,
          0
        ) / formattedData.length;

      setAveragePrice(
        average.toFixed(2)
      );

    } catch (err) {

      console.error(err);

      setError(
        "No fue posible cargar los precios de energía"
      );

    } finally {

      setLoading(false);

    }
  };

  return {
    prices,
    averagePrice,
    loading,
    error,
    selectedDate,
    setSelectedDate,
  };
};